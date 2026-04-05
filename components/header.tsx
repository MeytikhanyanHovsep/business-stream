"use client";
import Link from "next/link";
import { useLenis } from "lenis/react";
import Button from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Главная", target: "home" },
  { label: "Преимущества", target: "advantages" },
  { label: "О нас", target: "about" },
  { label: "Тарифы", target: "pricing" },
  { label: "Кейсы", target: "cases" },
  { label: "Отзывы", target: "reviews" },
  { label: "FAQ", target: "faq" },
  { label: "Контакты", target: "contacts" },
];

export default function Header() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const path = usePathname();
  const lenis = useLenis();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    menu.forEach((item) => {
      const element = document.getElementById(item.target);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  });

  const handleScroll = (target: string) => {
    lenis?.scrollTo("#" + target, {
      offset: target == "home" ? -100 : 150,
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return path == "/" ? (
    <>
      <header className="fixed z-200 container top-[23px] left-1/2  -translate-x-1/2">
        <div className="flex rounded-[12px] relative items-center bg-white/5 backdrop-blur-[48.8px] p-[7px] pl-4 max-sm:p-0 max-sm:pr-[3px] max-sm:bg-transparent max-sm:backdrop-blur-[0]  justify-between">
          <Link href="/" className="isolate">
            <Image
              src="/images/logo.png"
              className="object-contain min-w-[72px] max-w-[72px]"
              width={75}
              height={40}
              alt="Business Stream"
            />
          </Link>
          <nav className="min-[1150px]:absolute max-lg:hidden h-full  min-[1150px]:top-1/2 min-[1150px]:left-1/2 min-[1150px]:-translate-1/2">
            <ul className="flex gap-[50px] max-[1400px]:gap-10 max-[1110px]:gap-[20px] h-full max-xl:gap-[30px] items-center w-full">
              {menu.map((e, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleScroll(e.target)}
                    className={`${activeSection == e.target ? "text-white font-medium" : "text-white/62 font-normal"} whitespace-nowrap cursor-pointer tracking-[-3%] leading-[137%] text-[13px] uppercase`}
                  >
                    {e.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-[20px]">
            <button onClick={() => setMenuToggle(true)}>
              <Image
                src="/images/icons/menu.svg"
                className="object-contain lg:hidden"
                width={36}
                height={36}
                alt="="
              />
            </button>
            <Button modal="contact" style="max-sm:hidden" isSmall={true}>
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuToggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuToggle(false)}
            className="z-300 fixed top-0 left-0 h-screen w-screen backdrop-blur-[6px] bg-black/75"
          >
            <nav className="h-screen flex flex-col justify-between gap-[20px] w-[87%] py-[18px] pr-[21px] pl-[22px] ml-auto bg-[#151515]">
              <Image
                src="/images/icons/close.svg"
                width={30}
                height={30}
                alt="X"
                className="ml-auto"
              />
              <ul className="flex flex-col w-full gap-[22px]">
                {menu.map((e, i) => (
                  <li key={i} className="w-full">
                    <button
                      onClick={() => handleScroll(e.target)}
                      className={`${activeSection == e.target ? "text-white border-white" : "text-[#7F7F7F] border-white/9"} whitespace-nowrap cursor-pointer tracking-[-3%] leading-[137%] text-[17px] pb-[10px] text-left font-medium uppercase border-b w-full`}
                    >
                      {e.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="gap-[10px] flex flex-col">
                <Button
                  to="contacts"
                  hasDetails={true}
                  isSmall={true}
                  style="min-w-full"
                >
                  Обсудить проект
                </Button>
                <Button
                  to="contacts"
                  type="transparent"
                  isSmall={true}
                  style="min-w-full"
                >
                  Live-аудит
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  ) : (
    <header className="sticky top-0 z-10 bg-[rgba(10,10,10,0.92)] backdrop-blur-[16px] border-b border-[rgba(255,255,255,0.07)] py-[18px]">
      <div
        className="max-width-[800px] mx-auto px-6 flex items-center justify-between gap-4"
        style={{ maxWidth: "800px" }}
      >
        <Link
          href="/"
          className="flex items-center gap-[10px] no-underline text-white text-[15px] font-semibold tracking-[0.03em] uppercase opacity-85 hover:opacity-100 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt="Business Stream"
            width={72}
            height={30}
            className="h-[30px] w-auto mix-blend-screen"
          />
          Business Stream
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-[6px] text-[rgba(255,255,255,0.45)] text-[13px] font-normal no-underline hover:text-[rgba(255,255,255,0.85)] transition-colors"
        >
          <svg
            viewBox="0 0 14 14"
            className="w-[14px] h-[14px] stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round fill-none"
          >
            <path d="M9 2L4 7l5 5" />
          </svg>
          Вернуться на главную
        </Link>
      </div>
    </header>
  );
}
