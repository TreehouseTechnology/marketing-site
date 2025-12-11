/**
 * Generate an ES256 JWK pair, add a stable `kid` (thumbprint),
 * and print:
 *  - PRIVATE_JWK (store in secret env)
 *  - JWKS (publish at /api/oauth/jwks.json)
 *
 * Run: tsx tools/gen-es256-with-kid.ts
 * or:  node --loader ts-node/esm tools/gen-es256-with-kid.ts
 */
import { webcrypto } from "node:crypto";
import { exportJWK, calculateJwkThumbprint, JWK } from "jose";

async function main() {
  // 1) Generate ES256 keypair with WebCrypto
  const { privateKey, publicKey } = await webcrypto.subtle.generateKey(
    { name: "ECDSA", namedCurve: "P-256" },
    true,
    ["sign", "verify"]
  );

  // 2) Export to JWKs
  const pubJwk = (await exportJWK(publicKey)) as JWK;
  const privJwk = (await exportJWK(privateKey)) as JWK;

  // 3) Normalize required fields
  pubJwk.alg = "ES256";
  pubJwk.use = "sig";
  privJwk.alg = "ES256";
  privJwk.use = "sig";

  // 4) Compute a stable `kid` (SHA-256 JWK thumbprint)
  const kid = await calculateJwkThumbprint(pubJwk, "sha256");
  pubJwk.kid = kid;
  privJwk.kid = kid;

  // 5) Print results
  //    - Save PRIVATE_JWK (entire object) to a secret: OAUTH_PRIVATE_KEY
  //    - Serve JWKS publicly at /api/oauth/jwks.json
  console.log("\nPRIVATE_JWK (put in env as OAUTH_PRIVATE_KEY):\n");
  console.log(JSON.stringify(privJwk, null, 2));

  console.log("\nJWKS (publish this at /api/oauth/jwks.json):\n");
  console.log(JSON.stringify({ keys: [pubJwk] }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
