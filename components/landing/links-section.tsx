import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconUserCode,
  IconFileText,
} from "@tabler/icons-react";
import Link from "next/link";

export const Links = () => {
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
    { icon: IconUserCode, href: "/about", text: "About me" },
    { icon: IconFileText, href: "/cv", text: "CV" },
    { icon: IconMail, href: "mailto:contact@zaxovaiko.me", text: "Contact me" },
  ];

  return (
    <section className="flex gap-10 flex-wrap justify-center">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.text}
          className="flex gap-1 items-center hover:text-zinc-200 text-zinc-500 transition-colors"
        >
          <link.icon size={26} stroke={2} />
          <span>{link.text}</span>
        </Link>
      ))}
    </section>
  );
};
