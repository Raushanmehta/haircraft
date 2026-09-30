"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { PolicyPageData, SectionProps } from "@/data";
import {
    fadeInUpVariants,
    textContainerVariants,
    buttonLuxuryLift,
} from "@/utils/animations";

export interface PolicySectionItem {
    number: string;
    title: string;
    content: string;
}

export interface LegalSectionProps extends SectionProps<PolicyPageData> {
    data?: PolicyPageData;
    policyTag?: string;
    policyTitle?: string;
    introText?: string;
    sections?: PolicySectionItem[];
}

const renderIcon = (
    iconName: string | undefined | null,
    DefaultIcon: React.ElementType,
    className?: string
) => {
    if (!iconName) return <DefaultIcon className={className} />;
    const cleanName = iconName.replace(/^Lucide/, "");
    const capitalized =
        cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    const IconComponent =
        (LucideIcons as Record<string, any>)[iconName] ||
        (LucideIcons as Record<string, any>)[cleanName] ||
        (LucideIcons as Record<string, any>)[capitalized] ||
        DefaultIcon;
    return <IconComponent className={className} />;
};

const defaultSections: PolicySectionItem[] = [
    {
        number: "1.",
        title: "Information We Collect",
        content:
            "We may collect personal information such as your name, email address, phone number, and any other details you provide when you book an appointment, fill out a form, or contact us. We also collect non-personal information like browser type, device information, and website usage data to improve your experience.",
    },
    {
        number: "2.",
        title: "How We Use Your Information",
        content:
            "Your information is used to provide and improve our services, confirm appointments, respond to inquiries, send important updates, and enhance your overall experience with Haicraft. We may also use your information for internal analysis and customer support.",
    },
    {
        number: "3.",
        title: "Information Sharing",
        content:
            "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and services, under strict confidentiality agreements.",
    },
    {
        number: "4.",
        title: "Cookies and Tracking Technologies",
        content:
            "Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can choose to disable cookies through your browser settings, but this may affect certain features of the website.",
    },
    {
        number: "5.",
        title: "Data Security",
        content:
            "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.",
    },
    {
        number: "6.",
        title: "Your Rights",
        content:
            "You have the right to access, update, or request the deletion of your personal information. If you have any questions or requests regarding your data, please contact us using the details provided below.",
    },
    {
        number: "7.",
        title: "Changes to This Policy",
        content:
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.",
    },
    {
        number: "8.",
        title: "Contact Us",
        content:
            "If you have any questions about this Privacy Policy or how we handle your information, please get in touch with us.",
    },
];

export default function LegalSection({
    data,
    policyTag,
    policyTitle,
    introText,
    sections,
}: LegalSectionProps) {
    const finalPolicyTag = policyTag || data?.policyTag || "OUR POLICY";
    const finalPolicyTitle = policyTitle || data?.policyTitle || "Privacy Policy";
    const finalIntroText =
        introText ||
        data?.introText ||
        "At Haicraft, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our website, you agree to the practices described in this policy.";
    const finalSections =
        sections && sections.length > 0
            ? sections
            : data?.sections && data.sections.length > 0
                ? data.sections
                : defaultSections;

    const banner = data?.calloutBanner;
    const bannerButton = banner?.button;

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-4">

                {/* Header Section with staggered animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textContainerVariants}
                    className="space-y-2 max-w-3xl"
                >
                    <motion.div variants={fadeInUpVariants} className="flex items-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            {finalPolicyTag}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUpVariants}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121212] tracking-tight"
                    >
                        {finalPolicyTitle}
                    </motion.h1>

                    <motion.div variants={fadeInUpVariants} className="w-12 h-[2px] bg-[#DFB261] my-2" />

                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-gray-600 text-xs sm:text-sm lg:text-base font-light leading-relaxed pt-1"
                    >
                        {finalIntroText}
                    </motion.p>
                </motion.div>

                {/* Policy Sections List with staggered animation & hover interaction */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={textContainerVariants}
                    className="space-y-4"
                >
                    {finalSections.map((sec, index) => {
                        const isLast = index === finalSections.length - 1;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUpVariants}
                                whileHover={{ x: 6, transition: { duration: 0.25, ease: "easeOut" } }}
                                className={`space-y-2 mt-2 lg:mt-4 transition-all duration-200 group ${!isLast ? "pb-4 border-b border-gray-200/80" : ""
                                    }`}
                            >
                                <h3
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                    className="text-base sm:text-lg lg:text-xl font-bold text-[#121212] flex items-center gap-3 group-hover:text-[#DFB261] transition-colors"
                                >
                                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DFB261] text-[#121212] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform">
                                        {sec.number.replace('.', '')}
                                    </span>
                                    <span>{sec.title}</span>
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-light leading-relaxed pl-10 sm:pl-11">
                                    {sec.content}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Callout Banner ("Still Have Questions?") with hover & lift animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUpVariants}
                    whileHover={{ y: -3, transition: { duration: 0.25 } }}
                    className="bg-[#F9F4EE] rounded-lg p-5 sm:p-7 border border-gray-200/80 shadow-md hover:border-[#DFB261]/60 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#DFB261] text-[#121212] flex items-center justify-center shrink-0 shadow-md">
                            {renderIcon(banner?.icon, LucideIcons.ShieldCheck, "w-5 h-5 sm:w-6 sm:h-6")}
                        </div>
                        <div>
                            <h3
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                className="text-lg sm:text-xl font-bold text-[#121212]"
                            >
                                {banner?.title || "Still Have Questions?"}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm font-light mt-0.5">
                                {banner?.description ||
                                    "We're here to help. Feel free to contact us for any queries related to your policy or data."}
                            </p>
                        </div>
                    </div>

                    <div className="shrink-0 w-full sm:w-auto">
                        <motion.div {...buttonLuxuryLift}>
                            <Link
                                href={bannerButton?.href || "/contact-us"}
                                className="inline-flex items-center justify-center gap-2 bg-[#DFB261] hover:bg-[#cfa554] text-black font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-[#DFB261]/20 transition-all duration-200 group w-full sm:w-auto"
                            >
                                <span>{bannerButton?.text || "Contact Us"}</span>
                                {renderIcon(
                                    bannerButton?.icon,
                                    LucideIcons.ArrowRight,
                                    "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                )}
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}