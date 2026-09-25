"use client";
import ProcessCard from "@/components/cards/ProcessCard";

import { motion } from "framer-motion";
import siteData from "@/data/index";
import { fadeInUpVariants, staggerContainerFast } from "@/utils/animations";

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    image: string;
}

const { process } = siteData.home;

export default function ProcessSection() {
    return (
        <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerFast}
                    className="text-center md:max-w-7xl lg:max-w-4xl mx-auto mb-6 lg:mb-8 space-y-2"
                >
                    <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            {process.subtitle}
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </motion.div>

                    <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-tight whitespace-normal md:whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {process.titlePart1} <span className="text-[#DFB261] font-normal">{process.titlePart2}</span>
                    </motion.h2>

                    <motion.p variants={fadeInUpVariants} className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                        {process.description}
                    </motion.p>
                </motion.div>

                {/* Process Steps Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerFast}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative"
                >
                    {process.steps.map((item, index) => (
                        <motion.div key={index} variants={fadeInUpVariants}>
                            <ProcessCard item={item} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}