"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import siteData from "@/data/index";
import { overlayAnim, titleContainerVariants, titleWordVariants, breadcrumbNavVariants, getBreadcrumbLinkAnim, getBreadcrumbTextAnim, getBreadcrumbSlashAnim, goldAccentAnim, decorativeGlowAnim } from "@/utils/animations";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageTopSectionProps {
    title?: string;
    breadcrumbs?: BreadcrumbItem[];
    backgroundImage?: string;
}

export default function PageTopSection({
    title = siteData.pageTopSection.title,
    breadcrumbs = siteData.pageTopSection.breadcrumbs,
    backgroundImage = siteData.pageTopSection.backgroundImage,
}: PageTopSectionProps) {
    const titleWords = title.split(" ");

    return (
        <section className="relative flex h-[250px] w-full items-center overflow-hidden bg-[#121212] sm:h-[380px] lg:h-[380px]">

            <div className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />

            <motion.div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/50 to-black/10" />

            <motion.div {...overlayAnim} className="absolute inset-0 z-[1] bg-black/20" />

            <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pt-16">
                <div className="space-y-4">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={titleContainerVariants}
                            className="text-4xl font-bold capitalize tracking-tight text-[#DFB261] drop-shadow-md sm:text-6xl lg:text-7xl">
                            {titleWords.map((word, index) => (
                                <React.Fragment key={`${word}-${index}`}>
                                    <motion.span
                                        variants={titleWordVariants}
                                        className="mr-3 inline-block origin-bottom">
                                        {word}
                                    </motion.span>
                                </React.Fragment>
                            ))}
                        </motion.h1>
                    </div>

                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        variants={breadcrumbNavVariants}
                        className="flex items-center gap-2 text-sm font-light text-gray-300 sm:text-base"
                        aria-label="Breadcrumb">

                        {breadcrumbs.map((item, index) => {
                            const isLast =
                                index === breadcrumbs.length - 1;

                            return (
                                <React.Fragment key={`${item.label}-${index}`}>
                                    {item.href && !isLast ? (
                                        <motion.div {...getBreadcrumbLinkAnim(index)}>
                                            <Link
                                                href={item.href}
                                                className="transition-colors duration-300 hover:text-[#DFB261]"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <motion.span
                                            {...getBreadcrumbTextAnim(index)}
                                            className={
                                                isLast
                                                    ? "font-medium text-white"
                                                    : ""
                                            }
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}

                                    {!isLast && (
                                        <motion.span
                                            {...getBreadcrumbSlashAnim(index)}
                                            className="text-xs text-[#DFB261]"
                                        >
                                            /
                                        </motion.span>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </motion.nav>
                </div>
            </div>

            <motion.div
                {...goldAccentAnim}
                style={{
                    transformOrigin: "left",
                }}
                className="absolute bottom-0 left-0 right-0 z-10 h-[2px] bg-gradient-to-r from-[#DFB261]/70 via-[#DFB261]/30 to-transparent"
            />

            <motion.div
                {...decorativeGlowAnim}
                className="pointer-events-none absolute -bottom-32 right-10 z-[2] h-64 w-64 rounded-full bg-[#DFB261] blur-[120px]"
            />
        </section>
    );
}