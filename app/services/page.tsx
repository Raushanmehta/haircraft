"use client";

import { motion } from "framer-motion";
import PageTopSection from "@/components/common/PageTopSection";
import { staggerContainerFast, fadeInUpVariants } from "@/utils/animations";
import siteData from "@/data/index";
import ServiceCard from "@/components/cards/ServiceCard";

const { services } = siteData;

export default function ServicePage() {
    return (
        <main>
            <PageTopSection title="Services" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" },]} />
            <section className="bg-[#121212] text-white py-8 lg:py-14 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFB261]/10 rounded-full blur-[100px] pointer-events-none"
                />

                <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainerFast}
                        className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 space-y-2">
                        <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                {services.subtitle}
                            </span>
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        </motion.div>

                        <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {services.titlePart1} <span className="text-[#DFB261] font-normal">{services.titlePart2}</span>
                        </motion.h2>

                        <motion.p variants={fadeInUpVariants} className="text-gray-400 text-sm lg:text-md leading-relaxed font-medium">
                            {services.description}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainerFast}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
                        {services.list.map((service, index) => (
                            <motion.div key={service.id} variants={fadeInUpVariants}>
                                <ServiceCard service={service} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}