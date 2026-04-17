import { defineField, defineType } from "sanity";

export default defineType({
  name: "secondAbout",
  title: "Секция about",
  type: "object",
  fields: [
    defineField({
      name: "indexStr",
      title: "Индекс (например [01])",
      type: "string",
    }),
    defineField({ name: "title", title: "Заголовок", type: "string" }),
    defineField({ name: "subtitle", title: "Подзаголовок", type: "string" }),
    defineField({ name: "description", title: "Описание", type: "text" }),
    defineField({
      name: "blockTitle",
      title: "Заголовок блока текста",
      type: "string",
    }),
    defineField({ name: "blockText", title: "Текст блока", type: "text" }),
    defineField({ name: "image", title: "Картинка", type: "image" }),
  ],
});
