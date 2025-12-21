import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Sparkles, X } from "lucide-react";
import { useState } from "react";

interface props {
  features: string[];
  setFeatures: React.Dispatch<React.SetStateAction<string[]>>;
}
export default function FeaturesField({ features, setFeatures }: props) {
  const [feat, setFeat] = useState<string>("");
  return (
    <div className="space-y-2 relative">
      <Label htmlFor="features" className="font-semibold">
        Features
      </Label>
      <Input
        className="resize-none"
        value={feat}
        onChange={(e) => setFeat(e.target.value)}
        name="features"
        id="features"
        placeholder="Describe your feature here..."
      />
      {feat ? (
        <Button
          disabled={features.length >= 5}
          onClick={() => {
            setFeatures((prev) => [...prev, feat]);
            setFeat("");
          }}
          size={"icon-sm"}
          className="absolute top-0  right-2 translate-y-[115%] size-6 rounded-full"
        >
          <Plus />
        </Button>
      ) : (
        <Button
          disabled={features.length >= 5}
          variant={"default"}
          // size={"icon-sm"}
          className="absolute top-0 text-xs right-2 translate-y-[115%] h-6 rounded-full"
        >
          Generate With AI
          <Sparkles className="size-3.5  text-indigo-500" />
        </Button>
      )}

      {features.length > 0 && (
        <div className="space-y-3 mt-2 bg-muted/50 rounded-lg p-2">
          {features.map((r, i) => (
            <div key={i} className="flex text-xs items-center justify-between">
              <span>{r}</span>
              <Button
                size={"icon-sm"}
                variant={"destructive"}
                className="size-5 rounded-full"
                onClick={() =>
                  setFeatures(features.filter((_, index) => index !== i))
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
