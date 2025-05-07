export const LOCALES = ["pt", "en"] as const;

export const DEFAULT_LOCALE = "en" as const;

export type LocaleType = (typeof LOCALES)[number];
