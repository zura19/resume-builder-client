import { child, container } from "@/lib/animations/textAppear";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "framer-motion";

interface props {
  text: string;
  className?: string;
  textClassName?: string;
  customTextClassName?: (t: string) => string;
}

export default function AnimatedText({
  text,
  className,
  textClassName,
  customTextClassName = () => "",
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
            className={cn(textClassName, customTextClassName(word))}
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
