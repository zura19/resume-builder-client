import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, X } from "lucide-react";
import type { skillType } from "@/lib/types/buildResumeTypes";
import { skillsData } from "@/constants/resume/skillsData";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface props {
  type: skillType;
  data: string[];
  label: string;
  placeholder: string;
  description: string;
  handleAdd: (type: skillType, skill: string) => void;
  handleRemove: (type: skillType, skill: string) => void;
}

export default function SkillField({
  type,
  data,
  handleAdd,
  handleRemove,
  label,
  placeholder,
  description,
}: props) {
  const [temp, setTemp] = useState("");

  const add = (skill: string) => {
    handleAdd(type, skill);
    setTemp("");
  };

  return (
    <div key={type}>
      <div className="relative">
        <Label htmlFor={type} className="font-semibold mb-2">
          {label}
        </Label>

        <Input
          disabled={data.length >= 6}
          value={temp}
          onChange={(e) =>
            e.target.value.length <= 20 && setTemp(e.target.value)
          }
          name={type}
          id={type}
          className={cn(
            "h-10 focus-visible:ring-0",
            temp.length > 0 ? "rounded-b-none" : ""
          )}
          placeholder={placeholder}
        />

        {temp.length > 0 && (
          <Button
            disabled={temp.length <= 2}
            size={"icon"}
            className="flex size-6 items-center justify-center rounded-full  absolute top-[68%] -translate-1/2 right-0 -translate-x-2"
            onClick={() => add(temp)}
          >
            <PlusIcon className="size-4 " strokeWidth={2.5} />
          </Button>
        )}

        <AnimatePresence>
          {temp && <SkillsBox handleAdd={add} temp={temp} type={type} />}
        </AnimatePresence>
      </div>
      <p className="text-xs text-muted-foreground mt-2">{description}</p>

      <div className="grid grid-cols-3 items-center justify-center text-xs gap-2 mt-2">
        {data.map((skill) => (
          <div
            className="text-xs bg-muted rounded-full flex items-center justify-between px-3 py-1.5"
            key={skill}
          >
            {skill}
            <X
              onClick={() => handleRemove(type, skill)}
              className="size-4 cursor-pointer hover:bg-muted-foreground/20 rounded-full transition-all duration-300"
              strokeWidth={2.5}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsBox({
  type,
  temp,
  handleAdd,
}: {
  type: skillType;
  temp: string;
  handleAdd: (skill: string) => void;
}) {
  const data = useMemo(
    () =>
      skillsData[type].filter((s) =>
        s.toLocaleLowerCase().includes(temp.toLocaleLowerCase())
      ),
    [temp, type]
  );

  return (
    <motion.div
      id={"skill-box-" + type}
      key={type}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 30,
      }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-0 translate-y-full left-0 w-full overflow-scroll border border-foreground/15 h-[250px] z-10 bg-card/80 backdrop-blur-md rounded-lg rounded-t-none"
    >
      {data.length > 0 ? (
        data.map((s) => (
          <div
            key={s}
            className=" hover:bg-muted text-sm text-foreground/80 py-2.5 px-4 transition-all duration-300 cursor-pointer"
            onClick={() => handleAdd(s)}
          >
            <p className="">{s}</p>
          </div>
        ))
      ) : (
        <div className="text-center pt-8">
          <p className="text-lg font-semibold">No Skills found</p>
          <p className="text-sm text-muted-foreground">
            you can still add the skill "{temp}" if you want.
          </p>
        </div>
      )}
    </motion.div>
  );
}
