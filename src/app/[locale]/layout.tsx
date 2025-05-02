import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, LocaleType } from "../../i18n/locales";
import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "@/dictionaries";
import { NavMenu } from "@/components/NavMenu";

const ROUTE_LOCALES = LOCALES.map((locale) => ({ locale }));

const meta = {
  title: "Mesaque Francisco",
  description:
    "Software, next.js, react, react native, javascript, typescript.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: "website",
    description: meta.description,
    title: meta.title,
    url: "https://mesaquen.github.io",
  },
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
            <NavMenu />
            <main className="m-auto container pt-16">{children}</main>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }

  notFound();
}
