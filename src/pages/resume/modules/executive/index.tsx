// Colors used:
// Primary: #10b981
// Secondary: #0d9488
// Background: #ffffff
// Text: #0f172a
// Secondary Text: #475569
// Borders: #d1fae5
// Accent Background: #ecfdf5

import { Button } from "@/components/ui/button";
import useResume from "@/lib/hooks/useResume";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { FileDown } from "lucide-react";

import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

interface props {
  resumeData: AiGeneratedResume;
  isTemplate?: boolean;
}

export default function ResumeExecutive({
  resumeData,
  isTemplate = false,
}: props) {
  const { targetRef, handleDownload } = useResume();
  const { personalInfo, summary, experience, projects, education, skills } =
    resumeData;
  return (
    <div className={`relative max-h-full py-0 overflow-scroll rounded-lg`}>
      {!isTemplate && (
        <Button
          onClick={handleDownload}
          className="sticky top-0 w-full  left-full  rounded-none flex  items-center"
        >
          Download PDF
          <FileDown />
        </Button>
      )}

      <div ref={targetRef} className="bg-[#ffffff] shadow-xl">
        <PersonalInfo data={personalInfo} />

        <div className="p-10 space-y-8">
          <Summary text={summary} />
          <Experience data={experience} />
          <Projects data={projects} />
          <Education data={education} />
          <Skills data={skills} />
        </div>
      </div>
    </div>
  );
}
