import { NextResponse } from "next/server";
import { getPaymentProvider } from "@/lib/payments/provider";
import type { CustomerInput } from "@/lib/payments/types";

export const runtime = "nodejs";

/** Cria (ou reaproveita) o cliente no provedor de pagamento. */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<CustomerInput>;
    if (!body.name || !body.email || !body.cpfCnpj) {
      return NextResponse.json(
        { error: "Nome, e-mail e CPF/CNPJ são obrigatórios." },
        { status: 400 },
      );
    }
    const provider = getPaymentProvider();
    const customer = await provider.createCustomer({
      name: body.name,
      email: body.email,
      whatsapp: body.whatsapp ?? "",
      cpfCnpj: body.cpfCnpj.replace(/\D/g, ""),
      establishment: body.establishment,
    });
    return NextResponse.json({ customer });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao criar cliente.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
