import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallerySection",
  title: "Секция Галерея",
  type: "object",
  fields: [
    defineField({ name: "indexStr", title: "Индекс", type: "string" }),
    defineField({ name: "title", title: "Заголовок", type: "string" }),
    defineField({ name: "subtitle", title: "Подзаголовок", type: "string" }),
    defineField({ name: "description", title: "Описание", type: "text" }),
    defineField({
      name: "images",
      title: "Изображения для слайдера",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});
