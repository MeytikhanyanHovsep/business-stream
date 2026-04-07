import { defineField, defineType } from "sanity";

export default defineType({
  name: "hero",
  title: "Главный экран",
  type: "document",
  fields: [
    defineField({
      name: "titleLine1",
      title: "Заголовок (Строка 1)",
      type: "string",
      initialValue: "Видеосъемка мероприятий",
    }),
    defineField({
      name: "titleLine2",
      title: "Заголовок (Строка 2)",
      description:
        "Используйте ' - ' для вставки длинного тире, например: 'и онлайн - трансляции'",
      type: "string",
      initialValue: "и онлайн - трансляции",
    }),
    defineField({
      name: "subtitle",
      title: "Подзаголовок",
      type: "string",
      initialValue: "Reels-ролик с вашего события через 48 часов!",
    }),
    defineField({
      name: "video",
      title: "Видео фон (MP4)",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
});
