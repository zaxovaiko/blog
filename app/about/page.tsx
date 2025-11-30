import { Button } from "@/components/ui/button";
import {
  IconBrain,
  IconBrandReactNative,
  IconBrandTypescript,
  IconCode,
  IconDeviceMobile,
  IconMessageChatbot,
  IconRobot,
  IconServer,
} from "@tabler/icons-react";
import Link from "next/link";
import { SkillCard } from "./skill-card";

export const metadata = {
  title: "About Me | zaxovaiko",
  description:
    "Learn about my skills and expertise in TypeScript, AI, and mobile development",
};

export default function AboutPage() {
  const skillCategories = [
    {
      title: "TypeScript Ecosystem",
      description: "Building robust and scalable applications",
      skills: [
        { icon: IconBrandTypescript, name: "TypeScript" },
        { icon: IconCode, name: "React & Next.js" },
        { icon: IconServer, name: "Node.js" },
      ],
    },
    {
      title: "AI & Machine Learning",
      description: "Building intelligent solutions",
      skills: [
        { icon: IconRobot, name: "LLM Integration" },
        { icon: IconBrain, name: "RAG Systems" },
        { icon: IconMessageChatbot, name: "MCP" },
      ],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      skills: [
        { icon: IconBrandReactNative, name: "React Native" },
        { icon: IconDeviceMobile, name: "Expo" },
      ],
    },
  ];

  return (
    <div className="flex flex-col py-6 sm:py-10 w-full">
      <Link href="/" className="self-center">
        <Button variant="outline" className="hover:bg-white">
          <span className="text-sm">Back to home</span>
        </Button>
      </Link>

      <section className="flex flex-col pt-8 sm:pt-10">
        <h1 className="text-2xl sm:text-3xl font-bold">About Me</h1>
        <p className="text-zinc-400 text-base sm:text-lg mt-3 sm:mt-4">
          I&apos;m a Senior Fullstack Developer passionate about building
          exceptional digital experiences. I specialize in the TypeScript
          ecosystem, AI technologies, and mobile development.
        </p>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          My Skills
        </h2>
        <div className="flex flex-col gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-3 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-teal-400">
                  {category.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
