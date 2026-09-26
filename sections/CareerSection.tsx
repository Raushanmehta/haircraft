"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";
import { fadeInUpVariants, textContainerVariants, buttonLuxuryLift } from "@/utils/animations";
import siteData, { HairCraftCareerData, SectionProps } from "@/data/index";
import JobOpenCard from "@/components/cards/JobOpenCard";

function renderIcon(icon: any, defaultIcon: React.ElementType, className = "w-4 h-4") {
    if (!icon) {
        const Fallback = defaultIcon;
        return <Fallback className={className} />;
    }
    if (typeof icon === "string") {
        const cleanName = icon.trim();
        const capitalized = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
        const Comp =
            (LucideIcons as Record<string, any>)[cleanName] ||
            (LucideIcons as Record<string, any>)[capitalized] ||
            (FaIcons as Record<string, any>)[cleanName] ||
            (Fa6Icons as Record<string, any>)[cleanName] ||
            (IoIcons as Record<string, any>)[cleanName] ||
            (Io5Icons as Record<string, any>)[cleanName] ||
            (RiIcons as Record<string, any>)[cleanName] ||
            (MdIcons as Record<string, any>)[cleanName] ||
            (BsIcons as Record<string, any>)[cleanName] ||
            (TbIcons as Record<string, any>)[cleanName] ||
            defaultIcon;
        return <Comp className={className} />;
    }
    const Comp = icon;
    return <Comp className={className} />;
}

export default function CareerSection({
    data,
    className = "",
}: SectionProps<HairCraftCareerData>) {
    const content = data || siteData.career;

    const whyWorkWithUs = content?.whyWorkWithUs;
    const dontSeeFit = content?.dontSeeFit;
    const jobsList = content?.jobs || [];
    const firstJobId = jobsList[0]?.id || "senior-hair-stylist";

    return (
        <section className={`bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden ${className}`}>
            {/* Background Decorative Glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Current Job Openings List (Span 7) */}
                    <div className="lg:col-span-7 space-y-2 lg:space-y-4">

                        {/* Section Header */}
                        <motion.div
                            variants={textContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            <motion.div variants={fadeInUpVariants} className="flex items-center gap-3">
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                    {content?.subtitle || "JOIN OUR TEAM"}
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUpVariants}
                                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121212] leading-tight mt-2"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {content?.title || "Current Job Openings"}
                            </motion.h1>

                            <motion.div variants={fadeInUpVariants} className="w-12 h-[2px] bg-[#DFB261] my-3" />

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium"
                            >
                                {content?.description ||
                                    "We're always looking for talented, passionate and motivated individuals to join our growing team. Explore our latest opportunities below."}
                            </motion.p>
                        </motion.div>

                        {/* Job Listings Cards */}
                        <div className="space-y-4">
                            {jobsList.map((job: any, index: number) => (
                                <JobOpenCard
                                    key={job.id}
                                    job={job}
                                    index={index}
                                    applyButton={content?.buttons?.apply}
                                />
                            ))}
                        </div>

                    </div>

                    {/* Right Column: Why Work With Us & General Application (Span 5) */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Why Work With Us Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{
                                y: -4,
                                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1), 0 0 20px rgba(223,178,97,0.25)",
                            }}
                            className="bg-[#F9F4EE] rounded-lg p-5 sm:p-6 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4 cursor-pointer"
                        >
                            <div>
                                <h3
                                    className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {whyWorkWithUs?.title || "Why Work With Us?"}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#DFB261] mt-2" />
                            </div>

                            <div className="space-y-4">
                                {whyWorkWithUs?.benefits?.map((b: any, idx: number) => (
                                    <div key={idx} className="flex items-start gap-2 lg:gap-4 group">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.3 }}
                                            className="lg:w-14 lg:h-14 w-10 h-10 rounded-full bg-[#DFB261] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:shadow-md cursor-pointer"
                                        >
                                            {renderIcon(b.icon, LucideIcons.Gem, "lg:w-7 lg:h-7 w-5 h-5")}
                                        </motion.div>
                                        <div>
                                            <h4 className="text-sm lg:text-lg font-semibold text-[#121212]">
                                                {b.title}
                                            </h4>
                                            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                                                {b.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Don't See a Fit? Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{
                                y: -4,
                                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1), 0 0 20px rgba(223,178,97,0.25)",
                            }}
                            className="bg-[#F9F4EE] rounded-lg p-5 sm:p-6 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4 cursor-pointer"
                        >
                            <div>
                                <h3
                                    className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {dontSeeFit?.title || "Don't See a Fit?"}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#DFB261] mt-2" />
                            </div>

                            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                                {dontSeeFit?.description ||
                                    "We're always open to talented individuals who are passionate about beauty, hair craft, and wellness. Send us your resume and we'll keep it on file for future openings."}
                            </p>

                            <div className="pt-1">
                                <motion.div {...buttonLuxuryLift} className="w-full">
                                    <Link
                                        href={`/career/${firstJobId}`}
                                        className="inline-flex items-center justify-between w-full border border-[#DFB261] hover:bg-[#DFB261] text-[#121212] hover:text-black font-medium px-5 py-2.5 rounded-full transition-all text-xs sm:text-sm group shadow-sm cursor-pointer"
                                    >
                                        <span className="flex items-center gap-2">
                                            {renderIcon(
                                                dontSeeFit?.button?.icon || "Mail",
                                                LucideIcons.Mail,
                                                "w-6 h-6 text-[#DFB261] group-hover:text-black"
                                            )}
                                            {dontSeeFit?.button?.text || "Send Your Resume"}
                                        </span>
                                        {renderIcon(
                                            dontSeeFit?.button?.arrowIcon || "ArrowRight",
                                            LucideIcons.ArrowRight,
                                            "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        )}
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}