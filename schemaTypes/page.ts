import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Страницы",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок страницы",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Ссылка (URL)",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "headerConfig",
      title: "Конфигурация хедера для этой страницы",
      type: "reference",
      to: [{ type: "header" }],
    }),
    defineField({
      name: "footerConfig",
      title: "Конфигурация футера для этой страницы",
      type: "reference",
      to: [{ type: "footer" }],
    }),

    defineField({
      name: "sections",
      title: "Секции страницы",
      type: "array",
      of: [
        { type: "secondHero" },
        { type: "secondAbout" },
        { type: "gallerySection" },
        {
          type: "object",
          name: "casesRef",
          title: "Уникальные проекты страницы",
          fields: [
            defineField({
              name: "sectionIndex",
              title: "Индекс",
              type: "string",
              initialValue: "[06]",
            }),
            defineField({
              name: "sectionTitle",
              title: "Заголовок",
              type: "string",
              initialValue: "Кейсы",
            }),
            defineField({
              name: "mainTitle",
              title: "Главный заголовок",
              type: "text",
              rows: 2,
            }),
            defineField({
              name: "description",
              title: "Описание",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "casesList",
              type: "array",
              title: "Список проектов",
              of: [{ type: "reference", to: [{ type: "case" }] }],
            }),
          ],
        },
        {
          type: "reference",
          to: [
            { type: "hero" },
            { type: "advantagesSection" },
            { type: "aboutSection" },
            { type: "servicesSection" },
            { type: "pricingSection" },
            { type: "casesSection" },
            { type: "processSection" },
            { type: "quiz" },
            { type: "reviewsSection" },
            { type: "faqSection" },
          ],
        },
      ],
    }),
  ],
});
