import { LocaleType } from "@/i18n/locales";
import { experiences as en } from "./en";
import { experiences as pt } from "./pt";
import { SKILLS } from "./skills";

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

export function getExperience(locale: LocaleType) {
  return dictionaries[locale];
}
