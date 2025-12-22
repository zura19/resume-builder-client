import { Star } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import SpotlightCard from "@/components/shared/SpotlightCard";

interface props {
  testimonial: {
    name: string;
    role: string;
    company: string;
    rating: number;
    content: string;
  };
}

export default function TestimonialCard({ testimonial }: props) {
  return (
    <SpotlightCard key={testimonial.name}>
      <CardContent className="pt-6 relative z-10">
        <div className="mb-4 flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-indigo-500 text-indigo-500" />
          ))}
        </div>
        <p className="mb-6 text-muted-foreground leading-relaxed">
          "{testimonial.content}"
        </p>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </CardContent>
    </SpotlightCard>
  );
}
