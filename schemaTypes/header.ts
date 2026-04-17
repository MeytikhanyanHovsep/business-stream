import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Шапка сайта (Header)",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Внутреннее название",
      description: "Например: 'Главная страница' или 'Лендинг без меню'",
      type: "string",
    }),
    defineField({
      name: "headerType",
      title: "Тип хедера",
      type: "string",
      options: {
        list: [
          { title: "С навигацией", value: "withNavigation" },
          { title: "Без навигации (только логотип)", value: "simple" },
        ],
      },
      initialValue: "withNavigation",
    }),
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
    defineField({
      name: "btnContact",
      title: "Текст кнопки",
      type: "string",
    }),
  ],
});
