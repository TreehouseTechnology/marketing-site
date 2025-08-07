import { useEffect, useState } from "react";
import { Actor } from "@/components/ui/bsky-likes";
import {
  buildGetPostsURL,
  buildGetLikesURL,
  buildGetCommentsURL,
} from "./utils";

export interface UseBskyPostReactsResponse {
  likes: number;
  likesOverLimit: number;
  actors: Actor[];
  comments: any[];
}

export function useBskyPostReacts({
  limit = 55,
  postUri,
}: {
  limit?: number;
  postUri: string;
}) {
  const [state, setState] = useState<UseBskyPostReactsResponse>({
    likes: 0,
    likesOverLimit: 0,
    actors: [],
    comments: [],
  });

  useEffect(() => {
    async function fetchData() {
      const [post, likes, comments] = await Promise.allSettled(
        [
          buildGetPostsURL(postUri),
          buildGetLikesURL(limit, postUri),
          buildGetCommentsURL(postUri),
        ].map(async (url) => {
          const result = await fetch(url);
          const response = await result.json();
          return response;
        })
      );

      const likeCount =
        post.status === "fulfilled" ? post.value.posts[0].likeCount : 0;

      setState({
        likes: likeCount,
        likesOverLimit: likeCount > limit ? likeCount - limit : 0,
        actors: likes.status === "fulfilled" ? likes.value.likes : [],
        comments:
          comments.status === "fulfilled" ? comments.value.thread.replies : [],
      });
    }

    fetchData();
  }, [postUri]);

  return state;
}
