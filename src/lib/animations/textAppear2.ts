const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const child = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    y: 12,
    filter: "blur(6px)",
  },
  visible: () => ({
    opacity: 1,
    scale: [0.7, 1.02, 1],

    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

export { container, child };
