import React from "react";

export type Actor = {
  actor: {
    handle: string;
    displayName: string;
    avatar: string;
  };
};

export interface Props {
  actors: Actor[];
  likesOverLimit: number;
}

export function BlueskyLikesReact({ actors, likesOverLimit }: Props) {
  return (
    <div>
      <p className="mb-2 font-semibold text-left">Likes:</p>
      {actors.length > 0 ? (
        Array.from({ length: Math.ceil(actors.length / 8) }).map(
          (_, rowIndex) => {
            const start = rowIndex * 8;
            const end = start + 8;
            const rowActors = actors.slice(start, end);
            // Only show likesOverLimit on the last row
            const isLastRow = rowIndex === Math.floor(actors.length / 8);
            return (
              <ul
                key={rowIndex}
                className="flex justify-center -space-x-3 items-center mb-2"
              >
                {rowActors.map((actor) => (
                  <li key={actor.actor.handle}>
                    <a
                      href={`https://bsky.app/profile/${actor.actor.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {actor.actor.avatar ? (
                        <img
                          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-white shadow-sm"
                          src={actor.actor.avatar}
                          alt={actor.actor.displayName}
                        />
                      ) : (
                        <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-gray-200 border-2 border-white shadow-sm text-2xl">
                          🦋
                        </div>
                      )}
                    </a>
                  </li>
                ))}
                {isLastRow && likesOverLimit > 0 && (
                  <li>
                    <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full bg-gray-200 border-2 border-white text-xs font-semibold text-gray-700 shadow-sm">
                      +{likesOverLimit}
                    </div>
                  </li>
                )}
              </ul>
            );
          }
        )
      ) : (
        <ul className="flex justify-center -space-x-3 items-center mb-2">
          <li className="text-gray-500 text-sm">
            Oh no, no likes, how sad! How about you add one?
          </li>
        </ul>
      )}
    </div>
  );
}

export default BlueskyLikesReact;
