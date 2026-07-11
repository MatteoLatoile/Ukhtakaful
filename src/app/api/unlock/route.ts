import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  COOKIE_NAME,
  createAccessToken,
  getFormationPassword,
} from "@/lib/auth";
import { getFormationBySlug, type FormationSlug } from "@/lib/formations";

export async function POST(request: Request) {
  const formData = await request.formData();

  const slug = String(formData.get("slug") || "");
  const password = String(formData.get("password") || "");

  const formation = getFormationBySlug(slug);

  if (!formation) {
    redirect("/formations");
  }

  const expectedPassword = getFormationPassword(slug as FormationSlug);

  if (!expectedPassword || password !== expectedPassword) {
    redirect(`/formations/${slug}/acces?error=1`);
  }

  const token = await createAccessToken(slug as FormationSlug);
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });

  redirect(`/formations/${slug}/modules`);
}
