import { create } from "zustand";

interface ResumeState {
  step: number;
}

interface ResumeActions {
  nextStep: () => void;
  prevStep: () => void;
}

export type ResumeStore = ResumeState & ResumeActions;

const useBuildResume = create<ResumeStore>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () =>
    set((state) => ({ step: state.step === 1 ? 1 : state.step - 1 })),
}));

export default useBuildResume;
