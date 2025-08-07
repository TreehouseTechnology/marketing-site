export const baseUrl = "https://treehousetechnology.io";

export default async function sitemap() {
  let routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/products",
    "/services",
    "/testimonials",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
