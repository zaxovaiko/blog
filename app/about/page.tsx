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
  IconBrandPrisma,
  IconDatabase,
  IconBrandMongodb,
  IconBrandAws,
  IconBrandGoogle,
  IconTrain,
  IconBrandVercel,
  IconCloud,
  IconBrandDocker,
  IconBrandPython,
  IconBrandNodejs,
  IconBrandTailwind,
  IconBrandSass,
  IconBrandDeno,
  IconBrandBunpo,
  IconBrandUbuntu,
  IconGitBranch,
  IconTestPipe,
  IconBrandJavascript,
  IconCpu,
  IconBrandPhp,
  IconBrandCpp,
  IconBrandRust,
  IconBrandSupabase,
  IconBrandFirebase,
  IconBrandStripe,
  IconCloudUpload,
  IconBrandSentry,
  IconBrandMixpanel,
  IconBrandGooglePlay,
  IconBrandApple,
  IconChartBar,
  IconCurrencyDollar,
  IconBrandGraphql,
  IconBrandAngular,
  IconBrandStorybook,
  IconBrandReact,
} from "@tabler/icons-react";
import Link from "next/link";
import { SkillCard } from "./skill-card";
import { generatePersonSchema } from "@/lib/schemas";

export const metadata = {
  title: "About Me | zaxovaiko",
  description:
    "Learn about my skills and expertise in TypeScript, AI, and mobile development",
  other: {
    "script:ld+json": JSON.stringify(generatePersonSchema()),
  },
};

export default function AboutPage() {
  const skillCategories = [
    {
      title: "Languages",
      description: "Core programming languages",
      skills: [
        { icon: IconBrandTypescript, name: "TypeScript" },
        { icon: IconBrandJavascript, name: "JavaScript" },
        { icon: IconBrandPython, name: "Python" },
      ],
    },
    {
      title: "Runtimes",
      description: "Modern JS runtimes",
      skills: [
        { icon: IconBrandNodejs, name: "Node.js" },
        { icon: IconBrandDeno, name: "Deno" },
        { icon: IconBrandBunpo, name: "Bun" },
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
    {
      title: "Frameworks & Styling",
      description: "Servers, frameworks and UI tooling",
      skills: [
        { icon: IconBrandReact, name: "React" },
        { icon: IconBrandVercel, name: "Next.js" },
        { icon: IconBrandGraphql, name: "GraphQL" },
        { icon: IconBrandAngular, name: "Angular" },
        { icon: IconBrandJavascript, name: "RxJS" },
        { icon: IconBrandNodejs, name: "Nest.js" },
        { icon: IconBrandTailwind, name: "Tailwind" },
        { icon: IconBrandSass, name: "SCSS" },
      ],
    },
    {
      title: "Databases & ORMs",
      description: "Data stores and modern ORMs",
      skills: [
        { icon: IconDatabase, name: "Postgres" },
        { icon: IconBrandMongodb, name: "MongoDB" },
        { icon: IconDatabase, name: "Redis" },
        { icon: IconBrandPrisma, name: "Prisma / Drizzle / Other ORMs" },
      ],
    },
    {
      title: "Cloud & Hosting",
      description: "Platforms and cloud providers",
      skills: [
        { icon: IconBrandAws, name: "AWS" },
        { icon: IconBrandGoogle, name: "GCP" },
        { icon: IconBrandVercel, name: "Vercel" },
        { icon: IconTrain, name: "Railway" },
        { icon: IconCloud, name: "DigitalOcean" },
        { icon: IconCloud, name: "Sevalla" },
        { icon: IconCloud, name: "Render" },
        { icon: IconCloud, name: "Heroku" },
      ],
    },
    {
      title: "AI & Machine Learning",
      description: "Building intelligent solutions",
      skills: [
        { icon: IconRobot, name: "LLM Integration" },
        { icon: IconBrain, name: "RAG Systems" },
        { icon: IconMessageChatbot, name: "MCP" },
        { icon: IconDatabase, name: "Vector Databases" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      description: "Containers, orchestration and OS",
      skills: [
        { icon: IconBrandDocker, name: "Docker" },
        { icon: IconBrandUbuntu, name: "Linux" },
        { icon: IconBrandApple, name: "macOS" },
      ],
    },
    {
      title: "Platforms & Services",
      description: "Auth, storage, analytics & payments",
      skills: [
        {
          icon: IconBrandFirebase,
          name: "Firebase",
        },
        { icon: IconBrandSupabase, name: "Supabase" },
        { icon: IconCloudUpload, name: "Cloudinary" },
        { icon: IconBrandSentry, name: "Sentry" },
        { icon: IconBrandStripe, name: "Stripe" },
        { icon: IconCurrencyDollar, name: "RevenueCat" },
        { icon: IconChartBar, name: "PostHog" },
        { icon: IconBrandMixpanel, name: "Mixpanel" },
        { icon: IconCode, name: "Sanity" },
        { icon: IconCode, name: "Storyblok" },
      ],
    },
    {
      title: "Distribution & Stores",
      description: "Where I publish mobile apps",
      skills: [
        { icon: IconBrandApple, name: "Apple App Store" },
        { icon: IconBrandGooglePlay, name: "Google Play Store" },
      ],
    },
    {
      title: "Testing & CI",
      description: "Testing tools, E2E frameworks, and CI/CD workflows",
      skills: [
        { icon: IconTestPipe, name: "Jest" },
        { icon: IconTestPipe, name: "RTL" },
        { icon: IconDeviceMobile, name: "Detox" },
        { icon: IconBrandStorybook, name: "Storybook" },
        { icon: IconGitBranch, name: "CI / CD" },
      ],
    },
    {
      title: "Tried / Previously used",
      description:
        "Technologies I learned and worked with before (not used professionally today)",
      skills: [
        { icon: IconBrandPhp, name: "PHP (Laravel)" },
        { icon: IconServer, name: "Java (Spring Boot)" },
        { icon: IconBrandCpp, name: "C++" },
        { icon: IconBrandRust, name: "Rust" },
        { icon: IconCode, name: "Pascal" },
        { icon: IconCpu, name: "Assembler" },
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
        <p className="text-zinc-400 text-base sm:text-lg mt-6 sm:mt-8">
          Below are some of the key skills and technologies I work with on a
          daily basis.
          <br />
          However, the specific library or tool is secondary - what truly
          matters is the ability to adapt, learn quickly, and apply best
          practices to deliver high-quality solutions.
        </p>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
          Skills & Technologies
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
