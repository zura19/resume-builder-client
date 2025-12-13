import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

interface props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  //   disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
}

export default function FormButton({
  children,
  className,
  onClick,
  loading,
  loadingText = "Loading...",
  type = "submit",
  variant = "default",
  size = "default",
}: props) {
  return (
    <Button
      className={className}
      onClick={onClick}
      disabled={loading}
      type={type}
      variant={variant}
      size={size}
    >
      {loading ? (
        <>
          <Spinner />
          <span className="ml-2">{loadingText}</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
}
