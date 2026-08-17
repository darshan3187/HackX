// Centralized Framer Motion variants for Global Page Transition Loader (Smooth & Slow)

export const logoVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 12,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Ultra-smooth ease-out
    },
  },
};

export const progressLineVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "100%",
    transition: {
      repeat: Infinity,
      duration: 1.3,
      ease: [0.4, 0, 0.2, 1], // Smooth ease-in-out
    },
  },
};

export const overlayVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
