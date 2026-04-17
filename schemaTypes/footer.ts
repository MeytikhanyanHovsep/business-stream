import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Контакты",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок в футере",
      type: "string",
    }),
    defineField({
      name: "button",
      type: "string",
      title: "Текст первой кнопки",
      initialValue: "Обсудить проект",
    }),
    defineField({
      name: "button2",
      type: "string",
      title: "Текст второй кнопки",
      initialValue: "Получить Reels в подарок",
    }),
    defineField({
      name: "navTitle",
      title: "Заголовок навигации",
      type: "string",
      initialValue: "Навигация",
    }),
    defineField({
      name: "contactsTitle",
      title: "Заголовок контактов",
      type: "string",
      initialValue: "Контакты",
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
    defineField({
      name: "addressurl",
      title: "Ссылка Адреса",
      type: "url",
    }),
    defineField({
      name: "customContacts",
      title: "Дополнительные контакты",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactItem",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Текст ссылки (например: WhatsApp)",
            },
            {
              name: "link",
              type: "string",
              title: "Ссылка или значение",
              description:
                "Для телефона: tel:+7..., для почты: mailto:..., для ссылок: https://...",
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "link",
            },
          },
        },
      ],
    }),
    defineField({
      name: "copyright",
      title: "Текст копирайта",
      type: "string",
      initialValue: "© 2026 bussines stream. Все права защищены",
    }),
    defineField({
      name: "policy",
      title: "Текст политики конфиденциальности",
      type: "string",
      initialValue: "политика конфиденциальности",
    }),
    defineField({
      name: "consent",
      title: "Текст соглашение",
      type: "string",
      initialValue: "соглашение ",
    }),
    defineField({
      name: "menu",
      title: "Меню навигации",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Название пункта (например: О нас)",
            },
            {
              name: "target",
              type: "string",
              title: "Куда ведет ссылка (выберите секцию)",
              options: {
                list: [
                  { title: "Главная", value: "#home" },
                  { title: "Преимущества", value: "#advantages" },
                  { title: "О нас", value: "#about" },
                  { title: "Тарифы", value: "#pricing" },
                  { title: "Кейсы", value: "#cases" },
                  { title: "Отзывы", value: "#reviews" },
                  { title: "FAQ", value: "#faq" },
                  { title: "Контакты", value: "#contacts" },
                  { title: "Галерея", value: "#gallery" },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "target",
            },
          },
        },
      ],
    }),
  ],
});
