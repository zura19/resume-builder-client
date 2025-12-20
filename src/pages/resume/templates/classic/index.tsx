// import type { PersonalInfo } from "@/lib/schemas/personalInfoSchema";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { FileDown } from "lucide-react";
import PersonalInfoSection from "./components/PersonalInfo";
import SkillsSection from "./components/Skills";
import EducationSection from "./components/Education";
import { Button } from "@/components/ui/button";
import Experience from "./components/Experience";
import ProjectsSection from "./components/Projects";
import useResume from "@/lib/hooks/useResume";
import EditModal from "../../modules/edit/components/EditModal";

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
    <div className="relative max-h-full overflow-scroll rounded-lg">
      {!isTemplate && (
        <div className="sticky top-0 w-full  left-full  rounded-none flex flex-col items-center">
          <EditModal resumeData={resumeData} />

          <Button className="w-full rounded-none" onClick={handleDownload}>
            Download PDF
            <FileDown />
          </Button>
        </div>
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
