import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AtomIcon } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center">
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
        className="flex items-center gap-2 bg-black/10 backdrop-blur-sm border border-border px-8  py-2 rounded-full"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            rotate: {
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            },
          }}
        >
          <AtomIcon />
        </motion.div>
        <p className="text-sm font-semibold"> We are working on it</p>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-5xl font-bold text-center leading-16 "
      >
        Build your resume in minutes with <br /> our AI powered resume builder
      </motion.h1>

      <div className="flex items-center gap-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Button size={"lg"} className="rounded-full font-medium">
            Get Started
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Button
            size={"lg"}
            variant={"outline"}
            className="rounded-full font-medium"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
