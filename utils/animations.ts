import { Variants, MotionProps } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════════
// 1. PAGE TOP & BREADCRUMB ANIMATIONS (PRESERVED)
// ═══════════════════════════════════════════════════════════════════════════
export const overlayAnim: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.5, delay: 0.2 } },
};

export const titleContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const titleWordVariants: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 45 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const breadcrumbNavVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.65,
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const getBreadcrumbLinkAnim = (index: number): MotionProps => ({
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.75 + index * 0.12, duration: 0.5 } },
});

export const getBreadcrumbTextAnim = (index: number): MotionProps => ({
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.75 + index * 0.12, duration: 0.5 } },
});

export const getBreadcrumbSlashAnim = (index: number): MotionProps => ({
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { delay: 0.8 + index * 0.12, duration: 0.4, ease: "backOut" } },
});

export const goldAccentAnim: MotionProps = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1, transition: { delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

export const decorativeGlowAnim: MotionProps = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 0.25, scale: 1, transition: { delay: 0.5, duration: 1.5, ease: "easeOut" } },
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. FOOTER & STRUCTURAL ANIMATIONS (PRESERVED)
// ═══════════════════════════════════════════════════════════════════════════
export const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const columnVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const linkContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const linkItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ═══════════════════════════════════════════════════════════════════════════
// 3. TEXT ANIMATIONS (HEADINGS, SUBTITLES, PARAGRAPHS)
// ═══════════════════════════════════════════════════════════════════════════
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const textBlurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] },
  },
};

export const subtitleFadeVariants: Variants = {
  hidden: { opacity: 0, letterSpacing: "0.2em" },
  visible: {
    opacity: 1,
    letterSpacing: "0.05em",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 4. ICON ANIMATIONS (HOVER, ROTATE, SPRING, PULSE)
// ═══════════════════════════════════════════════════════════════════════════
export const iconHoverSpin: MotionProps = {
  whileHover: { rotate: 360, scale: 1.15, transition: { duration: 0.6, ease: "easeInOut" } },
  whileTap: { scale: 0.9 },
};

export const iconHoverScale: MotionProps = {
  whileHover: { scale: 1.2, transition: { type: "spring", stiffness: 400, damping: 12 } },
  whileTap: { scale: 0.9 },
};

export const iconHoverWiggle: MotionProps = {
  whileHover: {
    rotate: [0, -12, 12, -8, 8, 0],
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  whileTap: { scale: 0.95 },
};

export const iconPulseGlow: MotionProps = {
  animate: {
    scale: [1, 1.08, 1],
    filter: [
      "drop-shadow(0 0 0px rgba(223, 178, 97, 0))",
      "drop-shadow(0 0 10px rgba(223, 178, 97, 0.6))",
      "drop-shadow(0 0 0px rgba(223, 178, 97, 0))",
    ],
  },
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const iconFloatAnim: MotionProps = {
  animate: {
    y: [0, -6, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const iconSpringPopVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -30 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 350, damping: 15 },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 5. BUTTON ANIMATIONS (HOVER, TAP, GLOW, ARROW NUDGE)
// ═══════════════════════════════════════════════════════════════════════════
export const buttonHoverGlow: MotionProps = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(223, 178, 97, 0.6)",
    borderRadius: "2rem",
    transition: { duration: 0.25 },
  },
  whileTap: { scale: 0.95 },
};

export const buttonLuxuryLift: MotionProps = {
  whileHover: {
    y: -4,
    boxShadow: "0 12px 25px -4px rgba(223, 178, 97, 0.4)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  whileTap: { y: 0, scale: 0.97 },
};

export const buttonMagneticHover: MotionProps = {
  whileHover: {
    scale: 1.04,
    y: -2,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
  whileTap: { scale: 0.96 },
};

export const buttonPressScale: MotionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.95, transition: { duration: 0.1 } },
};

export const buttonArrowNudge: MotionProps = {
  whileHover: {
    x: 6,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 6. IMAGE ANIMATIONS (SCALE, REVEAL, PARALLAX, FLOAT)
// ═══════════════════════════════════════════════════════════════════════════
export const imageScaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const imageParallaxVariants: Variants = {
  hidden: { scale: 1.15 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export const imageZoomHover: MotionProps = {
  whileHover: {
    scale: 1.06,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const imageBlurFadeInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 0.96 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const imageFloatAnim: MotionProps = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 0.8, 0],
  },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const imageMaskRevealVariants: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 7. CONTAINER & CARD HOVER ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.15 } },
};

export const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const cardHoverLift: MotionProps = {
  whileHover: {
    y: -8,
    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.12), 0 0 15px rgba(223, 178, 97, 0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const featureCardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.12), 0 0 20px rgba(223, 178, 97, 0.3)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const featureIconVariants: Variants = {
  hidden: { scale: 0, rotate: -25, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 15 },
  },
  hover: {
    scale: 1.25,
    rotate: [0, -12, 12, -6, 6, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
