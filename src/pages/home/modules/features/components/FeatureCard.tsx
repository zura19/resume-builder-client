import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface props {
  feature: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

export default function FeatureCard({ feature }: props) {
  const Icon = feature.icon;
  return (
    <Card
      key={feature.title}
      className="border-border/50 bg-card/50 backdrop-blur"
    >
      <CardHeader>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
          <Icon className="h-6 w-6 text-indigo-500" />
        </div>
        <CardTitle className="text-xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
