"use client";

import { ExperienceList } from "@/components/ExperienceList";
import { getExperience } from "@/experiences";
import { LocaleType } from "@/i18n/locales";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function About() {
  const { locale } = useParams();
  const experiences = getExperience(locale as LocaleType);
  const t = useTranslations();

  const boxStyles =
    "bg-white dark:bg-[#333] rounded-lg shadow-xl shadow-gray-400 dark:shadow-black p-8 flex gap-8 items-start flex-col";
  return (
    <div className="text-lg p-4 gap-8 flex flex-col md:flex-row items-start">
      <section className={`${boxStyles} md:sticky md:top-4 md:flex-1/3`}>
        <div className="flex gap-4 items-center">
          <div className="rounded-full border-2 aspect-square overflow-clip relative min-h-40">
            <Image
              className="relative object-cover"
              src="/mesaque_512.webp"
              alt="Mesaque"
              sizes="(max-width: 768px) 100vw, 33vw"
              fill
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Mesaque Francisco
            </h1>
            <p>{t("job-title")}</p>
          </div>
        </div>
        <p>{t("biography")}</p>
      </section>
      <section className={`${boxStyles} md:flex-2/3`}>
        <ExperienceList experiences={experiences} />
      </section>
    </div>
  );
}
