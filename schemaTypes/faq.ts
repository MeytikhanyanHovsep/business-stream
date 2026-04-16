import { defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "Настройки секции FAQ",
  type: "object",
  fields: [
    defineField({
      name: "sectionIndex",
      title: "Индекс",
      type: "string",
      initialValue: "[08] ",
    }),
    defineField({
      name: "sectionTitle",
      title: "Заголовок",
      type: "string",
      initialValue: "FAQ",
    }),
    defineField({
      name: "mainTitle",
      title: "Главный заголовок",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "faqList",
      title: "Список вопросов",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "faq" }],
        },
      ],
      description: "Выберите существующие вопросы из списка",
    }),
  ],
});

export const faqItem = defineType({
  name: "faq",
  title: "FAQ (Вопрос-ответ)",
  type: "document", // Оставляем документом, чтобы данные сохранились
  fields: [
    defineField({
      name: "question",
      title: "Вопрос",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Ответ",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Порядок отображения",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "question",
    },
  },
});
