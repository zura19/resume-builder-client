import { cn } from "@/lib/utils";

interface props {
  background?: string;
  gradient?: string;
}

function returnBg(background: string) {
  switch (background) {
    case "black":
      return "bg-background/75 ";
    default:
      return "";
  }
}

function returnGradient(gradient: string) {
  switch (gradient) {
    case "red":
      return " from-rose-500/30 via-pink-500/70  to-rose-500/30 ";
    default:
      return " from-accent/30 via-indigo-500/70  to-accent/30 ";
  }
}
export function AnimatedGradient({ background = "", gradient = "" }: props) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none -z-10 ${returnBg(
        background
      )}`}
    >
      <div
        className={cn(
          "absolute h-125 w-125 rounded-full bg-linear-to-r blur-[120px] animate-pulse",
          returnGradient(gradient)
        )}
      />
    </div>
  );
}
