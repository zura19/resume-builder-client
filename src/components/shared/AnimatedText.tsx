import { child, container } from "@/lib/animations/textAppear";
import { motion, type Variants } from "framer-motion";

interface props {
  text: string;
  className?: string;
  textClassName?: string;
}

export default function AnimatedText({
  text,
  className,
  textClassName,
}: props) {
  return (
    <div className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className=" flex flex-wrap gap-2 justify-center "
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            className={textClassName}
            key={i}
            custom={i}
            variants={child as Variants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
