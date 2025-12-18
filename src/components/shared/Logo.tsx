import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Logo() {
  const location = useLocation();

  function handleScroll() {
    if (location.pathname !== "/") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link to="/" onClick={handleScroll} className="flex items-center gap-1">
      <motion.div
        animate={{ rotate: [-6, 6, -6] }}
        transition={{
          duration: 1,
          rotate: { repeat: Infinity, duration: 4, ease: "linear" },
        }}
      >
        <Sparkles
          className="text-indigo-500 transition-all duration-300 size-5 sm:size-6 md:size-7 animate-pulse"
          strokeWidth={2}
        />
      </motion.div>
      <p className="font-bold text-lg sm:text-xl md:text-2xl">ResumeAI</p>
    </Link>
  );
}
