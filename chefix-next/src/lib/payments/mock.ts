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
 * Provedor MOCK para desenvolvimento e demonstração.
 * Não faz nenhuma chamada externa. Gera dados falsos porém plausíveis para
 * exercitar toda a interface de checkout sem credenciais.
 */
function id(prefix: string): string {
  const rnd = Math.floor(Math.random() * 1e9).toString(36);
  return `${prefix}_${Date.now().toString(36)}${rnd}`;
}

/** QR Code fake (1x1 transparente) apenas para render; substituído pelo real em produção. */
const FAKE_QR =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

export class MockProvider implements PaymentProvider {
  readonly name = "mock" as const;

  async createCustomer(input: CustomerInput): Promise<Customer> {
    return { id: id("cus"), name: input.name, email: input.email };
  }

  async createCardSubscription(
    _customerId: string,
    card: CardTokenPayload,
    _opts: SubscriptionOptions,
  ): Promise<SubscriptionResult> {
    // Simula recusa quando o token de teste indicar falha.
    if (card.token.includes("fail")) {
      return {
        subscriptionId: id("sub"),
        status: "failed",
        message: "Cartão recusado pelo emissor (simulação).",
      };
    }
    return { subscriptionId: id("sub"), status: "active" };
  }

  async createPixCharge(
    _customerId: string,
    _opts: SubscriptionOptions,
  ): Promise<PixCharge> {
    return {
      chargeId: id("pix"),
      qrCodeImage: FAKE_QR,
      copyPaste:
        "00020126360014BR.GOV.BCB.PIX0114chefix@pix.com52040000530398654042900.005802BR5906CHEFIX6009SAO PAULO62070503***6304ABCD",
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    };
  }

  async createBoletoCharge(
    _customerId: string,
    _opts: SubscriptionOptions,
  ): Promise<BoletoCharge> {
    return {
      chargeId: id("bol"),
      digitableLine:
        "34191.79001 01043.510047 91020.150008 9 90000000029000",
      dueDate: new Date(Date.now() + 3 * 24 * 3600 * 1000)
        .toISOString()
        .slice(0, 10),
    };
  }

  async parseWebhook(
    _headers: Record<string, string>,
    rawBody: string,
  ): Promise<WebhookEvent> {
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(rawBody);
    } catch {
      /* corpo vazio ou inválido */
    }
    return { type: "payment.confirmed", provider: "mock", raw: parsed };
  }
}
