"use client";
import React, { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Button from "./ui/button";
import { usePathname } from "next/navigation";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: false,
});

interface FooterData {
  title?: string;
  button?: string;
  button2?: string;
  navTitle?: string;
  contactsTitle?: string;
  phone?: string;
  telegram?: string;
  email?: string;
  address?: string;
  copyright?: string;
  policy?: string;
  menu?: { label: string; target: string }[];
}

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await client.fetch(`*[_type == "footer"][0]`);
        setData(res);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      }
    };
    fetchFooter();
  }, []);

  const menu = data?.menu?.length
    ? data.menu
    : [
        { label: "Главная", target: "#home" },
        { label: "Преимущества", target: "#advantages" },
        { label: "О нас", target: "#about" },
        { label: "Тарифы", target: "#pricing" },
        { label: "Кейсы", target: "#cases" },
        { label: "Отзывы", target: "#reviews" },
        { label: "FAQ", target: "#faq" },
        { label: "Контакты", target: "#contacts" },
      ];

  const path = usePathname();
  const lenis = useLenis();

  const handleScroll = (target: string) => {
    lenis?.scrollTo(target, {
      offset: target == "#home" ? -100 : 150,
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  if (path != "/") return null;

  return (
    <footer
      id="contacts"
      className="container pb-[23px] mt-[159px] flex flex-col max-md:gap-[126px] max-md:mt-[82px] gap-[168px]"
    >
      <div className="grid grid-cols-2 gap-[40px] max-[1100px]:grid-cols-1">
        <div className="flex flex-col max gap-[50px] ">
          <h3 className="text-[35px] leading-[106%] max-md:text-[32px] tracking-[-3%] max-w-[540px]">
            {data?.title ||
              "Профессиональные трансляции и съёмка, которые работают на вас"}
          </h3>
          <div className="flex max-sm:flex-col gap-[10px]">
            <Button modal="discuss" hasDetails={true} type="white">
              {data?.button || "Обсудить проект"}
            </Button>
            <Button modal="reels" type="transparent">
              {data?.button2 || "Получить Reels в подарок"}
            </Button>
          </div>
        </div>
        <div className="flex max-2xl:gap-[100px] max-sm:gap-[40px] max-sm:justify-between gap-[238px]">
          <ul className="flex flex-col max-md:gap-[19px] gap-[11px]">
            <li className="mb-[13px] uppercase text-orange text-[15px] font-semibold">
              {data?.navTitle || "Навигация"}
            </li>
            {menu.map((e, i) => (
              <li key={i}>
                <button
                  className="text-[17px] max-md:opacity-62 max-sm:text-[14px] cursor-pointer tracking-[-3%] leading-[137%] uppercase"
                  onClick={() => handleScroll(e.target)}
                >
                  {e.label}
                </button>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col max-md:gap-[19px] gap-[11px]">
            <li className="mb-[13px] uppercase text-orange text-[15px] font-semibold">
              {data?.contactsTitle || "контакты"}
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              {data?.phone || "7 (911) 000-00-00"}
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <a href={data?.telegram || "#"}> telegram</a>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <a href={data?.email ? `mailto:${data.email}` : "#"}> email</a>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              {data?.address || "Санкт-Петербург, ул. Можайская 17"}
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-[20px] max-sm:gap-2 grid-cols-2 max-md:flex flex-col items-center">
        <p className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] tracking-[-3%] uppercase text-[15px]">
          {data?.copyright || "© 2026 bussines stream. Все права защищены"}
        </p>
        <a className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] underline tracking-[-3%] uppercase text-[15px]">
          {data?.policy || "политика конфиденциальности"}
        </a>
      </div>
    </footer>
  );
}
