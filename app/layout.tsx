import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import { Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Script from "next/script";
import AdUnit from "@/components/google-ad";
import Head from "next/head";

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://zaxovaiko.me"),
  other: {
    "google-adsense-account": "ca-pub-5574848979220766",
  },
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5574848979220766"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={spaceGrotesk.className}>
        <div className="noise -z-10" />
        <main className="flex flex-1 px-4 container">{children}</main>
        <AdUnit adSlot="2311193246" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
