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

export default function AboutSection() {
    return (
        <section className="relative bg-[#F5F5F3] text-[#1a1a1a] py-8 lg:py-14 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

                    {/* Left Column: Text & Stats Content (Span 6) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-6 space-y-3"
                    >
                        {/* Subtitle */}
                        <div className="flex items-center gap-3">
                            <span className="w-10 lg:w-16  h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                About Us
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Welcome to <br />
                            <span className="text-[#DFB261] font-normal">
                                Haicraft Salon
                            </span>
                        </h2>

                        {/* Tagline Badge */}
                        <div className="flex items-center gap-3 text-sm lg:text-md tracking-[0.25em] uppercase text-gray-500 font-medium">
                            <span>Beauty</span>
                            <span className="">|</span>
                            <span>Style</span>
                            <span className="">|</span>
                            <span>Confidence</span>
                        </div>

                        {/* Description Paragraphs */}
                        <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                            At Haicraft, we believe that great hair is more than just a style — it’s a reflection of your personality. Our expert stylists are passionate about creating looks that enhance your natural beauty and make you feel confident every day.
                        </p>

                        <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                            From precision cuts and vibrant color to advanced treatments and personalized care, we combine creativity, expertise, and premium products to give you an exceptional salon experience.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-3 bg-[#DFB261] hover:bg-[#DFB261] text-black font-medium px-10 py-4  shadow-lg shadow-[#d4af37]/20 transition-all duration-200 text-sm lg:text-md tracking-wide group">
                                    <span>About Us</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Statistics Grid */}
                        <div className="flex justify-between sm:grid sm:grid-cols-3 gap-2 sm:gap-6 ">
                            <div>
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121212] font-bold"><Counter from={0} to={20} /><span className="text-[#DFB261]">+</span></h3>
                                <p className="text-[9px] sm:text-[11px] lg:text-xs uppercase tracking-wider text-gray-500 font-medium mt-1">Years Exp</p>
                            </div>
                            <div className="border-l border-gray-200 pl-3 sm:pl-6">
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121212] font-bold"><Counter from={0} to={10} />K<span className="text-[#DFB261]">+</span></h3>
                                <p className="text-[9px] sm:text-[11px] lg:text-xs uppercase tracking-wider text-gray-500 font-medium mt-1">Clients</p>
                            </div>
                            <div className="border-l border-gray-200 pl-3 sm:pl-6">
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#121212] font-bold"><Counter from={0} to={20} /><span className="text-[#DFB261]">+</span></h3>
                                <p className="text-[9px] sm:text-[11px] lg:text-xs uppercase tracking-wider text-gray-500 font-medium mt-1">Stylists</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Overlapping Dual Image Layout (Span 6) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="lg:col-span-6 relative flex justify-center lg:justify-end"
                    >
                        {/* Background Accent Card / Frame matching image vibe */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d4af37]/15 rounded-lg -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4af37]/10 rounded-lg -z-10" />

                        <div className="grid grid-cols-12 gap-4 w-full max-w-xl items-center">

                            {/* Primary Image (Stylist at work) */}
                            <div className="col-span-7 relative group">
                                <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] overflow-hidden shadow-2xl">
                                    <img
                                        src="https://i.pinimg.com/736x/fb/3b/c0/fb3bc01991b6d3ebc24d5c2a26137d04.jpg"
                                        alt="Stylist working on client hair"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Subtle Dark Gradient Overlay at Bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Secondary Image (Blow dry / round brush close-up) */}
                            <div className="col-span-5 relative pt-8 sm:pt-12 group">
                                <div className="relative h-[220px] sm:h-[320px] lg:h-[380px] overflow-hidden shadow-2xl">
                                    <img
                                        src="https://i.pinimg.com/1200x/e7/5f/a9/e75fa9e6161665f17af8baf58e393354.jpg"
                                        alt="Hair blow drying and styling"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Decorative Script Typography watermark */}
                        <div className="absolute -top-16 sm:-top-24 lg:-top-32 right-0 sm:right-4 lg:right-8 pointer-events-none select-none opacity-10 transform -rotate-12">
                            <span className={`${nautigal.className} text-[100px] sm:text-[130px] lg:text-[160px] text-[#DFB261]`}>Beauty</span>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}