import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon, X } from "lucide-react";
import { useState } from "react";

interface props {
  technologies: string[];
  setTechnologies: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TechnologiesField({
  technologies,
  setTechnologies,
}: props) {
  const [tech, setTech] = useState<string>("");
  return (
    <div>
      <div className="relative">
        <Label htmlFor="technologies" className="font-semibold mb-2">
          Technologies
        </Label>
        <Input
          disabled={technologies.length >= 6}
          value={tech}
          onChange={(e) =>
            e.target.value.length <= 20 && setTech(e.target.value)
          }
          name="technologies"
          id="technologies"
          className="h-10"
          placeholder="React, Java, C++, etc..."
        />

        {tech && (
          <Button
            size={"icon"}
            variant={"default"}
            className="flex size-6 items-center justify-center rounded-full absolute top-[68%] -translate-1/2 right-0 -translate-x-2"
            onClick={() => {
              setTechnologies((prev) => [...prev, tech]);
              setTech("");
            }}
          >
            <PlusIcon className="size-4 " strokeWidth={2} />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-3 items-center justify-center text-xs gap-2 mt-2">
        {technologies.map((item) => (
          <div
            className="text-xs bg-muted rounded-full flex items-center justify-between px-3 py-1.5"
            key={item}
          >
            {item}
            <X
              onClick={() =>
                setTechnologies((prev) => prev.filter((i) => i !== item))
              }
              className="size-4 cursor-pointer hover:bg-muted-foreground/20 rounded-full transition-all duration-300"
              strokeWidth={2.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
