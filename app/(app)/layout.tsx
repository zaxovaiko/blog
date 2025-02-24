import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Hero } from "@/components/landing";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "zaxovaiko - home",
  description: "Just my thoughts and observations",
};

const worksans = Work_Sans({
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
        <meta property="og:title" content="Volod's blog" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Just my thoughts and observations 👋"
        />
        <meta property="og:image" content="/favicon.png" />
      </head>
      <body className={worksans.className}>
        <svg
          className="z-50 pointer-events-none fixed isolate opacity-50 mix-blend-soft-light"
          width="100%"
          height="100%"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <header className="w-100 px-4 container pt-0 sm:pt-10">
          <Hero />
        </header>
        <main className="flex flex-1 px-4 container">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
