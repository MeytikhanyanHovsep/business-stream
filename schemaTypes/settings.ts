import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Настройки сайта",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок сайта (Meta Title)",
      type: "string",
      description: "Отображается во вкладке браузера",
    }),
    defineField({
      name: "description",
      title: "Описание сайта (Meta Description)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "favicon",
      title: "Фавикон",
      type: "image",
      description: "Загрузите .png или .ico",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image (Превью для соцсетей)",
      type: "image",
      description: "Рекомендуемый размер 1200x630",
    }),
    defineField({
      name: "headScripts",
      title: "Скрипты в <head>",
      description: "Коды Метрики, GTM, Пиксели (вставляются перед </head>)",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "bodyScripts",
      title: "Скрипты в <body>",
      description:
        "Коды, которые должны быть в начале <body> (например, noscript части GTM)",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "robotsText",
      title: "Robots.txt",
      type: "text",
      description:
        "Напишите правила для поисковых роботов (например, User-agent: * Disallow: /admin)",
    }),
  ],
});
