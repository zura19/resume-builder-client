import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="flex text-lg items-center gap-1">
      <motion.div
        animate={{ rotate: [-6, 6, -6] }}
        transition={{
          duration: 1,
          rotate: { repeat: Infinity, duration: 4, ease: "linear" },
        }}
      >
        <Sparkles
          className="size-7 text-indigo-500 transition-all duration-300 animate-pulse"
          strokeWidth={2}
        />
      </motion.div>
      <p className="text-2xl font-bold ">ResumeAI</p>
    </div>
  );
}
