"use client";

import React from "react";
import Link from "next/link";

const Consent: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] text-white text-[16px] leading-[1.65] antialiased min-h-screen">
      <main className="max-w-[800px] mx-auto pt-[56px] px-6 pb-[80px]">
        <span className="block text-[rgba(255,255,255,0.38)] text-[13px] font-normal uppercase tracking-[0.08em] mb-5">
          Юридический документ
        </span>

        <h1 className="text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-3">
          Согласие на обработку персональных данных
        </h1>

        <p className="text-[rgba(255,255,255,0.5)] text-[15px] mb-[48px] pb-8 border-b border-[rgba(255,255,255,0.08)]">
          Настоящим, оставляя свои данные в формах обратной связи на сайте{" "}
          <strong className="font-medium text-white">
            http://bzstream-podcast.ru
          </strong>
          , я даю своё согласие{" "}
          <strong className="font-medium text-white">
            Алюшиной Ангелине Олеговне
          </strong>{" "}
          (далее — Оператор) на обработку моих персональных данных в
          соответствии с ФЗ № 152-ФЗ.
        </p>

        <div className="space-y-[14px] text-[rgba(255,255,255,0.72)]">
          <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium leading-[1.25] text-white mt-10 mb-[14px]">
            1. Перечень обрабатываемых данных
          </h2>
          <p>
            Я даю согласие на обработку следующих персональных данных, которые
            не являются специальными или биометрическими:
          </p>
          <ul className="list-disc pl-[1.4em] space-y-[6px]">
            <li>Фамилия, Имя, Отчество;</li>
            <li>Номер контактного телефона;</li>
            <li>Адрес электронной почты (e-mail);</li>
            <li>Информация о проекте или мероприятии, указанная в формах.</li>
          </ul>

          <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
            2. Цели обработки
          </h2>
          <p>
            Персональные данные обрабатываются с целью обеспечения коммуникации,
            записи на аудит, обсуждения деталей проектов, отправки подарочных
            материалов (Reels) и информирования об услугах студии.
          </p>

          <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
            3. Способы и сроки обработки
          </h2>
          <p>
            Согласие дается на совершение следующих действий: сбор, запись,
            систематизация, накопление, хранение, уточнение (обновление,
            изменение), извлечение, использование, передача, обезличивание,
            блокирование, удаление и уничтожение.
          </p>
          <p>
            Обработка осуществляется как с использованием средств автоматизации,
            так и без них. Настоящее согласие действует бессрочно с момента
            предоставления данных.
          </p>

          <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
            4. Отзыв согласия
          </h2>
          <p>
            Согласие может быть отозвано мной в любое время путем направления
            письменного уведомления на электронный адрес Оператора:{" "}
            <strong className="text-white">info@bzstream-studio.ru</strong>.
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
};

export default Consent;
