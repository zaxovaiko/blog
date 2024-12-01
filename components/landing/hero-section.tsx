import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col pt-20 relative">
      <h3 className="text-2xl font-bold relative">
        <Image
          draggable={false}
          src="/pink.png"
          alt="Blobs"
          width={200}
          height={200}
          className="-z-10 absolute -top-20 right-0 select-none hidden sm:block"
        />
        Hey, I&apos;m Volod 👋
      </h3>
      <p className="text-zinc-500 text-lg flex gap-1 sm:gap-2 text-start flex-wrap">
        a Senior Fullstack Developer at
        <a
          href="https://vazco.eu"
          className="current-company flex gap-1 items-center"
        >
          <Image src="/vazco.svg" alt="Vazco" width={20} height={20} />
          Vazco
        </a>
      </p>
    </section>
  );
};
