import { Metadata } from "next";
import { BlogPosts } from "@/components/ui/blog-posts";
import { PageTitle } from "@/components/ui/page-title";

export const metadata: Metadata = {
  title: "Engineering Blog",
  description:
    "Engineering notes, implementation write-ups, and product development lessons from Treehouse Technology.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return (
    <section className="space-y-6">
      <PageTitle title="Engineering Blog" />
      <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        This blog focuses on practical delivery: how we built the site, how we
        approach production software, and the engineering decisions behind real
        client work.
      </p>
      <BlogPosts />
    </section>
  );
}
