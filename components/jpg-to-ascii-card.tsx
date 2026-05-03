import Link from "next/link";
import { IconBrandGithub, IconPhoto } from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

const FEATURES = ["TypeScript", "Express", "Sharp", "CIE 1931 luminance", "drag & drop"];

export const JpgToAsciiCard = () => {
  return (
    <div className="rounded-lg py-6 px-6 gap-4 flex flex-col shadow-lg border border-zinc-800 bg-background/80 backdrop-blur-sm">
      <GlowingEffect
        blur={0}
        borderWidth={1}
        spread={80}
        glow
        disabled={false}
        proximity={50}
        inactiveZone={0.01}
      />

      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <IconPhoto size={18} className="text-teal-400" />
          <span className="font-mono font-bold text-foreground text-lg">jpg-to-ascii</span>
        </div>
        <span className="text-xs text-zinc-600 font-mono">archived</span>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed">
        Converts JPG images into ASCII art in the browser. Each pixel is mapped to grayscale using
        the <span className="text-zinc-300">CIE 1931 linear luminance</span> formula, then matched
        to the nearest character in an ASCII density map.
      </p>

      <blockquote className="border-l-2 border-teal-800 pl-3 text-sm text-zinc-500 italic">
        Weekend experiment to understand how image processing works at the pixel level. Ended up
        learning more about color science than I expected.
      </blockquote>

      <div className="flex flex-wrap gap-2">
        {FEATURES.map((f) => (
          <span
            key={f}
            className="text-xs font-mono text-teal-400 border border-teal-800/50 bg-teal-950/30 rounded-full px-2.5 py-0.5"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="flex gap-5 mt-1 flex-wrap">
        <Link
          href="https://github.com/zaxoavoki/jpg-to-ascii"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconBrandGithub size={16} />
          GitHub
        </Link>
      </div>
    </div>
  );
};
