"use client";

import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
    weight: ["400", "700"],
    subsets: ["latin"],
});

import { useMotionValue, useTransform } from "framer-motion";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "0px" });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (inView) {
            const controls = animate(count, to, { duration });
            return () => controls.stop();
        }
    }, [inView, count, to, duration]);

    return <motion.span ref={nodeRef}>{rounded}</motion.span>;
}

import siteData from "@/data/index";

export default function AboutSection() {
    const { about } = siteData.home;

    return (
        <section className="relative bg-[#F5F5F3] text-[#1a1a1a] py-8 lg:py-14 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

                    {/* Left Column: Text & Stats Content (Span 6) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
                        }}
                        className="lg:col-span-6 space-y-4"
                    >
                        {/* Subtitle */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex items-center gap-3">
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                {about.subtitle}
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {about.titlePart1} <br />
                                <span className="text-[#DFB261] font-normal">
                                    {about.titlePart2}
                                </span>
                            </h2>
                        </motion.div>

                        {/* Tagline Badge */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex items-center gap-3 text-sm lg:text-md tracking-[0.25em] uppercase text-gray-500 font-medium">
                            {about.tags.map((tag, idx) => (
                                <span key={idx} className="flex items-center gap-3">
                                    <span>{tag}</span>
                                    {idx < about.tags.length - 1 && <span className="">|</span>}
                                </span>
                            ))}
                        </motion.div>

                        {/* Description Paragraphs */}
                        {about.paragraphs.map((para, idx) => (
                            <motion.p key={idx} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                                {para}
                            </motion.p>
                        ))}

                        {/* CTA Button */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="pt-2">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                                <Link
                                    href={about.cta.href}
                                    className="inline-flex items-center gap-3 bg-[#DFB261] hover:bg-black text-black hover:text-white border border-[#DFB261] hover:border-black font-medium px-10 py-4 shadow-lg shadow-[#d4af37]/20 transition-all duration-300 text-sm lg:text-md tracking-wide group">
                                    <span>{about.cta.text}</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Statistics Grid */}
                        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="flex justify-between sm:grid sm:grid-cols-3 gap-2 sm:gap-6 ">
                            {about.stats.map((stat, idx) => (
                                <div key={idx} className={idx > 0 ? "border-l border-gray-200 pl-3 sm:pl-6" : ""}>
                                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121212] font-bold"><Counter from={0} to={stat.target} duration={2.5} /><span className="text-[#DFB261]">{stat.suffix}</span></h3>
                                    <p className="text-[9px] sm:text-[11px] lg:text-xs uppercase tracking-wider text-gray-500 font-medium mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* Right Column: Overlapping Dual Image Layout (Span 6) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                        }}
                        className="lg:col-span-6 relative flex justify-center lg:justify-end"
                    >
                        {/* Background Accent Card / Frame matching image vibe */}
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }} className="absolute -top-6 -left-6 w-32 h-32 bg-[#d4af37]/15 rounded-lg -z-10" />
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } } }} className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4af37]/10 rounded-lg -z-10" />

                        <div className="grid grid-cols-12 gap-4 w-full max-w-xl items-center">
                            {/* Primary Image (Stylist at work) */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="col-span-7 relative group">
                                <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden shadow-2xl">
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        src={about.images.primary}
                                        alt="Stylist working on client hair"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Subtle Dark Gradient Overlay at Bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                            </motion.div>

                            {/* Secondary Image (Blow dry / round brush close-up) */}
                            <motion.div variants={{ hidden: { opacity: 0, x: 40, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } } }} className="col-span-5 relative pt-8 sm:pt-12 group">
                                <div className="relative h-[220px] sm:h-[320px] lg:h-[380px] overflow-hidden shadow-2xl">
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        src={about.images.secondary}
                                        alt="Hair blow drying and styling"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Script Typography watermark */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
                            whileInView={{ opacity: 0.1, rotate: -12, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="absolute -top-16 sm:-top-24 lg:-top-32 right-0 sm:right-4 lg:right-8 pointer-events-none select-none transform"
                        >
                            <span className={`${nautigal.className} text-[100px] sm:text-[130px] lg:text-[160px] text-[#DFB261]`}>{about.watermark}</span>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}