"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import PageTopSection from "@/components/common/PageTopSection";
import siteData from "@/data/index";
import {
    decorativeGlowAnim,
    goldAccentAnim,
    containerVariants,
    fadeInUpVariants,
    subtitleFadeVariants,
    iconSpringPopVariants,
    iconPulseGlow,
    iconHoverScale,
    buttonLuxuryLift,
    buttonMagneticHover,
    buttonArrowNudge,
} from "@/utils/animations";

function renderIcon(iconName?: string, defaultIcon: React.ElementType = CheckCircle2, className = "w-4 h-4") {
    if (!iconName) {
        const Fallback = defaultIcon;
        return <Fallback className={className} />;
    }
    const cleanName = iconName.trim();
    const capitalized = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    const Comp = (LucideIcons as Record<string, any>)[cleanName] || (LucideIcons as Record<string, any>)[capitalized] || defaultIcon;
    return <Comp className={className} />;
}

export default function ThankYouPage() {
    const thankYouData = siteData.thankYou;

    const pageTop = thankYouData?.pageTop || {
        title: "Thank You",
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Thank You", href: "/thank-you" },
        ],
    };

    const tag = thankYouData?.tag || "Request Submitted Successfully";
    const titlePart1 = thankYouData?.titlePart1 || "Thank You for Choosing";
    const titlePart2 = thankYouData?.titlePart2 || "HairCraft";
    const description = thankYouData?.description || "We have received your request and our styling team is already on it. A dedicated concierge will reach out to you within a few hours to confirm all details.";
    const primaryButton = thankYouData?.primaryButton || {
        text: "Back to Home",
        href: "/",
        icon: "Home",
    };
    const secondaryButton = thankYouData?.secondaryButton || {
        text: "Explore Services",
        href: "/services",
        icon: "ArrowRight",
    };

    return (
        <main className="">
            {/* Page Header Banner with data from site.json */}
            <PageTopSection
                title={pageTop.title}
                breadcrumbs={pageTop.breadcrumbs}
            />

            {/* Thank You Main Section */}
            <section className="relative py-8 lg:py-14 overflow-hidden">
                {/* Decorative background ambient glows from utils/animations */}
                <motion.div
                    {...decorativeGlowAnim}
                    className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#DFB261] rounded-full blur-[100px]"
                />
                <motion.div
                    {...decorativeGlowAnim}
                    className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 bg-[#DFB261] rounded-full blur-[90px]"
                />

                <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                    {/* Centered Success Hero Card with animations from utils/animations */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-[1000px] mx-auto rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
                    >
                        {/* Top Accent Shimmer Line from utils/animations */}
                        <motion.div
                            {...goldAccentAnim}
                            style={{ transformOrigin: "center" }}
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DFB261] to-transparent"
                        />

                        {/* Animated Checkmark Badge with animations from utils/animations */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 flex items-center justify-center">
                            {/* Outer pulsing ring from iconPulseGlow */}
                            <motion.div
                                {...iconPulseGlow}
                                className="absolute inset-0 rounded-full border-2 border-[#DFB261]/40"
                            />
                            {/* Core badge icon container from iconSpringPopVariants & iconHoverScale */}
                            <motion.div
                                variants={iconSpringPopVariants}
                                {...iconHoverScale}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#DFB261]/20 via-[#DFB261]/10 to-[#DFB261]/30 border-2 border-[#DFB261] flex items-center justify-center shadow-lg shadow-[#DFB261]/20 cursor-pointer relative z-10"
                            >
                                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#DFB261]" />
                            </motion.div>
                        </div>

                        {/* Subtitle tag with subtitleFadeVariants & goldAccentAnim from utils/animations */}
                        <motion.div
                            variants={subtitleFadeVariants}
                            className="flex items-center justify-center gap-3 mb-3"
                        >
                            <motion.span
                                {...goldAccentAnim}
                                style={{ transformOrigin: "right" }}
                                className="w-8 sm:w-12 h-[2px] bg-[#DFB261]"
                            />
                            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                {tag}
                            </span>
                            <motion.span
                                {...goldAccentAnim}
                                style={{ transformOrigin: "left" }}
                                className="w-8 sm:w-12 h-[2px] bg-[#DFB261]"
                            />
                        </motion.div>

                        {/* Main Title with fadeInUpVariants from utils/animations */}
                        <motion.h2
                            variants={fadeInUpVariants}
                            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#121212] tracking-tight leading-[1.15] mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {titlePart1}{" "}
                            <span className="text-[#DFB261] font-normal">{titlePart2}</span>
                        </motion.h2>

                        {/* Description with fadeInUpVariants from utils/animations */}
                        <motion.p
                            variants={fadeInUpVariants}
                            className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8"
                        >
                            {description}
                        </motion.p>

                        {/* Action Buttons with buttonLuxuryLift, buttonMagneticHover, buttonArrowNudge */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="flex flex-wrap items-center justify-center gap-4 pt-2"
                        >
                            {primaryButton && (
                                <motion.div {...buttonLuxuryLift}>
                                    <Link
                                        href={primaryButton.href}
                                        className="inline-flex items-center gap-2.5 bg-[#DFB261] hover:bg-black text-black hover:text-white border border-[#DFB261] hover:border-black font-medium px-8 py-3.5 shadow-lg shadow-[#DFB261]/25 hover:shadow-black/20 transition-all duration-300 text-sm sm:text-base tracking-wide group"
                                    >
                                        {renderIcon(primaryButton.icon, Home, "w-4 h-4")}
                                        <span>{primaryButton.text}</span>
                                    </Link>
                                </motion.div>
                            )}

                            {secondaryButton && (
                                <motion.div {...buttonMagneticHover}>
                                    <Link
                                        href={secondaryButton.href}
                                        className="inline-flex items-center gap-2.5 bg-transparent hover:bg-[#121212] text-[#121212] hover:text-white border border-[#121212] font-medium px-8 py-3.5 shadow-sm transition-all duration-300 text-sm sm:text-base tracking-wide group"
                                    >
                                        <span>{secondaryButton.text}</span>
                                        <motion.span {...buttonArrowNudge} className="inline-block">
                                            {renderIcon(secondaryButton.icon, ArrowRight, "w-4 h-4")}
                                        </motion.span>
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}