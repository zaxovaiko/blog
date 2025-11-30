import type { Metadata } from "next";

const SITE_NAME = "zaxovaiko";
const DEFAULT_DESCRIPTION = "Just my thoughts and views on various topics";
const SITE_URL = "https://zaxovaiko.me";
const DEFAULT_OG_IMAGE = "/vazco.svg";

export function createMetadata({
  title,
  description,
  pathname,
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: {
  title?: string;
  description?: string;
  pathname?: string;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const titleWithSite = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const url = pathname ? `${SITE_URL}${pathname}` : SITE_URL;

  const metadata: Metadata = {
    title: titleWithSite,
    description: description ?? DEFAULT_DESCRIPTION,
    openGraph: {
      type,
      title: titleWithSite,
      description: description ?? DEFAULT_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithSite,
      description: description ?? DEFAULT_DESCRIPTION,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };

  return metadata;
}

export const defaultMetadata = createMetadata({});
