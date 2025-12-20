import { Person, WithContext, BlogPosting, WebSite } from "schema-dts";

const SITE_URL = "https://zaxovaiko.me";
const AUTHOR_NAME = "Volodymyr Zakhovaiko";

export function generatePersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    jobTitle: "Senior Fullstack Developer (Mobile & AI)",
    knowsAbout: [
      "TypeScript",
      "React Native",
      "Next.js",
      "AI Integration",
      "GraphQL",
      "Mobile Development",
    ],
    sameAs: [
      "https://github.com/zaxovaiko",
      "https://www.linkedin.com/in/zaxovaiko/",
    ],
  };
}

export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "zaxovaiko",
    description:
      "Personal blog of zaxovaiko — opinions and notes about TypeScript, mobile development, and AI",
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
  };
}

export function generateBlogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  tags = [],
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  tags?: string[];
}): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/posts/${slug}`,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    keywords: tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/posts/${slug}`,
    },
  };
}
