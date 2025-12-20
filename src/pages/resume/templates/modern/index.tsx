import PersonalInfo from "./components/Personalnfo";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import useResume from "@/lib/hooks/useResume";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import EditModal from "../../modules/edit/components/EditModal";

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
    <div className={`relative max-h-full py-0 overflow-scroll rounded-lg`}>
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
