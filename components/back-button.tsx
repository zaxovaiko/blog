import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface BackButtonProps {
  href?: string;
  label?: string;
}

export function BackButton({ href = "/", label = "Back" }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-foreground hover:border-zinc-600 hover:bg-zinc-900/40 transition-all duration-200 backdrop-blur-sm"
    >
      <IconArrowLeft
        size={16}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />
      <span className="text-sm font-medium tracking-tight">{label}</span>
    </Link>
  );
}
