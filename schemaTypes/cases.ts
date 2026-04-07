import { defineField, defineType } from "sanity";

export default defineType({
  name: "case",
  title: "Кейсы",
  type: "document",
  fields: [
    defineField({
      name: "customer",
      title: "Заказчик",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "task",
      title: "Задача",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "video",
      title: "Видео файл",
      type: "file",
      options: {
        accept: "video/*",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Порядок отображения",
      type: "number",
      description: "Используется для ручной сортировки (1, 2, 3...)",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "customer",
      subtitle: "task",
    },
  },
});
