import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default),
};

type LocaleType = keyof typeof dictionaries;

export function getDictionary(locale: string) {
  const [lang] = locale?.split("-") ?? "";
  return dictionaries[lang as LocaleType]();
}
