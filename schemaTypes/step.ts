import { defineField, defineType } from "sanity";

export default defineType({
  name: "step",
  title: "Процесс",
  type: "document",
  fields: [
    defineField({
      name: "stepNumber",
      title: "Номер шага (1-4)",
      type: "number",
      description:
        "Укажите 1, 2, 3 или 4, чтобы привязать текст к нужной иконке",
    }),
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Описание",
      type: "text",
    }),
  ],
});
