import { NextResponse } from 'next/server';

export function middleware(request) {
  const { searchParams } = request.nextUrl;
  const legacyId = searchParams.get('a');
  if (/^\d{10,}$/.test(legacyId ?? '') && [...searchParams.keys()].length === 1) {
    return new NextResponse('Gone', { status: 410 });
  }
  return NextResponse.next();
}

export const config = { matcher: '/' };
