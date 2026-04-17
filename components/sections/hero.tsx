"use client";
import React, { useEffect, useState } from "react";
import Button from "../ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Advantages from "./advantages";

type Props = {
  data: any;
  advantagesData: any;
};

export default function Hero({ data, advantagesData }: Props) {
  const [width, setWidth] = useState<number | null>(null);

  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], [-202, 1520]);
  const videoWidth = useTransform(
    scrollY,
    [0, 1100],
    [width ? width + "px" : "100%", "603px"],
  );
  const videoHeight = useTransform(scrollY, [0, 1000], ["1019px", "455px"]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: videoWidth,
          height: videoHeight,
          y: videoY,
          left: "50%",
          x: "-50%",
        }}
        className="absolute max-[1200px]:hidden! w-full will-change-transform top-0 z-0 object-cover pointer-events-auto "
      >
        <source
          className="w-full"
          src={data?.videoUrl || "/videos/hero-bg.mp4"}
          type="video/mp4"
        />
      </motion.video>
      <Image
        src="/images/hero-bg.png"
        width={1200}
        height={800}
        alt="hero-bg"
        className="absolute min-[1200px]:hidden! w-[calc(100%-16px)] h-[759px] left-1/2 -translate-x-1/2 top-[8px] z-0 object-cover pointer-events-auto"
      />

      <main
        id="hero"
        className="relative bg-linear-to-b from-black/50 via-black/50 to-black/0 z-10 w-full max-md:h-[759px] h-[817px]"
      >
        <div className="pt-[230px] h-full max-md:pt-[155px] container flex flex-col items-center">
          <h1 className="uppercase min-h-max text-center max-md:max-w-min scale-y-[1.6] tracking-[-2%] leading-[103%] text-[75px] max-2xl:text-[60px] max-lg:text-[45px] max-xs:text-[40px]! font-bebas text-white w-full flex flex-col">
            <span className="md:whitespace-nowrap">
              {data?.titleLine1 || "Видеосъемка мероприятий"}
            </span>
            <span className="md:whitespace-nowrap max-md:text-right">
              {data?.titleLine2 ? (
                <>
                  {data.titleLine2.split(" - ")[0]}{" "}
                  <span className="scale-y-[0.2] scale-x-[2]"> - </span>{" "}
                  {data.titleLine2.split(" - ")[1]}
                </>
              ) : (
                <>
                  и онлайн{" "}
                  <span className="scale-y-[0.2] scale-x-[2]"> - </span>{" "}
                  трансляции
                </>
              )}
            </span>
          </h1>
          <h2 className="tracking-[-4%] max-md:max-w-[270px] text-center text-white text-[21px] leading-[133%] mt-[50px]">
            {data?.subtitle || "Reels-ролик с вашего события через 48 часов!"}
          </h2>
          <div className="flex max-sm:w-full max-sm:flex-col gap-[10px] mt-[34px]">
            <Button modal="discuss" hasDetails={true} style="max-sm:min-w-full">
              {data?.heroButton || "Обсудить проект"}
            </Button>
            <Button
              modal="audit"
              type="transparent"
              style="w-[184px] max-sm:min-w-full"
            >
              {data?.heroButton2 || "Live-аудит"}
            </Button>
          </div>
        </div>
        <span className="min-h-full left-[50.8%] max-md:hidden top-0 -translate-x-1/2 w-px bg-white/11 absolute"></span>
        <div className="left-0 w-screen absolute max-md:-bottom-[160px] -bottom-[232px]">
          <div className="relative">
            <Image
              className="min-w-[465px] max-md:min-w-[307px] max-md:max-w-[307px] relative z-40 mx-auto object-contain"
              alt="camera"
              src="/images/camera.png"
              width={470}
              height={470}
            />
            <span className="max-md:hidden min-w-[200%] left-[51%] origin-center rotate-25 top-[30%] -translate-1/2 h-px bg-white/11 absolute"></span>
            <span className="max-md:hidden min-w-[200%] left-[51%] origin-center -rotate-25 top-[30%] -translate-1/2 h-px bg-white/11 absolute"></span>
          </div>
        </div>
      </main>
      <Advantages data={advantagesData} />
    </div>
  );
}
