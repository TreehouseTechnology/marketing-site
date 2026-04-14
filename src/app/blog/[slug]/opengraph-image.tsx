import { ImageResponse } from "next/og";
import { getBlogPost } from "../utils";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const { metadata: { title = "FIXME: Post not found!" } = {} } =
    getBlogPost(params.slug) || {};

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-start justify-between bg-white px-10 py-12">
        <div tw="flex items-center text-sm tracking-[0.25em] uppercase text-gray-500">
          Treehouse Technology
        </div>
        <div tw="flex flex-col w-full">
          <h2 tw="flex flex-col text-5xl font-bold tracking-tight text-left text-gray-900 max-w-4xl">
            {title}
          </h2>
          <p tw="mt-6 text-2xl text-gray-600 max-w-3xl">
            Engineering notes, implementation write-ups, and product delivery
            lessons.
          </p>
        </div>
      </div>
    )
  );
}
