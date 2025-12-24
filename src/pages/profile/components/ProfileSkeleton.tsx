import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProfileSkeleton() {
  return (
    // <div className="min-h-screen bg-background">
    <div className="">
      {/* User Profile Skeleton */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Skeleton className="h-24 w-24 rounded-full " />

            <div className="flex-1 space-y-3">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-5 w-48" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resumes Section Skeleton */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="space-y-3">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
}
