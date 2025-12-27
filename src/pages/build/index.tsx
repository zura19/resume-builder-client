import useBuildResume from "@/lib/store/buildResumeState";
import BuildResumeTemplate from "./modules/BuildResumeTemplate";
import EducationStep from "./modules/EducationStep";
import PersonalInfoStep from "./modules/PersonalInfoStep";
import ExperienceStep from "./modules/ExperienceStep";
import SkillsStep from "./modules/SkillsStep";
import ProjectsStep from "./modules/ProjectsStep";
import ChooseResumeTypeStep from "./modules/ChooseResumeTypeStep";
import { useQuery } from "@tanstack/react-query";
import { canGenerateService } from "@/lib/services/resume/canGenerateService";
import BuildSeketon from "./components/BuildSeketon";

export default function BuildResume() {
  const { step } = useBuildResume();
  const {
    data: can,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["can-generate"],
    queryFn: async () => await canGenerateService(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    enabled: step === 1,
  });

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
      case 6:
        return <ChooseResumeTypeStep />;
    }
  }

  return (
    <div className="h-full">
      {isLoading && <BuildSeketon />}
      {isError && <p className="text-center">{error.message}</p>}

      {can?.data.canGenerate && (
        <BuildResumeTemplate>
          <div className="p-9 overflow-scroll ">{returnStep()}</div>
        </BuildResumeTemplate>
      )}
    </div>
  );
}
