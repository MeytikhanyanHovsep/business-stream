import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});

export async function GET() {
  try {
    const data = await client.fetch(
      `*[_id == "settings"][0]{robotsText}`,
      {},
      { next: { revalidate: 0 } },
    );

    const content = data?.robotsText || "User-agent: *\nAllow: /";

    return new Response(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    return new Response("User-agent: *\nAllow: /", {
      headers: { "Content-Type": "text/plain" },
    });
  }
}
