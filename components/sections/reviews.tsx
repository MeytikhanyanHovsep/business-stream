"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { createClient } from "next-sanity";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Title from "../ui/title";

interface ReviewData {
  id: string; // Изменено на string для Sanity _id
  companyImg?: string;
  text?: string;
  authorName?: string;
  authorDate?: string;
  authorAvatar?: string;
  videoSrc?: string;
  videoPrev: string;
}

interface ReviewsPageData {
  settings: {
    sectionIndex?: string;
    sectionTitle?: string;
    mainTitle?: string;
  };
  items: ReviewData[];
}

const BASE_OFFSET = 72;
const ITEM_WIDTH = 64;

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

export default function ReviewsSlider() {
  const [pageData, setPageData] = useState<ReviewsPageData | null>(null);

  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(
          `{
            "settings": *[_type == "reviewsSection"][0],
            "items": *[_type == "review"] | order(order asc) {
              "id": _id,
              "companyImg": companyImg.asset->url,
              text,
              authorName,
              authorDate,
              "authorAvatar": authorAvatar.asset->url,
              "videoSrc": videoSrc.asset->url,
              "videoPrev": videoPrev.asset->url
            }
          }`,
        );
        setPageData(res);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!pageData || pageData.items.length === 0) return null;

  const { settings, items } = pageData;
  const TOTAL = items.length;
  const counter = BASE_OFFSET + activeIndex;

  const handlePlayPause = async (id: string) => {
    const video = videoRefs.current.get(id);
    if (!video) return;
    try {
      if (playingVideoId === id) {
        video.pause();
        setPlayingVideoId(null);
      } else {
        if (playingVideoId !== null) {
          videoRefs.current.get(playingVideoId)?.pause();
        }
        setPlayingVideoId(id);
        await video.play();
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        console.error("Playback error:", error);
      }
    }
  };

  const stopAllVideos = () => {
    if (playingVideoId !== null) {
      const video = videoRefs.current.get(playingVideoId);
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setPlayingVideoId(null);
    }
  };

  return (
    <section
      id="reviews"
      className="container pt-[247px] max-lg:pt-[82px] overflow-hidden"
    >
      <Title
        gap={35}
        title={settings?.sectionTitle || "отзывы"}
        index={settings?.sectionIndex ? settings.sectionIndex : "[07] "}
      >
        {settings?.mainTitle ||
          "Нам доверяют события, где важны эмоции и репутация"}
      </Title>

      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={25}
          breakpoints={{
            1200: {
              spaceBetween: 35,
              slidesPerView: 3,
            },
          }}
          loop={true}
          className="w-full"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            stopAllVideos();
          }}
        >
          {items.map((review, index) => (
            <SwiperSlide
              key={review.id}
              className="h-auto! flex perspective-[1000px]"
            >
              <motion.div
                className="relative w-full h-full transform-3d cursor-pointer"
                initial={false}
                animate={{
                  rotateY: isMobile ? 180 : activeIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.6, bounce: 0 }}
                onClick={() =>
                  activeIndex === index && handlePlayPause(review.id)
                }
              >
                <div className="h-full! w-full border border-[#555555] pt-[34px] pl-[30px] pb-[60px] pr-[53px] gap-[60px] max-md:gap-10 max-md:p-5 flex flex-col justify-start bg-[#0a0a0a] backface-hidden">
                  <Image
                    width={95}
                    height={60}
                    src={review.companyImg || ""}
                    alt="company"
                    className="w-[95px] h-min object-contain"
                  />
                  <p className="text-[#a1a1a1] whitespace-pre-wrap text-sm md:text-base leading-[131%] tracking-[-3%]">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-[34px] h-[34px] rounded-full bg-gray-800 overflow-hidden shrink-0">
                      <Image
                        width={40}
                        height={40}
                        src={review.authorAvatar || ""}
                        alt={review.authorName || ""}
                        className="w-[34px] h-[34px] object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white text-[15px] tracking-[-3%] leading-[131%]">
                        {review.authorName}
                      </div>
                      <div className="text-white/54 text-[13px] tracking-[-3%] leading-[131%] mt-0.5">
                        {review.authorDate}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 w-full h-full md:min-h-[534px] overflow-hidden group backface-hidden transform-[rotateY(180deg)]">
                  <div className="flex items-center h-full w-full relative justify-center">
                    <Image
                      alt="Bg"
                      width={500}
                      height={500}
                      className="absolute -z-1 w-full h-full blur-[70px]"
                      src={review.videoPrev}
                    />
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current.set(review.id, el);
                        else videoRefs.current.delete(review.id);
                      }}
                      className="absolute inset-0 w-full h-full object-contain"
                      preload="metadata"
                      playsInline
                      loop
                      onEnded={() => setPlayingVideoId(null)}
                    >
                      <source src={review.videoSrc} type="video/mp4" />
                    </video>
                    <div
                      className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${playingVideoId === review.id ? "opacity-0" : "opacity-100"}`}
                    />
                    <div
                      className={`relative mt-[-20px] z-10 rounded-full flex items-center justify-center transition-all duration-300 ${playingVideoId === review.id ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100" : "opacity-100 scale-100 group-hover:scale-110"}`}
                    >
                      <div
                        className={`w-[93px] h-[93px] bg-white/45 backdrop-blur-[14px] rounded-full flex items-center justify-center ${playingVideoId === review.id ? "" : "pl-1"}`}
                      >
                        {playingVideoId === review.id ? (
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z"
                              fill="#fff"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path d="M8 5V19L19 12L8 5Z" fill="#fff" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-[22px] flex flex-col items-center gap-[31px] w-full">
        <div className="relative flex justify-center items-center h-[50px] w-full max-w-[448px] overflow-hidden select-none">
          <div className="absolute z-20 pointer-events-none top-[15px] left-1/2 -translate-x-1/2">
            <Image
              src="/images/icons/slider-bottom.svg"
              className="w-[20px] object-contain rotate-180"
              width={20}
              height={20}
              alt="marker"
            />
          </div>

          <div className="flex items-center justify-center w-full h-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] relative">
            <motion.div
              className="flex items-center absolute left-1/2"
              initial={false}
              animate={{ x: -(counter * ITEM_WIDTH) - 16 }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              {Array.from({ length: 150 }).map((_, i) => {
                const num = ((((i - BASE_OFFSET) % TOTAL) + TOTAL) % TOTAL) + 1;
                const isActive = activeIndex === num - 1;

                return (
                  <div
                    key={i}
                    className="flex items-center shrink-0"
                    style={{ width: `${ITEM_WIDTH}px` }}
                  >
                    <span
                      onClick={() => swiperRef.current?.slideToLoop(num - 1)}
                      className={`w-[32px] text-center cursor-pointer transition-all duration-500 font-medium tracking-[0.1em] ${
                        isActive
                          ? "text-white scale-20"
                          : "text-white text-[16px]"
                      }`}
                    >
                      {String(num).padStart(2, "0")}
                    </span>
                    <div className="flex-1 flex justify-center gap-[6px] px-1">
                      <span className="w-[1.5px] h-[1.5px] bg-white rounded-full"></span>
                      <span className="w-[1.5px] h-[1.5px] bg-white rounded-full"></span>
                      <span className="w-[1.5px] h-[1.5px] bg-white rounded-full"></span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-[56px] h-[56px] transition-colors hover:bg-[#252525] bg-[#141414] border border-white/5 grid place-items-center cursor-pointer"
          >
            <Image
              src="/images/icons/left-arrow.svg"
              width={18}
              height={18}
              alt="prev"
            />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-[56px] h-[56px] transition-colors hover:bg-[#252525] bg-[#141414] border border-white/5 grid place-items-center cursor-pointer"
          >
            <Image
              src="/images/icons/left-arrow.svg"
              className="rotate-180"
              width={18}
              height={18}
              alt="next"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
