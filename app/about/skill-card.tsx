import { GlowingEffect } from "@/components/ui/glowing-effect";
import { type Icon } from "@tabler/icons-react";

interface SkillCardProps {
  icon: Icon;
  name: string;
  description: string;
}

export const SkillCard = ({
  icon: Icon,
  name,
  description,
}: SkillCardProps) => {
  return (
    <div className="relative rounded-lg p-3 sm:p-4 border border-zinc-800 bg-background/80 backdrop-blur-sm transition-all hover:border-zinc-700">
      <GlowingEffect
        blur={0}
        borderWidth={1}
        spread={80}
        glow
        disabled={false}
        proximity={50}
        inactiveZone={0.01}
      />
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="p-1.5 sm:p-2 rounded-md bg-zinc-800/50 shrink-0">
          <Icon
            size={20}
            className="text-teal-400 sm:w-6 sm:h-6"
            stroke={1.5}
          />
        </div>
        <div className="flex flex-col min-w-0">
          <h4 className="font-semibold text-foreground text-sm sm:text-base">
            {name}
          </h4>
          <p className="text-zinc-500 text-xs sm:text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
