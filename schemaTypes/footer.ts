import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Футер и Контакты",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок в футере",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Телефон",
      type: "string",
    }),
    defineField({
      name: "telegram",
      title: "Ссылка на Telegram",
      type: "url",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Адрес",
      type: "string",
    }),
  ],
});
