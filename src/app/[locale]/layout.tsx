import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES } from "../../i18n/locales";
import { NextIntlClientProvider } from "next-intl";
import { getDictionary, LocaleType } from "@/dictionaries";

const ROUTE_LOCALES = LOCALES.map((locale) => ({ locale }));

export const metadata: Metadata = {
  title: "Mesaque Francisco",
  description:
    "Software, next.js, react, react native, javascript, typescript.",
};

export async function generateStaticParams() {
  return ROUTE_LOCALES;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: LocaleType }>;
}>) {
  const { locale } = await params;
  const messages = await getDictionary(locale);

  if (LOCALES.includes(locale)) {
    return (
      <html lang={locale}>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }

  notFound();
}
