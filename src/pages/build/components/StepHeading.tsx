import AnimationProvider from "@/components/shared/AnimationProvider";

interface props {
  children: React.ReactNode;
  heading: string;
  description: string;
}

export default function StepHeading(props: props) {
  const { children, heading, description } = props;
  return (
    <AnimationProvider
      duration={0.7}
      initX={-20}
      exitX={200}
      className="  h-full"
    >
      <div className="space-y-1">
        <h1 className="text-indigo-500 text-4xl font-bold">{heading}</h1>
        <p className="text-sm text-muted-foreground">
          {description}
          {/* Please provide your personal name, email, and phone number. */}
        </p>
      </div>
      <div className="mt-6 h-[85.5%]">{children}</div>
    </AnimationProvider>
  );
}
