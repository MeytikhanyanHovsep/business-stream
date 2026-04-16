"use client";
import { PortableText } from "next-sanity";
import Link from "next/link";

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-[1.4em] space-y-[6px] mb-4">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
  },
};

type Props = {
  data: any;
};

export default function Consent({ data }: Props) {
  const {
    label = "Юридический документ",
    title = "Согласие на обработку персональных данных",
    websiteUrl = "bzstream-podcast.ru",
    operatorName = "Алюшиной Ангелине Олеговне",
    revocationEmail = "info@bzstream-studio.ru",
    sections = [],
  } = data || {};

  return (
    <div className="bg-[#0a0a0a]  text-white text-[16px] leading-[1.65] antialiased min-h-screen">
      <main className="max-w-[800px] pt-20 mx-auto  px-6 pb-[80px]">
        <span className="block text-[rgba(255,255,255,0.38)] text-[13px] font-normal uppercase tracking-[0.08em] mb-5">
          {label}
        </span>

        <h1 className="text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-3">
          {title}
        </h1>

        <p className="text-[rgba(255,255,255,0.5)] text-[15px] mb-[48px] pb-8 border-b border-[rgba(255,255,255,0.08)]">
          Настоящим, оставляя свои данные в формах обратной связи на сайте{" "}
          <strong className="font-medium text-white">
            http://{websiteUrl}
          </strong>
          , я даю своё согласие{" "}
          <strong className="font-medium text-white">{operatorName}</strong>{" "}
          (далее — Оператор) на обработку моих персональных данных в
          соответствии с ФЗ № 152-ФЗ.
        </p>

        <div className="space-y-[14px] text-[rgba(255,255,255,0.72)]">
          {sections &&
            sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium leading-[1.25] text-white mt-10 mb-[14px]">
                  {index + 1}. {section.heading}
                </h2>
                <PortableText
                  value={section.content}
                  components={portableTextComponents}
                />
              </div>
            ))}

          <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
            {sections ? sections.length + 1 : 1}. Отзыв согласия
          </h2>
          <p>
            Согласие может быть отозвано мной в любое время путем направления
            письменного уведомления на электронный адрес Оператора:{" "}
            <strong className="text-white">{revocationEmail}</strong>.
          </p>
          <p>
            В случае отзыва согласия Оператор прекращает обработку и уничтожает
            данные в течение 30 дней, если иное не предусмотрено законом.
          </p>

          <div className="bg-[rgba(251,65,20,0.07)] border-l-[3px] border-[rgba(251,65,20,0.5)] rounded-r-[6px] p-[14px_18px] my-10 text-[rgba(255,255,255,0.72)] text-[14px] leading-[1.6]">
            Подробная информация о принимаемых мерах защиты и порядке обработки
            данных содержится в документе{" "}
            <Link
              href="/privacy"
              className="text-[rgba(255,255,255,0.65)] underline underline-offset-[3px] hover:text-white transition-colors"
            >
              «Политика конфиденциальности»
            </Link>
            .
          </div>
        </div>
      </main>

      <footer className="border-t border-[rgba(255,255,255,0.07)] p-6 text-center text-[rgba(255,255,255,0.3)] text-[13px]">
        <p>
          © Business Stream. Все права защищены. &nbsp;|&nbsp;{" "}
          <Link
            href="/"
            className="text-[rgba(255,255,255,0.45)] no-underline hover:text-white transition-colors"
          >
            Главная
          </Link>{" "}
          &nbsp;|&nbsp;{" "}
          <Link
            href="/privacy"
            className="text-[rgba(255,255,255,0.45)] no-underline hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </p>
      </footer>
    </div>
  );
}
