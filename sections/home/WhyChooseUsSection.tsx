"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Users, Award, Gem, ArrowRight } from "lucide-react";

import siteData from "@/data/index";
import * as Icons from "lucide-react";
import { staggerContainerFast, fadeInUpVariants, fadeInLeftVariants, fadeInRightVariants, buttonHoverGlow } from "@/utils/animations";

const { whyChooseUs } = siteData.home;



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
                        variants={staggerContainerFast}
                    >
                        {/* Header info */}
                        <motion.div variants={fadeInUpVariants} className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                <span className="text-xs lg:text-sm  uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                    {whyChooseUs.subtitle}
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {whyChooseUs.titlePart1} <br />
                                <span className="text-[#DFB261] font-normal">{whyChooseUs.titlePart2}</span>
                            </h2>

                            <p className="text-gray-400 text-sm lg:text-md leading-relaxed font-medium">
                                {whyChooseUs.description}
                            </p>
                        </motion.div>

                        {/* Features List */}
                        <div className="space-y-4">
                            {whyChooseUs.features.map((item, index) => {
                                const IconComponent = (Icons as any)[item.icon] || Icons.Check;
                                return (
                                    <motion.div
                                        key={item.number}
                                        variants={fadeInLeftVariants}
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
                                    src={whyChooseUs.image}
                                    alt="Barber styling hair"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating Stats Badge Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute bottom-4 -right-0 lg:-right-0 bg-[#1a1a1a] border border-[#DFB261]/50 p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-[160px] lg:max-w-[180px]"
                            >
                                <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">
                                    {whyChooseUs.stats.prefix}
                                </p>
                                <div className="w-10 h-[1px] bg-[#DFB261] my-2" />
                                <p className="font-serif text-6xl sm:text-7xl font-medium text-[#DFB261] my-1">
                                    {whyChooseUs.stats.number}<span className="text-white">{whyChooseUs.stats.suffix}</span>
                                </p>
                                <p className="md:text-sm text-xs uppercase tracking-wider text-gray-300 font-medium leading-snug">
                                    {whyChooseUs.stats.text}
                                </p>
                            </motion.div>

                            {/* Action Button below image container */}
                            <div className="mt-12 flex justify-start">
                                <motion.div {...buttonHoverGlow}>
                                    <Link
                                        href={whyChooseUs.cta.href}
                                        className="inline-flex items-center gap-3 bg-[#DFB261] hover:bg-[#DFB261] text-black font-medium px-4 md:px-8 py-3 md:py-4 rounded-full shadow-lg shadow-[#DFB261]/25 transition-all duration-200 text-sm tracking-wide group"
                                    >
                                        <span>{whyChooseUs.cta.text}</span>
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