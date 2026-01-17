import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import { Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://zaxovaiko.me"),
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
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5574848979220766"
          crossOrigin="anonymous"
        />
      </Head>
      {/* Next handles metadata tags automatically via `export const metadata` */}
      <body className={spaceGrotesk.className}>
        <div className="noise -z-10" />
        <main className="flex flex-1 px-4 container">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
