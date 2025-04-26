import { NextResponse } from "next/server";

export async function GET() {
  // Generate a nonce that matches the pattern requirements
  // Must be at least 8 alphanumeric characters according to docs
  // Using a UUID without dashes should satisfy this
  const uuid = crypto.randomUUID().replace(/-/g, "");

  // Create response with the nonce
  const response = NextResponse.json({ nonce: uuid });

  // Set the cookie on the response
  response.cookies.set({
    name: "siwe",
    value: uuid,
    secure: true,
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3600, // 1 hour
  });

  return response;
}
