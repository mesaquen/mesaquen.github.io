import { useTranslations } from "next-intl";
import { IExperience } from "@/experiences";
import { TagLabel } from "../TagLabel";
import { ExperienceSkillList } from "./ExperienceSkillList";
import { AchievementList } from "./AchievementsList";
import { dateToLocaleString } from "@/utils/dateFormat";
import { useParams } from "next/navigation";
import { LocaleType } from "@/i18n/locales";

export function ExperienceList({
  experiences,
}: {
  experiences: IExperience[];
}) {
  const t = useTranslations();
  const { locale } = useParams();
  return (
    <>
      {experiences.map((experience) => (
        <div key={`${experience.company}-${experience.startDate}`}>
          <div className="flex flex-row justify-between items-end mb-2">
            <div className="flex flex-col">
              <h2 className="text-orange-600 dark:text-orange-400 text-xl lg:text-2xl font-bold">
                {experience.company}
              </h2>
              <p className="text-xl">{experience.title}</p>
            </div>
            <div className="shrink-0 flex flex-row gap-x-2">
              <TagLabel
                message={dateToLocaleString({
                  date: experience.startDate,
                  locale: locale as LocaleType,
                })}
                compact
              />
              <TagLabel
                message={
                  experience.endDate
                    ? dateToLocaleString({
                        date: experience.endDate,
                        locale: locale as LocaleType,
                      })
                    : t("current")
                }
                compact
              />
            </div>
          </div>

          <p>{experience.description}</p>

          <AchievementList achievements={experience.achievements ?? []} />
          <ExperienceSkillList skills={experience.skills} />
        </div>
      ))}
    </>
  );
}
