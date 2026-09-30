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
import siteData, { HairCraftNotFoundData, SectionProps } from "@/data/index";

export interface NotFoundSectionProps extends SectionProps<HairCraftNotFoundData> {
    data?: HairCraftNotFoundData;
}

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

export default function NotFoundSection({ data }: NotFoundSectionProps) {
    const notFoundData = data || siteData.notFound;
    const tag = notFoundData?.tag || "OOPS!";
    const code = notFoundData?.code || "404";
    const highlightDigit = notFoundData?.highlightDigit || "0";
    const subheading = notFoundData?.subheading || "Page Not Found";
    const description =
        notFoundData?.description ||
        "The page you're looking for doesn't seem to exist or may have been moved. Let's get you back on track.";

    const primaryButton = notFoundData?.primaryButton;
    const secondaryButton = notFoundData?.secondaryButton;

    const sideQuote = notFoundData?.sideQuote;
    const quoteLines = sideQuote?.lines || ["Good", "Hair Days", "Are Always", "Here"];

    const sideCard = notFoundData?.sideCard;
    const cardImage = sideCard?.image?.src || "/images/error-banner.png";
    const cardImageAlt = sideCard?.image?.alt || "Salon styling station counter";
    const cardBadge = sideCard?.badge || "\"Look Good Feel Better\"";

    // Split 404 text to highlight the middle zero in luxury gold
    const renderCode = () => {
        if (code === "404" && highlightDigit === "0") {
            return (
                <>
                    4<span className="text-[#DFB261]">0</span>4
                </>
            );
        }
        return code;
    };

    return (
        <section className="bg-[#fcfbfa] relative min-h-[80vh] lg:min-h-[100vh] text-[#1a1a1a] flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                    src={cardImage}
                    alt={cardImageAlt}
                    className="w-[calc(100%+120px)] sm:w-[calc(100%+240px)] lg:w-[calc(100%+360px)] max-w-none h-full object-cover object-right -translate-x-14 sm:-translate-x-24 lg:-translate-x-40"
                />
            </div>

            {/* Background Ambient Glow */}


            <div className="max-w-[1400px] w-full mx-auto px-4  relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">

                    {/* Left Column: 404 Text & CTAs (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-4 sm:space-y-6"
                    >
                        {/* OOPS! Tag */}
                        <div className="flex items-center gap-3">
                            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                {tag}
                            </span>
                            <span className="w-10 sm:w-14 h-[2px] bg-[#DFB261]"></span>
                        </div>

                        {/* Giant 404 Title with Gold Middle Zero */}
                        <h1
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[170px] font-bold tracking-tight text-[#121212] select-none leading-none"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {renderCode()}
                        </h1>

                        {/* Subheading */}
                        <h2
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121212] tracking-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {subheading}
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-sm sm:text-base font-light max-w-lg leading-relaxed">
                            {description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full sm:w-auto">
                            {/* Primary Gold Button */}
                            {primaryButton && (
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                                    <Link
                                        href={primaryButton.href || "/"}
                                        className="w-full sm:w-auto inline-flex items-center justify-center font-medium gap-3 bg-[#DFB261] hover:bg-black hover:border hover:border-[#DFB261] text-black hover:text-white border border-[#DFB261] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base tracking-wide group shadow-sm hover:shadow-md"
                                    >
                                        {renderIcon(primaryButton.icon, LucideIcons.Home, "w-4 h-4")}
                                        <span>{primaryButton.text}</span>
                                        {renderIcon(
                                            primaryButton.arrowIcon,
                                            LucideIcons.ArrowRight,
                                            "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        )}
                                    </Link>
                                </motion.div>
                            )}

                            {/* Secondary Outline Button */}
                            {secondaryButton && (
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                                    <Link
                                        href={secondaryButton.href || "/services"}
                                        className="w-full sm:w-auto inline-flex items-center justify-center font-medium gap-3 border border-[#DFB261] hover:bg-[#DFB261] text-[#121212] hover:text-black px-6 py-3 sm:px-8 sm:py-3.5 rounded-full transition-all duration-300 text-sm sm:text-base tracking-wide group"
                                    >
                                        {renderIcon(
                                            secondaryButton.icon,
                                            LucideIcons.Scissors,
                                            "w-4 h-4 text-[#DFB261] group-hover:text-black transition-colors"
                                        )}
                                        <span>{secondaryButton.text}</span>
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Cursive Branding Quote (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center pt-6 lg:pt-0 relative lg:-left-[400px]"
                    >
                        {/* Cursive Quote Floating Text */}
                        <div className="text-center lg:text-right space-y-2 sm:space-y-3 max-w-md lg:max-w-none">
                            <p
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#121212] italic leading-snug drop-shadow-sm select-none"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {quoteLines.map((line: string, idx: number) => (
                                    <React.Fragment key={idx}>
                                        {line}
                                        {idx < quoteLines.length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </p>
                            <div className="w-16 sm:w-24 h-[2px] bg-[#DFB261] mx-auto lg:ml-auto lg:mr-0 mt-3 sm:mt-4" />
                            {cardBadge && (
                                <p
                                    className="text-xs uppercase tracking-[0.25em] text-[#DFB261] font-semibold pt-1 sm:pt-2"
                                >
                                    {cardBadge}
                                </p>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}