import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
// import EducationForm from "./EducationForm";
import { useState } from "react";
import ProjectForm from "./ProjectForm";

interface props {
  session: "edit" | "create";
  addProject?: (proj: AiGeneratedResume["projects"][0]) => void;
  editProject?: (edu: AiGeneratedResume["projects"][0]) => void;
  proj?: AiGeneratedResume["projects"][0];
}

export default function ProjectsModal(props: props) {
  const [open, setOpen] = useState(false);
  const { session, addProject, proj, editProject } = props;

  function handleClose() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {session === "edit" ? (
          <Button size={"icon-sm"} className="size-6 rounded-sm">
            <EditIcon className="size-3" />
          </Button>
        ) : (
          <Button className="flex items-center text-foreground ml-auto rounded-full bg-indigo-500 hover:bg-indigo-600">
            <span className="font-medium">Add Project</span>
            <PlusIcon className="size-5" strokeWidth={2.5} />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {session === "edit" ? "Edit Project" : "Add Project"}
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ProjectForm
          session={session}
          handleClose={handleClose}
          addProject={addProject}
          editProject={editProject}
          proj={proj}
        />
        {/* <EducationForm
          handleClose={handleClose}
          session={session}
          addEducation={addEducation}
          editEducation={editEducation}
          edu={edu}
        /> */}
      </DialogContent>
    </Dialog>
  );
}
