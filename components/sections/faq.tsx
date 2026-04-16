"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../ui/title";
import Image from "next/image";
import { createClient } from "next-sanity";

interface FaqItem {
  question: string;
  answer: string;
}

type Props = {
  data: any;
};

export default function Faq({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!data) return null;

  const { faqList } = data;

  return (
    <section id="faq" className="pt-[245px] max-lg:pt-[83px] container">
      <Title
        gap={20}
        title={data?.sectionTitle || "FAQ"}
        index={data?.sectionIndex || "[08] "}
      >
        {data?.mainTitle ||
          "Простые ответы на вопросы, которые задают наши клиенты"}
      </Title>
      <div className="flex flex-col gap-3">
        {faqList.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="flex flex-col  max-md:p-[20px_15_17px_18px] px-[26px] py-[23px] bg-[#161616]"
            >
              <div
                className="cursor-pointer relative max-[1200px]:gap-[30px] max-[1200px]:flex justify-between grid grid-cols-3 items-center"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-white/41 max-[950px]:hidden">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="col-span-2 max-md:text-[14px]">
                  {item.question}
                </h3>

                <div
                  className={`absolute max-[1200px]:relative transition-all duration-300 will-change-transform origin-center top-0 max-md:min-w-[25px] max-md:h-[25px] min-w-[29px] h-[29px] rounded-full border grid place-items-center right-[2px] ${
                    isOpen
                      ? "bg-white/10 rotate-45 border-white/16"
                      : "bg-orange/15  border-orange"
                  }`}
                >
                  <Image
                    src="/images/icons/plus.svg"
                    alt="+"
                    width={9}
                    height={9}
                    className="object-contain min-w-[9px] max-md:min-w-[7.7px]"
                  />
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="grid max-[1200px]:flex grid-cols-3">
                      <p className="pb-[20px] max-md:text-[14px] pt-[39px] col-start-2 ">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
