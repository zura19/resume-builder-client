import type { Skills } from "@/lib/types/buildResumeTypes";

interface props {
  skills: Skills;
}

export default function SkillsSection({ skills }: props) {
  return (
    <div className="space-y-4  grid grid-cols-[15fr_90fr]">
      <p className="font-bold">soft skills: </p>
      <ul className="flex items-center">
        {skills.soft.map((item, i) => (
          <span key={i} className="italic">
            {i !== 0 && ","} {item}
          </span>
        ))}
      </ul>
      <p className="font-bold">Technologies: </p>
      <ul className="flex items-center">
        {skills.technical.map((item, i) => (
          <span key={i} className="italic">
            {i !== 0 && ","} {item}
          </span>
        ))}
      </ul>

      <p className="font-bold">Languages: </p>
      <ul className="flex items-center ">
        {skills.languages.map((item, i) => (
          <span key={i} className="italic">
            {i !== 0 && ","} {item}
          </span>
        ))}
      </ul>
    </div>
  );
}
