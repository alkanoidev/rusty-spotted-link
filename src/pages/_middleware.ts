import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (
    req.nextUrl.pathname.startsWith("/api/") ||
    req.nextUrl.pathname === "/"
  ) {
    return;
  }
  const slug = req.nextUrl.pathname.split("/").pop();

  const slugFetch = await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`);

  const data = await slugFetch.json();
  if (!data) {
    return NextResponse.redirect(req.nextUrl.basePath);
  }

  if (data?.url) {
    return NextResponse.redirect(data.url);
  }
}
