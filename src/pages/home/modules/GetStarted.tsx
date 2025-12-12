import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { AtomIcon } from "lucide-react";

const text =
  "Build Your Resume In Minutes With" + " " + "Our AI Powered Resume Builder";

export default function GetStarted() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 12,
      filter: "blur(6px)",
      scale: 0.8,
    },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: [0.8, 1.08, 1],
      rotate: i % 2 === 0 ? [-8, 2, -1, 0] : [8, -2, 1, 0],
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

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
      <div className="text-5xl font-bold text-center leading-16 max-w-[70%]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className=" flex flex-wrap gap-2 justify-center"
        >
          {text.split(" ").map((word, i) => (
            <motion.span key={i} custom={i} variants={child as Variants}>
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>

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
