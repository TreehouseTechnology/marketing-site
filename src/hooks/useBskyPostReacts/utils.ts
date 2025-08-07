export const API_URL = "https://public.api.bsky.app/xrpc/";

export function buildGetLikesURL(limit: number, uri: string) {
  return `${API_URL}app.bsky.feed.getLikes?limit=${limit}&uri=${uri}`;
}

export function buildGetPostsURL(uri: string) {
  return `${API_URL}app.bsky.feed.getPosts?uris=${uri}`;
}

export function buildGetCommentsURL(uri: string) {
  return `${API_URL}app.bsky.feed.getPostThread?uri=${uri}&depth=1`;
}

export function buildPostURI(did: string, postId: string) {
  return `at://${did}/app.bsky.feed.post/${postId}`;
}

export function buildPostURL(handle: string, postId: string) {
  return `https://bsky.app/profile/${handle}/post/${postId}`;
}
