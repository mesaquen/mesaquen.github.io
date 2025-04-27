import { experiences as en } from "./en";
import { experiences as pt } from "./pt";
import { SKILLS } from "./skills";

type LocaleType = keyof typeof dictionaries;

const dictionaries = {
  en,
  pt,
};

export interface IExperience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  achievements?: string[];
  skills: SKILLS[];
}

export function getExperience(locale: string) {
  const [lang] = locale?.split("-") ?? [];
  return dictionaries[lang as LocaleType];
}
