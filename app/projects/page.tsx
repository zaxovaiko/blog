import { NpmPackageCard } from "@/components/npm-package-card";
import { AriexFitCard } from "@/components/ariex-fit-card";
import { XtbCard } from "@/components/xtb-card";
import { JpgToAsciiCard } from "@/components/jpg-to-ascii-card";
import { createMetadata } from "@/lib/seo";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 py-10 w-full">
      <section className="flex flex-col gap-4 mt-5">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Open Source</p>
        <NpmPackageCard />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Side Projects</p>
        <AriexFitCard />
        <XtbCard />
      </section>
      <section className="flex flex-col gap-4">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Archived</p>
        <JpgToAsciiCard />
      </section>
    </div>
  );
}

export const metadata = createMetadata({
  title: "Projects",
  description: "Open source tools, side projects, and experiments by zaxovaiko.",
  pathname: "/projects",
});
