import { defineField, defineType } from "sanity";

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Настройки секции Отзывы",
  type: "document",
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
      initialValue: "отзывы",
    }),
    defineField({
      name: "mainTitle",
      title: "Главный заголовок",
      type: "text",
      rows: 2,
    }),
  ],
});

export const reviewItem = defineType({
  name: "review",
  title: "Отзывы (контент)",
  type: "document",
  fields: [
    defineField({
      name: "companyImg",
      title: "Логотип компании",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "text",
      title: "Текст отзыва",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "authorName",
      title: "Имя автора",
      type: "string",
    }),
    defineField({
      name: "authorDate",
      title: "Дата отзыва",
      type: "string",
    }),
    defineField({
      name: "authorAvatar",
      title: "Аватар автора",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "video",
      title: "Видео файл",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "videoPrev",
      title: "Превью видео",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Порядок",
      type: "number",
      initialValue: 0,
    }),
  ],
});
