import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anatomia — Testy",
  description: "Interaktywne testy z anatomii"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
