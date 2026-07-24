import { NextResponse } from "next/server";
import { getPaymentProvider } from "@/lib/payments/provider";
import { PLAN } from "@/lib/site";
import type { CardTokenPayload } from "@/lib/payments/types";

export const runtime = "nodejs";

/**
 * Cria a assinatura mensal com cartão.
 * IMPORTANTE: recebe apenas o TOKEN do cartão (tokenizado no navegador).
 * Número, CVV e validade nunca trafegam por aqui.
 */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      customerId?: string;
      card?: CardTokenPayload;
      coupon?: string;
    };
    if (!body.customerId || !body.card?.token) {
      return NextResponse.json(
        { error: "customerId e token do cartão são obrigatórios." },
        { status: 400 },
      );
    }
    const provider = getPaymentProvider();
    const result = await provider.createCardSubscription(
      body.customerId,
      body.card,
      {
        value: PLAN.price,
        description: `Assinatura ${PLAN.name}`,
        coupon: body.coupon,
      },
    );
    if (result.status === "failed") {
      return NextResponse.json({ result }, { status: 402 });
    }
    return NextResponse.json({ result });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao criar assinatura.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
