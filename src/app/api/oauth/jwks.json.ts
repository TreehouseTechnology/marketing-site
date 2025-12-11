import { NextResponse } from "next/server";
import oauthClient from "@/lib/oauth";

export default function GET() {
  return NextResponse.json(oauthClient.jwks, { status: 200 });
}
