export const LOCALES:string[] = ["pt", "en"] as const;

export const DEFAULT_LOCALE:string = "en" as const;

export type LocaleType = (typeof LOCALES)[number];
