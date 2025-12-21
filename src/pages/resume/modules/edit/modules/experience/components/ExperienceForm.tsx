import { DatePicker } from "@/components/shared/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { useState } from "react";
import ResponsebilitiesField from "./ResponsebilitiesField";

interface props {
  session: "edit" | "create";
  handleClose: () => void;
  addExperience?: (edu: AiGeneratedResume["experience"][0]) => void;
  editExperience?: (edu: AiGeneratedResume["experience"][0]) => void;
  exp?: AiGeneratedResume["experience"][0];
}

const convertStrToTime = (str: string) => new Date(str.replaceAll("/", "-"));
const timeToStr = (time: Date) => time.toLocaleDateString();

export default function ExperienceForm({
  exp,
  session,
  handleClose,
  addExperience,
  editExperience,
}: props) {
  const [company, setCompany] = useState(exp?.company || "");
  const [position, setPosition] = useState(exp?.position || "");
  const [responsibilities, setResponsibilities] = useState(
    exp?.responsibilities || []
  );

  const [startDate, setStartDate] = useState(
    exp?.startDate
      ? convertStrToTime(exp.startDate)
      : new Date(new Date().getTime() - 2 * 365 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(
    exp?.endDate ? convertStrToTime(exp.endDate) : new Date()
  );
  const [stillWorking, setStillWorking] = useState(
    exp?.endDate === "Present" ? true : false
  );

  function dissabled() {
    if (!company || !position || !responsibilities.length || !startDate)
      return true;
    if (endDate.getTime() < startDate.getTime()) return true;

    return false;
  }

  function handleSubmit() {
    if (session === "create" && addExperience) {
      addExperience({
        company,
        position,
        responsibilities,
        startDate: timeToStr(startDate),
        endDate: stillWorking ? "Present" : timeToStr(endDate),
      });
    } else if (session === "edit" && editExperience) {
      editExperience({
        company,
        position,
        responsibilities,
        startDate: timeToStr(startDate),
        endDate: stillWorking ? "Present" : timeToStr(endDate),
      });
    }

    handleClose();
  }

  return (
    <div className="overflow-scroll h-[490px]  flex flex-col  gap-7 px-1">
      <div className="space-y-2">
        <Label htmlFor="company" className="font-semibold">
          Company
        </Label>
        <Input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          name="company"
          id="company"
          placeholder="company Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position" className="font-semibold">
          Position
        </Label>
        <Input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          id="position"
          placeholder="Front-end Developer"
        />
      </div>

      <ResponsebilitiesField
        company={exp?.company as string}
        position={exp?.position as string}
        responsibilities={responsibilities}
        setResponsibilities={setResponsibilities}
      />

      <div className="flex w-full gap-4">
        <div className="space-y-2 w-full">
          <Label htmlFor="startDate" className="font-semibold">
            Start Date
          </Label>

          <DatePicker
            disabled={(d) => d > new Date() || d < new Date("1900-01-01")}
            date={startDate}
            setDate={setStartDate}
          />
        </div>

        <div className="space-y-1.5 w-full">
          <div className="flex justify-between items-center">
            <Label htmlFor="endDate" className="font-semibold">
              End Date
            </Label>
            <div className="flex text-sm items-center gap-1">
              <label htmlFor="stillStudying" className="text-xs">
                Still Working?
              </label>
              <input
                className="size-3.5"
                type="checkbox"
                id="stillWorking"
                checked={stillWorking}
                onChange={(e) => setStillWorking(e.target.checked)}
              />
            </div>
          </div>
          {stillWorking ? (
            <Button
              disabled={true}
              className="w-full border"
              variant={"secondary"}
            >
              Still Working
            </Button>
          ) : (
            <DatePicker
              date={endDate}
              disabled={(d) => d < startDate}
              setDate={setEndDate}
            />
          )}
        </div>
      </div>
      <Button onClick={handleSubmit} disabled={dissabled()} className="w-full">
        {session === "edit" ? "Save" : "Add Experience"}
      </Button>
    </div>
  );
}
