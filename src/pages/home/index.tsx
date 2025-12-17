import { FeaturesSection } from "./modules/features";
import { HowItWorksSection } from "./modules/how-it-works";
import { TestimonialsSection } from "./modules/testimonials";
import { TemplatesSection } from "./modules/templates";
import { CTASection } from "./modules/cta";
import HeroSection from "./modules/hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TemplatesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
