import useBuildResume from "@/lib/store/buildResumeState";
import BuildResumeTemplate from "./modules/BuildResumeTemplate";
import EducationStep from "./modules/EducationStep";
import PersonalInfoStep from "./modules/PersonalInfoStep";
import ExperienceStep from "./modules/ExperienceStep";
import SkillsStep from "./modules/SkillsStep";
import ProjectsStep from "./modules/ProjectsStep";

export default function BuildResume() {
  const { step, data } = useBuildResume();

  console.log(data);

  function returnStep() {
    switch (step) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <EducationStep />;
      case 3:
        return <ExperienceStep />;
      case 4:
        return <SkillsStep />;
      case 5:
        return <ProjectsStep />;
    }
  }

  return (
    <div className="h-full">
      <BuildResumeTemplate>
        <div className="p-9 overflow-scroll ">{returnStep()}</div>
      </BuildResumeTemplate>
    </div>
  );
}
