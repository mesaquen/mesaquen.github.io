"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("salutation")}</h1>
      <p>{t("job-title")}</p>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
