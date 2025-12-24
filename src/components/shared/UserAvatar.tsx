import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/lib/store/userState";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface props {
  goto?: string;
  className?: string;
}

export default function UserAvatar({ goto, className }: props) {
  const navigate = useNavigate();
  const { user } = useUser();

  function handleGo() {
    if (!goto) return;
    navigate(goto);
  }

  return (
    <Avatar
      onClick={handleGo}
      className={cn("cursor-pointer text-xs", className)}
    >
      <AvatarImage src="" />
      {user && (
        <AvatarFallback className=" font-bold">
          {user?.firstName[0].toUpperCase() + user?.lastName[0].toUpperCase()}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
