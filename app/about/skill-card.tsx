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
    <div className="relative rounded-lg p-4 border border-zinc-800 bg-background/80 backdrop-blur-sm transition-all hover:border-zinc-700">
      <GlowingEffect
        blur={0}
        borderWidth={1}
        spread={80}
        glow
        disabled={false}
        proximity={50}
        inactiveZone={0.01}
      />
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-md bg-zinc-800/50">
          <Icon size={24} className="text-teal-400" stroke={1.5} />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-zinc-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
