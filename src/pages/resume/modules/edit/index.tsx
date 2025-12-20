import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Summary from "./modules/summary";
import PersonalInfo from "./modules/personal-info";
import Skills from "./modules/skills";

interface props {
  resumeData: AiGeneratedResume;
  type: "modal" | "page";
  disabledToOpen?: boolean;
  id: string;
}

export default function Edit({
  resumeData,
  type = "page",
  disabledToOpen,
  id,
}: props) {
  const triggerClassName = "text-md font-medium";

  const { experience, projects, education } = resumeData || {};
  return (
    <div
      className={`h-full w-full bg-background ${
        type === "modal" ? "p-0" : "p-6 border rounded-lg"
      }  overflow-y-scroll overflow-x-hidden `}
    >
      {type === "page" && (
        <div className="flex flex-col gap-0 mb-4">
          <h1 className="text-xl font-bold">Resume Editor</h1>
          <p className="text-muted-foreground text-sm">
            If you are not satisfied with the generated resume, you can edit
            your resume details here.
          </p>
        </div>
      )}
      <Accordion type="single" collapsible>
        <AccordionItem disabled={disabledToOpen} value="personal-info">
          <AccordionTrigger className={triggerClassName}>
            Personal Info
          </AccordionTrigger>
          <AccordionContent>
            <PersonalInfo id={id} resumeData={resumeData} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem disabled={disabledToOpen} value="summary">
          <AccordionTrigger className={triggerClassName}>
            Summary
          </AccordionTrigger>
          <AccordionContent>
            <Summary id={id} resumeData={resumeData} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem disabled={disabledToOpen} value="experience">
          <AccordionTrigger className={triggerClassName}>
            Experience
          </AccordionTrigger>
          <AccordionContent>
            <div>{JSON.stringify(experience)}</div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem disabled={disabledToOpen} value="education">
          <AccordionTrigger className={triggerClassName}>
            Education
          </AccordionTrigger>
          <AccordionContent>
            <div>{JSON.stringify(education)}</div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem disabled={disabledToOpen} value="skills">
          <AccordionTrigger className={triggerClassName}>
            Skills
          </AccordionTrigger>
          <AccordionContent>
            <Skills id={id} resumeData={resumeData} />
            {/* <div>{JSON.stringify(skills)}</div> */}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem disabled={disabledToOpen} value="projects">
          <AccordionTrigger className={triggerClassName}>
            Projects
          </AccordionTrigger>
          <AccordionContent>
            <div>{JSON.stringify(projects)}</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// function Item(){

// }
