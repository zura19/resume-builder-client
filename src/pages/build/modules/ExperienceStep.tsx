import useBuildResume from "@/lib/store/buildResumeState";
import StepHeading from "../components/StepHeading";
import StepFooter from "./StepFooter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/shared/DatePicker";
import type { Experience } from "@/lib/types/buildResumeTypes";
import StepModal from "../components/StepModal";
import { Textarea } from "@/components/ui/textarea";

export default function ExperienceStep() {
  const { nextStep, handleAddExperience, data } = useBuildResume();

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(
    new Date(new Date().getTime() - 2 * 365 * 24 * 60 * 60 * 1000)
  );
  const [endDate, setEndDate] = useState(new Date());
  const [stillWorking, setStillWorking] = useState(false);

  function add() {
    const dataToAdd: Experience = {
      company,
      position,
      description,
      startDate: startDate.toLocaleDateString(),
      endDate: stillWorking ? null : endDate.toLocaleDateString(),
      stillWorking: stillWorking,
    };

    handleAddExperience(dataToAdd);

    setCompany("");
    setPosition("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
  }

  const dissableAdd = !company || !position || !startDate || !endDate;

  function disable(): boolean {
    if (data.experience.length === 0) return true;
    if (company || position || description) return true;
    return false;
  }

  return (
    <StepHeading
      heading="Experience"
      description="Please provide your work experience. You can add multiple experiences."
    >
      <div className="flex flex-col gap-7">
        <div className=" h-112.5 overflow-scroll space-y-7  px-1">
          <div className="flex items-center justify-between">
            <StepModal step="experience" data={data.experience} />

            <Button
              size={"icon-lg"}
              className="bg-indigo-600 rounded-full text-gray-100 font-bold hover:bg-indigo-500"
              disabled={dissableAdd}
              onClick={add}
            >
              <Plus className="size-5.5" strokeWidth={2.5} />
            </Button>
          </div>

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

          <div className="space-y-2 relative">
            <Label htmlFor="description" className="font-semibold">
              Description
            </Label>
            <Textarea
              className="resize-none"
              value={description}
              onChange={(e) =>
                e.target.value.length <= 100 && setDescription(e.target.value)
              }
              name="description"
              id="description"
              placeholder="In charge of front-end development..."
            />
            <div className="absolute bottom-3.5 right-2 text-[10px]   bg-muted px-2 text-muted-foreground py-1 rounded-2xl border">
              {description.length}/100
            </div>
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
        </div>
      </div>
      <div className="mt-auto">
        <StepFooter
          disabledNext={disable()}
          // disabledNext={data.experience.length === 0}
          handleNext={nextStep}
        />
      </div>
    </StepHeading>
  );
}
