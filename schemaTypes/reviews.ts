import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Отзывы",
  type: "document",
  fields: [
    defineField({
      name: "companyImg",
      title: "Логотип компании",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Текст отзыва ( пишите '\n\n' для расстояние)",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorName",
      title: "Имя автора",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorDate",
      title: "Дата отзыва",
      type: "string",
      description: "Например: 06.05.2025",
    }),
    defineField({
      name: "authorAvatar",
      title: "Аватар автора",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "videoSrc",
      title: "Видео отзыв (MP4)",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
    defineField({
      name: "videoPrev",
      title: "Превью видео (обложка/блюр)",
      type: "image",
      description: "Изображение, которое будет фоном за видео",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Порядок",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "authorName",
      media: "authorAvatar",
    },
  },
});
