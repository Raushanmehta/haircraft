"use client";

import siteData from "@/data/index";
import PageTopSection from "@/components/common/PageTopSection";
import TestimonialCard from "@/components/cards/TesmonialCard";
import { staggerContainerFast, fadeInUpVariants } from "@/utils/animations";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
    const testimonials = siteData.HairCraft.sections.testimonials.variants.HairCraftTestimonials1;
    const testimonialsList = testimonials?.list || [];

    return (
        <main>
            <PageTopSection
                title="Testimonials"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Testimonials", href: "/testimonials" },
                ]}
            />
            <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
                {/* Background Decorative Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainerFast}
                        className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 space-y-2"
                    >
                        <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                {testimonials.subtitle}
                            </span>
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        </motion.div>

                        <motion.h2
                            variants={fadeInUpVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {testimonials.titlePart1} <span className="text-[#DFB261] font-normal">{testimonials.titlePart2}</span>
                        </motion.h2>

                        <motion.p variants={fadeInUpVariants} className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                            {testimonials.description}
                        </motion.p>
                    </motion.div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                        {testimonialsList.map((testimonial, index) => (
                            <TestimonialCard key={testimonial.id || index} item={testimonial} idx={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}