import { defineType, defineField, defineArrayMember } from "sanity";

export const privacyPage = defineType({
  name: "privacyPage",
  title: "Политика конфиденциальности",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Бейдж (Надзаголовок)",
      type: "string",
      initialValue: "Актуальная редакция",
    }),
    defineField({
      name: "title",
      title: "Главный заголовок",
      type: "string",
      initialValue: "Политика в отношении обработки персональных данных",
    }),
    defineField({
      name: "preambleStart",
      title: "Начало преамбулы (до ФИО)",
      type: "text",
      initialValue:
        "Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению их безопасности, предпринимаемые ",
    }),
    defineField({
      name: "operatorName",
      title: "ФИО Оператора",
      type: "string",
      initialValue: "Алюшина Ангелина Олеговна",
    }),
    defineField({
      name: "preambleEnd",
      title: "Конец преамбулы (после ФИО)",
      type: "string",
      initialValue: " (далее — Оператор).",
    }),
    defineField({
      name: "content",
      title: "Основной текст (Секции)",
      description:
        "Здесь можно добавлять заголовки H2, параграфы, списки и специальный блок таблицы.",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Обычный текст", value: "normal" },
            { title: "Заголовок секции (H2)", value: "h2" },
          ],
          lists: [{ title: "Маркированный список", value: "bullet" }],
        }),
        defineArrayMember({
          name: "processingTable",
          title: "Таблица обработки данных",
          type: "object",
          fields: [
            defineField({
              name: "rows",
              title: "Строки таблицы",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({
                      name: "purpose",
                      title: "Цель обработки",
                      type: "text",
                    }),
                    defineField({
                      name: "personalData",
                      title: "Персональные данные",
                      type: "text",
                    }),
                    defineField({
                      name: "legalBasis",
                      title: "Правовые основания",
                      type: "string",
                    }),
                    defineField({
                      name: "actions",
                      title: "Виды обработки",
                      type: "string",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "calloutText",
      title: "Текст в блоке внимания (внизу)",
      type: "string",
      initialValue: "Также ознакомьтесь с документом",
    }),
    defineField({
      name: "calloutLinkText",
      title: "Текст ссылки в блоке внимания",
      type: "string",
      initialValue: "«Согласие на обработку персональных данных»",
    }),
    defineField({
      name: "calloutLinkUrl",
      title: "URL ссылки",
      type: "string",
      initialValue: "/consent",
    }),
    defineField({
      name: "headerConfig",
      title: "Конфигурация хедера для этой страницы",
      type: "reference",
      to: [{ type: "header" }],
    }),
  ],
});
