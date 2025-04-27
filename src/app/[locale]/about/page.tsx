"use client";

import { getExperience } from "@/experiences";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function About() {
  const { locale } = useParams();
  const experiences = getExperience(locale as string);
  const t = useTranslations();
  return (
    <div>
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

      <Link href={`/${locale}/skills`}>habilidades</Link>
    </div>
  );
}
