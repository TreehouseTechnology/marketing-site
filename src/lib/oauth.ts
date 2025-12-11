import { NodeOAuthClient } from "@atproto/oauth-client-node";
import { JoseKey } from "@atproto/jwk-jose";
import invariant from "ts-invariant";
import MemoryStore from "./memory-store";

invariant(
  process.env.PRIVATE_KEY_1 &&
    process.env.PRIVATE_KEY_2 &&
    process.env.PRIVATE_KEY_3,
  "Private keys not configured!"
);

export const oauthClient = new NodeOAuthClient({
  clientMetadata: {
    client_id: "https://treehousetechnology.io/public/client-metadata.json",
    client_name: "Treehouse OAuth App",
    client_uri: "https://treehousetechnology.io",
    redirect_uris: ["https://treehousetechnology.io/api/auth/callback/bluesky"],
    grant_types: ["authorization_code", "refresh_token"],
    response_types: ["code"],
    application_type: "web",
    token_endpoint_auth_method: "private_key_jwt",
    token_endpoint_auth_signing_alg: "RS256",
    jwks_uri: "https://treehousetechnology.io/api/oauth/jwks.json",
    scope: "atproto",
    dpop_bound_access_tokens: true,
  },
  keyset: await Promise.all([
    JoseKey.fromImportable(JSON.parse(process.env.PRIVATE_KEY_1)),
    JoseKey.fromImportable(JSON.parse(process.env.PRIVATE_KEY_2)),
    JoseKey.fromImportable(JSON.parse(process.env.PRIVATE_KEY_3)),
  ]),
  sessionStore: MemoryStore(),
  stateStore: MemoryStore(),
});

export default oauthClient;
