import { getResumeByIdService } from "@/lib/services/resume/getResumeByIdSerice";
import type {
  AiGeneratedResume,
  ResumeType,
} from "@/lib/types/AiGeneratedResume";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ResumeClassic from "./modules/classic/Resume";
import ResumeModern from "./modules/modern/Resume";
import { fakeResume } from "@/constants/resume/fakeResume";

export default function ResumePage() {
  const { id } = useParams();
  const {
    data: res,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["resume", id],
    queryFn: async (): Promise<{
      resume: AiGeneratedResume;
      type: ResumeType;
    }> => {
      const d = await getResumeByIdService(id || "");
      return { resume: JSON.parse(d.data.generatedResume), type: d.data.type };
    },
  });

  function renderResume() {
    if (!res) return;

    switch (res.type) {
      case "classic":
        return <ResumeClassic resumeData={fakeResume} />;
      case "modern":
        return <ResumeModern resumeData={fakeResume} />;
    }
  }

  return (
    <>
      {isError && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {res && renderResume()}
    </>
  );
}
