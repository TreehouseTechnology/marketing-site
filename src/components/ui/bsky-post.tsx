import { ComponentProps } from "react";
import BlueskyLikes from "./bsky-likes";
import BlueskyComments from "./bsky-comments";

interface Props {
  likeCount: number;
  likeActors: ComponentProps<typeof BlueskyLikes>["actors"];
  likeCountOverLimit: ComponentProps<typeof BlueskyLikes>["likesOverLimit"];
  comments: ComponentProps<typeof BlueskyComments>["comments"];
  postURL: string;
}

export default function BlueskyPostReact({
  likeCount,
  likeCountOverLimit,
  likeActors,
  comments,
  postURL,
}: Props) {
  return (
    <div className="mx-auto max-w-xl flex flex-col items-center text-center p-6">
      <h3 className="mb-2 font-semibold text-xl flex items-center gap-2 justify-center">
        <span aria-hidden="true">🦋</span>
        {likeCount} Likes on Bluesky
      </h3>
      <div className="mb-4 w-full">
        <BlueskyLikes actors={likeActors} likesOverLimit={likeCountOverLimit} />
        <a
          href={postURL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800 transition-colors mt-2 block"
        >
          Like this post on Bluesky to see your face show up here
        </a>
      </div>
      <div className="mt-6 w-full">
        <BlueskyComments comments={comments} />
        <a
          href={postURL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600 hover:text-blue-800 transition-colors mt-2 block"
        >
          Comment on Bluesky to see your comment show up here
        </a>
      </div>
    </div>
  );
}
