import type { Metadata } from "next";
import { baseUrl } from "@/app/sitemap";

export const siteName = "Treehouse Technology";
export const siteDescription =
  "Treehouse Technology builds mobile, web, and full-stack software for startups and small teams.";

export const organizationId = `${baseUrl}/#organization`;

export function absoluteUrl(pathname: string) {
  return new URL(pathname, baseUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  canonicalPath,
}: {
  title: string;
  description: string;
  canonicalPath: string;
}): Metadata {
  const url = absoluteUrl(canonicalPath);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteName,
    url: baseUrl,
    description: siteDescription,
    sameAs: ["https://github.com/treehousetechnology/"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: siteName,
    url: baseUrl,
    description: siteDescription,
    publisher: {
      "@id": organizationId,
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  pathname,
}: {
  name: string;
  description: string;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: {
      "@id": organizationId,
    },
    url: absoluteUrl(pathname),
  };
}

export function aboutPageJsonLd({
  description,
}: {
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Treehouse Technology",
    url: absoluteUrl("/about"),
    description,
    about: {
      "@id": organizationId,
    },
  };
}

export function contactPageJsonLd({
  description,
}: {
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Treehouse Technology",
    url: absoluteUrl("/contact"),
    description,
    about: {
      "@id": organizationId,
    },
  };
}

export function collectionPageJsonLd({
  name,
  description,
  pathname,
  items,
}: {
  name: string;
  description: string;
  pathname: string;
  items: Array<Record<string, unknown>>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(pathname),
    description,
    about: {
      "@id": organizationId,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items,
    },
  };
}

