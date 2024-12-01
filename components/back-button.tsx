import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export const BackButton = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={`bg-zinc-700 p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-zinc-300 transition-colors ${className}`}
    >
      <IconArrowLeft />
    </Link>
  );
};
