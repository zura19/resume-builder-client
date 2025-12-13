import { cn } from "@/lib/utils";

interface props {
  children: React.ReactNode;
  className?: string;
}
export default function Wrapper({ children, className }: props) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 sm:px-8  py-9", className)}>
      {children}
    </div>
  );
}
