import Link from "next/link";
import {
  IconBrandNpm,
  IconBrandGithub,
  IconBook,
  IconTerminal2,
} from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

const FEATURES = ["zero config", "CI/CD ready", "JSON / Markdown output", "TypeScript"];

export const NpmPackageCard = () => {
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
          <IconTerminal2 size={18} className="text-teal-400" />
          <span className="font-mono font-bold text-foreground text-lg">depretec</span>
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed">
        CLI tool that scans JS/TS projects for deprecated API usage - in your own code
        and across <span className="text-zinc-300">node_modules type definitions</span>.
        Extracts replacement hints from JSDoc and outputs results as a table, JSON, or Markdown.
      </p>

      <blockquote className="border-l-2 border-teal-800 pl-3 text-sm text-zinc-500 italic">
        Born out of frustration upgrading large codebases - instead of hunting deprecated calls
        one by one, I wrote a script to surface them all upfront. Cleaned it up, published it.
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
          href="https://www.npmjs.com/package/depretec"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconBrandNpm size={18} />
          npm
        </Link>
        <Link
          href="https://github.com/zaxovaiko/depretec"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconBrandGithub size={16} />
          GitHub
        </Link>
        <Link
          href="https://zaxovaiko.github.io/depretec/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconBook size={16} />
          docs
        </Link>
      </div>
    </div>
  );
};
