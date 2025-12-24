import useBuildResume from "@/lib/store/buildResumeState";
import StepHeading from "../components/StepHeading";
import StepFooter from "./StepFooter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, X } from "lucide-react";
import type { skillType } from "@/lib/types/buildResumeTypes";

export default function SkillsStep() {
  const { nextStep, handleAddSkill, handleRemoveSkill, data } =
    useBuildResume();
  const [softSkill, setSoftSkill] = useState("");
  const [language, setLanguage] = useState("");
  const [technical, setTechnical] = useState("");

  function handleAdd(type: skillType) {
    if (type === "soft") {
      handleAddSkill(type, softSkill);
      setSoftSkill("");
    }

    if (type === "languages") {
      handleAddSkill(type, language);
      setLanguage("");
    }

    if (type === "technical") {
      handleAddSkill(type, technical);
      setTechnical("");
    }
  }

  function allowNext() {
    return (
      data.skills.soft.length >= 3 &&
      data.skills.languages.length >= 1 &&
      data.skills.technical.length >= 3
    );
  }

  return (
    <StepHeading
      heading="Skills"
      description="Please provide your soft, language and technical skills. You can add multiple skills."
    >
      <div className=" flex flex-col  gap-10">
        <div className="h-103 overflow-y-scroll px-1 space-y-10">
          <div>
            <div className="relative">
              <Label htmlFor="softSkills" className="font-semibold mb-2">
                Soft Skills
              </Label>

              <Input
                disabled={data.skills.soft.length >= 6}
                value={softSkill}
                onChange={(e) =>
                  e.target.value.length <= 20 && setSoftSkill(e.target.value)
                }
                name="softSkills"
                id="softSkills"
                className="h-10"
                placeholder="Comunication, leadership, teamwork, etc..."
              />
              <AddBtn
                hide={softSkill.length === 0}
                onClick={() => handleAdd("soft")}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Min 3 required. You can add up to 6 soft skills.
            </p>
            <Skills
              onRemove={(skill: string) => handleRemoveSkill("soft", skill)}
              skills={data.skills.soft}
            />
          </div>

          <div>
            <div className="relative">
              <Label htmlFor="languages" className="font-semibold mb-2">
                Languages
              </Label>
              <Input
                disabled={data.skills.languages.length >= 6}
                value={language}
                onChange={(e) =>
                  e.target.value.length <= 20 && setLanguage(e.target.value)
                }
                name="languages"
                id="languages"
                className="h-10"
                placeholder="English, French, etc..."
              />
              <AddBtn
                hide={language.length === 0}
                onClick={() => handleAdd("languages")}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Min 1 required. You can add up to 6 languages.
            </p>
            <Skills
              onRemove={(skill: string) =>
                handleRemoveSkill("languages", skill)
              }
              skills={data.skills.languages}
            />
          </div>

          <div>
            <div className="space-y-0 relative">
              <Label htmlFor="technical" className="font-semibold mb-2">
                Technical Skills
              </Label>
              <Input
                disabled={data.skills.technical.length >= 6}
                value={technical}
                onChange={(e) =>
                  e.target.value.length <= 20 && setTechnical(e.target.value)
                }
                name="technical"
                id="technical"
                className="h-10"
                placeholder="HTML, CSS, JavaScript, React, etc..."
              />
              <AddBtn
                hide={technical.length === 0}
                onClick={() => handleAdd("technical")}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Min 3 required. You can add up to 6 technical skills.
            </p>
            <Skills
              onRemove={(skill: string) =>
                handleRemoveSkill("technical", skill)
              }
              skills={data.skills.technical}
            />
          </div>
        </div>
      </div>
      <div className="mt-auto pt-10">
        <StepFooter disabledNext={!allowNext()} handleNext={nextStep} />
      </div>
    </StepHeading>
  );
}

interface Btnprops {
  hide: boolean;
  onClick: () => void;
}

function AddBtn({ hide, onClick }: Btnprops) {
  if (hide) return null;
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className="flex size-6 items-center justify-center rounded-full bg-muted hover:bg-muted/20  absolute top-[68%] -translate-1/2 right-0 -translate-x-2"
      onClick={onClick}
    >
      <PlusIcon className="size-4 " strokeWidth={2.5} />
    </Button>
  );
}

interface SkillProps {
  skills: string[];
  onRemove: (skill: string) => void;
}

function Skills({ skills, onRemove }: SkillProps) {
  return (
    <div className="grid grid-cols-3 items-center justify-center text-xs gap-2 mt-2">
      {skills.map((skill) => (
        <div
          className="text-xs bg-muted rounded-full flex items-center justify-between px-3 py-1.5"
          key={skill}
        >
          {skill}
          <X
            onClick={() => onRemove(skill)}
            className="size-4 cursor-pointer hover:bg-muted-foreground/20 rounded-full transition-all duration-300"
            strokeWidth={2.5}
          />
        </div>
      ))}
    </div>
  );
}
