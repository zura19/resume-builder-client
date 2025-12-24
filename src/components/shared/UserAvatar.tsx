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
    <Avatar onClick={handleGo} className={cn("cursor-pointer", className)}>
      <AvatarImage src="https://clipart-library.com/8300/2368/User-Profile-PNG-Clipart.png" />
      {user && (
        <AvatarFallback>
          {user?.firstName[0].toUpperCase() + user?.lastName[0].toUpperCase()}
        </AvatarFallback>
      )}
    </Avatar>
  );
}
