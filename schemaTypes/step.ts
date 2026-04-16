import { defineField, defineType } from "sanity";

export const processSection = defineType({
  name: "processSection",
  title: "Настройки секции Процесс",
  type: "object",
  fields: [
    defineField({
      name: "sectionIndex",
      title: "Индекс",
      type: "string",
      initialValue: "[07] ",
    }),
    defineField({
      name: "sectionTitle",
      title: "Заголовок",
      type: "string",
      initialValue: "Процесс и гарантии",
    }),
    defineField({
      name: "mainTitle",
      title: "Главный заголовок",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "stepsList",
      title: "Список шагов",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "step" }],
        },
      ],
      description: "Выберите существующие шаги процесса",
    }),
  ],
});

export const step = defineType({
  name: "step",
  title: "Процесс (шаг)",
  type: "document", // Оставляем документом, чтобы сохранить текущие данные
  fields: [
    defineField({
      name: "stepNumber",
      title: "Номер шага (1-4)",
      type: "number",
      description:
        "Укажите 1, 2, 3 или 4, чтобы привязать текст к нужной иконке",
    }),
    defineField({
      name: "icon",
      title: "Иконка",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
    }),
  ],
});
