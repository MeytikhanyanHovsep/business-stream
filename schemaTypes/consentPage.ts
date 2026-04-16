import { defineType, defineField } from "sanity";

export const consentPage = defineType({
  name: "consentPage",
  title: "Страница Согласия",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Верхний ярлык",
      type: "string",
      initialValue: "Юридический документ",
    }),
    defineField({
      name: "title",
      title: "Заголовок страницы",
      type: "string",
      initialValue: "Согласие на обработку персональных данных",
    }),
    defineField({
      name: "websiteUrl",
      title: "URL сайта (без http)",
      type: "string",
      initialValue: "bzstream-podcast.ru",
    }),
    defineField({
      name: "operatorName",
      title: "ФИО Оператора",
      type: "string",
      initialValue: "Алюшиной Ангелине Олеговне",
    }),
    defineField({
      name: "sections",
      title: "Секции документа",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Заголовок секции", type: "string" },
            {
              name: "content",
              title: "Содержание",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "revocationEmail",
      title: "Email для отзыва согласия",
      type: "string",
      initialValue: "info@bzstream-studio.ru",
    }),
    defineField({
      name: "headerConfig",
      title: "Конфигурация хедера для этой страницы",
      type: "reference",
      to: [{ type: "header" }],
    }),
  ],
});
