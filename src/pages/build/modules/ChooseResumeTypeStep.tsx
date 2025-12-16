import ResumeModern from "@/pages/resume/modules/modern/Resume";
import StepHeading from "../components/StepHeading";
import ResumeClassic from "@/pages/resume/modules/classic/Resume";
import { fakeResume } from "@/constants/resume/fakeResume";
// import { useState } from "react";
// import type { ResumeType } from "@/lib/types/AiGeneratedResume";
import StepFooter from "./StepFooter";
import useBuildResume from "@/lib/store/buildResumeState";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { createResumeService } from "@/lib/services/resume/createResumeService";

export default function ChooseResumeTypeStep() {
  const { data, handleChangeType } = useBuildResume();
  const type = data.type;

  const navigate = useNavigate();
  const {
    mutate: createResume,
    isPending,
    // error,
  } = useMutation({
    mutationFn: async () => {
      console.log(data);

      return await createResumeService(data);
    },
    onSuccess: (data) => {
      navigate(`/resume/${data.id}`);
    },
  });

  return (
    <StepHeading
      heading="Choose Resume Type"
      description="Select the type of resume you want to create."
    >
      <div className="grid grid-cols-1 gap-8 max-h-[500px] rounded-lg overflow-y-scroll p-4 -mt-7">
        <div
          onClick={() => handleChangeType("modern")}
          className={`relative h-[250px]  rounded-lg ${
            type === "modern"
              ? "shadow-[0px_0px_10px_5px]"
              : "shadow-[0px_0px_0px_0px]"
          } shadow-indigo-500 overflow-y-scroll transition-all duration-500 cursor-pointer overflow-x-hidden`}
        >
          <div className="pointer-events-none">
            <ResumeModern isTemplate={true} resumeData={fakeResume} />
          </div>
        </div>
        <div
          onClick={() => handleChangeType("classic")}
          className={`relative h-[250px]  rounded-lg ${
            type === "classic"
              ? "shadow-[0px_0px_10px_5px]"
              : "shadow-[0px_0px_0px_0px]"
          } shadow-indigo-500 overflow-y-scroll transition-all duration-500 cursor-pointer overflow-x-hidden`}
        >
          <div className="pointer-events-none">
            <ResumeClassic resumeData={fakeResume} isTemplate={true} />
          </div>
        </div>
      </div>

      <div className="mt-auto  py-5">
        <StepFooter
          loading={isPending}
          loadingText="Creating resume..."
          //   disabledNext={}
          handleNext={createResume}
          nextText="Build Resume"
        />
      </div>
    </StepHeading>
  );
}
