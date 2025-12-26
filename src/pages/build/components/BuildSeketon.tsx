import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

export default function BuildSeketon() {
  return (
    <Skeleton className="h-full rounded-lg">
      <div className="flex items-center justify-center gap-1 text-muted-foreground absolute bg-linear-to-b from-black/10 to-black/70 inset-0 z-10 ">
        <Spinner className="size-5 animate-spin" />
        Checking...
      </div>
    </Skeleton>
  );
}
