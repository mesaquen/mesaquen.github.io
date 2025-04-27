import { ReactNode } from "react";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={DEFAULT_LOCALE}>
      <body>{children}</body>
    </html>
  );
}
