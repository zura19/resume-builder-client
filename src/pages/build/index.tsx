import useBuildResume from "@/lib/store/buildResumeState";
import BuildResumeTemplate from "./modules/BuildResumeTemplate";
import EducationStep from "./modules/EducationStep";
import PersonalInfoStep from "./modules/PersonalInfoStep";

export default function BuildResume() {
  // const step: number = 1;
  const { step } = useBuildResume();

  function returnStep() {
    switch (step) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <EducationStep />;
      //   case 3:
      // return <WorkExperienceStep />;
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
