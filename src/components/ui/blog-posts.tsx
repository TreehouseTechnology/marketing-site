import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-5">
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
            className="group block rounded-3xl border border-neutral-200 bg-white/75 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_45px_-32px_rgba(15,23,42,0.4)] dark:border-neutral-800 dark:bg-neutral-950/70 dark:hover:border-neutral-700"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="space-y-2">
                  <p className="text-lg font-semibold tracking-tight text-neutral-950 transition-colors group-hover:text-neutral-700 dark:text-neutral-50 dark:group-hover:text-neutral-200">
                    {post.metadata.title}
                  </p>
                  <p className="max-w-2xl text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    {post.metadata.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-600 transition-colors group-hover:border-neutral-950 group-hover:text-neutral-950 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:group-hover:border-neutral-100 dark:group-hover:text-neutral-100">
                  Read
                  <span aria-hidden="true">↗</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
