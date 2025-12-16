// import type { PersonalInfo } from "@/lib/schemas/personalInfoSchema";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { FileDown } from "lucide-react";
import PersonalInfoSection from "./PersonalInfo";
import SkillsSection from "./Skills";
import EducationSection from "./Education";
import { usePDF } from "react-to-pdf";
import { Button } from "@/components/ui/button";
import Experience from "./Experience";
import ProjectsSection from "./Projects";

interface props {
  resumeData: AiGeneratedResume;
}

export default function Resume({ resumeData }: props) {
  const fileName = "resume" + "-" + new Date().getTime();
  const { toPDF, targetRef } = usePDF({ filename: fileName });

  const { personalInfo, summary, skills, education, experience, projects } =
    resumeData;

  const handleDownload = async () => {
    await document.fonts.ready;
    toPDF();
  };

  return (
    <div className="relative">
      <Button
        className="absolute top-2 items-center left-2"
        onClick={handleDownload}
      >
        Download PDF <FileDown />
      </Button>
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
