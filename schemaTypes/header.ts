import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Шапка сайта (Header)",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Логотип",
      type: "image",
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
              title: "Название (например: О нас)",
            },
            {
              name: "target",
              type: "string",
              title: "ID секции",
              options: {
                list: [
                  { title: "Главная", value: "home" },
                  { title: "Преимущества", value: "advantages" },
                  { title: "О нас", value: "about" },
                  { title: "Тарифы", value: "pricing" },
                  { title: "Кейсы", value: "cases" },
                  { title: "Отзывы", value: "reviews" },
                  { title: "FAQ", value: "faq" },
                  { title: "Контакты", value: "contacts" },
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: "btnContact",
      title: "Кнопка 'Связаться с нами'",
      type: "string",
      initialValue: "Связаться с нами",
    }),
    defineField({
      name: "btnDiscuss",
      title: "Кнопка мобильная 'Обсудить проект'",
      type: "string",
      initialValue: "Обсудить проект",
    }),
    defineField({
      name: "btnAudit",
      title: "Кнопка мобильная 'Live-аудит'",
      type: "string",
      initialValue: "Live-аудит",
    }),
    defineField({
      name: "backToMain",
      title: "Текст 'Вернуться на главную'",
      type: "string",
      initialValue: "Вернуться на главную",
    }),
  ],
});
