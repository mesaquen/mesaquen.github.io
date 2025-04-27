import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

export type LocaleType = keyof typeof dictionaries;

export function getDictionary(locale: LocaleType) {
  return dictionaries[locale]();
}
