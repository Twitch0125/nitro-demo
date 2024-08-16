import { defineConfig } from "unocss";
const sizing = {
  page: '60ch'
}
export default defineConfig({
  cli: {
    entry: {
      outFile: "public/css/uno.css",
      patterns: ["server/**/*.{js,ts}"],
    }, // CliEntryItem | CliEntryItem[]
  },
  content: {
    pipeline: {
      include: ["server/**/*.{js,ts}"],
    },
  },
  theme :{
    minWidth: {
      page: sizing.page
    },
    width: {
      page: sizing.page
    },
    maxWidth:{
      page: sizing.page
    }
  }
  // ...
});
