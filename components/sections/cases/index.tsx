"use client";

import Title from "../../ui/title";
import React, { useState, useEffect } from "react";
import VideoPlayer from "./videoPlayer";

const casesData = [
  {
    id: "01",
    customer: "Форум НКО «Территория идей»",
    task: "многокамерная съемка и Afterlife-ролики",
    videoSrc: "/videos/cases/1.mp4",
  },
  {
    id: "02",
    customer: "Форум НКО «Территория идей»",
    task: "многокамерная съемка и Afterlife-ролики",
    videoSrc: "/videos/cases/2.mp4",
  },
  {
    id: "03",
    customer: "Форум НКО «Территория идей»",
    task: "многокамерная съемка и Afterlife-ролики",
    videoSrc: "/videos/cases/3.mp4",
  },
  {
    id: "04",
    customer: "Форум НКО «Территория идей»",
    task: "многокамерная съемка и Afterlife-ролики",
    videoSrc: "/videos/cases/4.mp4",
  },
  {
    id: "05",
    customer: "Форум НКО «Территория идей»",
    task: "многокамерная съемка и Afterlife-ролики",
    videoSrc: "/videos/cases/5.mp4",
  },
  {
    id: "06",
    customer: "Форум НКО «Территория идей»",
    task: "многокамерная съемка и Afterlife-ролики",
    videoSrc: "/videos/cases/6.mp4",
  },
];

export default function Projects() {
  const [modalVideoSrc, setModalVideoSrc] = useState<string | null>(null);

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

  return (
    <>
      <section id="cases" className="container max-lg:pt-[50px] pt-[280px]">
        <Title
          gap={24}
          description={
            <>
              Снимаем эмоции, масштаб и человеческие истории. Работаем с PR- и
              маркетинг- <br /> отделами, берём на себя организацию видеосъемки
              и трансляций «под ключ»
            </>
          }
          title="Кейсы"
          index="[06]"
        >
          Кейсы видеосъёмки и онлайн- <br /> трансляций мероприятий
        </Title>
        <div className="grid grid-cols-1 md:mt-[-54px] max-md:gap-[37px] sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-21">
          {casesData.map((item) => (
            <div
              key={item.id}
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
                <span className="text-white/40 flex items-center gap-2 text-[15px] font-sans  leading-[133%] tracking-[-2%] max-md:absolute  top-[10px] right-[12px]">
                  {"[  "} <span> {item.id}</span> {"  ]"}
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
