import { defineField, defineType } from "sanity";

export default defineType({
  name: "secondHero",
  title: "Hero Секция",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Заголовок", type: "string" }),
    defineField({ name: "text", title: "Текст", type: "text" }),
    defineField({
      name: "bgImage",
      title: "Фоновое изображение",
      type: "image",
    }),
  ],
});
