import { DatePicker } from "@/components/shared/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { useState } from "react";

interface props {
  session: "edit" | "create";
  handleClose: () => void;
  addEducation?: (edu: AiGeneratedResume["education"][0]) => void;
  editEducation?: (edu: AiGeneratedResume["education"][0]) => void;
  edu?: AiGeneratedResume["education"][0];
}

const convertStrToTime = (str: string) => new Date(str.replaceAll("/", "-"));
const timeToStr = (time: Date) =>
  time.toISOString().split("T")[0].replaceAll("-", "/");

export default function EducationForm({
  session,
  handleClose,
  addEducation,
  editEducation,
  edu,
}: props) {
  const [university, setUniversity] = useState(edu?.university || "");
  const [degree, setDegree] = useState(edu?.degree || "");
  const [field, setField] = useState(edu?.fieldOfStudy || "");
  const [startDate, setStartDate] = useState(
    edu?.startDate
      ? convertStrToTime(edu.startDate)
      : new Date(new Date().getTime() - 2 * 365 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(
    edu?.endDate ? convertStrToTime(edu.endDate) : new Date()
  );
  const [stillStudying, setStillStudying] = useState(
    edu?.endDate === "Present" ? true : false
  );

  function dissabled() {
    if (!university || !degree || !field || !startDate) return true;
    if (endDate.getTime() < startDate.getTime()) return true;

    // if (session === "edit") {
    //   if (
    //     edu?.university === university &&
    //     edu?.degree === degree &&
    //     edu?.field === field &&
    //     edu?.startDate === timeToStr(startDate)
    //   )
    //     return true;
    // }

    return false;
  }

  function handleSubmit() {
    if (session === "create" && addEducation) {
      addEducation({
        university,
        degree,
        fieldOfStudy: field,
        startDate: timeToStr(startDate),
        endDate: stillStudying ? "Present" : timeToStr(endDate),
      });
    } else if (session === "edit" && editEducation) {
      editEducation({
        university,
        degree,
        fieldOfStudy: field,
        startDate: timeToStr(startDate),
        endDate: stillStudying ? "Present" : timeToStr(endDate),
      });
    }

    handleClose();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="university" className="font-semibold">
          University
        </Label>
        <Input
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          name="university"
          id="university"
          placeholder="University Name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fieldOfStudy" className="font-semibold">
          Field of Study
        </Label>
        <Input
          value={field}
          onChange={(e) => setField(e.target.value)}
          name="fieldOfStudy"
          id="fieldOfStudy"
          placeholder="Computer Science"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="degree" className="font-semibold">
          Degree
        </Label>
        <Input
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          name="degree"
          id="degree"
          placeholder="Bachelor's Degree"
        />
      </div>

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
                Still Studying?
              </label>
              <input
                className="size-3.5"
                type="checkbox"
                id="stillStudying"
                checked={stillStudying}
                onChange={(e) => setStillStudying(e.target.checked)}
              />
            </div>
          </div>
          {stillStudying ? (
            <Button
              disabled={true}
              className="w-full border"
              variant={"secondary"}
            >
              Still Studying
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
        {session === "edit" ? "Save" : "Add Education"}
      </Button>
    </div>
  );
}
