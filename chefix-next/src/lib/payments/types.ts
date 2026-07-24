/**
 * Contrato comum de provedores de pagamento (Asaas e Mercado Pago).
 * A UI e as rotas de API dependem apenas destas interfaces, nunca de um
 * provedor específico. Trocar de provedor é só mudar PAYMENT_PROVIDER.
 */

export type ProviderName = "asaas" | "mercadopago" | "mock";

export type BillingType = "card" | "pix" | "boleto";

export interface CustomerInput {
  name: string;
  email: string;
  whatsapp: string;
  /** CPF (pessoa física) ou CNPJ (pessoa jurídica), somente dígitos. */
  cpfCnpj: string;
  establishment?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
}

export interface SubscriptionOptions {
  /** Valor mensal em reais (ex.: 290). */
  value: number;
  description: string;
  /** Cupom aplicado (validação de gratuidade / desconto). */
  coupon?: string;
}

/**
 * Token do cartão gerado NO NAVEGADOR pelo SDK do provedor.
 * O backend nunca recebe número, CVV ou validade do cartão.
 */
export interface CardTokenPayload {
  token: string;
  installments?: number;
}

export interface SubscriptionResult {
  subscriptionId: string;
  status: "active" | "pending" | "failed";
  /** Motivo, quando falha (para exibir e permitir novo cartão). */
  message?: string;
}

export interface PixCharge {
  chargeId: string;
  /** Imagem do QR Code em base64 (data URI ou payload puro). */
  qrCodeImage?: string;
  /** PIX copia e cola. */
  copyPaste: string;
  expiresAt?: string;
}

export interface BoletoCharge {
  chargeId: string;
  /** Linha digitável. */
  digitableLine: string;
  barcode?: string;
  pdfUrl?: string;
  dueDate?: string;
}

export type WebhookEventType =
  | "payment.confirmed"
  | "payment.pending"
  | "payment.failed"
  | "payment.refunded"
  | "unknown";

export interface WebhookEvent {
  type: WebhookEventType;
  provider: ProviderName;
  /** Referência do pagamento/assinatura no provedor. */
  reference?: string;
  raw: unknown;
}

export interface PaymentProvider {
  readonly name: ProviderName;
  createCustomer(input: CustomerInput): Promise<Customer>;
  createCardSubscription(
    customerId: string,
    card: CardTokenPayload,
    opts: SubscriptionOptions,
  ): Promise<SubscriptionResult>;
  createPixCharge(
    customerId: string,
    opts: SubscriptionOptions,
  ): Promise<PixCharge>;
  createBoletoCharge(
    customerId: string,
    opts: SubscriptionOptions,
  ): Promise<BoletoCharge>;
  /** Interpreta o corpo bruto do webhook e classifica o evento. */
  parseWebhook(
    headers: Record<string, string>,
    rawBody: string,
  ): Promise<WebhookEvent>;
}
