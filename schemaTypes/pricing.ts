import { defineField, defineType } from "sanity";

const pricing = defineType({
  name: "pricing",
  title: "Тарифы",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название тарифа",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Цена",
      type: "string",
    }),
    defineField({
      name: "term",
      title: "Срок выполнения",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Краткое описание",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Иконка тарифа (SVG)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "isPopular",
      title: "Популярный выбор",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "theme",
      title: "Светлая тема",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "mainServices",
      title: "Основные услуги (простой список)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "serviceSections",
      title: "Сложные секции услуг",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            defineField({
              name: "label",
              title: "Заголовок секции",
              type: "string",
            }),
            defineField({
              name: "items",
              title: "Пункты",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "simpleItem",
                  title: "Простая строка",
                  fields: [
                    defineField({
                      name: "text",
                      title: "Текст",
                      type: "string",
                    }),
                  ],
                },
                {
                  type: "object",
                  name: "complexItem",
                  title: "Пункт с подпунктами",
                  fields: [
                    defineField({
                      name: "subtitle",
                      title: "Подзаголовок",
                      type: "string",
                    }),
                    defineField({
                      name: "subitems",
                      title: "Список подпунктов",
                      type: "array",
                      of: [{ type: "string" }],
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "bonus",
      title: "Текст бонуса",
      type: "string",
    }),
    defineField({
      name: "footerNote",
      title: "Примечание внизу",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Порядок сортировки",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "По порядку",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});

export default pricing;
