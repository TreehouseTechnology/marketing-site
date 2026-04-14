import fs from "node:fs";
import path from "node:path";
import { getBlogPosts } from "@/app/blog/utils";

export const baseUrl = "https://treehousetechnology.io";

function toLastModified(filePath: string) {
  return fs.statSync(filePath).mtime;
}

function toLastModifiedOrFallback(
  filePath: string,
  fallback: string,
) {
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return new Date(fallback);
  }
}

export default async function sitemap() {
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: toLastModified(path.join(process.cwd(), "src", "app", "page.tsx")),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: toLastModified(path.join(process.cwd(), "src", "app", "about", "page.tsx")),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: toLastModified(path.join(process.cwd(), "src", "app", "blog", "page.tsx")),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: toLastModified(path.join(process.cwd(), "src", "app", "contact", "page.tsx")),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: toLastModified(path.join(process.cwd(), "src", "app", "products", "page.tsx")),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: toLastModified(path.join(process.cwd(), "src", "app", "services", "page.tsx")),
    },
  ];

  const blogRoutes = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: toLastModifiedOrFallback(
      path.join(process.cwd(), "src", "app", "blog", "posts", `${post.slug}.mdx`),
      post.metadata.publishedAt,
    ),
  }));

  return [...staticRoutes, ...blogRoutes];
}
