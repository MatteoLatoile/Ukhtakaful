import type { FormationSlug } from "./formations";

const COOKIE_NAME = "ukhtakaful_access";

export { COOKIE_NAME };

export function getFormationPassword(slug: FormationSlug) {
  const passwords: Record<FormationSlug, string | undefined> = {
    "reveils-nocturnes": process.env.PASSWORD_REVEILS_NOCTURNES,
    "allaitement-sommeil": process.env.PASSWORD_ALLAITEMENT_SOMMEIL,
    "sevrage-nocturne": process.env.PASSWORD_SEVRAGE_NOCTURNE,
  };

  return passwords[slug];
}

function getSecret() {
  const secret = process.env.ACCESS_SECRET;

  if (!secret) {
    throw new Error("ACCESS_SECRET est manquant dans .env.local");
  }

  return secret;
}

async function signMessage(message: string) {
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(message)
  );

  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function createAccessToken(slug: FormationSlug) {
  const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 180; // 180 jours
  const payload = `${slug}.${expiresAt}`;
  const signature = await signMessage(payload);

  return `${payload}.${signature}`;
}

export async function verifyAccessToken(token: string, slug: string) {
  const parts = token.split(".");

  if (parts.length !== 3) {
    return false;
  }

  const [tokenSlug, expiresAt, signature] = parts;

  if (tokenSlug !== slug) {
    return false;
  }

  if (Number(expiresAt) < Date.now()) {
    return false;
  }

  const expectedSignature = await signMessage(`${tokenSlug}.${expiresAt}`);

  return signature === expectedSignature;
}
