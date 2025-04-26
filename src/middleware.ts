import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { LOCALES, DEFAULT_LOCALE } from "../locales";
import { match } from "@formatjs/intl-localematcher";

function getLocale(request: NextRequest) {
  const { headers } = request;

  const acceptLanguage = headers?.get("accept-language") ?? "";

  const headerLanguages = new Negotiator({
    headers: { "accept-language": acceptLanguage },
  }).languages();

  const locale = match(headerLanguages, LOCALES, DEFAULT_LOCALE);

  return locale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = LOCALES.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
