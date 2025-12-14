import type {
  Education,
  Experience,
  Project,
} from "@/lib/types/buildResumeTypes";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { shortString } from "@/lib/utils";

interface educationProps {
  step: "education";
  data: Education[];
}

interface experienceProps {
  step: "experience";
  data: Experience[];
}

interface projectsProps {
  step: "projects";
  data: Project[];
}

function StepModal({
  data,
  step,
}: educationProps | experienceProps | projectsProps) {
  return (
    <Dialog>
      <DialogTrigger className=" cursor-pointer hover:underline">
        {step === "education"
          ? "See all education"
          : step === "experience"
          ? "See all experience"
          : "See all projects"}{" "}
        ({data.length})
      </DialogTrigger>
      <DialogContent className="bg-muted/100">
        <DialogHeader>
          <DialogTitle>
            {step === "education"
              ? "All Educations"
              : step === "experience"
              ? "All Experiences"
              : "All Projects"}
          </DialogTitle>

          <DialogDescription></DialogDescription>
        </DialogHeader>

        {step === "education" &&
          data.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex gap-4 text-sm justify-between"
            >
              <p>{shortString(item.university, 40)}</p>
              <p>
                {item.startDate} - {item.stillStudying ? "Now" : item.endDate}
              </p>
            </div>
          ))}

        {step === "experience" &&
          data.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex gap-4 text-sm justify-between"
            >
              <p>{shortString(item.company, 40)}</p>
              <p>
                {item.startDate} - {item.stillWorking ? "Now" : item.endDate}
              </p>
            </div>
          ))}

        {step === "projects" &&
          data.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex gap-4 text-sm justify-between"
            >
              <p>{shortString(item.title, 40)}</p>
              {/* <p>
                {item.startDate} - {item.endDate}
              </p> */}
            </div>
          ))}
      </DialogContent>
    </Dialog>
  );
}

export default StepModal;
