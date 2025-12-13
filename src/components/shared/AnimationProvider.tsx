import { motion, type Easing } from "framer-motion";

interface props {
  children: React.ReactNode;
  initY?: number;
  initX?: number;
  endY?: number | number[];
  endX?: number | number[];
  duration?: number;
  delay?: number;
  ease?: Easing;
  className?: string;
}
function AnimationProvider(props: props) {
  const {
    children,
    initY,
    initX,
    endY,
    endX,
    duration,
    ease,
    delay,
    className,
  } = props;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initY ?? 0, x: initX ?? 0 }}
      animate={{ opacity: 1, y: endY ?? 0, x: endX ?? 0 }}
      transition={{
        delay: delay ?? 0,
        duration: duration ?? 1,
        ease: ease || "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimationProvider;
