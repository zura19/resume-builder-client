import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Sparkles, X } from "lucide-react";

interface props {
  responsibilities: string[];
  setResponsibilities: React.Dispatch<React.SetStateAction<string[]>>;
  res: string;
  setRes: React.Dispatch<React.SetStateAction<string>>;
}
export default function ResponsebilitiesField({
  responsibilities,
  setResponsibilities,
  res,
  setRes,
}: props) {
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
          disabled={responsibilities.length >= 5}
          variant={"default"}
          // size={"icon-sm"}
          className="absolute top-0 text-xs right-2 translate-y-[115%] h-6 rounded-full"
        >
          Generate With AI
          <Sparkles className="size-3.5  text-indigo-500" />
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
