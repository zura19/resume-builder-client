// import type { PersonalInfo } from "@/lib/schemas/personalInfoSchema";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { FileDown } from "lucide-react";
import PersonalInfoSection from "./PersonalInfo";
import SkillsSection from "./Skills";
import EducationSection from "./Education";
import { Button } from "@/components/ui/button";
import Experience from "./Experience";
import ProjectsSection from "./Projects";
import useResume from "@/lib/hooks/useResume";

interface props {
  resumeData: AiGeneratedResume;
  isTemplate?: boolean;
}

export default function ResumeClassic({
  resumeData,
  isTemplate = false,
}: props) {
  const { targetRef, handleDownload } = useResume();

  const { personalInfo, summary, skills, education, experience, projects } =
    resumeData;

  return (
    <div className="relative">
      {!isTemplate && (
        <Button
          className="absolute top-4 right-4 items-center"
          onClick={handleDownload}
        >
          Download PDF <FileDown />
        </Button>
      )}
      <div
        style={{ color: "black", backgroundColor: "white" }}
        ref={targetRef}
        className="space-y-8 p-8 font-merriweather"
      >
        <PersonalInfoSection personalInfo={personalInfo} />
        <p className="font-semibold leading-7">{summary}</p>
        <SkillsSection skills={skills} />
        <EducationSection education={education} />
        <Experience experience={experience} />
        <ProjectsSection projects={projects} />
      </div>
    </div>
  );
}
