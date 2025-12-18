import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface props {
  template: {
    name: string;
    description: string;
    color: string;
  };
}

export default function TemplateCard({ template }: props) {
  return (
    <Card
      key={template.name}
      className="group border-border/50 bg-card/50 backdrop-blur overflow-hidden hover:border-accent/50 transition-colors"
    >
      <CardHeader
        className={`h-48 bg-linear-to-br ${template.color} flex items-center justify-center`}
      >
        <FileText className="h-20 w-20 text-foreground/40" />
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="mb-2 text-lg font-bold">{template.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {template.description}
        </p>
      </CardContent>
    </Card>
  );
}
