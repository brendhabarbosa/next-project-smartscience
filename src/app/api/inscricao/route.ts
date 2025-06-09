import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const dados = await req.json()
    const { name, email, affiliation } = dados
    if (!name || !email || !affiliation) {
        return NextResponse.json({ error: 'Todos os campos são obrigatórios.' }, { status: 400 })
    }

  return NextResponse.json({ status: 'ok' })
}
