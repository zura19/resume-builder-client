import { motion } from "framer-motion";
import { templates } from "@/constants/homepage/templates";
import Section from "../../components/Section";
import TemplateCard from "./components/TemplateCard";

export function TemplatesSection() {
  return (
    <Section
      id="templates"
      heading="Professional Templates"
      description="Choose from a variety of professionally designed templates"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            key={template.name}
          >
            <TemplateCard template={template} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
