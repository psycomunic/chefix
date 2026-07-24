import { NextResponse } from "next/server";
import { getPaymentProvider, activeProviderName } from "@/lib/payments/provider";

export const runtime = "nodejs";

/**
 * Recebe webhooks do provedor (pagamento confirmado, pendente, falha, estorno).
 * Ao confirmar o pagamento, é aqui que o acesso ao app (app.chefix.com.br)
 * deve ser liberado; em estorno/falha, bloqueado.
 *
 * TODO (produção): persistir o evento (fila/log) para reconciliação e chamar
 * o serviço de provisionamento de acesso do app.
 */
export async function POST(
  req: Request,
  { params }: { params: Promise<{ provider: string }> },
) {
  const { provider: providerParam } = await params;

  // Só aceita webhooks do provedor atualmente ativo.
  if (providerParam !== activeProviderName()) {
    return NextResponse.json(
      { error: "Provedor de webhook não corresponde ao provedor ativo." },
      { status: 404 },
    );
  }

  const rawBody = await req.text();
  const headers: Record<string, string> = {};
  req.headers.forEach((v, k) => (headers[k] = v));

  try {
    const provider = getPaymentProvider();
    const event = await provider.parseWebhook(headers, rawBody);

    switch (event.type) {
      case "payment.confirmed":
        // liberarAcesso(event.reference)
        console.log(`[webhook:${event.provider}] pagamento confirmado`, event.reference);
        break;
      case "payment.refunded":
      case "payment.failed":
        // bloquearAcesso(event.reference)
        console.log(`[webhook:${event.provider}] acesso bloqueado`, event.reference);
        break;
      case "payment.pending":
        console.log(`[webhook:${event.provider}] pagamento pendente`, event.reference);
        break;
      default:
        console.log(`[webhook:${event.provider}] evento ignorado`);
    }

    // Provedores exigem 200 rápido para não reenviar.
    return NextResponse.json({ received: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Webhook inválido.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
