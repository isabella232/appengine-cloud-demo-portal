import en from "./en";
import ja from "./ja";

export type locale = "en" | "ja";

const languageLabels = {
  en: "English",
  ja: "日本語",
};

export default {
  en,
  ja,
} as const;

export { languageLabels };
