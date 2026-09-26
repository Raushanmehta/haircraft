"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import siteData from "@/data/index";
import {
    fadeInUpVariants,
    fadeInLeftVariants,
    textContainerVariants,
    staggerGridVariants,
    featureCardVariants,
    featureIconVariants,
    buttonLuxuryLift,
    imageBlurFadeInVariants,
} from "@/utils/animations";

export interface ServiceFeature {
    icon: any;
    title: string;
    desc: string;
}

export interface IncludedSection {
    title?: string;
    subtitle?: string;
    items?: string[];
}

export interface AppointmentCardData {
    icon?: any;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
    image?: string;
}

export interface NeedHelpCardData {
    title?: string;
    phone?: string;
    phoneIcon?: any;
    email?: string;
    emailIcon?: any;
    address?: string;
    addressIcon?: any;
}

export interface ServiceDetailItem {
    id: string;
    name?: string;
    title?: string;
    detailTitle?: string;
    description?: string[] | string;
    mainImage?: string;
    image?: string;
    secondaryImage?: string;
    icon?: any;
    href?: string;
    features?: ServiceFeature[];
    included?: string[];
    includedSection?: IncludedSection;
    appointmentCard?: AppointmentCardData;
    needHelpCard?: NeedHelpCardData;
}

export interface ServiceDetailSectionProps {
    service?: ServiceDetailItem;
    allServices?: ServiceDetailItem[];
    appointmentCard?: AppointmentCardData;
    needHelpCard?: NeedHelpCardData;
}

function renderIcon(icon: any, defaultIcon: React.ElementType, className = "w-5 h-5") {
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

const defaultServices = ((siteData.services as any).ServiceItem || (siteData.services as any).list || []) as ServiceDetailItem[];
const defaultService = defaultServices[0];
const defaultAppointmentCard = (siteData.services as any).appointmentCard as AppointmentCardData | undefined;
const defaultNeedHelpCard = (siteData.services as any).needHelpCard as NeedHelpCardData | undefined;

export default function ServiceDetailSection({
    service: initialService,
    allServices = defaultServices,
    appointmentCard: passedAppointmentCard,
    needHelpCard: passedNeedHelpCard,
}: ServiceDetailSectionProps) {
    const [activeServiceId, setActiveServiceId] = useState(
        initialService?.id || defaultService?.id || "haircut-styling"
    );

    React.useEffect(() => {
        if (initialService?.id) {
            setActiveServiceId(initialService.id);
        }
    }, [initialService?.id]);

    const currentService =
        allServices.find((s) => s.id === activeServiceId) || initialService || defaultService || allServices[0];

    const appointmentCard =
        currentService?.appointmentCard || passedAppointmentCard || defaultAppointmentCard;

    const needHelpCard =
        currentService?.needHelpCard || passedNeedHelpCard || defaultNeedHelpCard;

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                    {/* Left Sidebar Column (Span 4) */}
                    <div className="lg:col-span-4 space-y-4 lg:space-y-6">

                        {/* Our Services Menu Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={fadeInUpVariants}
                            className="bg-white rounded-lg border border-gray-200/80 shadow-xl shadow-gray-200/40 overflow-hidden"
                        >
                            <div className="bg-[#DFB261] text-black px-6 py-3">
                                <h3 className="text-2xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    Our Services
                                </h3>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {allServices.map((srv) => {
                                    const isActive = srv.id === currentService?.id;
                                    return (
                                        <button
                                            key={srv.id}
                                            onClick={() => setActiveServiceId(srv.id)}
                                            className={`w-full flex items-center justify-between px-6 py-4 text-left text-sm font-medium transition-all duration-200 ${isActive
                                                ? "bg-[#DFB261]/10 text-[#DFB261] font-semibold"
                                                : "text-gray-700 hover:bg-gray-50 hover:text-[#DFB261]"
                                                }`}
                                        >
                                            <span>{srv.name || srv.title}</span>
                                            <LucideIcons.ChevronRight
                                                className={`w-4 h-4 transition-transform ${isActive ? "text-[#DFB261] translate-x-1" : "text-gray-400"
                                                    }`}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Book Your Appointment Dark Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={fadeInUpVariants}
                            whileHover={{ y: -5, boxShadow: "0 25px 35px -10px rgba(0,0,0,0.5), 0 0 25px rgba(223,178,97,0.3)" }}
                            transition={{ duration: 0.3 }}
                            className="relative rounded-lg overflow-hidden bg-[#121212] text-white p-6 shadow-2xl border border-white/10 group"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 transition-transform duration-700"
                                style={{
                                    backgroundImage: `url(${appointmentCard?.image || currentService?.mainImage || currentService?.image})`,
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-[#121212]/60" />

                            <div className="relative z-10 space-y-1">
                                <motion.div
                                    whileHover={{ scale: 1.15, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-12 h-12 rounded-full bg-[#DFB261]/20 border border-[#DFB261]/50 flex items-center justify-center text-[#DFB261] cursor-pointer"
                                >
                                    {renderIcon(appointmentCard?.icon, LucideIcons.Calendar, "w-5 h-5")}
                                </motion.div>
                                <h3 className="text-3xl whitespace-normal md:whitespace-nowrap tracking-tight text-white font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {appointmentCard?.title || "Book Your Appointment"}
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                                    {appointmentCard?.description || "Get expert care and a fresh new look. Choose your preferred date and time."}
                                </p>
                                <div className="pt-2">
                                    <motion.div {...buttonLuxuryLift}>
                                        <Link
                                            href={appointmentCard?.buttonHref || "/appointment"}
                                            className="inline-flex items-center justify-center gap-2 w-full bg-[#DFB261] hover:bg-[#DFB261]/90 text-black font-medium py-3 rounded-full text-sm shadow-lg shadow-[#DFB261]/20 transition-all group"
                                        >
                                            <span>{appointmentCard?.buttonText || "Book Now"}</span>
                                            <LucideIcons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Need Help? Card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={fadeInUpVariants}
                            whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1), 0 0 20px rgba(223,178,97,0.25)" }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#F9F4EE] rounded-lg border border-gray-200/80 shadow-xl shadow-gray-200/40 p-6 space-y-3"
                        >
                            <h3 className="text-2xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {needHelpCard?.title || "Need Help?"}
                            </h3>
                            <div className="space-y-4 text-sm text-gray-600">
                                <div className="flex items-center gap-3 group">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.3 }}
                                        className="w-10 h-10 rounded-full bg-[#DFB261] text-black flex items-center justify-center shrink-0 cursor-pointer shadow-sm group-hover:shadow-md"
                                    >
                                        {renderIcon(needHelpCard?.phoneIcon, MdCall, "w-5 h-5")}
                                    </motion.div>
                                    <span className="font-medium text-[#121212] lg:text-sm text-xs">
                                        {needHelpCard?.phone || "+91 98765 43210"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.3 }}
                                        className="w-10 h-10 rounded-full bg-[#DFB261] text-black flex items-center justify-center shrink-0 cursor-pointer shadow-sm group-hover:shadow-md"
                                    >
                                        {renderIcon(needHelpCard?.emailIcon, IoMdMail, "w-5 h-5")}
                                    </motion.div>
                                    <span className="font-medium text-[#121212] lg:text-sm text-xs break-all">
                                        {needHelpCard?.email || "info@haicraftsalon.com"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.3 }}
                                        className="w-10 h-10 rounded-full bg-[#DFB261] text-black flex items-center justify-center shrink-0 mt-0.5 cursor-pointer shadow-sm group-hover:shadow-md"
                                    >
                                        {renderIcon(needHelpCard?.addressIcon, FaMapMarkerAlt, "w-5 h-5")}
                                    </motion.div>
                                    <span className="font-medium text-[#121212] lg:text-sm text-xs">
                                        {needHelpCard?.address || "123 Styling Street, New Delhi, India"}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Main Content Column (Span 8) */}
                    <div className="lg:col-span-8 space-y-4 lg:space-y-6">

                        <AnimatePresence mode="wait">
                            {currentService && (
                                <motion.div
                                    key={currentService.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-3 lg:space-y-3"
                                >
                                    {/* Top Banner Image */}
                                    <motion.div
                                        variants={imageBlurFadeInVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.15 }}
                                        className="relative h-[380px] sm:h-[400px] rounded-lg overflow-hidden shadow-2xl border border-gray-200 group"
                                    >
                                        <motion.img
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            src={currentService.mainImage || currentService.image}
                                            alt={currentService.name || currentService.title || "Service banner"}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                    </motion.div>

                                    {/* Service Title & Descriptions */}
                                    <motion.div
                                        variants={textContainerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.15 }}
                                        className="space-y-2"
                                    >
                                        <motion.h1
                                            variants={fadeInUpVariants}
                                            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl whitespace-normal md:whitespace-nowrap tracking-tight font-semibold text-[#121212] leading-tight"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {currentService.detailTitle || currentService.title || currentService.name}
                                        </motion.h1>
                                        <motion.div
                                            variants={fadeInUpVariants}
                                            className="w-12 h-[2px] bg-[#DFB261]"
                                        />
                                        <div className="space-y-4 text-gray-600 text-sm lg:text-md leading-relaxed font-medium pt-2">
                                            {Array.isArray(currentService.description) ? (
                                                currentService.description.map((para, idx) => (
                                                    <motion.p variants={fadeInUpVariants} key={idx}>{para}</motion.p>
                                                ))
                                            ) : (
                                                <motion.p variants={fadeInUpVariants}>{currentService.description}</motion.p>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* 4 Feature Cards Grid */}
                                    {currentService.features && currentService.features.length > 0 && (
                                        <motion.div
                                            variants={staggerGridVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.15 }}
                                            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
                                        >
                                            {currentService.features.map((feat, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={featureCardVariants}
                                                    whileHover="hover"
                                                    className="bg-[#F9F4EE] rounded-lg p-4 border border-gray-200/80 shadow-md flex flex-col items-center text-center cursor-pointer transition-colors duration-300">
                                                    {/* Icon Top */}
                                                    <motion.div
                                                        variants={featureIconVariants}
                                                        className="text-[#DFB261] flex items-center justify-center mb-2">
                                                        {renderIcon(feat.icon, LucideIcons.Sparkles, "w-10 h-10 fill-[#DFB261]")}
                                                    </motion.div>

                                                    {/* Title Center */}
                                                    <motion.h4
                                                        variants={fadeInUpVariants}
                                                        className="text-base font-semibold text-[#121212] mb-1"
                                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                                    >
                                                        {feat.title}
                                                    </motion.h4>

                                                    {/* Description Below */}
                                                    <motion.p
                                                        variants={fadeInUpVariants}
                                                        className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium"
                                                    >
                                                        {feat.desc}
                                                    </motion.p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {/* What's Included in This Service */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.15 }}
                                        variants={textContainerVariants}
                                        className="space-y-4 pt-2"
                                    >
                                        <div className="space-y-2">
                                            <motion.h3
                                                variants={fadeInUpVariants}
                                                className="text-4xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] font-semibold leading-tight"
                                                style={{ fontFamily: "'Playfair Display', serif" }}
                                            >
                                                {currentService.includedSection?.title || "What's Included in This Service"}
                                            </motion.h3>
                                            <motion.p
                                                variants={fadeInUpVariants}
                                                className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium mt-1"
                                            >
                                                {currentService.includedSection?.subtitle ||
                                                    `Everything you need for a complete and professional ${(currentService.name || currentService.title || "service").toLowerCase()} experience.`}
                                            </motion.p>
                                            <motion.div variants={fadeInUpVariants} className="w-12 h-[2px] bg-[#DFB261] mt-3" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                            {/* Checklist (Span 5) */}
                                            <div className="md:col-span-5 space-y-3">
                                                {(currentService.includedSection?.items || currentService.included || []).map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        variants={fadeInLeftVariants}
                                                        className="flex items-center gap-3 group"
                                                    >
                                                        <motion.div
                                                            whileHover={{ scale: 1.25, rotate: 360 }}
                                                            transition={{ duration: 0.4 }}
                                                            className="w-7 h-7 rounded-full bg-[#DFB261]/15 text-[#DFB261] flex items-center justify-center shrink-0 cursor-pointer"
                                                        >
                                                            <LucideIcons.CheckCircle className="w-7 h-7 fill-[#DFB261] text-black" />
                                                        </motion.div>
                                                        <span className="text-sm font-medium text-gray-700">
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Secondary Image (Span 7) */}
                                            <div className="md:col-span-7">
                                                <motion.div
                                                    variants={imageBlurFadeInVariants}
                                                    whileHover={{ scale: 1.04 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="relative h-56 w-full rounded-lg overflow-hidden shadow-lg border border-gray-200"
                                                >
                                                    <img
                                                        src={currentService.secondaryImage || currentService.image || currentService.mainImage}
                                                        alt={currentService.name || "Service process"}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>

                </div>
            </div>
        </section>
    );
}