"use client";

import React, { useState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Step {
  title: string;
  options: string[];
}

interface SanityAuditData {
  formspreeId?: string;
  steps?: Step[];
  formTitle?: string;
  formSubtitle?: string;
  fioLabel?: string;
  fioPlaceholder?: string;
  phoneLabel?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  buttonText?: string;
  successTitle?: string;
  successSubtitle?: string;
}

const defaultData: Required<SanityAuditData> = {
  formspreeId: "",
  steps: [
    {
      title: "Какой формат мероприятия?",
      options: [
        "Форум / Конференция",
        "Концерт / Шоу",
        "Корпоративное мероприятие",
        "Социальный проект / НКО",
      ],
    },
    {
      title: "Сколько человек ожидается?",
      options: [
        "До 100 человек",
        "100 — 500 человек",
        "500 — 2000 человек",
        "Более 2000 человек",
      ],
    },
    {
      title: "Что важнее всего для вас?",
      options: [
        "Онлайн-трансляция",
        "Запись для архива",
        "Reels / Shorts для соцсетей",
        "Всё вместе",
      ],
    },
    {
      title: "Когда планируется мероприятие?",
      options: [
        "В течение 2 недель",
        "Через 1 месяц",
        "Через 2–3 месяца",
        "Планируется заранее (3+ мес.)",
      ],
    },
  ],
  formTitle: "Куда прислать результат аудита?",
  formSubtitle:
    "Наш специалист разберёт вашу ситуацию и свяжется в течение 2 часов",
  fioLabel: "ФИО",
  fioPlaceholder: "Иванов Иван Иванович",
  phoneLabel: "Телефон",
  emailLabel: "Email",
  emailPlaceholder: "example@mail.ru",
  buttonText: "Получить аудит",
  successTitle: "Спасибо!",
  successSubtitle:
    "Наш специалист проведёт Live-аудит вашего мероприятия и свяжется с вами в течение 2 часов.",
};

export const AuditModal = ({
  sanityData,
}: {
  sanityData?: SanityAuditData;
}) => {
  const content = { ...defaultData, ...sanityData };
  const steps =
    content.steps && content.steps.length > 0
      ? content.steps
      : defaultData.steps;

  const { activeModal, closeModal } = useModalStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(steps.length).fill(""),
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ fio: "", phone: "", email: "" });
  const [errors, setErrors] = useState({
    fio: false,
    phone: false,
    email: false,
  });
  const [isPolicyChecked, setIsPolicyChecked] = useState(true);

  useEffect(() => {
    if (activeModal === null) {
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setAnswers(new Array(steps.length).fill(""));
        setIsSubmitted(false);
        setIsSubmitting(false);
        setFormData({ fio: "", phone: "", email: "" });
        setErrors({ fio: false, phone: false, email: false });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeModal, steps.length]);

  if (activeModal !== "audit") return null;

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = option;
    setAnswers(newAnswers);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      closeModal();
    }
  };

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
      setIsSubmitting(true);

      const payload = {
        answers: steps.map((step, index) => ({
          question: step.title,
          answer: answers[index],
        })),
        contact: formData,
      };

      try {
        const response = await fetch(`https://formspree.io/f/mgoroyez`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          setIsSubmitting(false);
        }
      } catch (error) {
        setIsSubmitting(false);
      }
    }
  };

  const progress = ((currentStep + 1) / (steps.length + 1)) * 100;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-500 flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          onClick={closeModal}
        />
        <div className="relative w-full max-w-[650px] bg-[#0D0E13] rounded-2xl border border-white/10 p-10 py-16 flex flex-col items-center text-center shadow-2xl">
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
                stroke="currentColor"
                className="text-orange"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="text-[32px] font-medium text-white mb-4">
            {content.successTitle}
          </h2>
          <p className="text-white/50 text-[16px] max-w-[400px] leading-relaxed">
            {content.successSubtitle}
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

        <div className="relative w-full max-w-[650px] bg-[#0D0E13] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div
            className="absolute top-0 left-0 h-[2px] bg-orange transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />

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

          <div className="p-6 md:p-10 pt-12">
            {currentStep < steps.length ? (
              <div>
                <span className="text-[12px] uppercase tracking-widest text-white/30 font-medium mb-4 block">
                  Шаг {currentStep + 1} из {steps.length}
                </span>
                <h2 className="text-[24px] md:text-[28px] text-white font-medium mb-8 tracking-tight">
                  {steps[currentStep].title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                  {steps[currentStep].options.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`group relative flex items-center p-4 rounded-xl border transition-all cursor-pointer select-none ${
                        answers[currentStep] === option
                          ? "border-orange bg-orange/5"
                          : "border-white/5 bg-[#1c1c1f]/50 hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 transition-colors ${
                          answers[currentStep] === option
                            ? "border-orange"
                            : "border-white/20"
                        }`}
                      >
                        {answers[currentStep] === option && (
                          <div className="w-2.5 h-2.5 rounded-full bg-orange" />
                        )}
                      </div>
                      <span
                        className={`text-[15px] transition-colors ${answers[currentStep] === option ? "text-white" : "text-white/60"}`}
                      >
                        {option}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-[24px] md:text-[28px] text-white font-medium mb-2 tracking-tight">
                  {content.formTitle}
                </h2>
                <p className="text-white/50 text-[14px] mb-8">
                  {content.formSubtitle}
                </p>

                <form className="space-y-5 mb-8" onSubmit={handleSubmit}>
                  <div className="space-y-[6px]">
                    <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                      {content.fioLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={content.fioPlaceholder}
                      value={formData.fio}
                      onChange={(e) =>
                        setFormData({ ...formData, fio: e.target.value })
                      }
                      className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${errors.fio ? "border-orange" : "border-white/5 focus:border-white"}`}
                    />
                    {errors.fio && (
                      <p className="text-orange text-[12px] ml-1">
                        Введите ваше ФИО
                      </p>
                    )}
                  </div>

                  <div className="space-y-[6px]">
                    <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                      {content.phoneLabel}
                    </label>
                    <div
                      className={`relative w-full border rounded-[8px] transition-colors ${errors.phone ? "border-orange" : "border-white/5 focus-within:border-white"}`}
                    >
                      <PhoneInput
                        country={"ru"}
                        value={formData.phone}
                        onChange={(phone) =>
                          setFormData({ ...formData, phone })
                        }
                        containerClass="w-full"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-orange text-[12px] ml-1">
                        Введите корректный номер телефона
                      </p>
                    )}
                  </div>

                  <div className="space-y-[6px]">
                    <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                      {content.emailLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={content.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${errors.email ? "border-orange" : "border-white/5 focus:border-white"}`}
                    />
                    {errors.email && (
                      <p className="text-orange text-[12px] ml-1">
                        Введите корректный Email
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2 items-start">
                    <div className="relative flex items-center justify-center mt-[2px]">
                      <input
                        type="checkbox"
                        id="policy-audit"
                        checked={isPolicyChecked}
                        onChange={() => setIsPolicyChecked(!isPolicyChecked)}
                        className="peer h-5 w-5 shrink-0 appearance-none rounded border border-white/10 bg-[#1c1c1f] checked:border-orange transition-all cursor-pointer"
                      />
                      <div className="absolute pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="none"
                        >
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="currentColor"
                            className="text-orange"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <label
                      htmlFor="policy-audit"
                      className="text-[11px] leading-[1.4] text-white/40 cursor-pointer select-none"
                    >
                      Нажимая «Получить аудит», вы соглашаетесь с{" "}
                      <span className="underline hover:text-white transition-colors">
                        политикой конфиденциальности
                      </span>{" "}
                      и даёте{" "}
                      <span className="underline hover:text-white transition-colors">
                        согласие на обработку персональных данных
                      </span>
                    </label>
                  </div>
                </form>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 mt-auto">
              <button
                onClick={prevStep}
                className="flex items-center text-white/40 hover:text-white transition-colors text-[15px] font-medium cursor-pointer"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mr-2 rotate-180"
                >
                  <path
                    d="M7 5L12 10L7 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Назад
              </button>

              {currentStep < steps.length ? (
                <button
                  onClick={nextStep}
                  disabled={!answers[currentStep]}
                  className="bg-white text-black px-8 py-3.5 rounded-lg font-medium text-[15px] hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex items-center"
                >
                  Далее
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M7 5L12 10L7 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!isPolicyChecked || isSubmitting}
                  className="bg-white text-black px-8 py-3.5 rounded-lg font-medium text-[15px] hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Отправка..." : content.buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditModal;
