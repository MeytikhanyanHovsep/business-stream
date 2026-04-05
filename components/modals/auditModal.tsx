"use client";

import React, { useState, useEffect } from "react";
import { useModalStore } from "@/store/useModalStore";

const steps = [
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
];

const AuditModal = () => {
  const { activeModal, closeModal } = useModalStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(steps.length).fill(""),
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ fio: "", phone: "" });
  const [errors, setErrors] = useState({ fio: false, phone: false });
  const [isPolicyChecked, setIsPolicyChecked] = useState(true);

  useEffect(() => {
    if (activeModal === null) {
      const timer = setTimeout(() => {
        setCurrentStep(0);
        setAnswers(new Array(steps.length).fill(""));
        setIsSubmitted(false);
        setFormData({ fio: "", phone: "" });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [activeModal]);

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

  const progress = ((currentStep + 1) / (steps.length + 1)) * 100;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
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
          <h2 className="text-[32px] font-medium text-white mb-4">Спасибо!</h2>
          <p className="text-white/50 text-[16px] max-w-[400px] leading-relaxed">
            Наш специалист проведёт Live-аудит вашего мероприятия и свяжется с
            вами в течение 2 часов.
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
                Куда прислать результат аудита?
              </h2>
              <p className="text-white/50 text-[14px] mb-8">
                Наш специалист разберёт вашу ситуацию и свяжется в течение 2
                часов
              </p>

              <form className="space-y-5 mb-8" onSubmit={handleSubmit}>
                <div className="space-y-[6px]">
                  <label className="text-[12px] uppercase tracking-widest text-white/40 font-medium ml-1">
                    ФИО
                  </label>
                  <input
                    type="text"
                    placeholder="Иванов Иван Иванович"
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
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full bg-[#1c1c1f] border rounded-[8px] px-4 py-[13px] text-white placeholder:text-white/20 focus:outline-none transition-colors ${errors.phone ? "border-orange" : "border-white/5 focus:border-white"}`}
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
                      id="policy-audit"
                      checked={isPolicyChecked}
                      onChange={() => setIsPolicyChecked(!isPolicyChecked)}
                      className="peer h-5 w-5 shrink-0 appearance-none rounded border border-white/10 bg-[#1c1c1f] checked:border-orange transition-all cursor-pointer"
                    />
                    <div className="absolute pointer-events-none text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
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
                disabled={!isPolicyChecked}
                className="bg-white text-black px-8 py-3.5 rounded-lg font-medium text-[15px] hover:bg-white/90 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                Получить аудит
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditModal;
