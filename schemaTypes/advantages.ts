import { defineField, defineType } from "sanity";

export default defineType({
  name: "advantagesSection",
  title: "Преимущества",
  type: "document",
  fields: [
    defineField({
      name: "sectionIndex",
      title: "Индекс секции",
      type: "string",
      initialValue: "[02] ",
    }),
    defineField({
      name: "sectionTitle",
      title: "Заголовок (маленький)",
      type: "string",
      initialValue: "Преимущества",
    }),
    defineField({
      name: "mainTitle",
      title: "Главный заголовок",
      type: "string",
    }),
    defineField({
      name: "titleDescription",
      title: "Описание в заголовке",
      type: "text",
    }),
    defineField({
      name: "leftTopText",
      title: "Текст сверху слева",
      type: "text",
    }),
    defineField({
      name: "rightTopText",
      title: "Текст сверху справа",
      type: "text",
    }),
    defineField({
      name: "items",
      title: "Список преимуществ (6 штук)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Заголовок" },
            { name: "desc", type: "text", title: "Описание" },
          ],
        },
      ],
    }),
  ],
});
