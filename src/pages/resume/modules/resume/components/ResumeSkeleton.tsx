import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";

export default function ResumeSkeleton() {
  return (
    <div className="relative w-full h-full ">
      <div className="flex items-center justify-center gap-1 text-muted-foreground absolute bg-linear-to-b from-black/10 to-black/70 inset-0 z-10 ">
        <Loader className="animate-spin size-5" />
        <p className="font-semibold">Loading Resume...</p>
      </div>
      <Skeleton className="w-full h-full rounded-lg" />
    </div>
  );
}
