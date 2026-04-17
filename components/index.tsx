import React from "react";
import { ReactLenis } from "lenis/react";
import { createClient } from "next-sanity";
import Modals from "@/components/modals";

type Props = {
  children: React.ReactNode;
};

async function getModalsData(): Promise<any> {
  const query = `{
    "contact": *[_type == "modalContact"][0],
    "discuss": *[_type == "modalDiscuss"][0],
    "reels": *[_type == "modalReels"][0],
    "audit": *[_type == "modalAudit"][0] {
      ...,
      "steps": steps[] {
        ...,
        "options": options[]
      }
    }
  }`;
  try {
    return await client.fetch(
      query,
      {},
      {
        next: { revalidate: 0 },
      },
    );
  } catch (error) {
    console.error("Sanity Modals Fetch Error:", error);
    return null;
  }
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

export default async function Components({ children }: Props) {
  const modalsData = await getModalsData();
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {children as any}
        <Modals data={modalsData} />
      </ReactLenis>
    </>
  );
}
