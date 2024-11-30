import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "zaxovaiko's blog",
  description: "Just my thoughts and observations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
