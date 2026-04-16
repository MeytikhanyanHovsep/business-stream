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
      hidden: ({ document }) => document?.headerType === "simple",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Название" },
            {
              name: "target",
              type: "string",
              title: "ID секции (для скролла)",
            },
          ],
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
