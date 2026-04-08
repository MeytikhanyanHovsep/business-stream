import { defineField, defineType } from "sanity";

export default defineType({
  name: "quiz",
  title: "Квиз (Центральная секция)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "subtitle",
      title: "Подзаголовок (Подарок)",
      type: "string",
    }),
    defineField({
      name: "buttonText",
      title: "Текст кнопки",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Изображения для фона (нужно 9 штук)",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
