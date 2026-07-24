import { NextResponse } from "next/server";
import { getPaymentProvider } from "@/lib/payments/provider";
import { PLAN } from "@/lib/site";

export const runtime = "nodejs";

/** Gera a cobrança PIX (QR Code + copia e cola). */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { customerId?: string; coupon?: string };
    if (!body.customerId) {
      return NextResponse.json(
        { error: "customerId é obrigatório." },
        { status: 400 },
      );
    }
    const provider = getPaymentProvider();
    const charge = await provider.createPixCharge(body.customerId, {
      value: PLAN.price,
      description: `Assinatura ${PLAN.name}`,
      coupon: body.coupon,
    });
    return NextResponse.json({ charge });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao gerar PIX.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
