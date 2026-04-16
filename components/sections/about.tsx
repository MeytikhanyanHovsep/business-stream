"use client";

import { useState, useEffect } from "react";
import Title from "../ui/title";
import { createClient } from "next-sanity";

interface AboutItem {
  value: string;
  label: string;
  order: number;
}

interface AboutSectionData {
  sectionIndex?: string;
  sectionTitle?: string;
  mainTitle?: string;
  titleDescription?: string;
  items?: AboutItem[];
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

type Props = {
  data: any;
};
const defaultItems: AboutItem[] = [
  {
    value: "300+",
    label: "СОБЫТИЙ REELS\nЧЕРЕЗ 48 ЧАСОВ",
    order: 1,
  },
  {
    value: "70%",
    label: "ПОВТОРНЫХ ОБРАЩЕНИЙ —\nПОКАЗАТЕЛЬ ДОВЕРИЯ И КАЧЕСТВА.",
    order: 2,
  },
  {
    value: "8+",
    label: "ЛЕТ ОПЫТА В СЪЁМКЕ\nИ ТРАНСЛЯЦИЯХ СОБЫТИЙ",
    order: 3,
  },
];

export default function About({ data }: Props) {
  const currentItems =
    data?.items && data.items.length > 0
      ? [...data.items].sort((a, b) => a.order - b.order)
      : defaultItems;

  return (
    <section id="about" className="container max-sm:px-0! ">
      <div className="relative pt-[286px] max-md:pt-[103px]">
        <div className="max-sm:px-[20px]">
          <Title
            description={
              data?.titleDescription ? (
                <span style={{ whiteSpace: "pre-line" }}>
                  {data.titleDescription}
                </span>
              ) : (
                <>
                  Нас выбирают компании, фонды и организаторы, для которых{" "}
                  <br /> важно не просто видео, а живое присутствие в кадре.
                </>
              )
            }
            title={data?.sectionTitle || "О компании"}
            index={data?.sectionIndex || "[03] "}
          >
            {data?.mainTitle ? (
              <span style={{ whiteSpace: "pre-line" }}>{data.mainTitle}</span>
            ) : (
              <>
                Опыт, подтверждённый <br /> результатами
              </>
            )}
          </Title>
        </div>

        <div className="relative border-2 max-md:border max-md:border-l-0 border-t-0 border-r-0 border-[#444444] grid grid-cols-3 max-lg:grid-cols-1">
          {currentItems.map((e, i) => (
            <div
              className=" border-t-2 -max-sm:mx-[20px] grid place-items-center border-orange md:border-r border-r-[#444] max-md:h-[260px] h-[348px] relative"
              key={i}
            >
              <div className="absolute z-1 h-[134px] top-0 bg-linear-to-b from-orange/35 to-orange/0 w-full "></div>
              <div className="items-start relative z-20 h-min max-lg:justify-start max-lg:ml-[15px] justify-center gap-[14px] max-md:gap-[10px] flex">
                <div className="bg-orange mt-[15px] max-md:w-[6px] max-md:h-[6px] max-md:mt-[9.5px] rounded-full h-[11px] w-[11px]" />
                <div className="flex gap-1 flex-col items-start">
                  <p className="font-neue font-medium text-[111px] max-xl:text-[70px] leading-[106%] tracking-[-3%]">
                    {e.value}
                  </p>
                  <p
                    className="opacity-69 max-md:text-[12px] uppercase text-balance text-[15px] leading-[131%] tracking-[-3%]"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {e.label}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex max-lg:hidden absolute bottom-[30px] left-0 flex-col gap-[20px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="block h-px w-[19px] bg-white/34" />
            ))}
          </div>
          <div className="flex max-lg:hidden absolute bottom-[30px] right-0 flex-col gap-[20px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="block h-px w-[19px] bg-white/34" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
