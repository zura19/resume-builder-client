import useBuildResume from "@/lib/store/buildResumeState";
import StepHeading from "../components/StepHeading";
import StepFooter from "./StepFooter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/shared/DatePicker";
import type { Education } from "@/lib/types/buildResumeTypes";
import StepModal from "../components/StepModal";
import UniversityField from "../components/UniversityField";

export default function EducationStep() {
  const { nextStep, handleAddEducation, data } = useBuildResume();

  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() - 2 * 365 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [stillStudying, setStillStudying] = useState(false);

  function add() {
    const dataToAdd: Education = {
      university,
      degree,
      fieldOfStudy,
      startDate: startDate.toLocaleDateString(),
      endDate: stillStudying ? null : endDate.toLocaleDateString(),
      stillStudying,
    };

    handleAddEducation(dataToAdd);

    setUniversity("");
    setDegree("");
    setFieldOfStudy("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStillStudying(false);
  }

  const dissableAdd =
    !university || !degree || !fieldOfStudy || !startDate || !endDate;

  function disable(): boolean {
    if (data.education.length === 0) return true;
    if (university || degree || fieldOfStudy) return true;
    return false;
  }

  return (
    <StepHeading
      heading="Education"
      description="Please provide your educational background. You can add multiple educations."
    >
      <div className="flex flex-col  gap-7">
        <div className="h-112.5 overflow-scroll space-y-7 px-1">
          <div className="flex items-center justify-between">
            <StepModal step="education" data={data.education} />

            <Button
              size={"icon-lg"}
              className="bg-indigo-600 rounded-full text-gray-100 font-bold hover:bg-indigo-500"
              disabled={dissableAdd}
              onClick={add}
            >
              <Plus className="size-5.5" strokeWidth={2.5} />
            </Button>
          </div>

          <UniversityField
            university={university}
            setUniversity={setUniversity}
          />

          {/* <div className="space-y-2">
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
          </div> */}

          <div className="space-y-2">
            <Label htmlFor="fieldOfStudy" className="font-semibold">
              Field of Study
            </Label>
            <Input
              value={fieldOfStudy}
              onChange={(e) => setFieldOfStudy(e.target.value)}
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
        </div>
      </div>
      <div className="mt-auto">
        <StepFooter
          disabledNext={disable()}
          // disabledNext={data.education.length === 0}
          handleNext={nextStep}
        />
      </div>
    </StepHeading>
  );
}
