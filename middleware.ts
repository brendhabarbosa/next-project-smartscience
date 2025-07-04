import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  else if (token && token.role !== 'admin' && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/acesso_negado', request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/dashboard/:path*'],
};