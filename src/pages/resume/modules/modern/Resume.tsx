import PersonalInfo from "./Personalnfo";
import Summary from "./Summary";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import useResume from "@/lib/hooks/useResume";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

// forground - #1a1a1a
// primary - #2c5f8d
// muted -  #6d6d6d
// border - #e5e7eb
// accent - #f9fafb

interface props {
  resumeData: AiGeneratedResume;
  isTemplate?: boolean;
}

export default function ResumeModern({
  resumeData,
  isTemplate = false,
}: props) {
  const { targetRef, handleDownload } = useResume();

  const { personalInfo, summary, skills, education, experience, projects } =
    resumeData;
  //   const dummyData = resumeData;

  return (
    <div className={`relative `}>
      {!isTemplate && (
        <Button
          onClick={handleDownload}
          className="absolute flex items-center top-5 right-5"
        >
          Download PDF
          <FileDown />
        </Button>
      )}

      <div
        ref={targetRef}
        className="max-w-full mx-auto p-8 md:p-12 text-[#1a1a1a] bg-[#f9fafb]"
      >
        <PersonalInfo data={personalInfo} />
        <Summary text={summary} />
        <Experience data={experience} />
        <Education data={education} />
        <Skills data={skills} />
        <Projects data={projects} />
      </div>
    </div>
  );
}
