"use client";
import { useLenis } from "lenis/react";
import Button from "./ui/button";

export default function Footer() {
  const menu = [
    { label: "Главная", target: "#home" },
    { label: "Преимущества", target: "#advantages" },
    { label: "О нас", target: "#about" },
    { label: "Тарифы", target: "#pricing" },
    { label: "Кейсы", target: "#cases" },
    { label: "Отзывы", target: "#reviews" },
    { label: "FAQ", target: "#faq" },
    { label: "Контакты", target: "#contacts" },
  ];

  const lenis = useLenis();

  const handleScroll = (target: string) => {
    lenis?.scrollTo(target, {
      offset: target == "#home" ? -100 : 150,
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <footer
      id="contacts"
      className="container pb-[23px] mt-[159px] flex flex-col max-md:gap-[126px] max-md:mt-[82px] gap-[168px]"
    >
      <div className="grid grid-cols-2 gap-[40px] max-[1100px]:grid-cols-1">
        <div className="flex flex-col max gap-[50px] ">
          <h3 className="text-[35px] leading-[106%] max-md:text-[32px] tracking-[-3%] max-w-[540px]">
            Профессиональные трансляции и съёмка, которые работают на вас
          </h3>
          <div className="flex max-sm:flex-col gap-[10px]">
            <Button modal="discuss" hasDetails={true} type="white">
              Обсудить проект
            </Button>
            <Button modal="reels" type="transparent">
              Получить Reels в подарок
            </Button>
          </div>
        </div>
        <div className="flex max-2xl:gap-[100px] max-sm:gap-[40px] max-sm:justify-between gap-[238px]">
          <ul className="flex flex-col max-md:gap-[19px] gap-[11px]">
            <li className="mb-[13px] uppercase text-orange text-[15px] font-semibold">
              Навигация
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
              контакты
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              7 (911) 000-00-00
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <a href="#"> telegram</a>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              <a href="#"> email</a>
            </li>
            <li className="text-[17px] max-md:opacity-62 max-sm:text-[14px] tracking-[-3%] leading-[137%] uppercase">
              Санкт-Петербург, ул. Можайская 17
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-[20px] max-sm:gap-2 grid-cols-2 max-md:flex flex-col items-center">
        <p className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] tracking-[-3%] uppercase text-[15px]">
          © 2026 bussines stream. Все права защищены
        </p>
        <a className="text-white/49 max-md:text-white/19 max-sm:text-[13px] leading-[137%] underline tracking-[-3%] uppercase text-[15px]">
          политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}
