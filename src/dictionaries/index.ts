import "server-only";
import { LocaleType } from "@/i18n/locales";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

export function getDictionary(locale: LocaleType) {
  return dictionaries[locale]();
}
