// import { AnimatedGradient } from "../../components/AnimatedGradient";
import GetStartedBtn from "../../components/GetStartedBtn";
import Section from "../../components/Section";

export function CTASection() {
  return (
    // <section id="cta" className="relative py-24 md:py-32 ">
    //   <AnimatedGradient background="black" gradient="red" />
    //   <div className="relative mx-auto px-4">
    //     <div className="mx-auto max-w-3xl text-center">
    //       <h2 className="mb-6 text-balance leading-normal text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl gradient-silver-to-top">
    //         Ready to Build Your Future?
    //       </h2>
    //       <p className="mb-10 text-balance text-lg text-muted-foreground md:text-xl">
    //         Join thousands of professionals who have landed their dream jobs
    //         with ResumeAI. Start creating your perfect resume today.
    //       </p>
    <Section
      id="cta"
      background="black"
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
    //     </div>
    //   </div>
    // </section>
  );
}
