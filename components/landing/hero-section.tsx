export const Hero = () => {
  return (
    <section className="flex flex-col pt-20 relative">
      <h3 className="text-2xl font-bold relative">Hey, I&apos;m Volod 👋</h3>
      <p className="text-zinc-500 text-lg flex gap-1 sm:gap-2 text-start flex-wrap">
        a Senior Fullstack Developer at
        <a
          href="https://blurify.pl"
          className="current-company flex gap-1 items-center"
        >
          Blurify
        </a>
      </p>
    </section>
  );
};
