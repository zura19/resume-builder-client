import { ErrorComponent } from "@/components/shared/ErrorComponents";
// import FormButton from "@/components/shared/FormButton";
import Wrapper from "@/components/shared/Wrapper";
// import useLogout from "@/lib/hooks/useLogout";
import { getProfileDataService } from "@/lib/services/user/profileDataService";
import { useUser } from "@/lib/store/userState";
import { useQuery } from "@tanstack/react-query";
import { ProfileSkeleton } from "./components/ProfileSkeleton";
// import UserAvatar from "@/components/shared/UserAvatar";
// import { Card, CardContent } from "@/components/ui/card";
import ResumeSection from "./modules/ResumeSection";
import UserSection from "./modules/UserSection";
// import { Button } from "@/components/ui/button";

export default function Profile() {
  const { user: logged } = useUser();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["user", logged?.id],
    queryFn: async () => await getProfileDataService(),
  });
  // const { logOut, isLoggingOut } = useLogout();

  if (isError)
    return (
      <div className="h-full flex items-center justify-center">
        <ErrorComponent message={error.message} onRetry={refetch} />
      </div>
    );

  const { user, resumes } = data?.data || {};

  if (!isError)
    return (
      <Wrapper>
        {isLoading && <ProfileSkeleton />}
        {!isLoading && (
          <div className=" space-y-12">
            <UserSection user={user} />
            <ResumeSection resumes={resumes} />
          </div>
        )}
      </Wrapper>
    );
}
