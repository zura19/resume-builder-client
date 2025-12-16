import { getResumeByIdService } from "@/lib/services/resume/getResumeByIdSerice";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Resume from "./modules/Resume";

export default function ResumePage() {
  const { id } = useParams();

  const {
    data: res,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["resume", id],
    queryFn: async (): Promise<AiGeneratedResume> => {
      const d = await getResumeByIdService(id || "");
      return JSON.parse(d.data.generatedResume);
    },
  });

  console.log(res);

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
      <div className="">{res && <Resume resumeData={res} />}</div>
    </>
  );
}
