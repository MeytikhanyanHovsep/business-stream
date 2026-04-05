"use client";
import Image from "next/image";
import Button from "../ui/button";
import Title from "../ui/title";
import { motion } from "framer-motion";
import { useState } from "react";

type PricingItem = {
  id: string;
  title: string;
  price: string;
  term: string;
  description?: string;
  isPopular?: boolean;
  mainServices?: string[];
  serviceSections?: {
    label: string;
    items: (string | { subtitle: string; subitems: string[] })[];
  }[];
  bonus?: string;
  footerNote?: string;
  theme: boolean;
  image?: string;
};

const pricingData: PricingItem[] = [
  {
    id: "live-story",
    title: "LIVE STORY",
    price: "от 50 000 ₽",
    term: "(срок 2-3 рабочих дня)",
    image: "/images/icons/live.svg",
    description:
      "Базовый пакет: видеосъемка + режиссёрский контроль и 10 коротких Reels с события",
    mainServices: [
      "Режиссерский план и раскадровка под короткие форматы на площадке",
      "2 камеры (общий и крупные планы)",
      "Монтаж 10 Reels 9:16 (до 30 сек)",
      "Цветокоррекция, музыка, саунд-дизайн",
      "Срок постсборки: 2-3 рабочих дня",
    ],

    theme: false,
  },
  {
    id: "afterlife",
    title: "AFTERLIFE",
    price: "от 125 000 ₽",
    term: "(срок 4-6 рабочих дней)",
    isPopular: true,
    image: "/images/group-images.png",

    description:
      "Расширенный пакет: видеосъемка + отчётный фильм и Reels после события",
    mainServices: [
      "Режиссерский план и раскадровка под короткие форматы на площадке",
      "2 камеры (общий и крупные планы)",
      "Монтаж отчётного ролика (2-3 мин)",
      "Фотоотчёт (до 30 обработанных кадров)",
      "Монтаж 15 Reels 9:16 (до 60 сек)",
      "Цветокоррекция, музыка, саунд-дизайн",
    ],
    bonus:
      "Передача всех материалов на жестком диске 1ТБ, хранение исходников на ЯндексДиске в течение 14 дней.",
    theme: true,
  },
  {
    id: "pulse",
    title: "PULSE",
    price: "от 240 000 ₽",
    term: "(срок 7-10 рабочих дней)",
    description:
      "Мобильная студия: съёмка, трансляция и интервью на площадке клиента",
    serviceSections: [
      {
        label: "Состав услуги:",
        items: [
          "Режиссёрский план в предпродакшене, выезд на скаутинг",
          {
            subtitle: "Мобильная студия:",
            subitems: ["3-4 кинокамеры", "2-3 радиомикрофона"],
          },
          {
            subtitle: "Телесуфлёр:",
            subitems: [
              "Освещение зоны интервью по всем правилам съемки",
              "Цветокоррекция, музыка, саунд-дизайн",
            ],
          },
        ],
      },
      {
        label: "Персонал:",
        items: [
          "оператор-постановщик",
          "оператора камер - 2 чел",
          "редактор материала",
          "режиссер-монтажа",
        ],
      },
      {
        label: "Формат:",
        items: [
          "Интервью, подкасты, медиа-зоны",
          "Бэкстейдж-видео с площадки",
          "Монтаж 15 Reels 9:16 (до 60 сек)",
          "Интервью и подкаст с мероприятия до 10 мин - 15 шт",
          "Сборка и настройка студии на вашей локации за 3 часа до начала мероприятия",
        ],
      },
      {
        label: "Форматы:",
        items: [
          "YouTube, Rutube",
          "VK, Max",
          "Дзен",
          "Корпоративные видео",
          "Внутренние коммуникации",
        ],
      },
    ],
    theme: false,
  },
  {
    id: "datalive",
    title: "DATALIVE",
    price: "от 580 000 ₽",
    term: "(срок 10-15 рабочих дней)",
    description:
      "Мобильная студия: съёмка, трансляция и интервью на площадке клиента. Премиум-пакет: аналитика, эффективность и PR-упаковка события",
    serviceSections: [
      {
        label: "Состав услуги:",
        items: [
          "Режиссёрский план в предпродакшене, сценарий, раскадровка и выезд на скаутинг",
          {
            subtitle: "Мобильная студия:",
            subitems: ["4-5 кинокамеры", "3-4 радиомикрофона"],
          },
          {
            subtitle: "Телесуфлёр:",
            subitems: [
              "Освещение зоны интервью по всем правилам съемки",
              "Цветокоррекция, музыка, саунд-дизайн",
            ],
          },
        ],
      },
      {
        label: "Пакет PR-материалов:",
        items: [
          "Тизеры, сторис",
          "Цитаты, карточки",
          "Графическое оформление видеоматериалов (титры, заставки, переходы)",
        ],
      },
      {
        label: "Формат:",
        items: [
          "Интервью, подкасты, медиа-зоны, корп. съемка",
          "Бэкстейдж-видео с площадки",
          "Монтаж отчётного ролика (2-3 мин)",
          "Монтаж 20 Reels (до 60 сек)",
          "Интервью и подкаст с мероприятия до 10 минут - 20 шт",
        ],
      },
      {
        label: "Отчёт по метрикам:",
        items: [
          "Просмотры",
          "Удержание",
          "Вовлечённость",
          "Гео и демо-аудитория",
        ],
      },
    ],
    footerNote:
      "Форматы: сайт, соцсети, PR-публикации, отчёты для партнёров и инвесторов",
    theme: false,
  },
];

export default function Pricing() {
  const [openService, setOpenService] = useState<null | number>(null);

  return (
    <section
      id="pricing"
      className="container relative lg:mt-[-50px] max-lg:pt-[79px] pt-[269px]"
    >
      <Title
        description={
          <>
            Стоимость зависит от длительности съемки, количества <br /> камер,
            типа мероприятия и состава съемочной группы. 
          </>
        }
        title="Тарифы"
        index="[05] "
      >
        Выбирайте формат под задачу
      </Title>
      <div className="grid md:mt-[-54px] max-md:grid-cols-1 max-md:gap-[20px] grid-cols-2 gap-[25px]">
        {pricingData.map((tariff, id) => (
          <div
            key={tariff.id}
            className={`pl-[58px] max-md:p-0! max-xl:px-4 max-xl:pt-[44px] max-xl:pb-[37px] pb-[51px] relative pr-[97px] pt-[73px]  border border-[#3D3D3D] overflow-hidden rounded-[9px] ${tariff.theme ? "bg-[url('/images/noise-bg.jpg')]" : "bg-[#151515]"}`}
          >
            <div className="max-md:px-4 max-md:pt-[44px] max-md:pb-[37px]">
              {tariff.image && (
                <Image
                  className="object-contain h-[58px] mb-[40px] max-xl:mb-[19px] max-xl:mt-[-26px] mt-[-33px] mr-auto w-min max-lg:h-[36px]"
                  src={tariff.image}
                  width={90}
                  height={60}
                  alt={tariff.title}
                />
              )}
              {tariff.isPopular && (
                <span className="bg-orange right-[45px] text-[#161616] pl-[28px] pr-[36px] pt-[10px] pb-[9px] top-0 max-md:text-[11px] max-md:px-[14px] max-md:py-[7px] max-md:right-[13px] text-[13px] tracking-[-3%] leading-[131%] font-medium rounded-b-[7px] top- absolute">
                  ПОПУЛЯРНЫЙ ВЫБОР
                </span>
              )}

              <div
                className={`pb-[34px] max-md:pb-[23px] flex flex-col gap-3 border-b ${tariff.theme ? "border-black/20 " : "border-white/20 "} max-md:mb-[16px] mb-[21px]`}
              >
                <h2
                  className={`${tariff.theme ? "text-dark" : "text-orange"} tracking-[-3%] leading-[106%] text-[41px] max-[420px]:text-[25px]! max-[1450px]:text-[35px] font-medium`}
                >
                  {tariff.title}
                </h2>
                <div className="flex items-end gap-[10px]">
                  <span
                    className={` ${tariff.theme ? "text-dark" : " "} tracking-[-3%] leading-[106%] text-[46px] max-[420px]:text-[25px]! font-medium max-[1450px]:text-[35px]`}
                  >
                    {tariff.price}
                  </span>
                  <span
                    className={` ${tariff.theme ? "text-black/42" : "text-white/33"} pb-[6px] text-[20px] tracking-[-3%] max-[420px]:text-[12px]! max-[1450px]:text-[15px] leading-[106%]`}
                  >
                    {tariff.term}
                  </span>
                </div>
              </div>

              {tariff.description && (
                <p
                  className={`text-balance max-w-4/5 max-md:max-w-full max-md:text-[15px]  tracking-[-3%] leading-[131%] text-[17px] ${tariff.theme ? "text-black/77" : "text-white/77"}`}
                >
                  {tariff.description}
                </p>
              )}

              <Button
                modal="discuss"
                tariffName={tariff.title}
                type="orange"
                style="w-full mb-[30px] max-lg:mb-[23px] mt-[21px]"
                isSmall={true}
              >
                Обсудить проект
              </Button>

              {tariff.mainServices && (
                <ul className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-6 gap-y-[15px] ">
                  {tariff.mainServices.map((service, index) => (
                    <li
                      key={index}
                      className={`${tariff.theme ? " text-black/77" : "  text-white/77"} flex items-start gap-[7.1px] tracking-[-3%] leading-[126%] text-[15px]`}
                    >
                      <div
                        className={`min-w-[15px] mt-px min-h-[15px] mask-[url('/images/icons/check.svg')] mask-contain mask-center ${tariff.theme ? "bg-black" : "bg-orange"}`}
                      ></div>
                      {service}
                    </li>
                  ))}
                </ul>
              )}

              {tariff.bonus && (
                <div className="mt-[28px] bg-white px-[23px] py-[10px] border-l-3 border-orange">
                  <p className="max-w-[410px] max-lg:text-[14px] text-dark/77 text-[15px] leading-[126%] tracking-[-3%] font-medium">
                    <span className="font-medium text-orange"> БОНУС: </span>{" "}
                    {tariff.bonus}
                  </p>
                </div>
              )}

              {tariff.serviceSections && (
                <div className="grid grid-cols-2 max-lg:grid-cols-1  gap-[30px]">
                  {tariff.serviceSections.map((section, idx) => (
                    <div
                      key={idx}
                      className={`${idx == 0 ? "" : "max-md:hidden"}`}
                    >
                      <h3
                        className={`${tariff.theme ? "text-dark" : "text-white"} font-medium text-[17px] mb-[15px] tracking-[-3%]`}
                      >
                        {section.label}
                      </h3>

                      <ul className="flex flex-col gap-x-10 gap-y-[15px]">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className={`${tariff.theme ? "text-black/77" : "text-white/77"} flex items-start gap-[7.1px] tracking-[-3%] leading-[126%] text-[15px]`}
                          >
                            {typeof item === "string" ? (
                              <>
                                <div
                                  className={`min-w-[15px] mt-px min-h-[15px] mask-[url('/images/icons/check.svg')] mask-contain mask-center ${tariff.theme ? "bg-black" : "bg-orange"}`}
                                />
                                {item}
                              </>
                            ) : (
                              <div className="flex flex-col gap-2 w-full">
                                <div className="flex items-start gap-[7.1px]">
                                  <div
                                    className={`min-w-[15px] mt-px min-h-[15px] mask-[url('/images/icons/check.svg')] mask-contain mask-center ${tariff.theme ? "bg-black" : "bg-orange"}`}
                                  />
                                  <p
                                    className={`${tariff.theme ? "text-black/77" : "text-white/77"} `}
                                  >
                                    {item.subtitle}
                                  </p>
                                </div>
                                <ul className="pl-[22.1px] flex flex-col gap-1 ">
                                  {item.subitems.map((sub, si) => (
                                    <li
                                      key={si}
                                      className={` ${tariff.theme ? "text-black/77" : "text-white/77"} list-disc list-inside`}
                                    >
                                      {sub}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              onClick={() => setOpenService(openService == id ? null : id)}
              className={`${openService == id ? "text-white/33 bg-[#212121]" : "bg-[#2D2D2D]"} h-[64px] flex text-[15px] -mb-px items-center px-[19px] transition-all duration-400 justify-between md:hidden ${tariff.serviceSections ? "" : "hidden"}`}
            >
              Смотреть все функции тарифа
              <div
                className={`w-[14px] h-[14px] bg-white mask-[url('/images/icons/plus.svg')] mask-center  mask-contain mask-no-repeat transition-all duration-400 ${openService == id ? "rotate-45" : ""}`}
              />
            </div>
            <motion.div
              animate={{
                height: openService === id ? "auto" : 0,
                opacity: openService === id ? 1 : 0,
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`md:hidden  bg-[#212121] overflow-hidden ${tariff.serviceSections ? "" : "hidden"}`}
            >
              <div className="px-4  pb-[37px]">
                {tariff.serviceSections && (
                  <div className="grid grid-cols-2 max-lg:grid-cols-1 mt-[16px] gap-[16px]">
                    {tariff.serviceSections.slice(1).map((section, idx) => (
                      <div key={idx}>
                        <h3
                          className={`${tariff.theme ? "text-dark" : "text-white"} font-medium text-[17px] mb-[15px] tracking-[-3%]`}
                        >
                          {section.label}
                        </h3>

                        <ul className="flex flex-col gap-x-10 gap-y-[15px]">
                          {section.items.map((item, i) => (
                            <li
                              key={i}
                              className={`${tariff.theme ? "text-black/77" : "text-white/77"} flex items-start gap-[7.1px] tracking-[-3%] leading-[126%] text-[15px]`}
                            >
                              {typeof item === "string" ? (
                                <>
                                  <div
                                    className={`min-w-[15px] mt-px min-h-[15px] mask-[url('/images/icons/check.svg')] mask-contain mask-center ${tariff.theme ? "bg-black" : "bg-orange"}`}
                                  />
                                  {item}
                                </>
                              ) : (
                                <div className="flex flex-col gap-2 w-full">
                                  <div className="flex items-start gap-[7.1px]">
                                    <div
                                      className={`min-w-[15px] mt-px min-h-[15px] mask-[url('/images/icons/check.svg')] mask-contain mask-center ${tariff.theme ? "bg-black" : "bg-orange"}`}
                                    />
                                    <p
                                      className={`${tariff.theme ? "text-black/77" : "text-white/77"} `}
                                    >
                                      {item.subtitle}
                                    </p>
                                  </div>
                                  <ul className="pl-[22.1px] flex flex-col gap-1 ">
                                    {item.subitems.map((sub, si) => (
                                      <li
                                        key={si}
                                        className={` ${tariff.theme ? "text-black/77" : "text-white/77"} list-disc list-inside`}
                                      >
                                        {sub}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                {tariff.footerNote && (
                  <div className="mt-[25px] text-[17px] mb-[-6px] tracking-[-3%] pt-[20px] border-t border-white/10">
                    <p
                      className={`${tariff.theme ? "text-black/77" : "text-white/77"} text-[14px] tracking-[-3%] leading-[126%]`}
                    >
                      <span className="text-white">
                        {tariff.footerNote.split(" ")[0]}
                      </span>{" "}
                      {tariff.footerNote.split(" ").slice(1).join(" ")}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
            {tariff.footerNote && (
              <div className=" max-md:hidden text-[17px] mb-[-6px] tracking-[-3%] pt-[20px] border-t border-white/10">
                <p
                  className={`${tariff.theme ? "text-black/77" : "text-white/77"} text-[14px] tracking-[-3%] leading-[126%]`}
                >
                  <span className="text-white">
                    {tariff.footerNote.split(" ")[0]}
                  </span>{" "}
                  {tariff.footerNote.split(" ").slice(1).join(" ")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <span className="absolute max-md:hidden w-[425px] aspect-square bg-white/29 rounded-full blur-[200px] top-[43px] left-[-220px]"></span>
    </section>
  );
}
