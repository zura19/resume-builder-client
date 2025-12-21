import FormButton from "@/components/shared/FormButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import { useState } from "react";
import FeaturesField from "./FeaturesField";
import TechnologiesField from "./TechnologiesField";

interface props {
  session: "edit" | "create";
  handleClose: () => void;
  addProject?: (proj: AiGeneratedResume["projects"][0]) => void;
  editProject?: (proj: AiGeneratedResume["projects"][0]) => void;
  proj?: AiGeneratedResume["projects"][0];
}

export default function ProjectForm({
  session,
  handleClose,
  addProject,
  editProject,
  proj,
}: props) {
  const [title, setTitle] = useState<string>(proj?.title || "");
  const [features, setFeatures] = useState<string[]>(proj?.features || []);
  const [technologies, setTechnologies] = useState<string[]>(
    proj?.technologies || []
  );

  function dissabled() {
    if (!title || !features.length || !technologies.length) return true;

    return false;
  }

  function handleSubmit() {
    if (session === "create" && addProject) {
      addProject({
        title,
        features,
        technologies,
      });
    } else if (session === "edit" && editProject) {
      editProject({
        title,
        features,
        technologies,
      });
    }

    handleClose();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="font-semibold">
          Title
        </Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="university"
          id="university"
          placeholder="University Name"
        />
      </div>

      <FeaturesField
        title={proj?.title || ""}
        technologies={proj?.technologies || []}
        features={features}
        setFeatures={setFeatures}
      />

      <TechnologiesField
        technologies={technologies}
        setTechnologies={setTechnologies}
      />

      <FormButton
        onClick={handleSubmit}
        disabled={dissabled()}
        className="w-full"
      >
        {session === "edit" ? "Save Project" : "Add Project"}
      </FormButton>
    </div>
  );
}
