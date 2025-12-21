import { AlertCircleIcon } from "lucide-react";

export default function SaveAlert() {
  return (
    <div className="text-muted-foreground flex items-center gap-1">
      <AlertCircleIcon className="size-5" />
      <p className="text-muted-foreground">
        Don't forget to Save after making any changes
      </p>
    </div>
  );
}
