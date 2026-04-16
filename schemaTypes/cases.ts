import { defineField, defineType } from "sanity";

export const casesSection = defineType({
  name: "casesSection",
  title: "Настройки секции Кейсы",
  type: "object", // Теперь это объект для вставки в страницу
  fields: [
    defineField({
      name: "sectionIndex",
      title: "Индекс",
      type: "string",
      initialValue: "[06]",
    }),
    defineField({
      name: "sectionTitle",
      title: "Заголовок",
      type: "string",
      initialValue: "Кейсы",
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
    // Поле для выбора кейсов по ссылке
    defineField({
      name: "casesList",
      title: "Список выбранных кейсов",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "case" }],
        },
      ],
      description: "Выберите готовые кейсы из списка или создайте новые",
    }),
  ],
});

export const caseItem = defineType({
  name: "case",
  title: "Кейсы (контент)",
  type: "document", // Оставляем документом, чтобы данные сохранились в базе
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
      options: { accept: "video/*" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "previewImage",
      title: "Превью видео (Poster)",
      type: "image",
      options: {
        hotspot: true,
      },
      description:
        "Отображается до начала воспроизведения видео. Если не заполнено, будет показан первый кадр видео.",
    }),
    defineField({
      name: "order",
      title: "Порядок отображения",
      type: "number",
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
