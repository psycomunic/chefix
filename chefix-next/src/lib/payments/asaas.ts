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
 * Provedor Asaas (checkout transparente).
 *
 * Regras (Seção 6.2 do escopo):
 * - O cartão é tokenizado NO NAVEGADOR pelo SDK do Asaas; aqui recebemos só o token.
 * - Assinatura recorrente mensal via /subscriptions (billingType CREDIT_CARD).
 * - PIX e boleto via /payments; QR Code / linha digitável retornados ao cliente.
 * - Webhooks liberam/bloqueiam o acesso ao app.
 *
 * Docs: https://docs.asaas.com/
 */
export class AsaasProvider implements PaymentProvider {
  readonly name = "asaas" as const;
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly webhookToken: string;

  constructor() {
    const env = process.env.PAYMENT_ENV ?? "sandbox";
    this.baseUrl =
      env === "production"
        ? "https://api.asaas.com/api/v3"
        : "https://sandbox.asaas.com/api/v3";
    this.apiKey = process.env.ASAAS_API_KEY ?? "";
    this.webhookToken = process.env.ASAAS_WEBHOOK_TOKEN ?? "";
  }

  private async req<T>(path: string, init?: RequestInit): Promise<T> {
    if (!this.apiKey) {
      throw new Error(
        "ASAAS_API_KEY ausente. Configure as variáveis de ambiente do Asaas.",
      );
    }
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        access_token: this.apiKey,
        ...(init?.headers ?? {}),
      },
      cache: "no-store",
    });
    const data = (await res.json().catch(() => ({}))) as T;
    if (!res.ok) {
      const msg =
        (data as { errors?: { description?: string }[] })?.errors?.[0]
          ?.description ?? `Erro Asaas (${res.status})`;
      throw new Error(msg);
    }
    return data;
  }

  private nextDueDate(): string {
    return new Date().toISOString().slice(0, 10);
  }

  async createCustomer(input: CustomerInput): Promise<Customer> {
    const data = await this.req<{ id: string; name: string; email: string }>(
      "/customers",
      {
        method: "POST",
        body: JSON.stringify({
          name: input.name,
          email: input.email,
          cpfCnpj: input.cpfCnpj,
          mobilePhone: input.whatsapp,
          company: input.establishment,
        }),
      },
    );
    return { id: data.id, name: data.name, email: data.email };
  }

  async createCardSubscription(
    customerId: string,
    card: CardTokenPayload,
    opts: SubscriptionOptions,
  ): Promise<SubscriptionResult> {
    try {
      const data = await this.req<{ id: string; status: string }>(
        "/subscriptions",
        {
          method: "POST",
          body: JSON.stringify({
            customer: customerId,
            billingType: "CREDIT_CARD",
            cycle: "MONTHLY",
            value: opts.value,
            nextDueDate: this.nextDueDate(),
            description: opts.description,
            creditCardToken: card.token,
          }),
        },
      );
      return {
        subscriptionId: data.id,
        status: data.status === "ACTIVE" ? "active" : "pending",
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
    customerId: string,
    opts: SubscriptionOptions,
  ): Promise<PixCharge> {
    const payment = await this.req<{ id: string }>("/payments", {
      method: "POST",
      body: JSON.stringify({
        customer: customerId,
        billingType: "PIX",
        value: opts.value,
        dueDate: this.nextDueDate(),
        description: opts.description,
      }),
    });
    const qr = await this.req<{
      encodedImage: string;
      payload: string;
      expirationDate: string;
    }>(`/payments/${payment.id}/pixQrCode`);
    return {
      chargeId: payment.id,
      qrCodeImage: `data:image/png;base64,${qr.encodedImage}`,
      copyPaste: qr.payload,
      expiresAt: qr.expirationDate,
    };
  }

  async createBoletoCharge(
    customerId: string,
    opts: SubscriptionOptions,
  ): Promise<BoletoCharge> {
    const data = await this.req<{
      id: string;
      identificationField: string;
      barCode: string;
      bankSlipUrl: string;
      dueDate: string;
    }>("/payments", {
      method: "POST",
      body: JSON.stringify({
        customer: customerId,
        billingType: "BOLETO",
        value: opts.value,
        dueDate: new Date(Date.now() + 3 * 24 * 3600 * 1000)
          .toISOString()
          .slice(0, 10),
        description: opts.description,
      }),
    });
    return {
      chargeId: data.id,
      digitableLine: data.identificationField,
      barcode: data.barCode,
      pdfUrl: data.bankSlipUrl,
      dueDate: data.dueDate,
    };
  }

  async parseWebhook(
    headers: Record<string, string>,
    rawBody: string,
  ): Promise<WebhookEvent> {
    // Validação: token configurado no painel do Asaas é enviado neste header.
    const token = headers["asaas-access-token"] ?? headers["asaas-token"];
    if (this.webhookToken && token !== this.webhookToken) {
      throw new Error("Webhook Asaas: token inválido.");
    }
    const body = JSON.parse(rawBody) as {
      event?: string;
      payment?: { id?: string; subscription?: string };
    };
    const map: Record<string, WebhookEvent["type"]> = {
      PAYMENT_CONFIRMED: "payment.confirmed",
      PAYMENT_RECEIVED: "payment.confirmed",
      PAYMENT_OVERDUE: "payment.pending",
      PAYMENT_REFUNDED: "payment.refunded",
      PAYMENT_DELETED: "payment.failed",
    };
    return {
      type: map[body.event ?? ""] ?? "unknown",
      provider: "asaas",
      reference: body.payment?.subscription ?? body.payment?.id,
      raw: body,
    };
  }
}
