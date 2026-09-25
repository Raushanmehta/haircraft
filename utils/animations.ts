import { Variants, MotionProps } from "framer-motion";

export const overlayAnim: MotionProps = { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 1.5, delay: 0.2 } } };
export const titleContainerVariants: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08, }, }, };
export const titleWordVariants: Variants = { hidden: { opacity: 0, y: 60, rotateX: 45, }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], }, }, };
export const breadcrumbNavVariants: Variants = { hidden: { opacity: 0, y: 20, }, visible: { opacity: 1, y: 0, transition: { delay: 0.65, duration: 0.7, ease: "easeOut", }, }, };
export const getBreadcrumbLinkAnim = (index: number): MotionProps => ({ initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0, transition: { delay: 0.75 + index * 0.12, duration: 0.5 } } });
export const getBreadcrumbTextAnim = (index: number): MotionProps => ({ initial: { opacity: 0, x: 10 }, animate: { opacity: 1, x: 0, transition: { delay: 0.75 + index * 0.12, duration: 0.5 } } });
export const getBreadcrumbSlashAnim = (index: number): MotionProps => ({ initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1, transition: { delay: 0.8 + index * 0.12, duration: 0.4, ease: "backOut" } } });
export const goldAccentAnim: MotionProps = { initial: { scaleX: 0, opacity: 0 }, animate: { scaleX: 1, opacity: 1, transition: { delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] } } };
export const decorativeGlowAnim: MotionProps = { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 0.25, scale: 1, transition: { delay: 0.5, duration: 1.5, ease: "easeOut" } } };

export const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
export const columnVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
export const linkContainerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
export const linkItemVariants = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

// 1. Text Animations
export const fadeInUpVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
export const fadeInLeftVariants: Variants = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
export const fadeInRightVariants: Variants = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } };
// 2. Image Animations
export const imageScaleUpVariants: Variants = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } } };
export const imageParallaxVariants: Variants = { hidden: { scale: 1.2 }, visible: { scale: 1, transition: { duration: 1.5, ease: "easeOut" } } };

// 3. Stagger Containers
export const staggerContainerFast: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } };
export const staggerContainerSlow: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } } };

// 4. Icon & Hover Animations (for whileHover / whileTap)
export const iconHoverSpin: MotionProps = { whileHover: { rotate: 360, scale: 1.1, transition: { duration: 0.5, ease: "easeInOut" } }, whileTap: { scale: 0.9 } };
export const cardHoverLift: MotionProps = { whileHover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", transition: { duration: 0.3 } } };
export const buttonHoverGlow: MotionProps = { whileHover: { scale: 1.05, boxShadow: "0 0 15px rgba(223, 178, 97, 0.5)", transition: { duration: 0.2 } }, whileTap: { scale: 0.95 } };
