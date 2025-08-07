import React from "react";

export type CommentPost = {
  post: {
    author: {
      did: string;
      handle: string;
      displayName: string;
      avatar: string;
    };
    record: {
      text: string;
      createdAt: string;
    };
  };
};

export interface Props {
  comments: CommentPost[];
}

export function BlueskyCommentsReact({ comments }: Props) {
  return (
    <div>
      <p className="mb-2 font-semibold text-left">Comments:</p>
      <ul className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li
              className="flex items-start space-x-3"
              key={comment.post.author.did + comment.post.record.createdAt}
            >
              <a
                href={`https://bsky.app/profile/${comment.post.author.handle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={comment.post.author.avatar}
                  alt={comment.post.author.displayName}
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border border-gray-200"
                />
              </a>
              <div>
                <strong className="block text-sm text-left">
                  {comment.post.author.displayName}
                </strong>
                <p className="text-gray-700 text-sm text-left">
                  {comment.post.record.text}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-sm">
            Oh no, no comments, how sad! How about you add one?
          </li>
        )}
      </ul>
    </div>
  );
}

export default BlueskyCommentsReact;
