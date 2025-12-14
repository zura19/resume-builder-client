export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

export interface Education {
  university: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  stillStudying: boolean;
}

export interface Experience {
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string | null;
  stillWorking: boolean;
}

export type skillType = "soft" | "languages" | "technical";

export interface Skills {
  soft: string[];
  languages: string[];
  technical: string[];
}

export interface Project {
  title: string;
  description: string;
}

// export type SoftSkill = string;

export interface Resume {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skills;
  projects: Project[];
}
