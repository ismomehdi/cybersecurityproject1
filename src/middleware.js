import { NextResponse } from "next/server";
import { isTokenExpired } from "pocketbase";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/posts")) {
    // 1. Uncomment the following block of code to secure the /posts route.
    //
    // const authCookie = request.cookies.get("pb_auth");
    // const token = authCookie?.value ? JSON.parse(authCookie.value).token : null;
    // if (!token || isTokenExpired(token)) {
    //   const url = request.nextUrl.clone();
    //   url.pathname = "/";
    //   return NextResponse.redirect(url);
    // }
  }
}
