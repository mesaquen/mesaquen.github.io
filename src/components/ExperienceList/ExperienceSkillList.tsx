import { SKILLS } from "@/experiences/skills";
import { TagLabel } from "../TagLabel";

export function ExperienceSkillList({ skills }: { skills: SKILLS[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill) => (
        <TagLabel key={skill} message={skill} compact />
      ))}
    </div>
  );
}
