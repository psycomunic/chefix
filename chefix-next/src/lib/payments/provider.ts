import { AsaasProvider } from "./asaas";
import { MercadoPagoProvider } from "./mercadopago";
import { MockProvider } from "./mock";
import type { PaymentProvider, ProviderName } from "./types";

/**
 * Fábrica do provedor ativo. Definido por PAYMENT_PROVIDER.
 * Em desenvolvimento, o padrão é "mock" (nenhuma chamada externa).
 */
export function getPaymentProvider(): PaymentProvider {
  const name = (process.env.PAYMENT_PROVIDER ?? "mock") as ProviderName;
  switch (name) {
    case "asaas":
      return new AsaasProvider();
    case "mercadopago":
      return new MercadoPagoProvider();
    case "mock":
    default:
      return new MockProvider();
  }
}

/** Nome do provedor ativo (para logs e telemetria). */
export function activeProviderName(): ProviderName {
  return (process.env.PAYMENT_PROVIDER ?? "mock") as ProviderName;
}
