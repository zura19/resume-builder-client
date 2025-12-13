import useBuildResume from "@/lib/store/buildResumeState";
import StepHeading from "../components/StepHeading";
import StepFooter from "./StepFooter";

export default function EducationStep() {
  const { nextStep } = useBuildResume();
  return (
    <StepHeading
      heading="Education"
      description="Please provide your personal name, email, and phone number."
    >
      EducationStep
      <StepFooter handleNext={nextStep} />
    </StepHeading>
  );
}
