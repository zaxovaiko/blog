import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import { Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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
