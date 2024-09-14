import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Play pro LP",
  description: "O play pro Lp e um software para criação de Lp rapidamente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
