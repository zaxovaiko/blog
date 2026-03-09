import { Button } from "@/components/ui/button";
import { createMetadata } from "@/lib/seo";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCalendar,
  IconMail,
  IconMapPin,
  IconSchool,
} from "@tabler/icons-react";
import Link from "next/link";

export const metadata = createMetadata({
  title: "CV - Volodymyr Zakhovaiko",
  description:
    "Curriculum Vitae of Volodymyr Zakhovaiko - Senior Fullstack Engineer with expertise in React, React Native, Next.js, and modern web technologies.",
  pathname: "/cv",
});

const languages = [
  { name: "Polish", level: "Professional work proficiency" },
  { name: "English", level: "Working proficiency" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
];

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript"] },
  { category: "Frameworks", items: ["React", "Next.js", "Nest.js", "Tanstack", "Rx.js"] },
  { category: "Runtimes", items: ["Node.js", "Bun", "Deno"] },
  { category: "Mobile", items: ["React Native", "Expo"] },
  { category: "Styling", items: ["Tailwind", "styled components"] },
  { category: "Databases", items: ["PostgreSQL", "Mongo", "MySQL", "Redis"] },
  { category: "Hosting", items: ["AWS", "GCP", "Railway", "Digital Ocean"] },
  { category: "AI", items: ["MCP", "RAG", "AI SDK", "n8n", "vector databases"] },
  { category: "Testing", items: ["Jest", "RTL", "Detox", "Playwright"] },
  { category: "Analytics", items: ["Mixpanel", "PostHog", "Google Analytics"] },
  { category: "Communication", items: ["REST API", "GraphQL", "RPC"] },
  { category: "Tried/Previously used", items: ["Python", "PHP (Laravel)", "Java", "C++"] },
];

const experiences = [
  {
    title: "Senior Fullstack Developer",
    company: "Blurify",
    period: "Jan 2026 - Present",
    achievements: [
      {
        text: "Led full-stack development of the TCS Interpreting platform — architected core infrastructure and delivered a production-ready solution.",
      },
      {
        text: "Architected Player Account Management (PAM) system and CMS for iGaming projects — implemented user authentication, wallet management, and content delivery.",
      },
    ],
  },
  {
    title: "Senior Fullstack Developer",
    company: "Vazco",
    period: "Oct 2024 - Jan 2026",
    achievements: [
      {
        text: "Promoted to Tech Lead — led 4-person team, served as primary client contact translating requirements into sprint roadmaps; onboarded and mentored 3 junior/mid developers on architecture and code review practices.",
      },
      {
        text: "Reduced infrastructure costs by ~40% through API optimization, caching, and DDoS prevention; configured CI/CD pipelines across backend, React Native app, and CMS; audited legacy projects for security and performance issues.",
      },
      {
        text: "Built AI-powered products reaching ~2.5k MAU — multi-agent educational chatbot (MCP protocol) and e-commerce AI assistant (Python, FastAPI, LangChain, Pinecone, OpenAI).",
      },
    ],
  },
  {
    title: "Middle Fullstack Developer",
    company: "Vazco",
    period: "Aug 2022 - Oct 2024",
    achievements: [
      {
        text: "Owned technical direction for a 4-dev team — built API security layer, CI/CD pipelines, and drove engineering standards through peer reviews and testing, cutting release cycles in half.",
      },
      {
        text: "Delivered core platform features serving ~1k DAU — payment integrations (Stripe, RevenueCat), calendar engine, analytics (Mixpanel, GA); led Java → TypeScript backend migration, reducing API response times by ~30% across ~40 endpoints.",
      },
    ],
  },
  {
    title: "Junior Fullstack Developer",
    company: "Vazco",
    period: "Mar 2022 - Aug 2022",
    achievements: [
      {
        text: "Shipped full-stack features (React, Gatsby, GraphQL, Apollo, Sanity.io) and modernized e-commerce with Shopify, multi-language support, and a 3D product configurator (Three.js, zustand), boosting conversion rates.",
      },
      {
        text: "Managed deployment & data infrastructure — database schemas, migrations, and CI/CD across Vercel and GCP.",
      },
    ],
  },
  {
    title: "Regular Angular Developer",
    company: "Comarch SA",
    period: "Jul 2021 - Mar 2022",
    achievements: [
      {
        text: "Built IoT projects for Vodafone using Angular and GraphQL, working closely with the team to ship final products.",
      },
      {
        text: "Improved developer experience by migrating the custom component playground to Storybook, making UI development faster and easier for the team.",
      },
    ],
  },
];

export default function CVPage() {
  return (
    <div className="flex flex-col py-6 sm:py-10 w-full">
      <Link href="/" className="self-center">
        <Button variant="outline" className="hover:bg-white mb-8">
          <span className="text-sm">Back to home</span>
        </Button>
      </Link>

      {/* Header Section */}
      <section className="flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold">Volodymyr Zakhovaiko</h1>
        <p className="text-xl sm:text-2xl text-zinc-300 mt-2">
          Senior Fullstack Engineer
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-zinc-400">
          <div className="flex items-center gap-2">
            <IconMapPin className="w-4 h-4 text-teal-400" />
            <span className="text-sm sm:text-base">Wroclaw, Poland</span>
          </div>
          <a
            href="mailto:zaxovaiko@gmail.com"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors"
          >
            <IconMail className="w-4 h-4 text-teal-400" />
            <span className="text-sm sm:text-base">zaxovaiko@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/zaxovaiko/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors"
          >
            <IconBrandLinkedin className="w-4 h-4 text-teal-400" />
            <span className="text-sm sm:text-base">LinkedIn</span>
          </a>
          <a
            href="https://github.com/zaxovaiko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors"
          >
            <IconBrandGithub className="w-4 h-4 text-teal-400" />
            <span className="text-sm sm:text-base">GitHub</span>
          </a>
        </div>

        <p className="text-zinc-400 text-base sm:text-lg mt-6 max-w-3xl leading-relaxed">
          Hi. My name is Volod, and I am passionate about creating useful
          products (including my own), expanding them, and growing into something
          substantial. I enjoy exploring new technologies that can make a
          developer&apos;s life easier. I take a proactive approach, leading
          teams to success and proposing innovative strategies in product
          development.
        </p>
      </section>

      {/* Languages Section */}
      <section className="flex flex-col mt-8 sm:mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-4">
          Languages
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-lg p-3 sm:p-4 border border-zinc-800 bg-background/80 backdrop-blur-sm hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-foreground">
                  {lang.name}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400">
                  {lang.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col mt-10 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-6">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.flatMap((skill) =>
            skill.items.map((item) => (
              <span
                key={item}
                className="text-teal-400 border border-teal-400 rounded-full px-3 py-0.5 text-sm"
              >
                {item}
              </span>
            ))
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col mt-10 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-6">
          Work Experience
        </h2>
        <div className="flex flex-col gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-lg p-5 sm:p-6 border border-zinc-800 bg-background/80 backdrop-blur-sm hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {exp.title}
                    {exp.company && (
                      <>
                        {" "}
                        <span className="text-zinc-400">at {exp.company}</span>
                      </>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm mt-1">
                    <IconCalendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5 text-zinc-300 text-sm sm:text-base">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-2 leading-relaxed items-start"
                  >
                    <span className="text-teal-400 flex-shrink-0">-</span>
                    <span>{achievement.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="flex flex-col mt-10 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-6">
          Education
        </h2>
        <div className="rounded-lg p-5 sm:p-6 border border-zinc-800 bg-background/80 backdrop-blur-sm hover:border-zinc-700 transition-colors">
          <div className="flex items-start gap-3">
            <IconSchool className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0 mt-1" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Wroclaw University of Science and Technology (2018-2022)
              </h3>
              <p className="text-sm sm:text-base text-zinc-300">
                BSc in Computer Science
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="flex flex-col mt-10 sm:mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-6">
          Open Source & Projects
        </h2>
        <div className="rounded-lg p-5 sm:p-6 border border-zinc-800 bg-background/80 backdrop-blur-sm hover:border-zinc-700 transition-colors">
          <div className="flex items-center gap-3 text-foreground">
            <IconBrandGithub className="w-5 h-5 text-teal-400" />
            <span className="text-sm sm:text-base text-zinc-300">
              Check out my pet projects and contributions on{" "}
              <a
                href="https://github.com/zaxovaiko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-semibold"
              >
                GitHub
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* GDPR Disclaimer */}
      <section className="mt-10 sm:mt-12">
        <p className="text-xs text-zinc-600 leading-relaxed">
          I hereby give consent for my personal data included in my application
          to be processed for the purposes of the recruitment process under
          Regulation (EU) 2016/679 of the European Parliament and of the Council
          of 27 April 2016 on the protection of natural persons with regard to
          the processing of personal data and on the free movement of such data
          and repealing Directive 95/46/EC (General Data Protection Regulation).
        </p>
      </section>
    </div>
  );
}
