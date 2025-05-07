'use client'

import { LOCALES } from "@/i18n/locales";
import { usePathname } from "@/i18n/navigation";
import * as Icon from "@deemlol/next-icons";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      const nextLocale = event.target.value;
      
      router.replace(`/${nextLocale}${pathname}`, { scroll: false });
    });
  }

  return (
    <label className="relative flex gap-2 items-center">
      <Icon.Globe size={24} />
      <select
        className="cursor-pointer py-3 px-2 appearance-none"
        defaultValue={locale}
        disabled={isPending}
        onChange={handleChange}
      >
        {LOCALES.map((availableLocale) => (
          <option className="bg-gray-700" key={availableLocale} value={availableLocale}>
            {availableLocale}
          </option>
        ))}
      </select>
    </label>
  );
}
