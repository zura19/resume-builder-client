import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface props {
  text: string;
  className?: string;
}

export default function GetStartedBtn({ text, className }: props) {
  const navigate = useNavigate();

  function handleStart() {
    const isAuthenticated = true;
    return isAuthenticated ? navigate("/build") : navigate("/login");
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Button
        onClick={handleStart}
        size={"lg"}
        className={`rounded-full font-medium ${className} group`}
      >
        {text}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        {/* <ArrowRight className="size-4 ml-1" strokeWidth={2.5} /> */}
      </Button>
    </motion.div>
  );
}
