import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { createClient } from "next-sanity";
import Privacy from "@/components/privacy";
import Header from "@/components/header";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

async function getData(): Promise<any> {
  const query = `*[_type == "privacyPage"][0]{
  label,
  title,
  lastUpdated,
  headerConfig,
  sections[]{
    heading,
    content
  }
}`;
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Sanity Modals Fetch Error:", error);
    return null;
  }
}

export default async function PrivacyPage() {
  const data: any = await getData();

  return (
    <>
      <Header data={data.headerConfig} />
      <Privacy data={data} />
    </>
  );
}
