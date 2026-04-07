import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Business Stream Admin",

  projectId: "g1jxcbnr",
  dataset: "production",

  basePath: "/admin",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
