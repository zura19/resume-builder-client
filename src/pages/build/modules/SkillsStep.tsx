import useBuildResume from "@/lib/store/buildResumeState";
import StepHeading from "../components/StepHeading";
import StepFooter from "./StepFooter";
import type { skillType } from "@/lib/types/buildResumeTypes";
import SkillField from "../components/SkillField";

export default function SkillsStep() {
  const { nextStep, handleAddSkill, handleRemoveSkill, data } =
    useBuildResume();

  function handleAdd(type: skillType, skill: string) {
    if (type === "soft") handleAddSkill(type, skill);

    if (type === "languages") handleAddSkill(type, skill);

    if (type === "technical") handleAddSkill(type, skill);
  }

  function allowNext() {
    return (
      data.skills.soft.length >= 3 &&
      data.skills.languages.length >= 1 &&
      data.skills.technical.length >= 3
    );
  }

  return (
    <StepHeading
      heading="Skills"
      description="Please provide your soft, language and technical skills. You can add multiple skills."
    >
      <div className=" flex flex-col  gap-10">
        <div className="h-103 overflow-y-scroll px-1 space-y-10">
          <SkillField
            type="soft"
            data={data.skills.soft}
            handleAdd={handleAdd}
            handleRemove={handleRemoveSkill}
            label="Soft Skills"
            placeholder="Comunication, leadership, teamwork, etc..."
            description="Min 3 required. You can add up to 6 soft skills."
          />

          <SkillField
            type="languages"
            data={data.skills.languages}
            handleAdd={handleAdd}
            handleRemove={handleRemoveSkill}
            label="Languages"
            placeholder="English, French, etc..."
            description="Min 1 required. You can add up to 6 languages."
          />
          <SkillField
            type="technical"
            data={data.skills.technical}
            handleAdd={handleAdd}
            handleRemove={handleRemoveSkill}
            label="Technical Skills"
            placeholder="React, Node.js, etc..."
            description="Min 3 required. You can add up to 6 technical skills."
          />
        </div>
      </div>
      <div className="mt-auto pt-10">
        <StepFooter disabledNext={!allowNext()} handleNext={nextStep} />
      </div>
    </StepHeading>
  );
}
