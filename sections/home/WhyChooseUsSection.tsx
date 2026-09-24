"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Users, Award, Gem, ArrowRight } from "lucide-react";

interface Feature {
    number: string;
    title: string;
    description: string;
    icon: React.ElementType;
}

const features: Feature[] = [
    {
        number: "01",
        title: "Personalized Experience",
        description: "We understand your style, hair type, and preferences to create a look that's uniquely yours.",
        icon: Calendar,
    },
    {
        number: "02",
        title: "Expert & Friendly Stylists",
        description: "Our experienced barbers and stylists are passionate about grooming and dedicated to your comfort.",
        icon: Users,
    },
    {
        number: "03",
        title: "Premium Products",
        description: "We use high-quality, professional products to ensure the best results for your hair and skin.",
        icon: Award,
    },
    {
        number: "04",
        title: "Relaxing Atmosphere",
        description: "Enjoy a clean, modern, and comfortable space designed for a premium grooming experience.",
        icon: Gem,
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function WhyChooseUsSection() {
    return (
        <section className="bg-[#121212] text-white py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                    {/* Left Column: Heading & Features List (Span 6) */}
                    <motion.div
                        className="lg:col-span-6 space-y-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {/* Header info */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                <span className="text-xs lg:text-sm  uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                    WHY CHOOSE US
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                More Than a Haircut <br />
                                <span className="text-[#DFB261] font-normal">A Better You</span>
                            </h2>

                            <p className="text-gray-400 text-sm lg:text-md leading-relaxed font-medium">
                                We combine skill, style, and a passion for grooming to give you an exceptional experience every time you visit.
                            </p>
                        </motion.div>

                        {/* Features List */}
                        <div className="space-y-4">
                            {features.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={item.number}
                                        variants={itemVariants}
                                        className="flex items-start gap-6 pb-3 border-b border-white/10 group">
                                        {/* Icon Badge */}
                                        <div className="w-16 h-16 rounded-full border border-[#DFB261]/40 group-hover:border-[#DFB261] bg-[#1a1a1a] text-[#DFB261] flex items-center justify-center shrink-0 transition-colors">
                                            <IconComponent className="w-7 h-7" />
                                        </div>

                                        {/* Vertical Line Divider */}
                                        <div className="w-[1px] self-stretch bg-[#DFB261]/30 hidden sm:block mx-1"></div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center gap-3">
                                                <span className=" text-sm lg:text-xl font-bold text-[#DFB261]">
                                                    {item.number}
                                                </span>
                                                <h3 className=" text-lg sm:text-xl font-semibold text-white group-hover:text-[#DFB261] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-400 text-sm sm:text-md font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Column: Image with Floating Stats Card (Span 6) */}
                    <motion.div
                        className="lg:col-span-6 relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        {/* Outer decorative golden border frame */}
                        {/* <div className="absolute inset-0 border border-[#DFB261]/30 rounded-3xl translate-x-4 translate-y-4 pointer-events-none hidden sm:block" /> */}

                        <div className="relative w-full max-w-xl">
                            {/* Main Image Container */}
                            <div className="relative h-[440px] md:h-[500px] sm:h-[540px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop"
                                    alt="Barber styling hair"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating "Over 10+ Years of Grooming Excellence" Badge Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute bottom-4 -right-0 lg:-right-0 bg-[#1a1a1a] border border-[#DFB261]/50 p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-[160px] lg:max-w-[180px]"
                            >
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">
                                    OVER
                                </p>
                                <div className="w-10 h-[1px] bg-[#DFB261] my-2" />
                                <p className="font-serif text-6xl sm:text-7xl font-medium text-[#DFB261] my-1">
                                    10<span className="text-white">+</span>
                                </p>
                                <p className="md:text-sm text-xs uppercase tracking-wider text-gray-300 font-medium leading-snug">
                                    YEARS OF GROOMING EXCELLENCE
                                </p>
                            </motion.div>

                            {/* Action Button below image container */}
                            <div className="mt-12 flex justify-start">
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                    <Link
                                        href="/appointment"
                                        className="inline-flex items-center gap-3 bg-[#DFB261] hover:bg-[#DFB261] text-black font-medium px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg shadow-[#DFB261]/25 transition-all duration-200 text-sm tracking-wide group"
                                    >
                                        <span>Book Appointment</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}