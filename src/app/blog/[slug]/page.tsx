import { Metadata } from "next";
import { notFound } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
import { formatDate, getBlogPost, getBlogPosts } from "../utils";
import { PageTitle } from "@/components/ui/page-title";
import { BskyPost } from "@/components/containers/bsky-post";
import { MdxContent } from "@/components/ui/mdx-content";

export async function generateStaticParams() {
  return getBlogPosts().map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPost(slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? new URL(image, baseUrl).toString()
    : new URL(`/blog/${post.slug}/opengraph-image`, baseUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      siteName: "Treehouse Technology",
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? new URL(post.metadata.image, baseUrl).toString()
              : new URL(
                  `/blog/${post.slug}/opengraph-image`,
                  baseUrl,
                ).toString(),
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: post.metadata.author,
            },
          }),
        }}
      />

      <PageTitle title={post.metadata.title} />

      <div className="mt-2 flex items-center justify-between text-sm">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {post.metadata.author}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-article mt-8">
        <MdxContent source={post.content} />
        {post.metadata.postId && (
          <BskyPost
            limit={10}
            did="did:plc:xbair6rpryzlccndpvnb3hpq"
            handle="treehousetechnology.io"
            postId={post.metadata.postId}
          />
        )}
      </article>
    </section>
  );
}
