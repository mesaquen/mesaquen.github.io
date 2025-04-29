import { useTranslations } from "next-intl";

export function AchievementList({ achievements }: { achievements: string[] }) {
  const t = useTranslations();
  if (achievements?.length) {
    return (
      <div className="mt-4">
        <strong>{t("achievements")}</strong>

        <ul className="list-disc ml-8">
          {achievements?.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}
