import { SKILLS } from "@/experiences/skills";

export default function SkillsPage() {
  const skils = Object.entries(SKILLS);
  return (
    <>
      {skils.map(([key, value]) => (
        <span key={key}>
          {value}
        </span>
      ))}
    </>
  );
}
