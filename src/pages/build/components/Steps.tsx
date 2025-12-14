import { scaleAnimation } from "@/lib/animations/scaleAnimation";
import useBuildResume from "@/lib/store/buildResumeState";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Education" },
  { id: 3, title: "Work Experience" },
  { id: 4, title: "Soft Skills" },
  { id: 5, title: "Languages" },
];

// #5227ff

export default function Steps() {
  const { step: activeStep } = useBuildResume();

  return (
    <div className="absolute space-y-10 inset-0 p-6 font-roboto-mono">
      {steps.map((step) => (
        <motion.div
          initial={{
            opacity: 0,
            x: step.id % 2 === 0 ? 30 : -30,

            filter: "blur(6px)",
          }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          key={step.id}
          className="flex items-center gap-2"
        >
          <div
            className={cn(
              "size-10 flex items-center justify-center rounded-full transition-all duration-500",
              step.id === activeStep
                ? "bg-indigo-500 border"
                : "border border-indigo-500 ",
              step.id < activeStep && "bg-emerald-500"
            )}
          >
            {activeStep > step.id ? (
              <motion.div
                variants={scaleAnimation}
                initial="initial"
                animate="animate"
              >
                <Check className="text-gray-100  " strokeWidth={3} />
              </motion.div>
            ) : (
              <motion.span
                variants={scaleAnimation}
                initial="initial"
                animate="animate"
                className={
                  step.id === activeStep
                    ? "text-white font-black"
                    : "text-indigo-500"
                }
              >
                {step.id}
              </motion.span>
            )}
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-thin  tracking-[2px]  ">
              STEP {step.id}
            </p>
            <p className="text-sm  text-gray-50 font-semibold uppercase tracking-[1px]">
              {step.title}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
