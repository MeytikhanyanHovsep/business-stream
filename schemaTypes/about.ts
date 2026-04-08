import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutSection",
  title: "О компании",
  type: "document",
  fields: [
    defineField({
      name: "sectionIndex",
      title: "Индекс секции",
      type: "string",
      initialValue: "[03] ",
    }),
    defineField({
      name: "sectionTitle",
      title: "Заголовок (маленький)",
      type: "string",
      initialValue: "О компании",
    }),
    defineField({
      name: "mainTitle",
      title: "Главный заголовок",
      type: "text",
      rows: 2,
      initialValue: "Опыт, подтверждённый\nрезультатами",
    }),
    defineField({
      name: "titleDescription",
      title: "Описание в заголовке",
      type: "text",
      rows: 2,
      initialValue:
        "Нас выбирают компании, фонды и организаторы, для которых\nважно не просто видео, а живое присутствие в кадре.",
    }),
    defineField({
      name: "items",
      title: "Карточки достижений",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "Значение (300+, 70%...)" },
            {
              name: "label",
              type: "text",
              title: "Описание (текст под числом)",
              rows: 3,
            },
            { name: "order", type: "number", title: "Порядок" },
          ],
        },
      ],
    }),
  ],
});
