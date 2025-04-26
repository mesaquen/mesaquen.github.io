import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  "pt-BR": () => import("./pt-BR.json").then((module) => module.default),
};

type LocaleType = keyof typeof dictionaries;

export function getDictionary(locale: string) {
  return dictionaries[locale as LocaleType]();
}
