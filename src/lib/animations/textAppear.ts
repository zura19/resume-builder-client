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
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export { container, child };
