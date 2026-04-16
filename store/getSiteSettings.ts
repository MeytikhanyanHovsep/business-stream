import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});

export async function getSiteSettings() {
  return await client.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]{
...,
    "faviconUrl": favicon.asset->url,
    "ogImageUrl": ogImage.asset->url,
  }`,
    {},
    {
      next: { revalidate: 0 },
    },
  );
}
