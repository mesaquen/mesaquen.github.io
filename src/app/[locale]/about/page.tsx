"use client";

import { ExperienceList } from "@/components/ExperienceList";
import { getExperience } from "@/experiences";
import { LocaleType } from "@/i18n/locales";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import * as Icon from "@deemlol/next-icons";

export default function About() {
  const { locale } = useParams();
  const experiences = getExperience(locale as LocaleType);
  const t = useTranslations();

  const boxStyles =
    "bg-white dark:bg-[#333] rounded-lg shadow-xl shadow-gray-400 dark:shadow-black p-8 flex gap-8 items-start flex-col";
  return (
    <div className="text-lg p-4 gap-8 flex flex-col lg:flex-row items-start pt-12">
      <section className={`${boxStyles} animate-fade-in lg:sticky lg:top-28 lg:flex-1/3`}>
        <div className="flex gap-4 items-center">
          <div className="animate-fade-in-300 rounded-full border-2 aspect-square overflow-clip relative min-h-40">
            <Image
              className="relative object-cover"
              src="/mesaque_512.webp"
              alt="Mesaque"
              sizes="(max-width: 768px) 100vw, 33vw"
              fill
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">{t('name')}</h2>
            <p>{t("job-title")}</p>
          </div>
        </div>
        <p>{t("biography")}</p>
      </section>
      <section className={`${boxStyles} animate-fade-in lg:flex-2/3`}>
        <h1 className="flex gap-4 text-3xl font-bold items-center">
          <Icon.File size={32} />
          {t("experiences")}
        </h1>
        <ExperienceList experiences={experiences} />
      </section>
    </div>
  );
}
