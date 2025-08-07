"use client";

import { useBskyPostReacts } from "@/hooks/useBskyPostReacts";
import { buildPostURI, buildPostURL } from "@/hooks/useBskyPostReacts/utils";
import BlueskyPostReact from "../ui/bsky-post";
import { useMemo } from "react";

export interface BskyPostProps {
  limit?: number;
  did: string;
  handle: string;
  postId: string;
}

export function BskyPost({ limit = 55, handle, did, postId }: BskyPostProps) {
  const postURL = useMemo(() => buildPostURL(handle, postId), [handle, postId]);
  const state = useBskyPostReacts({
    limit,
    postUri: buildPostURI(did, postId),
  });

  return (
    <BlueskyPostReact
      postURL={postURL}
      likeCount={state.likes}
      likeCountOverLimit={state.likesOverLimit}
      likeActors={state.actors}
      comments={state.comments}
    />
  );
}
