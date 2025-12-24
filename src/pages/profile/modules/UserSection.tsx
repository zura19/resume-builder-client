import FormButton from "@/components/shared/FormButton";
import UserAvatar from "@/components/shared/UserAvatar";
import { Card, CardContent } from "@/components/ui/card";
import useLogout from "@/lib/hooks/useLogout";

interface props {
  user?: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export default function UserSection({ user }: props) {
  const { logOut, isLoggingOut } = useLogout();
  return (
    <Card className="px-4 py-8 bg-background/50 backdrop-blur-md">
      <CardContent className="flex items-start  justify-between">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <UserAvatar goto="/profile" className="h-24 w-24 text-2xl" />
          <div className="flex-1 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {user?.firstName} {user?.lastName}
            </h1>
            <p className="text-base text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <div>
          <FormButton
            onClick={logOut}
            loading={isLoggingOut}
            disabled={isLoggingOut}
            variant="destructive"
            loadingText="Logging out..."
            type="button"
            size="lg"
            className="mt-8"
          >
            Log Out
          </FormButton>
        </div>
      </CardContent>
    </Card>
  );
}
