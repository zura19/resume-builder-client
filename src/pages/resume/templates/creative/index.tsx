import PersonalInfo from "./components/PersonalInfo";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import { creativeResumeData } from "@/lib/resume-data";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { Button } from "@/components/ui/button";
import useResume from "@/lib/hooks/useResume";
import { FileDown } from "lucide-react";
import EditModal from "../../modules/edit/components/EditModal";

// Colors used:
// Primary: cyan-500 (#06b6d4)
// Accent: pink-500 (#ec4899)
// Background: white (#ffffff)
// Text: gray-900 (#111827)
// Secondary Text: gray-600 (#4b5563)

interface props {
  resumeData: AiGeneratedResume;
  isTemplate?: boolean;
  id: string;
}

export default function ResumeCreative({
  isTemplate = false,
  resumeData,
  id,
}: props) {
  const { handleDownload, targetRef } = useResume();
  return (
    <div className={`relative max-h-full py-0 overflow-scroll rounded-lg`}>
      {!isTemplate && (
        <div className="sticky top-0 w-full  left-full  rounded-none flex flex-col items-center">
          <EditModal id={id} resumeData={resumeData} />
          <Button className="w-full rounded-none" onClick={handleDownload}>
            Download PDF
            <FileDown />
          </Button>
        </div>
      )}

      <div ref={targetRef} className=" bg-[#ffffff] shadow-2xl overflow-hidden">
        <PersonalInfo data={resumeData.personalInfo} />
        <div className="p-8 space-y-8 text-[#1a1a1a]">
          <Summary text={resumeData.summary} />
          <Experience data={resumeData.experience} />
          <Projects data={resumeData.projects} />
          <Education data={resumeData.education} />
          <Skills data={resumeData.skills} />
        </div>
      </div>
    </div>
  );
}
