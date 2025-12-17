import { create } from "zustand";
import type {
  PersonalInfo,
  Resume,
  Education,
  Experience,
  skillType,
  Project,
} from "../types/buildResumeTypes";
import type { ResumeType } from "../types/AiGeneratedResume";

interface ResumeState {
  step: number;
  data: Resume;
}

interface ResumeActions {
  nextStep: () => void;
  prevStep: () => void;

  handlePersonalInfo: (personalInfo: PersonalInfo) => void;
  handleAddEducation: (education: Education) => void;
  handleAddExperience: (experience: Experience) => void;
  handleAddSkill: (type: skillType, skill: string) => void;
  handleRemoveSkill: (type: skillType, skill: string) => void;
  handleAddProject: (project: Project) => void;
  handleChangeType: (type: ResumeType) => void;
}

export type ResumeStore = ResumeState & ResumeActions;

const useBuildResume = create<ResumeStore>((set, get) => ({
  step: 6,
  data: {
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [],
    experience: [],
    skills: {
      soft: [],
      languages: [],
      technical: [],
    },
    projects: [],
    type: "modern",
  },
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () =>
    set((state) => ({ step: state.step === 1 ? 1 : state.step - 1 })),

  handlePersonalInfo: (personalInfo: PersonalInfo) => {
    const state = get().data;
    return set({ data: { ...state, personalInfo } });
  },

  handleAddEducation: (education: Education) => {
    const state = get().data;
    return set({
      data: { ...state, education: [...state.education, education] },
    });
  },

  handleAddExperience: (experience: Experience) => {
    const state = get().data;
    set({ data: { ...state, experience: [...state.experience, experience] } });
  },

  handleAddSkill: (type: skillType, skill: string) => {
    const state = get().data;

    if (state.skills[type].includes(skill)) {
      return;
    }

    set({
      data: {
        ...state,
        skills: {
          ...state.skills,
          [type]: [...state.skills[type], skill],
        },
      },
    });
  },

  handleRemoveSkill: (type: skillType, skill: string) => {
    const state = get().data;
    set({
      data: {
        ...state,
        skills: {
          ...state.skills,
          [type]: state.skills[type].filter((s) => s !== skill),
        },
      },
    });
  },

  handleAddProject: (project: Project) => {
    const state = get().data;
    set({ data: { ...state, projects: [...state.projects, project] } });
  },

  handleChangeType: (type: ResumeType) => {
    const state = get().data;
    set({ data: { ...state, type } });
  },
}));

export default useBuildResume;
