import type {
  BoletoCharge,
  CardTokenPayload,
  Customer,
  CustomerInput,
  PaymentProvider,
  PixCharge,
  SubscriptionOptions,
  SubscriptionResult,
  WebhookEvent,
} from "./types";

/**
 * Provedor Mercado Pago (checkout transparente).
 *
 * Regras (Seção 6.2 do escopo):
 * - Cartão tokenizado no navegador com MercadoPago.js; backend recebe só o token.
 * - Assinatura mensal via API de Preapproval.
 * - PIX via /v1/payments (payment_method_id: 'pix'), exibindo o QR.
 * - Boleto via /v1/payments (payment_method_id: 'bolbradesco').
 * - Webhooks/IPN liberam ou bloqueiam o acesso.
 *
 * Docs: https://www.mercadopago.com.br/developers
 */
export class MercadoPagoProvider implements PaymentProvider {
  readonly name = "mercadopago" as const;
  private readonly accessToken: string;

  constructor() {
    this.accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN ?? "";
  }

  private async req<T>(path: string, init?: RequestInit): Promise<T> {
    if (!this.accessToken) {
      throw new Error(
        "MERCADOPAGO_ACCESS_TOKEN ausente. Configure as variáveis do Mercado Pago.",
      );
    }
    const res = await fetch(`https://api.mercadopago.com${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    });
    const data = (await res.json().catch(() => ({}))) as T;
    if (!res.ok) {
      const msg =
        (data as { message?: string })?.message ??
        `Erro Mercado Pago (${res.status})`;
      throw new Error(msg);
    }
    return data;
  }

  async createCustomer(input: CustomerInput): Promise<Customer> {
    // No Mercado Pago o "customer" é opcional para pagamentos avulsos;
    // criamos para reaproveitar em cobranças recorrentes.
    const data = await this.req<{ id: string; email: string }>("/v1/customers", {
      method: "POST",
      body: JSON.stringify({
        email: input.email,
        first_name: input.name,
        identification: { type: "CPF", number: input.cpfCnpj },
      }),
    }).catch(() => ({ id: input.email, email: input.email }));
    return { id: data.id, name: input.name, email: input.email };
  }

  async createCardSubscription(
    _customerId: string,
    card: CardTokenPayload,
    opts: SubscriptionOptions,
  ): Promise<SubscriptionResult> {
    try {
      const data = await this.req<{ id: string; status: string }>(
        "/preapproval",
        {
          method: "POST",
          body: JSON.stringify({
            reason: opts.description,
            auto_recurring: {
              frequency: 1,
              frequency_type: "months",
              transaction_amount: opts.value,
              currency_id: "BRL",
            },
            card_token_id: card.token,
            status: "authorized",
            back_url: process.env.NEXT_PUBLIC_SITE_URL,
          }),
        },
      );
      return {
        subscriptionId: data.id,
        status: data.status === "authorized" ? "active" : "pending",
      };
    } catch (e) {
      return {
        subscriptionId: "",
        status: "failed",
        message: e instanceof Error ? e.message : "Falha ao criar assinatura.",
      };
    }
  }

  async createPixCharge(
    _customerId: string,
    opts: SubscriptionOptions,
  ): Promise<PixCharge> {
    const data = await this.req<{
      id: number;
      point_of_interaction?: {
        transaction_data?: { qr_code_base64?: string; qr_code?: string };
      };
    }>("/v1/payments", {
      method: "POST",
      body: JSON.stringify({
        transaction_amount: opts.value,
        description: opts.description,
        payment_method_id: "pix",
      }),
    });
    const td = data.point_of_interaction?.transaction_data;
    return {
      chargeId: String(data.id),
      qrCodeImage: td?.qr_code_base64
        ? `data:image/png;base64,${td.qr_code_base64}`
        : undefined,
      copyPaste: td?.qr_code ?? "",
    };
  }

  async createBoletoCharge(
    _customerId: string,
    opts: SubscriptionOptions,
  ): Promise<BoletoCharge> {
    const data = await this.req<{
      id: number;
      transaction_details?: { digitable_line?: string; external_resource_url?: string };
      barcode?: { content?: string };
    }>("/v1/payments", {
      method: "POST",
      body: JSON.stringify({
        transaction_amount: opts.value,
        description: opts.description,
        payment_method_id: "bolbradesco",
      }),
    });
    return {
      chargeId: String(data.id),
      digitableLine: data.transaction_details?.digitable_line ?? "",
      barcode: data.barcode?.content,
      pdfUrl: data.transaction_details?.external_resource_url,
    };
  }

  async parseWebhook(
    _headers: Record<string, string>,
    rawBody: string,
  ): Promise<WebhookEvent> {
    // Mercado Pago envia { type, data: { id } }; o status real vem ao consultar
    // /v1/payments/{id}. Aqui classificamos pelo tipo e deixamos a consulta a cargo
    // do handler quando necessário.
    const body = JSON.parse(rawBody) as {
      type?: string;
      action?: string;
      data?: { id?: string };
    };
    let type: WebhookEvent["type"] = "unknown";
    if (body.action?.includes("payment")) type = "payment.pending";
    return {
      type,
      provider: "mercadopago",
      reference: body.data?.id,
      raw: body,
    };
  }
}
