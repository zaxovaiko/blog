import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="mt-10 self-start">
        <Link
          href="/"
          className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-all duration-200"
        >
          <IconArrowLeft
            size={16}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          <span className="text-sm font-medium">Back to all posts</span>
        </Link>
      </div>
      <article className="text-stone-400 flex flex-col prose dark:prose-invert prose-invert py-10 prose-h1:mb-0 prose-h1:mt-10 prose-h2:mt-3 prose-h2:mb-3 prose-blockquote:border-foreground/20 prose-blockquote:text-foreground/50 prose-a:text-accent prose-hr:mt-4 prose-hr:mb-0">
        {children}
      </article>
    </div>
  );
}
