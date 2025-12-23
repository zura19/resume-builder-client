import FormButton from "@/components/shared/FormButton";
import useLogout from "@/lib/hooks/useLogout";
import { useUser } from "@/lib/store/userState";

export default function Profile() {
  const { user } = useUser();
  const { logOut, isLoggingOut } = useLogout();

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6 px-4">
      <div>{JSON.stringify(user, null, 2)}</div>

      <FormButton
        loading={isLoggingOut}
        disabled={isLoggingOut}
        onClick={logOut}
        type="button"
        loadingText="Loggin out.."
      >
        Log out
      </FormButton>
    </div>
  );
}
