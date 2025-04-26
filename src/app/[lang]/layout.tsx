import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { LOCALES } from "../../../locales";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ROUTE_LOCALES = LOCALES.map((locale) => ({ lang: locale }));

export const metadata: Metadata = {
  title: "Mesaque Francisco",
  description:
    "Software, next.js, react, react native, javascript, typescript."
};

export async function generateStaticParams() {
  return ROUTE_LOCALES;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
