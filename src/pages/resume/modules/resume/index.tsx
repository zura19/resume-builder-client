import type {
  AiGeneratedResume,
  ResumeType,
} from "@/lib/types/AiGeneratedResume";
// import ResumeClassic from "../../templates/classic";
// import ResumeModern from "../../templates/modern";
// import ResumeCreative from "../../templates/creative";
// import ResumeExecutive from "../../templates/executive";
import ResumeSkeleton from "./components/ResumeSkeleton";
import { PDFViewer } from "@react-pdf/renderer";
import ResumeCreative from "../../templates/pdf/creative";
import ResumeExecutive from "../../templates/pdf/executive";
import ResumeModern from "../../templates/pdf/modern";
import ResumeClassic from "../../templates/pdf/classic";
import EditModal from "../edit/components/EditModal";

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
        return <ResumeClassic resumeData={resume} />;
      case "modern":
        return <ResumeModern resumeData={resume} />;
      case "creative":
        return <ResumeCreative resumeData={resume} />;
      // return <ResumeCreative id={id} resumeData={resume} />;
      case "executive":
        return <ResumeExecutive resumeData={resume} />;
      default:
    }
  }

  return (
    <div className="relative max-h-full overflow-scroll rounded-lg">
      {isLoading && <ResumeSkeleton />}
      {!isLoading && (
        <div className="h-full w-full relative">
          <PDFViewer width={"100%"} height={"100%"}>
            {renderResume()}
          </PDFViewer>
          <div className=" fixed top-4 right-4 ">
            <EditModal resumeData={resume} id={id} />
          </div>
        </div>
      )}
    </div>
  );
}
