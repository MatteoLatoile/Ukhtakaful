import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, verifyAccessToken } from "./src/lib/auth";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const protectedRouteRegex = /^\/formations\/([^/]+)\/modules/;
  const match = pathname.match(protectedRouteRegex);

  if (!match) {
    return NextResponse.next();
  }

  const slug = match[1];
  const token = request.cookies.get(COOKIE_NAME)?.value;

  const isAllowed = token ? await verifyAccessToken(token, slug) : false;

  if (!isAllowed) {
    return NextResponse.redirect(
      new URL(`/formations/${slug}/acces`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/formations/:slug/modules/:path*"],
};
