"use client";
import React, { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import Button from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface ContactItem {
  label: string;
  link: string;
}

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
  addressurl?: string;
  copyright?: string;
  policy?: string;
  consent?: string;
  customContacts?: ContactItem[];
  menu?: { label: string; target: string }[];
}

interface FooterProps {
  data: FooterData | null;
}

export default function Footer({ data }: FooterProps) {
  const path = usePathname();
  const lenis = useLenis();

  const menu = data?.menu?.length
    ? data.menu
    : [
        { label: "Главная", target: "#hero" },
        { label: "Преимущества", target: "#advantages" },
        { label: "О нас", target: "#about" },
        { label: "Тарифы", target: "#pricing" },
        { label: "Кейсы", target: "#cases" },
        { label: "Отзывы", target: "#reviews" },
        { label: "FAQ", target: "#faq" },
        { label: "Контакты", target: "#contacts" },
      ];

  const handleScroll = (target: string) => {
    const targ = target.includes("#") ? target : "#" + target;
    lenis?.scrollTo(targ, {
      offset: targ === "#hero" ? -100 : 150,
      duration: 3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  if (!data) return null;

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
              <h2>
                <a
                  href={
                    data?.phone
                      ? `tel:${data.phone.replace(/[^0-9+]/g, "")}`
                      : "tel:+78126027083"
                  }
                >
                  {data?.phone || "+7 (812) 602-70-83"}
                </a>
              </h2>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <h2>
                <a
                  href={
                    data?.telegram ? data?.telegram : "https://t.me/Bzstream"
                  }
                >
                  {data?.telegram
                    ? data.telegram.replace(/^https?:\/\/t\.me\//, "")
                    : "Bzstream"}
                </a>
              </h2>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <h2>
                <a href={data?.email ? `mailto:${data.email}` : "#"}>
                  {" "}
                  {data?.email || "info@bzstream-studio.ru"}
                </a>
              </h2>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <h2>
                <a
                  href={
                    data?.addressurl
                      ? data.addressurl
                      : "https://yandex.com/maps/2/saint-petersburg/?ll=30.328146%2C59.915751&mode=whatshere&whatshere%5Bpoint%5D=30.326869%2C59.916392&whatshere%5Bzoom%5D=17.4&z=17.4&utm_source=share"
                  }
                >
                  {data?.address || "Санкт-Петербург, Можайская 17"}
                </a>
              </h2>
            </li>
            {data?.customContacts?.map((contact: ContactItem, idx: number) => (
              <li
                key={idx}
                className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase"
              >
                <h2>
                  <a
                    href={contact.link || "#"}
                    target={
                      contact.link?.startsWith("http") ? "_blank" : undefined
                    }
                  >
                    {contact.label}
                  </a>
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-[20px] max-sm:gap-2 grid-cols-2 max-md:flex flex-col">
        <p className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] tracking-[-3%] uppercase text-[15px]">
          {data?.copyright || "© 2026 bussines stream. Все права защищены"}
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/privacy"
            className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] underline tracking-[-3%] uppercase text-[15px]"
          >
            {data?.policy || "политика конфиденциальности"}
          </Link>
          <Link
            href="/consent"
            className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] underline tracking-[-3%] uppercase text-[15px]"
          >
            {data?.consent || "редактируйте пожалуйста через админку"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
