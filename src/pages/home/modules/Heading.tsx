import { motion, type Variants } from "framer-motion";

const text =
  "Build Your Resume In Minutes With" + " " + "Our AI Powered Resume Builder";

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
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: [0.5, 1.08, 1],
    rotate: i % 2 === 0 ? [-4, 1, -0.5, 0] : [4, -1, 0.5, 0],
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Heading() {
  return (
    <div className="text-6xl font-bold text-center leading-18 max-w-[80%]">
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
  );
}
