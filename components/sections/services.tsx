"use client";

import { useState } from "react";
import Title from "../ui/title";
import Image from "next/image";

export default function Services() {
  const [activeService, setActiveService] = useState<number>(0);
  const services = [
    {
      title: "Онлайн-трансляции",
      desc: [
        "Вы в эфире без сбоев — под вашим брендом, на любой платформе.",
        "Многокамерная съёмка, графика, чат-модерация и резервный интернет-канал. Организуем онлайн-трансляцию под ключ — от форумов до концертов.",
      ],
      img: "1.jpg",
      tags: ["live-трансляции", "zoom", "онлайн-эфиры", "youtube", "teams"],
    },
    {
      title: "Видеосъёмка деловых мероприятий",
      desc: [
        "Видео, которое отражает масштаб и профессионализм вашего проекта.",
        "Снимаем конференции, презентации и круглые столы с акцентом на смысл и спикеров.",
        "Чистая запись речи, синхронизация с презентацией, монтаж отчётного ролика.",
      ],
      img: "2.jpg",
      tags: [
        "синхронный перевод",
        "интервью со спикерами",
        "live-монтаж",
        "репортажное видео",
      ],
    },
    {
      title: "Съёмка спортивных и культурных событий",
      desc: [
        "Передаём энергию и динамику соревнований, концертов и фестивалей.",
        "Работаем с дронами, slow motion и съёмкой в движении.",
        "Эффект присутствия.",
      ],
      img: "3.jpg",
      tags: ["ненавязчивая съемка", "цветокоррекция", "эфирная графика"],
    },
    {
      title: "Видеостудия",
      desc: [
        "Современная площадка для интервью, подкастов и стримов.",
        "Профессиональный свет, звук, телесуфлёр, зона ожидания и быстрый монтаж.",
        "Комфорт и качество для корпоративных и медийных съёмок.",
      ],
      img: "4.jpg",
      tags: [
        "комфортная площадка",
        "подкастная",
        "быстрый монтаж",
        "тех.помощь",
      ],
    },
    {
      title: "Нейропродакшн и AI-видео",
      desc: [
        "Используем AI и нейросети для ускоренного монтажа, автосубтитров, инфографики, стабилизации и адаптации контента.",
        "Создаем рекламные ролики и видеопрезентации.",
      ],
      img: "5.jpg",
      tags: [
        "AI-озвучка",
        "цифровое видео",
        "видеофутажи",
        "аватары",
        "маскоты",
      ],
    },
    {
      title: "Мэппинг и визуальные проекции для событий",
      desc: [
        "Создаём 3D-мэппинг и медиа-проекции для концертов, форумов и шоу.",
        "Разработка визуальной концепции, моделирование, отрисовка контента.",
        "Технологии, которые превращают событие в спектакль.",
      ],
      img: "6.jpg",
      tags: [
        "масштабность",
        "акцент на деталях",
        "световые шоу",
        "видеомэппинг",
      ],
    },
    {
      title: "Виртуальные выставки и 3D-стенды",
      desc: [
        "Создаём интерактивные онлайн-экспозиции для компаний и мероприятий.",
        "Реалистичные 3D-модели, встроенные видео, ссылки, анимации.",
        "Ваш проект можно показать онлайн — реалистично и эффектно.",
      ],
      img: "7.jpg",
      tags: ["3D-презентации", "цифровые стенды", "виртуальные мероприятия"],
    },
    {
      title: "Создание сайтов под мероприятия",
      desc: [
        "Разрабатываем сайты и лендинги для конференций, фестивалей и трансляций.",
        "Регистрация участников, программа, интеграция с CRM и онлайн-эфир.",
        "Удобная площадка для зрителей и организаторов — под ключ.",
      ],
      img: "8.jpg",
      tags: [
        "сайт с трансляцией",
        "лендинг конференции",
        "онлайн регистрация",
        "qr навигация",
      ],
    },
  ];

  const changeActive = (number: 1 | -1) => {
    if (number > 0) {
      if (services.length - activeService == 1) {
        return setActiveService(0);
      }
      return setActiveService(activeService + 1);
    }
    if (number < 0) {
      if (activeService == 0) {
        return setActiveService(services.length - 1);
      }
      return setActiveService(activeService - 1);
    }
  };

  return (
    <section
      id="services"
      className="md-container relative max-lg:pt-[112px] pt-[219px]"
    >
      <div className="max-md:px-[19px]">
        <Title gap={80} title="Услуги" index="[04] ">
          Услуги видеосъемки событий и трансляций <br />
          <span className="max-md:hidden">
            Выберите услугу, которая ближе <br /> к вашему формату события
          </span>
        </Title>
      </div>
      <div className="overflow-x-auto max-md:px-[19px]  services-box">
        <div className="flex min-w-[1499px] max-2xl:max-w-[1350px] max-2xl:min-w-[1349px] services-box max-w-[1500px] justify-stretch w-full">
          {services.map((e, i) => (
            <button
              onClick={() => setActiveService(i)}
              key={i}
              className={` pb-[19px] max-2xl:text-[15px]  text-[17px] transition-colors duration-300 tracking-[-3%] flex items-start   px-2 text-balance ${activeService == i ? "border-b-2 border-orange text-orange" : "border-b text-white/60 border-white/34 cursor-pointer"}`}
            >
              <span className="text-center max-2xl:text-left max-2xl:px-2">
                {e.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-[126px]  max-md:pt-[30px] max-md:gap-[25px] max-lg:grid-cols-2 max-md:grid-cols-1 gap-[80px] grid grid-cols-3 ">
        <div className="max-md:px-[19px] gap-[16px] max-md:order-2 flex">
          <div className="min-w-[11px] mt-[14px] max-md:h-[6px] max-md:min-w-[6px] max-md:mt-[9px] h-[11px] bg-orange rounded-full"></div>

          <h4 className="text-[37px] max-md:text-[27px] drop-shadow-[0_1.25px_9px_#ffffff78] leading-[106%] tracking-[-4%] text-balance">
            {services[activeService].title}
          </h4>
        </div>
        <div className="max-md:px-[19px] max-md:order-3">
          <ul className="max-w-[444px] list-inside mb-[69px] max-md:mb-[53px] flex flex-col gap-[20px] list-disc">
            {services[activeService].desc.map((e, i) => (
              <li
                className="text-[17px]! max-md:text-[15px]! text-white/77 leading-[131%]! tracking-[-3%]!"
                key={i}
              >
                {e}
              </li>
            ))}
          </ul>
          <div className="flex max-md:hidden gap-y-[9px] gap-x-[3px] flex-wrap">
            {services[activeService].tags.map((e, i) => (
              <div
                className="px-5 py-3 text-[14px] border whitespace-nowrap border-[#323232] rounded-full"
                key={i}
              >
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className="max-md:order-1 relative">
          <div className="flex gap-y-[6px] px-[17px] pb-[13px] md:hidden absolute bottom-0 left-0 w-full gap-x-[4px] flex-wrap">
            {services[activeService].tags.map((e, i) => (
              <div
                className="px-[14px] py-[9px] text-[14px] max-md:text-[13px] whitespace-nowrap bg-black/31 backdrop-blur-[51px] rounded-full"
                key={i}
              >
                {e}
              </div>
            ))}
          </div>
          <Image
            height={400}
            width={500}
            className="h-[337px] max-md:h-[295px] max-md:w-full object-cover"
            src={`/images/services/${services[activeService].img}`}
            alt="img"
          />
        </div>
      </div>
      <div className="md:hidden w-full grid grid-cols-2 gap-[6px]">
        <div
          onClick={() => changeActive(-1)}
          className="bg-[#1B1B1B] w-full pr-[41px] flex justify-end items-center h-[53px]"
        >
          <div className="mask-[url('/images/icons/left-arrow.svg')] mask-center  mask-contain mask-no-repeat bg-orange w-6 h-6" />
        </div>
        <div
          onClick={() => changeActive(1)}
          className="bg-[#1B1B1B] w-full pl-[41px] flex items-center h-[53px]"
        >
          <div className="mask-[url('/images/icons/left-arrow.svg')] mask-center rotate-180 mask-contain mask-no-repeat bg-orange w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
