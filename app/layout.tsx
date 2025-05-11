import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "zaxovaiko - Personal opinionated blog",
  description: "Just my thoughts and views on various topics",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="zaxovaiko - Personal opinionated blog"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Just my thoughts and views on various topics"
        />
        <meta property="og:image" content="/favicon.png" />
      </head>
      <body className={spaceGrotesk.className}>
        <div className="noise -z-10" />
        <main className="flex flex-1 px-4 container">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
