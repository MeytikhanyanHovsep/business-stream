import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Услуга (карточка)",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Название услуги", type: "string" }),
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
    defineField({ name: "order", title: "Порядок", type: "number" }),
  ],
});

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Секция Услуги",
  type: "object",
  fields: [
    defineField({
      name: "sectionIndex",
      title: "Индекс",
      type: "string",
      initialValue: "[04] ",
    }),
    defineField({
      name: "sectionTitle",
      title: "Заголовок",
      type: "string",
      initialValue: "Услуги",
    }),
    defineField({
      name: "mainTitle",
      title: "Главный заголовок",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "subTitle",
      title: "Подзаголовок",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "servicesList",
      title: "Список выбранных услуг",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "service" }],
        },
      ],
      description: "Выберите существующие услуги из списка или создайте новые",
    }),
  ],
});
