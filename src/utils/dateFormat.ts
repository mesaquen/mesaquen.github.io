import { LocaleType } from "@/i18n/locales";

export function dateToLocaleString({
  date,
  locale,
}: {
  date: string;
  locale: LocaleType;
}) {
  const [monthStr, yearStr] = date.split("-");

  const time = new Date(0);

  time.setDate(1);
  time.setMonth(Number(monthStr) - 1);
  time.setFullYear(Number(yearStr) + 2000);

  return time.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
  });
}
