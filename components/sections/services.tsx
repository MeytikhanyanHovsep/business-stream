"use client";

import { useState, useEffect } from "react";
import Title from "../ui/title";
import Image from "next/image";
import { createClient } from "next-sanity";
import imageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

interface ServiceData {
  title: string;
  desc: string[];
  img: SanityImageSource;
  tags: string[];
  order: number;
  imgColor: "light" | "dark";
}

interface ServicesPageData {
  settings: {
    sectionIndex?: string;
    sectionTitle?: string;
    mainTitle?: string;
    subTitle?: string;
  };
  services: ServiceData[];
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export default function Services() {
  const [data, setData] = useState<ServicesPageData | null>(null);
  const [activeService, setActiveService] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Запрос сразу и настроек, и всех услуг
        const result = await client.fetch(`{
          "settings": *[_type == "servicesSection"][0],
          "services": *[_type == "service"] | order(order asc)
        }`);
        setData(result);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const services = data?.services || [];
  const settings = data?.settings;

  const changeActive = (number: 1 | -1) => {
    if (services.length === 0) return;
    if (number > 0) {
      setActiveService((prev) => (prev + 1 >= services.length ? 0 : prev + 1));
    } else {
      setActiveService((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    }
  };

  if (loading || services.length === 0) return null;

  return (
    <section
      id="services"
      className="md-container relative max-lg:pt-[112px] pt-[219px]"
    >
      <div className="max-md:px-[19px]">
        <Title
          gap={80}
          title={settings?.sectionTitle || "Услуги"}
          index={settings?.sectionIndex || "[04] "}
        >
          <span style={{ whiteSpace: "pre-line" }}>
            {settings?.mainTitle || "Услуги видеосъемки событий и трансляций"}
          </span>
          <br />
          <span className="max-md:hidden opacity-56 font-normal text-[15px] leading-[133%] tracking-[-3%]">
            <span style={{ whiteSpace: "pre-line" }}>
              {settings?.subTitle ||
                "Выберите услугу, которая ближе к вашему формату события"}
            </span>
          </span>
        </Title>
      </div>

      {/* Навигация по услугам */}
      <div className="overflow-x-auto w-auto max-md:px-[19px] services-box">
        <div className="flex min-w-[1499px] max-2xl:max-w-[1350px] max-2xl:min-w-[1349px] services-box justify-stretch w-full">
          {services.map((e, i) => (
            <button
              onClick={() => setActiveService(i)}
              key={i}
              className={`pb-[19px] max-2xl:text-[15px] text-[17px] transition-colors duration-300 tracking-[-3%] flex items-start px-2 text-balance ${
                activeService === i
                  ? "border-b-2 border-orange text-orange"
                  : "border-b text-white/60 border-white/34 cursor-pointer"
              }`}
            >
              <span className="text-center max-2xl:text-left max-2xl:px-2">
                {e.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Контент активной услуги */}
      <div className="pt-[126px] max-md:pt-[30px] max-md:gap-[25px] max-lg:grid-cols-2 max-md:grid-cols-1 gap-[80px] grid grid-cols-3 ">
        <div className="max-md:px-[19px] gap-[16px] max-md:order-2 flex">
          <div className="min-w-[11px] mt-[14px] max-md:h-[6px] max-md:min-w-[6px] max-md:mt-[9px] h-[11px] bg-orange rounded-full"></div>
          <h4 className="text-[37px] max-md:text-[27px] drop-shadow-[0_1.25px_9px_#ffffff78] leading-[106%] tracking-[-4%] text-balance">
            {services[activeService].title}
          </h4>
        </div>

        <div className="max-md:px-[19px] max-md:order-3">
          <ul className="max-w-[444px] list-inside mb-[69px] max-md:mb-[53px] flex flex-col gap-[20px] list-disc">
            {services[activeService].desc?.map((item, idx) => (
              <li
                className="text-[17px]! max-md:text-[15px]! text-white/77 leading-[131%]! tracking-[-3%]!"
                key={idx}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex max-md:hidden gap-y-[9px] gap-x-[3px] flex-wrap">
            {services[activeService].tags?.map((tag, idx) => (
              <div
                className="px-5 py-3 text-[14px] border whitespace-nowrap border-[#323232] rounded-full "
                key={idx}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="max-md:order-1 relative">
          <div className="flex gap-y-[6px] px-[17px] pb-[13px] md:hidden absolute bottom-0 left-0 w-full gap-x-[4px] flex-wrap">
            {services[activeService].tags?.map((tag, idx) => (
              <div
                className={`px-[14px] py-[9px] text-[14px] max-md:text-[13px] whitespace-nowrap backdrop-blur-[51px] rounded-full ${
                  services[activeService].imgColor === "light"
                    ? "bg-black/41"
                    : "bg-white/21"
                }`}
                key={idx}
              >
                {tag}
              </div>
            ))}
          </div>
          <Image
            height={400}
            width={500}
            className="h-[337px] max-md:h-[295px] max-md:w-full object-cover"
            src={urlFor(services[activeService].img).url()}
            alt={services[activeService].title}
          />
        </div>
      </div>

      <div className="md:hidden w-full grid grid-cols-2 gap-[6px]">
        <div
          onClick={() => changeActive(-1)}
          className="bg-[#1B1B1B] w-full pr-[41px] flex justify-end items-center h-[53px]"
        >
          <div className="mask-[url('/images/icons/left-arrow.svg')] mask-center mask-contain mask-no-repeat bg-orange w-6 h-6" />
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
