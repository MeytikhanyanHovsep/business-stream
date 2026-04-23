"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/button";
import { createClient } from "next-sanity";

interface MediaItem {
  id: number;
  src: string;
  width: string;
  height: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  zIndex: number;
}

type Props = {
  data: any;
};

export default function Quiz({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    isMobile ? [1, 1, 1, 1] : [1, 1, 1, 1.1],
  );

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      src: data?.imageUrls?.[0] || "/images/quiz/1.png",
      width: "w-40",
      height: "h-28",
      startX: -80,
      startY: -50,
      endX: -450,
      endY: 300,
      delay: 0,
      zIndex: 5,
    },
    {
      id: 2,
      src: data?.imageUrls?.[1] || "/images/quiz/2.png",
      width: "w-44",
      height: "h-32",
      startX: -120,
      startY: -80,
      endX: -580,
      endY: 10,
      delay: 0.08,
      zIndex: 3,
    },
    {
      id: 3,
      src: data?.imageUrls?.[2] || "/images/quiz/3.png",
      width: "w-36",
      height: "h-40",
      startX: 60,
      startY: -100,
      endX: 500,
      endY: -420,
      delay: 0.15,
      zIndex: 7,
    },
    {
      id: 4,
      src: data?.imageUrls?.[3] || "/images/quiz/4.png",
      width: "w-42",
      height: "h-30",
      startX: 90,
      startY: -60,
      endX: 200,
      endY: 420,
      delay: 0.05,
      zIndex: 4,
    },
    {
      id: 5,
      src: data?.imageUrls?.[4] || "/images/quiz/5.png",
      width: "w-38",
      height: "h-38",
      startX: 130,
      startY: -90,
      endX: 520,
      endY: -140,
      delay: 0.18,
      zIndex: 6,
    },
    {
      id: 6,
      src: data?.imageUrls?.[5] || "/images/quiz/6.png",
      width: "w-48",
      height: "h-32",
      startX: 0,
      startY: 70,
      endX: 20,
      endY: 550,
      delay: 0.1,
      zIndex: 2,
    },
    {
      id: 7,
      src: data?.imageUrls?.[6] || "/images/quiz/7.png",
      width: "w-40",
      height: "h-36",
      startX: -30,
      startY: -100,
      endX: -420,
      endY: -300,
      delay: 0.2,
      zIndex: 8,
    },
    {
      id: 8,
      src: data?.imageUrls?.[7] || "/images/quiz/8.png",
      width: "w-44",
      height: "h-28",
      startX: 80,
      startY: 30,
      endX: 200,
      endY: 200,
      delay: 0.16,
      zIndex: 4,
    },
    {
      id: 9,
      src: data?.imageUrls?.[8] || "/images/quiz/9.png",
      width: "w-36",
      height: "h-42",
      startX: -140,
      startY: 40,
      endX: -640,
      endY: 320,
      delay: 0.06,
      zIndex: 6,
    },
  ];

  return (
    <section ref={containerRef} className="relative max-md:h-screen h-[200vh]">
      <div className="sticky top-0 h-screen w-full  flex items-center justify-center">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none max-w-screen overflow-hidden">
          {mediaItems.map((item) => (
            <FloatingImage
              key={item.id}
              item={item}
              progress={scrollYProgress}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

        <motion.div
          style={{ scale: textScale }}
          className="relative z-20 flex flex-col items-center text-center px-10"
        >
          <h2 className="text-[53px] max-[1450px]:text-[40px] max-lg:text-[30px] font-medium text-white tracking-[-4%] text-balance  leading-[106%] mb-5 whitespace-pre-wrap">
            {data?.title ||
              "Не уверены, какой формат подойдёт?\nПройдите короткий квиз и получите расчёт стоимост"}
          </h2>

          <p className="text-white/78 text-[22px] leading-[106%] tracking-[-3%] mb-[34px]">
            {data?.subtitle || "И получите reels в подарок"}
          </p>

          <Button modal="audit" type="orange" style="w-[252px]" isSmall={true}>
            {data?.buttonText || "Пройти квиз"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingImage({
  item,
  progress,
  isMobile,
}: {
  item: MediaItem;
  progress: MotionValue<number>;
  isMobile: boolean;
}) {
  const delayedProgress = useTransform(
    progress,
    [item.delay, Math.min(1, item.delay + 0.8)],
    [0, 1],
  );

  const x = useTransform(
    delayedProgress,
    [0, 1],
    isMobile
      ? [(item.startX + item.endX) / 2, (item.startX + item.endX) / 2]
      : [item.startX, item.endX],
  );
  const y = useTransform(
    delayedProgress,
    [0, 1],
    isMobile
      ? [(item.startY + item.endY) / 2, (item.startY + item.endY) / 2]
      : [item.startY, item.endY],
  );

  const scale = useTransform(
    delayedProgress,
    [0, 1],
    isMobile ? [0.8, 0.8] : [0.4, 1.2],
  );

  const blur = useTransform(
    delayedProgress,
    [1, 0.5, 0.2, 0],
    isMobile ? ["0px", "0px", "0px", "0px"] : ["0px", "1px", "3px", "4px"],
  );

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        filter: useTransform(() => `blur(${blur.get()})`),
        zIndex: item.zIndex,
      }}
      className={`absolute ${item.width} ${item.height} max-md:scale-75`}
    >
      <Image
        src={item.src}
        alt=""
        width={400}
        height={400}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
}
