import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Solicitud GET' });
}

export async function POST(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: 'Solicitud POST', data });
}

export async function PUT(req: Request) {
  const data = await req.json();
  return NextResponse.json({ message: 'Solicitud PUT', data });
}

export async function DELETE() {
  return NextResponse.json({ message: 'Solicitud DELETE' });
}
