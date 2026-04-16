import { defineField, defineType } from "sanity";

export const modalContact = defineType({
  name: "modalContact",
  title: "Contact Modal",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      initialValue: "Связаться с нами",
    }),
    defineField({
      name: "subtitle",
      title: "Подзаголовок",
      type: "text",
      initialValue: "Оставьте заявку, и мы перезвоним вам",
    }),
    defineField({
      name: "fioLabel",
      title: "Лейбл ФИО",
      type: "string",
      initialValue: "ФИО",
    }),
    defineField({
      name: "fioPlaceholder",
      title: "Плейсхолдер ФИО",
      type: "string",
      initialValue: "Иванов Иван Иванович",
    }),
    defineField({
      name: "phoneLabel",
      title: "Лейбл Телефон",
      type: "string",
      initialValue: "Телефон",
    }),
    defineField({
      name: "emailLabel",
      title: "Лейбл Email",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Плейсхолдер Email",
      type: "string",
      initialValue: "example@mail.ru",
    }),
    defineField({
      name: "policyTextPart1",
      title: "Текст политики (часть 1)",
      type: "string",
      initialValue: "Нажимая «Связаться», вы соглашаетесь с ",
    }),
    defineField({
      name: "policyLinkText",
      title: "Текст ссылки на политику",
      type: "string",
      initialValue: "политикой конфиденциальности",
    }),
    defineField({
      name: "policyTextPart2",
      title: "Текст политики (часть 2)",
      type: "string",
      initialValue: " и даёте ",
    }),
    defineField({
      name: "consentLinkText",
      title: "Текст ссылки на согласие",
      type: "string",
      initialValue: "согласие на обработку персональных данных",
    }),
    defineField({
      name: "buttonText",
      title: "Текст кнопки",
      type: "string",
      initialValue: "Связаться",
    }),
    defineField({
      name: "successTitle",
      title: "Заголовок успеха",
      type: "string",
      initialValue: "Спасибо!",
    }),
    defineField({
      name: "successSubtitle",
      title: "Текст успеха",
      type: "text",
      initialValue: "Мы свяжемся с вами в ближайшее время.",
    }),
  ],
});

export const modalDiscuss = defineType({
  name: "modalDiscuss",
  title: "Discuss Modal",
  type: "document",
  fields: [
    defineField({
      name: "tariffPrefix",
      title: "Префикс тарифа",
      type: "string",
      initialValue: "Тариф:",
    }),
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      initialValue: "Обсудить проект",
    }),
    defineField({
      name: "subtitle",
      title: "Подзаголовок",
      type: "text",
      initialValue:
        "Расскажите о вашем мероприятии — мы предложим оптимальное решение",
    }),
    defineField({
      name: "fioLabel",
      title: "Лейбл ФИО",
      type: "string",
      initialValue: "ФИО",
    }),
    defineField({
      name: "fioPlaceholder",
      title: "Плейсхолдер ФИО",
      type: "string",
      initialValue: "Иванов Иван Иванович",
    }),
    defineField({
      name: "emailLabel",
      title: "Лейбл Email",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Плейсхолдер Email",
      type: "string",
      initialValue: "example@mail.ru",
    }),
    defineField({
      name: "phoneLabel",
      title: "Лейбл Телефон",
      type: "string",
      initialValue: "Телефон",
    }),
    defineField({
      name: "descriptionLabel",
      title: "Лейбл Описание",
      type: "string",
      initialValue: "Описание проекта",
    }),
    defineField({
      name: "descriptionPlaceholder",
      title: "Плейсхолдер Описание",
      type: "text",
      initialValue:
        "Расскажите о вашем мероприятии: формат, место, дата, задачи...",
    }),
    defineField({
      name: "fileLabel",
      title: "Лейбл Файлы",
      type: "string",
      initialValue: "Техническое задание",
    }),
    defineField({
      name: "fileOptionalText",
      title: "Текст (необязательно)",
      type: "string",
      initialValue: "(необязательно)",
    }),
    defineField({
      name: "fileUploadText1",
      title: "Текст загрузки 1",
      type: "string",
      initialValue: "Перетащите файлы или",
    }),
    defineField({
      name: "fileUploadText2",
      title: "Текст загрузки 2 (ссылка)",
      type: "string",
      initialValue: "выберите",
    }),
    defineField({
      name: "fileSubtext",
      title: "Подтекст загрузки",
      type: "string",
      initialValue: "PDF, Word, Excel, изображения — до 20 МБ",
    }),
    defineField({
      name: "policyText1",
      title: "Текст политики 1",
      type: "string",
      initialValue: "Отправляя заявку, вы соглашаетесь с",
    }),
    defineField({
      name: "policyLink1",
      title: "Текст ссылки политики 1",
      type: "string",
      initialValue: "Политикой конфиденциальности",
    }),
    defineField({
      name: "policyText2",
      title: "Текст политики 2",
      type: "string",
      initialValue: "и",
    }),
    defineField({
      name: "policyLink2",
      title: "Текст ссылки политики 2",
      type: "string",
      initialValue: "Согласием на обработку персональных данных",
    }),
    defineField({
      name: "submitButtonText",
      title: "Текст кнопки отправки",
      type: "string",
      initialValue: "Отправить заявку",
    }),
    defineField({
      name: "successTitle",
      title: "Заголовок успеха",
      type: "string",
      initialValue: "Спасибо!",
    }),
    defineField({
      name: "successSubtitle",
      title: "Текст успеха",
      type: "text",
      initialValue: "Мы изучим ваш проект и свяжемся с вами в течение 2 часов.",
    }),
  ],
});

export const modalReels = defineType({
  name: "modalReels",
  title: "Reels Gift Modal",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      initialValue: "Получить Reels в подарок",
    }),
    defineField({
      name: "subtitle",
      title: "Подзаголовок",
      type: "text",
      initialValue:
        "Оставьте контакты — и мы пришлём Reels с вашего мероприятия в подарок",
    }),
    defineField({
      name: "fioLabel",
      title: "Лейбл ФИО",
      type: "string",
      initialValue: "ФИО",
    }),
    defineField({
      name: "fioPlaceholder",
      title: "Плейсхолдер ФИО",
      type: "string",
      initialValue: "Иванов Иван Иванович",
    }),
    defineField({
      name: "emailLabel",
      title: "Лейбл Email",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Плейсхолдер Email",
      type: "string",
      initialValue: "example@mail.ru",
    }),
    defineField({
      name: "phoneLabel",
      title: "Лейбл Телефон",
      type: "string",
      initialValue: "Телефон",
    }),
    defineField({
      name: "policyText1",
      title: "Текст политики 1",
      type: "string",
      initialValue: "Нажимая «Получить», вы соглашаетесь с",
    }),
    defineField({
      name: "policyLink1",
      title: "Текст ссылки политики 1",
      type: "string",
      initialValue: "политикой конфиденциальности",
    }),
    defineField({
      name: "policyText2",
      title: "Текст политики 2",
      type: "string",
      initialValue: "и даёте",
    }),
    defineField({
      name: "policyLink2",
      title: "Текст ссылки политики 2",
      type: "string",
      initialValue: "согласие на обработку персональных данных",
    }),
    defineField({
      name: "submitButtonText",
      title: "Текст кнопки",
      type: "string",
      initialValue: "Получить",
    }),
    defineField({
      name: "successTitle",
      title: "Заголовок успеха",
      type: "string",
      initialValue: "Спасибо за вашу заявку!",
    }),
    defineField({
      name: "successSubtitle",
      title: "Текст успеха",
      type: "text",
      initialValue: "Мы свяжемся с вами и пришлём Reels в подарок.",
    }),
  ],
});

export const modalAudit = defineType({
  name: "modalAudit",
  title: "Audit Modal",
  type: "document",
  fields: [
    defineField({
      name: "steps",
      title: "Шаги опроса",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Вопрос",
              type: "string",
            },
            {
              name: "options",
              title: "Варианты ответа",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
      initialValue: [
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
    }),
    defineField({
      name: "formTitle",
      title: "Заголовок формы",
      type: "string",
      initialValue: "Куда прислать результат аудита?",
    }),
    defineField({
      name: "formSubtitle",
      title: "Подзаголовок формы",
      type: "text",
      initialValue:
        "Наш специалист разберёт вашу ситуацию и свяжется в течение 2 часов",
    }),
    defineField({
      name: "fioLabel",
      title: "Лейбл ФИО",
      type: "string",
      initialValue: "ФИО",
    }),
    defineField({
      name: "fioPlaceholder",
      title: "Плейсхолдер ФИО",
      type: "string",
      initialValue: "Иванов Иван Иванович",
    }),
    defineField({
      name: "phoneLabel",
      title: "Лейбл Телефон",
      type: "string",
      initialValue: "Телефон",
    }),
    defineField({
      name: "emailLabel",
      title: "Лейбл Email",
      type: "string",
      initialValue: "Email",
    }),
    defineField({
      name: "emailPlaceholder",
      title: "Плейсхолдер Email",
      type: "string",
      initialValue: "example@mail.ru",
    }),
    defineField({
      name: "buttonText",
      title: "Текст кнопки отправки",
      type: "string",
      initialValue: "Получить аудит",
    }),
    defineField({
      name: "successTitle",
      title: "Заголовок успеха",
      type: "string",
      initialValue: "Спасибо!",
    }),
    defineField({
      name: "successSubtitle",
      title: "Текст успеха",
      type: "text",
      initialValue:
        "Наш специалист проведёт Live-аудит вашего мероприятия и свяжется с вами в течение 2 часов.",
    }),
  ],
});
