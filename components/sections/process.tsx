"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Title from "../ui/title";
import { createClient } from "next-sanity";

const staticIcons = [
  { icon: "branches.svg", width: 28 },
  { icon: "camera.svg", width: 42 },
  { icon: "video.svg", width: 38 },
  { icon: "edit.svg", width: 34 },
];

type Props = {
  data: any;
};

export default function Process({ data }: Props) {
  if (!data || data.stepsList.length === 0) return null;

  const { stepsList } = data;

  return (
    <section id="process" className="pt-[245px] max-lg:pt-[80px] container">
      <Title
        description={
          <span style={{ whiteSpace: "pre-line" }}>
            {data?.description ||
              `Всё прозрачно и под контролем: вы всегда \n знаете, что, когда и как мы делаем`}
          </span>
        }
        title={data?.sectionTitle || "Процесс и гарантии"}
        index={data?.sectionIndex || "[07] "}
      >
        <span style={{ whiteSpace: "pre-line" }}>
          {data?.mainTitle ||
            "Как проходит видеосъёмка и почему наши трансляции не срываются"}
        </span>
      </Title>

      <div className="max-sm:overflow-x-auto no-scrollbar">
        <div className="sm:mt-[150px]! gap-[30px] w-full grid max-lg:grid-cols-2 max-sm:grid-cols-4 max-sm:min-w-max max-lg:gap-y-[140px] max-sm:gap-[14px] grid-cols-4">
          {stepsList.map((e, i) => {
            const iconInfo = staticIcons[i] || staticIcons[0];
            const hasCustomIcon = !!e.icon;

            return (
              <div
                key={i}
                className="max-w-[295px] max-sm:min-w-[280px] max-sm:max-w-[280px] max-sm:h-[393px] pt-[53px] relative bg-black max-sm:border border-[#2D2D2D] max-sm:pt-[24px] max-sm:pb-[35px] max-sm:gap-[52px] max-sm:pl-[14px] max-sm:pr-[10px] flex flex-col gap-9"
              >
                <div className="text-[201px] max-sm:text-[15px] leading-[96%] text-white/9 top-[-127px] -z-10 absolute">
                  0{i + 1}
                </div>

                <div className="h-[42px] max-sm:h-[31px] flex items-center">
                  <Image
                    src={
                      hasCustomIcon
                        ? (e.icon as string)
                        : `/images/icons/${iconInfo.icon}`
                    }
                    height={hasCustomIcon ? 42 : iconInfo.width}
                    width={hasCustomIcon ? 42 : iconInfo.width}
                    alt="icon"
                    className={
                      hasCustomIcon ? "w-auto h-full object-contain" : ""
                    }
                  />
                </div>

                <h3 className="text-[21px] text-balance leading-[104%] tracking-[-3%]">
                  {e.title}
                </h3>
                <p className="text-[15px] mt-auto text-white/79 leading-[131%] tracking-[-3%]">
                  {e.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
