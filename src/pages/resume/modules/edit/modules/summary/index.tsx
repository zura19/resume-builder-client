import FormButton from "@/components/shared/FormButton";
import { Textarea } from "@/components/ui/textarea";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { useState } from "react";

interface props {
  resumeData: AiGeneratedResume;
}

export default function Summary({ resumeData }: props) {
  const [summary, setSummary] = useState(resumeData.summary || "");
  const isChanged = summary !== resumeData.summary;
  return (
    <div className="py-4">
      <Textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="resize-none"
      />
      <FormButton
        disabled={!isChanged || !summary}
        loading={false}
        loadingText="Saving Changes"
        className="mt-4"
      >
        Save Summary
      </FormButton>
    </div>
  );
}
