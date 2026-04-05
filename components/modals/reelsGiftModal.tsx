"use client";

import React, { useState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";
import Link from "next/link";

const ReelsGiftModal = () => {
  const { activeModal, closeModal } = useModalStore();
  const [isPolicyChecked, setIsPolicyChecked] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fio: "", phone: "" });
  const [errors, setErrors] = useState({ fio: false, phone: false });

  useEffect(() => {
    if (activeModal === null) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fio: "", phone: "" });
        setErrors({ fio: false, phone: false });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeModal]);

  if (activeModal !== "reels") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fio: formData.fio.trim().length < 2,
      phone: formData.phone.trim().length < 10,
    };

    setErrors(newErrors);

    if (!newErrors.fio && !newErrors.phone && isPolicyChecked) {
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
            className="absolute top-6 right-6 text-[#ffffffa6] hover:text-white transition-colors p-1 cursor-pointer"
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

          <h2 className="text-[24px] font-semibold text-white mb-2">
            Спасибо за вашу заявку!
          </h2>
          <p className="text-white/50 text-[14px]">
            Мы свяжемся с вами и пришлём Reels в подарок.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={closeModal}
      />

      <div className="relative w-full max-w-[538px] bg-[#0D0E13] rounded-2xl border border-white/10 px-5 pb-6 pt-7 md:p-10 md:pb-9 shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-[#ffffffa6] hover:text-white transition-colors p-1 cursor-pointer"
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
          <h2 className="text-[20px] md:text-[24px] text-white mb-2 tracking-tight">
            Получить Reels в подарок
          </h2>
          <p className="text-white/50 text-[14px] leading-relaxed">
            Оставьте контакты — и мы пришлём Reels с вашего мероприятия в
            подарок
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              ФИО
            </label>
            <input
              type="text"
              placeholder="Иванов Иван Иванович"
              value={formData.fio}
              onChange={(e) => {
                setFormData({ ...formData, fio: e.target.value });
                if (errors.fio) setErrors({ ...errors, fio: false });
              }}
              className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${
                errors.fio
                  ? "border-orange"
                  : "border-white/5 focus:border-white"
              }`}
            />
            {errors.fio && (
              <p className="text-orange text-[12px] ml-1">Введите ваше ФИО</p>
            )}
          </div>

          <div className="space-y-[6px]">
            <label className="text-[12px] uppercase tracking-widest text-[#ffffffa6] font-medium ml-1">
              Телефон
            </label>
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: false });
              }}
              className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${
                errors.phone
                  ? "border-orange"
                  : "border-white/5 focus:border-white"
              }`}
            />
            {errors.phone && (
              <p className="text-orange text-[12px] ml-1">
                Введите корректный номер телефона
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-2 items-start">
            <div className="relative flex items-center justify-center mt-[2px]">
              <input
                type="checkbox"
                id="policy-reels"
                checked={isPolicyChecked}
                onChange={() => setIsPolicyChecked(!isPolicyChecked)}
                className="peer h-5 w-5 shrink-0 appearance-none rounded border border-white/10 bg-[#1c1c1f] checked:border-orange transition-all cursor-pointer"
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
              htmlFor="policy-reels"
              className="text-[11px] leading-[1.4] text-[#ffffff73] cursor-pointer select-none"
            >
              Нажимая «Получить», вы соглашаетесь с{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-white transition-colors cursor-pointer"
              >
                политикой конфиденциальности
              </Link>{" "}
              и даёте{" "}
              <Link
                href="/consent"
                className="underline hover:text-white transition-colors cursor-pointer"
              >
                согласие на обработку персональных данных
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black text-[15px] py-4 rounded-[7px] hover:bg-white/90 transition-all active:scale-[0.98] mt-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium"
            disabled={!isPolicyChecked}
          >
            Получить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReelsGiftModal;
