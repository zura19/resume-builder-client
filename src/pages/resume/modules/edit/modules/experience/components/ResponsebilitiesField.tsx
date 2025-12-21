import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateResponsibilitieService } from "@/lib/services/ai/generateResponsibilitieService";
import { useMutation } from "@tanstack/react-query";
import { Loader, Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface props {
  responsibilities: string[];
  setResponsibilities: React.Dispatch<React.SetStateAction<string[]>>;
  company: string;
  position: string;
}
export default function ResponsebilitiesField({
  responsibilities,
  setResponsibilities,
  company,
  position,
}: props) {
  const [res, setRes] = useState("");

  const { mutateAsync: generate, isPending: isGenerating } = useMutation({
    mutationFn: async () => {
      const data = await generateResponsibilitieService({
        company,
        position,
        responsibilities,
      });
      return data;
    },
    onSuccess: (data) => {
      setRes(data.data.responsibilitie);
    },
    onError: (error) => toast.error(error.message || "Failed to generate"),
  });

  return (
    <div className="space-y-2 relative">
      <Label htmlFor="responsibilitie" className="font-semibold">
        Responsibilities
      </Label>
      <Input
        className="resize-none"
        value={res}
        onChange={(e) => setRes(e.target.value)}
        name="responsibilitie"
        id="responsibilitie"
        placeholder="Describe your responsibilities here..."
      />
      {res ? (
        <Button
          disabled={responsibilities.length >= 5}
          onClick={() => {
            setResponsibilities((prev) => [...prev, res]);
            setRes("");
          }}
          size={"icon-sm"}
          className="absolute top-0  right-2 translate-y-[115%] size-6 rounded-full"
        >
          <Plus />
        </Button>
      ) : (
        <Button
          onClick={() => generate()}
          disabled={
            responsibilities.length >= 5 ||
            isGenerating ||
            !company ||
            !position
          }
          variant={"default"}
          className="absolute top-0 text-xs right-2 translate-y-[115%] h-6 rounded-full"
        >
          {isGenerating ? (
            <>
              <span className="hidden sm:inline">Generating...</span>
              <Loader className="size-3.5 animate-spin" />
            </>
          ) : (
            <>
              <span className="hidden sm:inline">Generate With AI</span>
              <Sparkles className="size-3.5  text-indigo-500" />
            </>
          )}
        </Button>
      )}

      {responsibilities.length > 0 && (
        <div className="space-y-3 mt-2 bg-muted/50 rounded-lg p-2">
          {responsibilities.map((r, i) => (
            <div key={i} className="flex text-xs items-center justify-between">
              <span>{r}</span>
              <Button
                size={"icon-sm"}
                variant={"destructive"}
                className="size-5 rounded-full"
                onClick={() =>
                  setResponsibilities(
                    responsibilities.filter((_, index) => index !== i)
                  )
                }
              >
                <X className="size-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
