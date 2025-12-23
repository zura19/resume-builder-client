import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logOutService } from "../services/auth/logoutService";
import { toast } from "sonner";
import { useUser } from "../store/userState";

export default function useLogout() {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  const { mutateAsync: logOut, isPending: isLoggingOut } = useMutation({
    mutationFn: async () => {
      const data = await logOutService();
      return data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      clearUser();
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/login");
    },
  });

  return { logOut, isLoggingOut };
}
