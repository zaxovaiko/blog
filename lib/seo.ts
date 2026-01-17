import type { Metadata } from "next";

const SITE_NAME = "zaxovaiko";
const DEFAULT_DESCRIPTION = "Just my thoughts and views on various topics";
const SITE_URL = "https://zaxovaiko.me";
const AUTHOR_NAME = "Volodymyr Zakhovaiko";

export function createMetadata({
  title,
  description,
  pathname,
  type = "website",
  image,
  publishedTime,
  modifiedTime,
  authors = [AUTHOR_NAME],
  tags = [],
}: {
  title?: string;
  description?: string;
  pathname?: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}): Metadata {
  const titleWithSite = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const url = pathname ? `${SITE_URL}${pathname}` : SITE_URL;

  const metadata: Metadata = {
    title: titleWithSite,
    description: description ?? DEFAULT_DESCRIPTION,
    authors: authors.map((name) => ({ name })),
    keywords: tags,
    openGraph: {
      type,
      title: titleWithSite,
      description: description ?? DEFAULT_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      images: image ? [image] : undefined,
      ...(type === "article" &&
        publishedTime && {
          publishedTime,
          modifiedTime: modifiedTime || publishedTime,
          authors: authors,
          tags,
        }),
    },
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}

export const defaultMetadata = createMetadata({});
