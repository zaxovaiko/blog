import { memo } from "react";

export const Bio = memo(() => {
  return (
    <section className="gap-4 flex flex-col">
      <h3 className="text-lg text-zinc-300">
        I love to explore new things - tech, tools, new concepts. I always look
        for new ways to enhance my skills. Currently, I&apos;m engaged in the
        development of the{" "}
        <a href="https://applover.space" className="text-purple-400">
          Lover
        </a>{" "}
        application and several other side projects.
      </h3>
    </section>
  );
});

Bio.displayName = "Bio";
