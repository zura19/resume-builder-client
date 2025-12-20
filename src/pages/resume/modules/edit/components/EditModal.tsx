import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import Edit from "..";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";

interface props {
  resumeData: AiGeneratedResume;
  id: string;
}

export default function EditModal({ resumeData, id }: props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-full rounded-b-none  lg:hidden"
          variant={"secondary"}
        >
          Edit Resume
          <EditIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className=" overflow-scroll max-h-[90vh]  sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="">Resume Editor</DialogTitle>
          <DialogDescription className="">
            If you are not satisfied with the generated resume, you can edit
            your resume details here.
          </DialogDescription>
        </DialogHeader>
        <Edit type="modal" id={id} resumeData={resumeData} />
      </DialogContent>
    </Dialog>
  );
}
