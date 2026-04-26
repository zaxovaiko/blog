import Link from "next/link";
import {
  IconWorld,
  IconChartLine,
} from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

const FEATURES = [
  "IKE + Regular account aggregation",
  "FIRE forecast",
  "dividend analytics",
  "P&L in PLN with FX",
  "IKE contribution tracking",
  "expense tracker",
  "concentration risk",
];

export const XtbCard = () => {
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
          <IconChartLine size={18} className="text-teal-400" />
          <span className="font-mono font-bold text-foreground text-lg">xtb.zaxovaiko.me</span>
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed">
        Personal finance dashboard for Polish retail investors using{" "}
        <span className="text-zinc-300">XTB broker</span>. Drop your XTB Excel exports - the
        app parses them and gives you a full portfolio picture in one dashboard.
      </p>

      <blockquote className="border-l-2 border-teal-800 pl-3 text-sm text-zinc-500 italic">
        XTB&apos;s built-in reporting has no FIRE planning, no cross-account aggregation,
        no dividend analytics. I built what I actually needed to track my path to financial
        independence.
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
          href="https://xtb.zaxovaiko.me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconWorld size={16} />
          xtb.zaxovaiko.me
        </Link>
      </div>
    </div>
  );
};
