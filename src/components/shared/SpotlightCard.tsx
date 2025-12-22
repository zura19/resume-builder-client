import React from "react";
import {
  Card,
  //   CardContent,
  //   CardDescription,
  //   CardHeader,
  //   CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface props {
  children: React.ReactNode;
  cardClassName?: string;
  contentClassName?: string;
  spotlightColor?: string;
  borderGlowColor?: string;
}

export default function SpotlightCard({
  children,
  cardClassName,
  spotlightColor = "rgba(255, 255, 255, 0.06)",
  borderGlowColor = "rgba(255, 255, 255, 0.1)",
}: props) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Card
      className={cn(
        "spotlight-card relative group overflow-hidden  border border-border/20 bg-card/50 backdrop-blur transition-colors duration-300",
        cardClassName
      )}
      onMouseMove={handleMouseMove}
      style={{
        // @ts-expect-error mouse-x and mouse-y are custom styles
        "--mouse-x": "0px",
        "--mouse-y": "0px",
      }}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Border glow effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), ${borderGlowColor}, transparent 40%`,
          zIndex: -1,
        }}
      />
      {/* <CardContent className={cn("relative z-10", contentClassName)}> */}
      {children}
      {/* </CardContent> */}

      {/* <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-800 text-neutral-400 group-hover:text-white transition-colors duration-300">
          <Sparkles className="w-6 h-6" strokeWidth={2} />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">rir</h3>

        <p className="text-neutral-400 text-sm leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
          commodi autem nobis impedit odit, assumenda expedita eum tempora eaque
          omnis ipsam repellat fugit deserunt nesciunt tempore, illo quam
          mollitia culpa!
        </p>
      </div> */}
    </Card>
  );
}
