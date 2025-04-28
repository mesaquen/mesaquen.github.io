import { TagLabel } from "@/components/TagLabel";
import { SKILLS } from "@/experiences/skills";

export default function SkillsPage() {
  const skils = Object.entries(SKILLS);
  return (
    <div className="flex flex-wrap gap-2">
      {skils.map(([key, value]) => (
        <TagLabel key={key} message={value} />
      ))}
    </div>
  );
}
