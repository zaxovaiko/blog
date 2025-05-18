import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <Link href="/" className="self-center">
        <Button variant="outline" className="mt-10 hover:bg-white">
          <span className="text-sm">Back to all posts</span>
        </Button>
      </Link>
      <article className="text-stone-400 flex flex-col prose dark:prose-invert prose-invert py-10 prose-h1:mb-0 prose-h1:mt-10 prose-h2:mt-3 prose-h2:mb-3 prose-blockquote:border-foreground/20 prose-blockquote:text-foreground/50 prose-a:text-accent prose-hr:mt-4 prose-hr:mb-0">
        {children}
      </article>
    </div>
  );
}
