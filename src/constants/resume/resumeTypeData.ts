import type { ResumeType } from "@/lib/types/AiGeneratedResume";

interface ResumeTypeDataProps {
  src: string;
  alt: string;
  type: ResumeType;
  delay: number;
}

export const resumeTypeData: ResumeTypeDataProps[] = [
  {
    src: "/resume/resume-modern.png",
    alt: "resume modern",
    type: "modern",
    delay: 0,
  },
  {
    src: "/resume/resume-classic.png",
    alt: "resume classic",
    type: "classic",
    delay: 0.2,
  },
];
