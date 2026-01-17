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
  title: "CV - Volodymur Zakhovaiko",
  description:
    "Curriculum Vitae of Volodymur Zakhovaiko - Senior Fullstack Developer (Mobile & AI) with expertise in React, React Native, Next.js, and modern web technologies.",
  pathname: "/cv",
});

const languages = [
  { name: "Polish", level: "C1" },
  { name: "English", level: "B2" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
];

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Blurify",
    period: "Jan 2026 - Present",
    achievements: [
      {
        text: "Just started working at Blurify. More details will be added soon.",
      },
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Vazco",
    period: "Mar 2022 - Jan 2026",
    achievements: [
      {
        text: "Implemented a mobile application for ",
        link: { text: "Maka Kids", url: "https://makakids.com" },
        text2:
          ". Configured the entire CI/CD pipeline from scratch. Closely worked with the client and team to deliver the app as fast as possible to match the tight deadlines.",
      },
      {
        text: "Lead the ",
        link: {
          text: "GeeGee",
          url: "https://www.linkedin.com/company/geegee",
        },
        text2:
          " project. Bootstrapped the whole backend infrastructure for a mobile application. Reduced tech debt by applying best practices and refactoring old code, leading to improved app speed and performance.",
      },
      {
        text: "Mentored less experienced team members.",
      },
      {
        text: "Actively communicated with clients about plans and project achievements.",
      },
      {
        text: "Implemented a personalized AI teacher application for the Ministry of Education, utilizing Wolfram Alpha, RAG, and custom AI agents.",
      },
      {
        text: "Implemented an AI assistant for e-commerce with RAG process using Pinecone (vector db) and a custom agent framework.",
      },
      {
        text: "Automated CI/CD workflows with AWS, GCP, Vercel, and Fastlane.",
      },
      {
        text: "Worked with React and Next.js ecosystem, Firebase, MongoDB, PostgreSQL, and different CMSs like Sanity and Storyblok.",
      },
      {
        text: "Developed a React Native app. Used GraphQL (Apollo) and tools like Jest/RTL and Detox.",
      },
      {
        text: "Configured a payment system (subscriptions) with Stripe and RevenueCat integrations.",
      },
      {
        text: "Maintained and actively contributed to OSS projects like ",
        link: { text: "uniforms", url: "https://uniforms.tools" },
        text2: ", ",
        link2: { text: "sparrowql", url: "https://sparrowql.com" },
      },
    ],
  },
  {
    title: "Regular Angular Developer",
    company: "Comarch SA",
    period: "Jul 2021 - Mar 2022",
    achievements: [
      {
        text: "Implemented IoT applications with GraphQL, RxJS, and Angular.",
      },
      {
        text: "Boosted DX by migrating the custom internal playground to Storybook.",
      },
    ],
  },
  {
    title: "Freelancing on Upwork",
    company: "",
    period: "Jul 2018 - Nov 2023",
    achievements: [
      {
        text: "Interacted with the designers' team to deliver the websites using HTML/CSS, Bootstrap, and AMP.",
      },
      {
        text: "Refactored and optimized multiple JS projects (integrated TS in JS code base).",
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
        <h1 className="text-3xl sm:text-4xl font-bold">Volodymur Zakhovaiko</h1>
        <p className="text-xl sm:text-2xl text-zinc-300 mt-2">
          Senior Fullstack Developer (Mobile & AI)
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-zinc-400">
          <div className="flex items-center gap-2">
            <IconMapPin className="w-4 h-4 text-teal-400" />
            <span className="text-sm sm:text-base">Wrocław, Poland</span>
          </div>
          <a
            href="mailto:contact@zaxovaiko.me"
            className="flex items-center gap-2 hover:text-teal-400 transition-colors"
          >
            <IconMail className="w-4 h-4 text-teal-400" />
            <span className="text-sm sm:text-base">contact@zaxovaiko.me</span>
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
          Hey, I&apos;m an experienced fullstack dev looking for a great
          opportunity to use my skills and move my career forward. I can adapt
          to new tech quickly and love starting and executing new projects.
          I&apos;m detail-oriented and good with time management, which I think
          will be an asset to any forward-thinking company.
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
        <p className="text-zinc-400 text-lg mb-4">
          For a detailed breakdown of my skills and technologies, visit my{" "}
          <Link
            href="/about"
            className="text-teal-400 hover:text-teal-300 underline"
          >
            skills page
          </Link>
          .
        </p>
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
                    <span>
                      {achievement.text}
                      {achievement.link && (
                        <a
                          href={achievement.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                        >
                          {achievement.link.text}
                        </a>
                      )}
                      {achievement.text2}
                      {achievement.link2 && (
                        <a
                          href={achievement.link2.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors"
                        >
                          {achievement.link2.text}
                        </a>
                      )}
                    </span>
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
                Wroclaw University of Science and Technology
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
          and repealing Directive 95/46/EC (general Data Protection Regulation).
        </p>
      </section>
    </div>
  );
}
