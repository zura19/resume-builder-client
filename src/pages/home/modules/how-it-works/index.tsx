import { motion } from "framer-motion";
import { steps } from "@/constants/homepage/how-it-works";
import Section from "../../components/Section";
import HowItWorksCard from "./components/HowItWorksCard";

export function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      heading="How It Works"
      description="Three simple steps to create your perfect resume"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => {
          return (
            <motion.div
              key={step.step}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              animate={{ y: i % 2 === 0 ? [-20, 15, -20] : [20, -15, 20] }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                y: {
                  delay: 0,
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            >
              <HowItWorksCard step={step} i={i} length={steps.length} />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
