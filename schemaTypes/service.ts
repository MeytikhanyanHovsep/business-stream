import { defineField, defineType } from "sanity";

const service = defineType({
  name: "service",
  title: "Услуги",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Название услуги",
      type: "string",
    }),
    defineField({
      name: "desc",
      title: "Описание (список строк)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "img",
      title: "Изображение",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Теги",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "imgColor",
      title: "Цвет картинки",
      type: "string",
      options: {
        list: [
          { title: "Светлый (белый)", value: "light" },
          { title: "Темный (черный)", value: "dark" },
        ],
        layout: "radio",
      },
      initialValue: "light",
    }),
    defineField({
      name: "order",
      title: "Порядок (1, 2, 3...)",
      type: "number",
    }),
  ],
});

export default service;
