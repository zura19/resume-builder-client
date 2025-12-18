import type { Education, PersonalInfo } from "./buildResumeTypes";

export interface AiGeneratedResume {
  summary: string;
  personalInfo: PersonalInfo;
  education: Education[];
  experience: {
    company: string;
    position: string;
    responsibilities: string[];
    startDate: string;
    endDate?: string;
  }[];
  skills: {
    soft: string[];
    technical: string[];
    languages: string[];
  };
  projects: {
    title: string;
    technologies: string[];
    features: string[];
  }[];
}

export type ResumeType = "classic" | "modern" | "creative" | "executive";
