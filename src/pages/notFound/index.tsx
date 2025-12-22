import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-full px-4 sm:px-6">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-white text-balance text-5xl sm:text-6xl">
          Page not found
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Button asChild className="group">
          <Link to="/">
            Go Home
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
