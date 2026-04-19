import Link from "next/link";
import {
  IconWorld,
  IconBarbell,
  IconActivity,
  IconBrandAppstore,
} from "@tabler/icons-react";
import { GlowingEffect } from "./ui/glowing-effect";

const FEATURES = ["AI training plans", "Apple Health sync", "AI machine scanner", "3D exercise demos", "gamification"];

export const AriexFitCard = () => {
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
          <IconBarbell size={18} className="text-teal-400" />
          <span className="font-mono font-bold text-foreground text-lg">ariex.fit</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-emerald-400 border border-emerald-800/60 bg-emerald-950/40 rounded-full px-2.5 py-1">
          <IconActivity size={12} />
          actively developing
        </span>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed">
        AI-powered fitness app for iOS. Generates personalized training plans, tracks workouts
        in real time, syncs with <span className="text-zinc-300">Apple Health</span>, and uses
        computer vision to identify gym equipment via camera.
      </p>

      <blockquote className="border-l-2 border-teal-800 pl-3 text-sm text-zinc-500 italic">
        Most fitness apps hand you a static plan and call it personalization. I wanted something
        that actually knows your gym, adapts to your progress, and makes showing up feel rewarding.
        So I built it.
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
          href="https://ariex.fit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconWorld size={16} />
          ariex.fit
        </Link>
        <Link
          href="https://apps.apple.com/us/app/ariex/id6759071410"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-200 transition-colors"
        >
          <IconBrandAppstore size={16} />
          App Store
        </Link>
      </div>
    </div>
  );
};
