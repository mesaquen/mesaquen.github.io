"use client";

import { getExperience } from "@/experiences";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function About() {
  const { locale } = useParams();
  const experiences = getExperience(locale as string);
  const t = useTranslations();

  const boxStyles = "dark:bg-indigo-900 rounded-lg shadow-xl shadow-gray-400 dark:shadow-black p-4 flex gap-8 items-start flex-col"
  return (
    <div className="p-4 gap-8 flex flex-col md:flex-row items-start">
      <section className={`${boxStyles} md:sticky md:top-4 md:flex-1/3`}>
        <div className="flex gap-4 items-center">
          <div className="rounded-lg aspect-square overflow-clip relative min-h-40 w-1/3">
            <Image
              className="relative"
              src="/mesaque_512.webp"
              alt="Mesaque"
              fill
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div>
            <h1 className="text-indigo-900 dark:text-white text-2xl font-bold">Mesaque Francisco</h1>
            <p>{t("job-title")}</p>
          </div>
        </div>
        <p>{t("biography")}</p>
      </section>
      <section className={`${boxStyles} md:flex-2/3`}>
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.startDate}`}>
            <h2>{experience.company}</h2>
            <p>{experience.title}</p>
            <p>
              <span>{experience.startDate}</span>{" "}
              <span>{experience.endDate}</span>
            </p>

            <p>{experience.description}</p>
            {experience.achievements?.length && (
              <>
                <h3>{t("achievements")}</h3>

                <ul>
                  {experience.achievements?.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}

            <div>
              {experience.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
