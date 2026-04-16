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
