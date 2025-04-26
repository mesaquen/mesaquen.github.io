import { getDictionary } from "@/dictionaries";
import { getExperience } from "@/experiences";

export default async function About({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const experiences = await getExperience(lang);
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
              <h3>{t.achievements}</h3>

              <ul>{experience.achievements?.map(achievement => (
                <li key={achievement}>{achievement}</li>
              ))}</ul>
            </>
          )}

          <div>
            {experience.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
