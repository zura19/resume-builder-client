import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Heading from "../../Heading";
import GetStartedBtn from "../../../components/GetStartedBtn";

export default function GetStarted() {
  return (
    <div className="h-full flex flex-col gap-8 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          y: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
        }}
        className="bg-muted/20 backdrop-blur-sm border border-border px-8  py-2 rounded-full hidden  sm:flex sm:items-center sm:gap-4 "
      >
        <motion.div
          animate={{ scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 1,
            scale: { repeat: Infinity, duration: 2, ease: "linear" },
          }}
          // className="hidden sm:block"
        >
          <Sparkles className="size-5 text-indigo-500" />
        </motion.div>
        <span className="text-sm font-semibold">
          Powered by Advanced AI Technology
        </span>
      </motion.div>

      <Heading />

      <div className="flex items-center gap-4">
        <GetStartedBtn text="Get Started" />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Link to="/about">
            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full font-medium"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
