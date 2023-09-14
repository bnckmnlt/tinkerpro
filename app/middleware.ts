import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.tinkerpro.vercel.app"]
    : ["http://localhost:3000"];

export async function middleware(request: Request) {
  const origin = request.headers.get("origin");

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-Type": "plain/text" },
    });
  }
}
