"use client";

import React, { useState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";
import Link from "next/link";

const DiscussModal = () => {
  const { activeModal, tariffName, closeModal } = useModalStore();
  const [isPolicyChecked, setIsPolicyChecked] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fio: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    fio: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    if (activeModal === null) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fio: "", email: "", phone: "", description: "" });
        setErrors({ fio: false, email: false, phone: false });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeModal]);

  if (activeModal !== "discuss") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      fio: formData.fio.trim().length < 2,
      email: !formData.email.includes("@"),
      phone: formData.phone.trim().length < 10,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean) && isPolicyChecked) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
        />
        <div className="relative w-full max-w-[538px] bg-[#0D0E13] rounded-2xl border border-white/10 p-10 py-16 flex flex-col items-center text-center shadow-2xl">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-[#ffffffa6] hover:text-white cursor-pointer transition-colors p-1"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-[66px] h-[66px] bg-orange/10 rounded-full flex items-center justify-center mb-6 border border-orange/20">
            <svg width="24" height="18" viewBox="0 0 12 9" fill="none">
              <path
                d="M1 4L4.5 7.5L11 1"
                stroke="#FB4114"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-[24px] text-white mb-2">Спасибо!</h2>
          <p className="text-white/50 text-[14px]">
            Мы изучим ваш проект и свяжемся с вами в течение 2 часов.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={closeModal}
      />
      <div className="relative w-full max-w-[538px] bg-[#0D0E13] rounded-2xl border border-white/10 px-5 pb-6 pt-7 md:p-10 md:pb-9 shadow-2xl my-auto">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-[#ffffffa6] hover:text-white cursor-pointer transition-colors p-1"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="mb-7">
          {/* Блок тарифа (отображается только если передан tariffName) */}
          {tariffName && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange/30 mb-4">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="10" height="8" viewBox="0 0 12 9" fill="none">
                  <path
                    d="M1 4L4.5 7.5L11 1"
                    stroke="#FB4114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[10px] my-auto md:text-[11px] text-white uppercase tracking-wider">
                Тариф:{" "}
                <span className="text-orange  font-medium">{tariffName}</span>
              </span>
            </div>
          )}

          <h2 className="text-[20px] md:text-[24px] text-white mb-2 tracking-tight">
            Обсудить проект
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed">
            Расскажите о вашем мероприятии — мы предложим оптимальное решение
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              ФИО
            </label>
            <input
              type="text"
              placeholder="Иванов Иван Иванович"
              value={formData.fio}
              onChange={(e) =>
                setFormData({ ...formData, fio: e.target.value })
              }
              className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${errors.fio ? "border-[#FB4114]" : "border-white/5 focus:border-white"}`}
            />
          </div>

          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@mail.ru"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${errors.email ? "border-[#FB4114]" : "border-white/5 focus:border-white"}`}
            />
          </div>

          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              Телефон
            </label>
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${errors.phone ? "border-[#FB4114]" : "border-white/5 focus:border-white"}`}
            />
          </div>

          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              Описание проекта
            </label>
            <textarea
              placeholder="Расскажите о вашем мероприятии: формат, место, дата, задачи..."
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full bg-[#1c1c1f] border border-white/5 rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              Техническое задание{" "}
              <span className="opacity-40">(необязательно)</span>
            </label>
            <div className="w-full border-2 border-dashed border-white/10 rounded-[8px] p-6 flex flex-col items-center justify-center bg-[#1c1c1f]/30 cursor-pointer hover:border-white/20 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mb-2 text-white/40"
              >
                <path
                  d="M10 4V16M4 10H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-[12px] text-white/40 text-center">
                Перетащите файлы или{" "}
                <span className="text-[#FB4114] underline">выберите</span>
              </p>
              <p className="text-[10px] text-white/20 mt-1">
                PDF, Word, Excel, изображения — до 20 МБ
              </p>
            </div>
          </div>

          <div className="flex gap-3 pt-2 items-start">
            <div className="relative flex items-center justify-center mt-[2px]">
              <input
                type="checkbox"
                id="policy-discuss"
                checked={isPolicyChecked}
                onChange={() => setIsPolicyChecked(!isPolicyChecked)}
                className="peer h-5 w-5 shrink-0 appearance-none rounded border border-white/10 bg-[#1c1c1f] checked:border-[#FB4114] transition-all cursor-pointer"
              />
              <div className="absolute pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path
                    d="M1 4L4.5 7.5L11 1"
                    stroke="#FB4114"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <label
              htmlFor="policy-discuss"
              className="text-[11px] leading-[1.4] text-[#ffffff73] cursor-pointer select-none"
            >
              Отправляя заявку, вы соглашаетесь с{" "}
              <Link
                href="/privacy"
                className="underline hover:text-white cursor-pointer"
              >
                Политикой конфиденциальности
              </Link>{" "}
              и{" "}
              <Link
                href="/consent"
                className="underline hover:text-white cursor-pointer"
              >
                Согласием на обработку персональных данных
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black text-[15px] py-4 rounded-[7px] hover:bg-white/90 transition-all active:scale-[0.98] mt-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium"
            disabled={!isPolicyChecked}
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default DiscussModal;
