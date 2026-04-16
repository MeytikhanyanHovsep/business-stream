"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import Title from "../ui/title";
import "swiper/css";
import "swiper/css/navigation";

const BASE_OFFSET = 72;
const ITEM_WIDTH = 64;

export default function Gallery() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "/images/hero-bg.png",
    "/images/hero-bg.png",
    "/images/hero-bg.png",
    "/images/hero-bg.png",
    "/images/hero-bg.png",
  ];

  const TOTAL = items.length;
  const counter = BASE_OFFSET + activeIndex;

  return (
    <section className="container pt-[247px] max-lg:pt-[82px]">
      <Title
        gap={24}
        description={
          <span style={{ whiteSpace: "pre-line" }}>
            Снимаем эмоции, масштаб и человеческие истории. Работаем с PR- и \n
            маркетинг- отделами, берём на себя организацию видеосъемки \n и
            трансляций «под ключ
          </span>
        }
        title="Кейсы"
        index="[06]"
      >
        <span style={{ whiteSpace: "pre-line" }}>
          Кейсы видеосъёмки и онлайн- трансляций мероприятий
        </span>
      </Title>
      <div className="w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          spaceBetween={25}
          breakpoints={{
            1200: {
              spaceBetween: 35,
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
          }}
          loop={true}
          className="w-full "
        >
          {items.map((e, i) => (
            <SwiperSlide key={i} className=" flex">
              <div>
                <Image
                  width={500}
                  height={500}
                  className="object-cover w-full h-[400px] max-h-[400px]"
                  alt="gallery-picture"
                  src="/images/hero-bg.png"
                />
              </div>
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
            type="button"
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
            type="button"
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
