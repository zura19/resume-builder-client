import { AnimatedGradient } from "../../components/AnimatedGradient";
import GetStartedBtn from "../../components/GetStartedBtn";

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 md:py-32 ">
      <AnimatedGradient background="black" gradient="red" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl gradient-silver-to-top">
            Ready to Build Your Future?
          </h2>
          <p className="mb-10 text-balance text-lg text-muted-foreground md:text-xl">
            Join thousands of professionals who have landed their dream jobs
            with ResumeAI. Start creating your perfect resume today.
          </p>
          <GetStartedBtn text="Get Started for Free" className=" rounded-md" />
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Free forever plan available
          </p>
        </div>
      </div>
    </section>
  );
}
