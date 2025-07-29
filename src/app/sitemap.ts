export const baseUrl = "https://treehousetechnology.io";

export default async function sitemap() {
  let routes = ["", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
