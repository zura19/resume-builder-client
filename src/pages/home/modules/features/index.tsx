import { motion } from "framer-motion";
import { features } from "@/constants/homepage/features";
import Section from "../../components/Section";
import FeatureCard from "./components/featureCard";

export function FeaturesSection() {
  return (
    <Section
      id="features"
      heading="Everything You Need to Land Your Dream Job"
      description="Powerful AI features designed to help you create resumes that get results"
      background="black"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: [20, 0] }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className=" rounded-lg"
            >
              <FeatureCard feature={feature} />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
