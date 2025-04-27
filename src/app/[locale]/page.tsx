"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Home() {
  const t = useTranslations();
  const { locale } = useParams();

  return (
    <div>
      <h1>{t("salutation")}</h1>
      <p>{t("job-title")}</p>
      <Link href={`/${locale}/about`}>{t("about")}</Link>
    </div>
  );
}
