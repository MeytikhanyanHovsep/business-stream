import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Business Stream Admin",

  projectId: "g1jxcbnr",
  dataset: "production",

  basePath: "/admin",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Управление сайтом")
          .items([
            S.listItem()
              .title("Страницы сайта")
              .child(
                S.list()
                  .title("Страницы сайта")
                  .items([
                    ...S.documentTypeListItems().filter(
                      (listItem) => listItem.getId() === "page",
                    ),

                    S.divider(),

                    S.documentListItem()
                      .schemaType("privacyPage")
                      .id("privacyPage")
                      .title("Политика конфиденциальности"),

                    S.documentListItem()
                      .schemaType("consentPage")
                      .id("consentPage")
                      .title("Согласие на обработку данных"),
                  ]),
              ),

            S.listItem()
              .title("База данных (Контент)")
              .child(
                S.list()
                  .title("Все записи")
                  .items([
                    S.documentTypeListItem("service").title("Все услуги"),
                    S.documentTypeListItem("pricing").title("Все тарифы"),
                    S.documentTypeListItem("case").title("Все кейсы"),
                    S.documentTypeListItem("review").title("Все отзывы"),
                    S.documentTypeListItem("faq").title("Все вопросы FAQ"),
                  ]),
              ),

            S.divider(),

            S.listItem()
              .title("Настройки сайта")
              .child(
                S.list()
                  .title("Настройки")
                  .items([
                    S.documentListItem()
                      .schemaType("header")
                      .id("header")
                      .title("Шапка"),
                    S.documentListItem()
                      .schemaType("footer")
                      .id("footer")
                      .title("Подвал"),
                    S.documentListItem()
                      .schemaType("siteSettings")
                      .id("siteSettings")
                      .title("SEO / Настройки"),
                  ]),
              ),
            S.divider(),
            S.listItem()
              .title("Модальные окна")
              .child(
                S.list()
                  .title("Контент модалок")
                  .items([
                    S.documentListItem()
                      .schemaType("modalContact")
                      .id("modalContact")
                      .title("Обратная связь"),
                    S.documentListItem()
                      .schemaType("modalDiscuss")
                      .id("modalDiscuss")
                      .title("Обсуждение проекта"),
                    S.documentListItem()
                      .schemaType("modalReels")
                      .id("modalReels")
                      .title("Reels в подарок"),
                    S.documentListItem()
                      .schemaType("modalAudit")
                      .id("modalAudit")
                      .title("Квиз-аудит"),
                  ]),
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
