import { defineField, defineType } from "sanity";

export const reviewsSection = defineType({
  name: "reviewsSection",
  title: "Настройки секции Отзывы",
  type: "object", // Теперь это объект, который можно добавить на страницу
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
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
      rows: 3,
    }),
    // Добавляем массив ссылок на отзывы
    defineField({
      name: "reviewsList",
      title: "Список выбранных отзывов",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "review" }],
        },
      ],
      description: "Выберите отзывы, которые должны отображаться в этой секции",
    }),
  ],
});

export const reviewItem = defineType({
  name: "review",
  title: "Отзыв (карточка)",
  type: "document", // Оставляем документом, чтобы данные не пропали и их можно было выбирать ссылкой
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
