import Link from "next/link";
import { createClient } from "next-sanity";
import Header from "@/components/header";
import Consent from "@/components/consent";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

async function getData(): Promise<any> {
  const query = `*[_type == "consentPage"][0]{
  ...,
  label,
  title,
  websiteUrl,
  operatorName,
  revocationEmail,
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

export default async function ConsentPage() {
  const data: any = await getData();

  return (
    <>
      <Header data={data.headerConfig} />

      <Consent data={data} />
    </>
  );
}
