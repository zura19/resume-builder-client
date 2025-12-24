import GetStartedBtn from "../../components/GetStartedBtn";
import Section from "../../components/Section";

export function CTASection() {
  return (
    <Section
      id="cta"
      gradient="red"
      heading="Ready to Build Your Future?"
      description="Join thousands of professionals who have landed their dream jobs with ResumeAI. Start creating your perfect resume today."
    >
      <div className="flex flex-col items-center justify-center">
        <GetStartedBtn text="Get Started for Free" className=" rounded-md" />
        <p className="mt-4 text-sm text-muted-foreground">
          No credit card required • Free forever plan available
        </p>
      </div>
    </Section>
  );
}
