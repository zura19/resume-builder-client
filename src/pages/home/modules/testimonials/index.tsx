import { motion } from "framer-motion";
import { testimonials } from "@/constants/homepage/testimonials";
import Section from "../../components/Section";
import TestimonialCard from "./components/TestimonialCard";

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      heading="Trusted by Job Seekers"
      description="See what our users are saying about ResumeAI"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
