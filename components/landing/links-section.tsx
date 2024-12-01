import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

const links = [
  {
    icon: IconBrandGithub,
    href: "https://github.com/zaxovaiko",
    text: "Github",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/zaxovaiko/",
    text: "Linkedin",
  },
];

export const Links = () => {
  return (
    <section className="flex gap-10">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.text}
          className="flex gap-2 items-center hover:text-zinc-200 text-zinc-500 transition-colors"
        >
          <link.icon size={26} stroke={2} />
          <span>{link.text}</span>
        </Link>
      ))}
    </section>
  );
};
