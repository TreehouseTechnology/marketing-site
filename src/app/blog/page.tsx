import { BlogPosts } from "@/components/ui/blog-posts";
import { PageTitle } from "@/components/ui/page-title";
import { JsonLd } from "@/components/ui/json-ld";
import {
  collectionPageJsonLd,
  createPageMetadata,
  organizationJsonLd,
  absoluteUrl,
} from "@/lib/seo";
import { getBlogPosts } from "@/app/blog/utils";

export const metadata = createPageMetadata({
  title: "Software Engineering Blog & Delivery Notes",
  description:
    "Engineering notes, implementation write-ups, and product development lessons from Treehouse Technology.",
  canonicalPath: "/blog",
});

export default function Page() {
  const posts = getBlogPosts();

  return (
    <section className="space-y-6">
      <JsonLd
        data={[
          organizationJsonLd(),
          collectionPageJsonLd({
            name: "Software Engineering Blog & Delivery Notes",
            description:
              "Engineering notes, implementation write-ups, and product development lessons from Treehouse Technology.",
            pathname: "/blog",
            items: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "BlogPosting",
                headline: post.metadata.title,
                url: absoluteUrl(`/blog/${post.slug}`),
              },
            })),
          }),
        ]}
      />

      <PageTitle title="Software Engineering Blog & Delivery Notes" />
      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        This blog focuses on practical delivery: how we built the site, how we
        approach production software, and the engineering decisions behind real
        client work.
      </p>
      <BlogPosts />
    </section>
  );
}
