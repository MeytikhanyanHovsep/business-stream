"use client";

import Title from "../../ui/title";
import React, { useState, useEffect } from "react";
import VideoPlayer from "./videoPlayer";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

interface CaseItem {
  _id: string;
  customer: string;
  task: string;
  videoSrc: string;
}

interface CasesPageData {
  settings: {
    sectionIndex?: string;
    sectionTitle?: string;
    mainTitle?: string;
    description?: string;
  };
  items: CaseItem[];
}

export default function Projects() {
  const [data, setData] = useState<CasesPageData | null>(null);
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const result = await client.fetch(
          `{
            "settings": *[_type == "casesSection"][0],
            "items": *[_type == "case"] | order(order asc) {
              _id,
              customer,
              task,
              "videoSrc": video.asset->url
            }
          }`,
        );
        setData(result);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };

    fetchCases();
  }, []);

  useEffect(() => {
    if (modalVideoSrc) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalVideoSrc]);

  if (!data || data.items.length === 0) return null;

  const { settings, items } = data;

  return (
    <>
      <section id="cases" className="container max-lg:pt-[50px] pt-[280px]">
        <Title
          gap={24}
          description={
            <span style={{ whiteSpace: "pre-line" }}>
              {settings?.description ||
                `Снимаем эмоции, масштаб и человеческие истории. Работаем с PR- и \n маркетинг- отделами, берём на себя организацию видеосъемки \n и трансляций «под ключ»`}
            </span>
          }
          title={settings?.sectionTitle || "Кейсы"}
          index={settings?.sectionIndex || "[06]"}
        >
          <span style={{ whiteSpace: "pre-line" }}>
            {settings?.mainTitle ||
              "Кейсы видеосъёмки и онлайн- \n трансляций мероприятий"}
          </span>
        </Title>

        <div className="grid grid-cols-1 md:mt-[-54px] max-md:gap-[37px] sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-21">
          {items.map((item, index) => (
            <div
              key={item._id}
              className="group relative flex flex-col transition-all duration-500 ease-in-out cursor-pointer"
              onClick={() => setModalVideoSrc(item.videoSrc)}
            >
              <VideoPlayer src={item.videoSrc} />

              <div className="flex justify-between items-start mt-4 gap-4">
                <div className="flex flex-col gap-1.5 text-sm">
                  <p className="font-normal text-[17px] text-white">
                    Заказчик: {item.customer}
                  </p>
                  <p className="font-normal text-[15px] text-white/64 leading-[131%] tracking-[-3%] ">
                    Задача: {item.task}
                  </p>
                </div>
                <span className="text-white/40 flex items-center gap-2 text-[15px] font-sans leading-[133%] tracking-[-2%] max-md:absolute top-[10px] right-[12px]">
                  {"[  "} <span>{String(index + 1).padStart(2, "0")}</span>{" "}
                  {"  ]"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalVideoSrc && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black">
          <button
            onClick={() => setModalVideoSrc(null)}
            className="absolute top-6 right-6 z-[1000] p-3 bg-black/40 hover:bg-black/70 rounded-full text-white transition-colors backdrop-blur-sm"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <video
            src={modalVideoSrc}
            autoPlay
            controls
            className="w-full h-full object-cover"
            playsInline
          />
        </div>
      )}
    </>
  );
}
