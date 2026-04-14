import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block rounded-2xl border border-neutral-200 p-5 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-lg font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </p>
              <p className="max-w-2xl text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
