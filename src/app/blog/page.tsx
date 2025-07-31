import { BlogPosts } from "@/components/ui/blog-posts";
import { PageTitle } from "@/components/ui/page-title";

export const metadata = {
  title: "Blog",
  description: "Thoughts and observations.",
};

export default function Page() {
  return (
    <section>
      <PageTitle title="Blog" />
      <BlogPosts />
    </section>
  );
}
