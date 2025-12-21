import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { EditIcon, PlusIcon } from "lucide-react";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";

interface props {
  session: "edit" | "create";
  exp?: AiGeneratedResume["experience"][0];
  addExperience?: (exp: AiGeneratedResume["experience"][0]) => void;
  editExperience?: (exp: AiGeneratedResume["experience"][0]) => void;
}

export default function ExperienceModal(props: props) {
  const [open, setOpen] = useState(false);
  const { session, addExperience, exp, editExperience } = props;

  const closeModal = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {session === "edit" ? (
          <Button size={"icon-sm"} className="size-6 rounded-sm">
            <EditIcon className="size-3" />
          </Button>
        ) : (
          <Button className="flex items-center text-foreground ml-auto rounded-full bg-indigo-500 hover:bg-indigo-600">
            <span className="font-medium">Add Experience</span>
            <PlusIcon className="size-5" strokeWidth={2.5} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {session === "edit" ? "Edit Education" : "Add Education"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ExperienceForm
          session={session}
          addExperience={addExperience}
          editExperience={editExperience}
          exp={exp}
          handleClose={closeModal}
        />
      </DialogContent>
    </Dialog>
  );
}
