import type {
  AiGeneratedResume,
  ResumeType,
} from "@/lib/types/AiGeneratedResume";
import ResumeClassic from "../../templates/classic";
import ResumeModern from "../../templates/modern";
import ResumeCreative from "../../templates/creative";
import ResumeExecutive from "../../templates/executive";
import ResumeSkeleton from "./components/ResumeSkeleton";

interface props {
  type: ResumeType;
  resume: AiGeneratedResume;
  isLoading: boolean;
  id: string;
}

export default function ResumeWrapper({ resume, type, isLoading, id }: props) {
  function renderResume() {
    if (!resume) return;

    switch (type) {
      case "classic":
        return <ResumeClassic id={id} resumeData={resume} />;
      case "modern":
        return <ResumeModern id={id} resumeData={resume} />;
      case "creative":
        return <ResumeCreative id={id} resumeData={resume} />;
      case "executive":
        return <ResumeExecutive id={id} resumeData={resume} />;
      default:
    }
  }

  return (
    <div className="relative max-h-full overflow-scroll rounded-lg">
      {isLoading && <ResumeSkeleton />}
      {!isLoading && renderResume()}
    </div>
  );
}
