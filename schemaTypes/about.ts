import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "О компании",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Порядок",
      type: "number",
    }),
    defineField({
      name: "value",
      title: "Значение (например: 300+)",
      type: "string",
    }),
    defineField({
      name: "label",
      title: "Описание (Текст под числом)",
      type: "string",
      description: "Можно использовать <br /> для переноса строк",
    }),
  ],
});
