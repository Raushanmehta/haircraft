"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { fadeInUpVariants, textContainerVariants } from "@/utils/animations";
import { HairCraftFaqsData, SectionProps } from "@/data";

const buttonLuxuryLift = {
    whileHover: { y: -2, scale: 1.02, transition: { duration: 0.2 } },
    whileTap: { y: 1, scale: 0.98, transition: { duration: 0.1 } }
};

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

export interface FAQsSectionProps extends SectionProps<HairCraftFaqsData> {
    data?: HairCraftFaqsData;
}

const defaultFaqsData = [
    {
        id: "1",
        number: "1.",
        question: "Do I need to book an appointment in advance?",
        answer:
            "While walk-ins are always welcome, we highly recommend booking an appointment in advance to ensure your preferred time and stylist are available.",
    },
    {
        id: "2",
        number: "2.",
        question: "What services do you offer?",
        answer:
            "We offer a comprehensive range of hair care and grooming services including precision haircuts, styling, global hair colors, hair treatments, spa therapies, beard grooming, and bridal/event styling.",
    },
    {
        id: "3",
        number: "3.",
        question: "How long does a typical appointment take?",
        answer:
            "Appointment durations vary depending on the service. A standard haircut typically takes 30-45 minutes, while coloring or specialized treatments can take anywhere from 1.5 to 3 hours.",
    },
    {
        id: "4",
        number: "4.",
        question: "Do you use professional hair care products?",
        answer:
            "Yes! We exclusively use premium, professional-grade hair care and styling products known for nourishing hair health and delivering long-lasting results.",
    },
    {
        id: "5",
        number: "5.",
        question: "Can I get a hair consultation before the service?",
        answer:
            "Absolutely. Every appointment begins with a personalized consultation where our expert stylists understand your preferences, hair type, and recommend the best look.",
    },
    {
        id: "6",
        number: "6.",
        question: "What is your cancellation policy?",
        answer:
            "We request that you notify us at least 24 hours in advance if you need to reschedule or cancel your appointment so we can accommodate other clients.",
    },
    {
        id: "7",
        number: "7.",
        question: "Do you offer services for special occasions?",
        answer:
            "Yes, we specialize in wedding grooming, bridal hair styling, and special event makeovers tailored to match your attire and occasion.",
    },
    {
        id: "8",
        number: "8.",
        question: "Are your stylists trained and certified?",
        answer:
            "All our stylists are certified professionals with years of experience in advanced cutting, coloring, and modern grooming techniques.",
    },
    {
        id: "9",
        number: "9.",
        question: "Do you offer any membership or loyalty programs?",
        answer:
            "Yes, we have exclusive membership packages and loyalty perks for our regular clients. Ask our front desk team for more details during your visit.",
    },
    {
        id: "10",
        number: "10.",
        question: "How can I contact you for more information?",
        answer:
            "You can reach us via phone at +91 98765 43210, email us at info@haicraftsalon.com, or visit our salon at 123 Styling Street, New Delhi.",
    },
];

export default function FAQsSection({ data }: FAQsSectionProps) {
    const badge = data?.badge || "FAQS";
    const title = data?.title || "Your Questions,";
    const titleHighlight = data?.titleHighlight || "Answered";
    const description =
        data?.description ||
        "We've compiled answers to common questions to help you make the most of your Haicraft experience.";

    const sideCard = data?.sideCard;
    const sideImage =
        sideCard?.image?.src ||
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop";
    const sideImageAlt = sideCard?.image?.alt || "Salon interior stations";
    const sideTitle = sideCard?.title || "More Than a Salon";
    const sideTags = sideCard?.tags || [
        { label: "BEAUTY" },
        { label: "CARE" },
        { label: "CONFIDENCE" },
    ];
    const sideButton = sideCard?.button;

    const items = data?.items && data.items.length > 0 ? data.items : defaultFaqsData;
    const icons = data?.icons;
    const openIconName = icons?.openIcon || "Minus";
    const closedIconName = icons?.closedIcon || "Plus";

    const [openId, setOpenId] = useState<string | null>(items[0]?.id || "1");

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-6 lg:space-y-8">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={textContainerVariants}
                    className="text-center max-w-3xl mx-auto space-y-2"
                >
                    <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            {badge}
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </motion.div>

                    <motion.h2
                        variants={fadeInUpVariants}
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#121212] leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {title} <span className="text-[#DFB261] font-normal">{titleHighlight}</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeInUpVariants}
                        className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium"
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* Main Grid: Left Image Card & Right Accordions */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Salon Image Card with Branding (Span 4) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={fadeInUpVariants}
                        className="lg:col-span-4 bg-[#F9F4EE] rounded-lg p-4 sm:p-5 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4"
                    >
                        <div className="relative h-[280px] sm:h-[340px] lg:h-[360px] rounded-lg overflow-hidden shadow-md border border-gray-200/80 bg-black/5">
                            <img
                                src={sideImage}
                                alt={sideImageAlt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div className="text-center space-y-2 pt-1">
                            <h3
                                className="text-xl sm:text-2xl font-semibold text-[#121212] leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {sideTitle}
                            </h3>
                            <div className="w-12 h-[2px] bg-[#DFB261] mx-auto my-2" />
                            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-[11px] uppercase tracking-[0.25em] text-[#DFB261] font-semibold">
                                {sideTags.map((tag, idx) => (
                                    <React.Fragment key={idx}>
                                        <span>{tag.label}</span>
                                        {idx < sideTags.length - 1 && (
                                            <span className="w-1 h-1 rounded-full bg-[#DFB261]" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Column: Accordion FAQs (Span 8) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={textContainerVariants}
                        className="lg:col-span-8 space-y-3.5"
                    >
                        {items.map((faq) => {
                            const isOpen = openId === faq.id;
                            return (
                                <motion.div
                                    key={faq.id}
                                    variants={fadeInUpVariants}
                                    className={`rounded-lg border transition-all duration-300 overflow-hidden bg-[#F9F4EE] ${isOpen
                                        ? "border-[#DFB261]/80 shadow-md"
                                        : "border-gray-200/80 hover:border-[#DFB261]/50"
                                        }`}
                                >
                                    {/* Accordion Header */}
                                    <button
                                        onClick={() => toggleAccordion(faq.id)}
                                        className="w-full flex items-center justify-between p-4 text-left focus:outline-none cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3 pr-3">
                                            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DFB261] text-[#121212] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-md">
                                                {faq.number.replace(".", "")}
                                            </span>
                                            <h3
                                                className="text-base sm:text-lg font-semibold text-[#121212] leading-tight"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {faq.question}
                                            </h3>
                                        </div>
                                        <div
                                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-sm ${isOpen
                                                ? "bg-[#DFB261] text-[#121212]"
                                                : "bg-white border border-gray-200/80 text-gray-700 hover:border-[#DFB261]"
                                                }`}
                                        >
                                            {isOpen
                                                ? renderIcon(openIconName, LucideIcons.Minus, "w-4 h-4")
                                                : renderIcon(closedIconName, LucideIcons.Plus, "w-4 h-4")
                                            }
                                        </div>
                                    </button>

                                    {/* Accordion Content Body */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-5 pb-5 pt-2 text-gray-600 text-sm lg:text-md leading-relaxed font-medium pl-14 sm:pl-16 border-t border-gray-200/60">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}