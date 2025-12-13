import FormButton from "@/components/shared/FormButton";
import { Button } from "@/components/ui/button";
import useBuildResume from "@/lib/store/buildResumeState";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

interface props {
  nextText?: string;
  loading?: boolean;
  loadingText?: string;
  handleNext?: () => void;
}

export default function StepFooter(props: props) {
  const { nextText = "Next", loading, loadingText, handleNext } = props;
  const { step, prevStep } = useBuildResume();
  // const step: number = 1;
  return (
    <div className="flex items-center justify-between ">
      <Button
        disabled={step === 1}
        type="button"
        size="lg"
        variant={"outline"}
        className="tracking-[1px] flex items-center gap-3"
        onClick={prevStep}
      >
        <ArrowLeftIcon className="" />
        <span className="tracking-[1px]">Previous</span>
      </Button>

      <FormButton
        loading={loading}
        type="submit"
        size="lg"
        onClick={handleNext}
        className="flex items-center gap-3 bg-indigo-500 text-white hover:bg-indigo-600"
        loadingText={loadingText}
      >
        <span className="tracking-[1px]">{nextText}</span>
        <ArrowRightIcon className="" />
      </FormButton>
    </div>
  );
}
