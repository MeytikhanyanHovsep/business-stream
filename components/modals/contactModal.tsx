"use client";

import React, { useState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactModal = ({ data }: { data: any }) => {
  const { activeModal, closeModal } = useModalStore();
  const [isPolicyChecked, setIsPolicyChecked] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fio: "", phone: "", email: "" });
  const [errors, setErrors] = useState({
    fio: false,
    phone: false,
    email: false,
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (activeModal === null) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fio: "", phone: "", email: "" });
        setErrors({ fio: false, phone: false, email: false });
        setIsSending(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeModal]);

  if (activeModal !== "contact") return null;

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fio: formData.fio.trim().length < 2,
      phone: formData.phone.replace(/\D/g, "").length < 8,
      email: !validateEmail(formData.email),
    };

    setErrors(newErrors);

    if (
      !newErrors.fio &&
      !newErrors.phone &&
      !newErrors.email &&
      isPolicyChecked
    ) {
      setIsSending(true);
      try {
        const response = await fetch(`https://formspree.io/f/mgoroyez`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            _subject: `Заявка на контакт: ${formData.fio}`,
            formType: "Контактная форма",
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSending(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-500 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
        />
        <div className="relative w-full max-w-[500px] bg-[#0D0E13] rounded-2xl border border-white/10 p-10 py-16 flex flex-col items-center text-center shadow-2xl">
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
          <h2 className="text-[32px] font-medium text-white mb-4">
            {data?.successTitle || "Спасибо!"}
          </h2>
          <p className="text-white/50 text-[16px] max-w-[400px] leading-relaxed">
            {data?.successSubtitle || "Мы свяжемся с вами в ближайшее время."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .react-tel-input .form-control {
          width: 100% !important;
          background: #1c1c1f !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 13px 16px 13px 48px !important;
          color: white !important;
          height: auto !important;
          font-family: inherit !important;
          font-size: 16px !important;
        }
        .react-tel-input .form-control:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        .react-tel-input .flag-dropdown {
          background: transparent !important;
          border: none !important;
          border-radius: 8px 0 0 8px !important;
        }
        .react-tel-input .selected-flag {
          background: transparent !important;
          padding: 0 0 0 12px !important;
          width: 40px !important;
        }
        .react-tel-input .selected-flag:hover,
        .react-tel-input .selected-flag:focus {
          background: transparent !important;
        }
        .react-tel-input .country-list {
          background: #1c1c1f !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 8px !important;
          color: white !important;
          margin-top: 4px !important;
        }
        .react-tel-input .country-list .country:hover,
        .react-tel-input .country-list .country.highlight {
          background: rgba(255, 255, 255, 0.05) !important;
        }
        .react-tel-input .country-list .search {
          background: #1c1c1f !important;
        }
        .react-tel-input .country-list .search-box {
          background: #1c1c1f !important;
          color: white !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>

      <div className="fixed inset-0 z-500 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
        />

        <div className="relative w-full max-w-[500px] bg-[#0D0E13] rounded-2xl border border-white/10 p-10 shadow-2xl overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-[#ffffffa6] hover:text-white cursor-pointer transition-colors p-1 z-10"
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

          <h2 className="text-[28px] text-white font-medium mb-2 tracking-tight">
            {data?.title || "Связаться с нами"}
          </h2>
          <p className="text-white/50 text-[14px] mb-8">
            {data?.subtitle || "Оставьте заявку, и мы перезвоним вам"}
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-[6px]">
              <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                {data?.fioLabel || "ФИО"}
              </label>
              <input
                type="text"
                placeholder={data?.fioPlaceholder || "Иванов Иван Иванович"}
                value={formData.fio}
                onChange={(e) =>
                  setFormData({ ...formData, fio: e.target.value })
                }
                className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${
                  errors.fio
                    ? "border-orange"
                    : "border-white/5 focus:border-white"
                }`}
              />
            </div>

            <div className="space-y-[6px]">
              <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                {data?.phoneLabel || "Телефон"}
              </label>
              <div
                className={`relative w-full border rounded-[8px] transition-colors ${errors.phone ? "border-orange" : "border-white/5 focus-within:border-white"}`}
              >
                <PhoneInput
                  country={"ru"}
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  containerClass="w-full"
                />
              </div>
            </div>

            <div className="space-y-[6px]">
              <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                {data?.emailLabel || "Email"}
              </label>
              <input
                type="email"
                placeholder={data?.emailPlaceholder || "example@mail.ru"}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-orange"
                    : "border-white/5 focus:border-white"
                }`}
              />
            </div>

            <div className="flex gap-3 pt-2 items-start">
              <div className="relative flex items-center justify-center mt-[2px]">
                <input
                  type="checkbox"
                  id="policy"
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
                htmlFor="policy"
                className="text-[11px] leading-[1.4] text-[#ffffff73] cursor-pointer select-none"
              >
                {data?.policyTextPart1 ||
                  "Нажимая «Связаться», вы соглашаетесь с "}
                <Link
                  href="/privacy"
                  className="underline hover:text-white transition-colors cursor-pointer"
                >
                  {data?.policyLinkText || "политикой конфиденциальности"}
                </Link>
                {data?.policyTextPart2 || " и даёте "}
                <Link
                  href="/consent"
                  className="underline hover:text-white transition-colors cursor-pointer"
                >
                  {data?.consentLinkText ||
                    "согласие на обработку персональных данных"}
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black text-[15px] py-4 rounded-[7px] hover:bg-white/90 transition-all active:scale-[0.98] mt-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium"
              disabled={!isPolicyChecked || isSending}
            >
              {isSending ? "Отправка..." : data?.buttonText || "Связаться"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
