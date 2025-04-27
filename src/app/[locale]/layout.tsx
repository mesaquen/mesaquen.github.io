import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LOCALES } from "../../../locales";
import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "@/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getDictionary(locale)

  if (LOCALES.includes(locale)) {
    return (
      <html lang={locale}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextIntlClientProvider locale={locale} messages={messages} >

          {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }

  redirect('/pt');
}
