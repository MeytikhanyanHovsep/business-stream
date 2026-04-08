import { defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "Настройки секции FAQ",
  type: "document",
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
  ],
});

export const faqItem = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
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
