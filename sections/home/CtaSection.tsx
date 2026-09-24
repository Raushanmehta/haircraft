"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, UserCog, Gem, Phone, ArrowRight } from "lucide-react";

// Variants for staggered animation on scroll
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between children animations
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }, // Smooth ease-out curve
    },
};
const modelImageUrl = "https://i.pinimg.com/736x/e8/10/e4/e810e4131f86a7d0848a9ea749087931.jpg";

export default function CtaSection() {

    return (
        <section
            className="relative w-full bg-[#121212] text-white overflow-hidden bg-cover bg-top py-10 lg:py-12"
            style={{ backgroundImage: `url(${modelImageUrl})` }}>
            {/* Gradient Overlays to ensure text is readable on the left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-0"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-0"></div>
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#121212] to-transparent z-0"></div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-4 ">
                <motion.div
                    className="max-w-2xl space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className=" w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                TRANSFORM YOUR LOOK
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Ready for a<br />
                            <span className="text-[#DFB261] font-normal">New You?</span>
                        </h2>

                        {/* Description Paragraph */}
                        <p className="text-gray-400 text-sm lg:text-md leading-relaxed font-medium">
                            Book your appointment today and let our expert stylists bring
                            out the best version of you.
                        </p>
                    </motion.div>

                    {/* Key Features Row */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
                        {[
                            { icon: CalendarDays, text: "Easy Booking" },
                            { icon: UserCog, text: "Expert Stylists" },
                            { icon: Gem, text: "Premium Hair Care" },
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 group">
                                <div className="w-14 h-14 rounded-full border-2 border-[#DFB261] flex items-center justify-center text-[#DFB261] transition-colors duration-300">
                                    <feature.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <span className="text-xs lg:text-sm  font-medium text-gray-200 tracking-wide">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons Row */}
                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <Link
                            href="/book-appointment"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#DFB261] hover:bg-[#c59b27] text-black font-medium px-8 py-4 rounded-full shadow-lg shadow-[#d4af37]/10 transition-all duration-300 group text-sm tracking-wide"
                        >
                            <span>Book An Appointment</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/consultation"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black/50 hover:bg-black border border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm tracking-wide backdrop-blur-sm"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Talk To Our Expert</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Floating Gold Badge (Moved to the right side of the screen on desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="absolute top-[30%] right-10 lg:right-[450px] xl:right-[450px] -translate-y-1/2 hidden md:flex w-36 h-36 lg:w-44 lg:h-44 rounded-full bg-[#1a1a1a]/40 border-2 border-[#DFB261] flex-col items-center justify-center text-center p-4 lg:p-6 shadow-2xl shadow-black/50 backdrop-blur-md z-20">
                    <p className="text-[9px] lg:text-[11px] uppercase tracking-widest text-gray-300 font-light">
                        BEAUTY
                    </p>
                    <p className="text-[9px] lg:text-[11px] uppercase tracking-widest text-gray-300 font-light">
                        BEGINS
                    </p>
                    <p className="text-[9px] lg:text-[11px] uppercase tracking-widest text-gray-300 font-light -mt-1">
                        WITH
                    </p>
                    <p className="font-serif text-[#ffebad] text-xl lg:text-2xl italic font-normal leading-none mt-2 lg:mt-3 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                        Great Hair
                    </p>
                    <div className="w-12 lg:w-16 h-[1px] bg-[#d4af37] mt-3 lg:mt-4"></div>
                </motion.div>
            </div>

            {/* Bottom Right "HAIR • STYLE • CONFIDENCE" Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-6 right-8 lg:right-16 hidden lg:flex items-center gap-6 text-xs md:text-sm tracking-widest text-white z-10"
            >
                <div className="w-12 h-[1.5px] bg-white"></div>
                <span>HAIR</span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span>STYLE</span>
                <span className="w-1 h-1 rounded-full bg-white"></span>
                <span>CONFIDENCE</span>
            </motion.div>
        </section>
    );
}