import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface props {
  step: {
    step: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  i: number;
  length: number;
}

export default function HowItWorksCard({ step, i }: props) {
  const Icon = step.icon;
  return (
    <Card
      key={step.step}
      className="relative border-border/50 bg-card/50 backdrop-blur"
    >
      <CardContent className="pt-12 pb-8 px-6">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mx-auto">
          <Icon className="h-8 w-8 text-indigo-500" />
        </div>
        <div className="text-center">
          <div className="mb-3 text-sm font-mono text-indigo-500">
            Step {step.step}
          </div>
          <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </CardContent>
      {i < length - 1 && (
        <div className="hidden md:block absolute top-1/2 -right-4 h-0.5 w-8 bg-border/50" />
      )}
    </Card>
  );
}
