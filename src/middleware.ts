import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

export async function middleware(req: NextRequest) {
 const { pathname } = req.nextUrl;
 const token = req.cookies.get('token')?.value.toString();

 try {
  const isAuthSuccessful = await verifyToken(token);

  if (
   isAuthSuccessful &&
   (pathname.startsWith('/account') || pathname === '/')
  ) {
   return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (
   !isAuthSuccessful &&
   (pathname.startsWith('/dashboard') || pathname === '/')
  ) {
   return NextResponse.redirect(new URL('/account/login', req.url));
  }
 } catch (error) {
  console.error(
   'Error while checking authentication or fetching profile data:',
   error
  );
 }
}

export const middlewareConfig = {
 matcher: ['/auth/:path*', '/dashboard/:path*'],
};
