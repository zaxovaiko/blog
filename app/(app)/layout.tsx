import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Hero } from "@/components/landing";

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
      <body className={worksans.className}>
        <svg
          className="z-50 pointer-events-none fixed isolate opacity-70 mix-blend-soft-light"
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
        <div className="container w-100 sm:w[400px] md:w-[600px] mx-auto flex flex-col gap-10 pt-0 sm:pt-10">
          <Hero />
        </div>
        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
