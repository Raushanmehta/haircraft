"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { fadeInUpVariants, textContainerVariants, buttonLuxuryLift } from "@/utils/animations";
import { HairCraftContactData, SectionProps } from "@/data";

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

export interface ContactSectionProps extends SectionProps<HairCraftContactData> {
    data?: HairCraftContactData;
}

interface ContactFormData {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    subject: string;
    message: string;
}

const defaultInfoCards = [
    {
        id: "location",
        icon: "MapPin",
        title: "Our Location",
        details: ["3170 Rosewood Lane Unit 200 ,", "Beverly Hills, CA 90210"],
    },
    {
        id: "phone",
        icon: "Phone",
        title: "Call Us",
        details: ["+1 000000000"],
    },
    {
        id: "email",
        icon: "Mail",
        title: "Email Us",
        details: ["info@xyz"],
    },
    {
        id: "hours",
        icon: "Clock",
        title: "Working Hours",
        details: ["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: 10:00 AM – 6:00 PM"],
    },
];

export default function ContactSection({ data }: ContactSectionProps) {
    const infoCards = data?.infoCards && data.infoCards.length > 0 ? data.infoCards : defaultInfoCards;
    const formSection = data?.formSection;
    const fields = formSection?.fields;
    const submitButton = formSection?.submitButton;
    const securityNote = formSection?.securityNote;
    const successState = formSection?.successState;

    const mapSection = data?.mapSection;
    const mapImage =
        mapSection?.image?.src ||
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28017.31828263614!2d77.19665187499552!3d28.62482294277834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b43a255341%3A0x2b687f3210cdd91d!2sNew%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1790581645211!5m2!1sen!2sin";
    const mapImageAlt = mapSection?.image?.alt || "Map preview";
    const pinBadge = mapSection?.pinBadge;
    const mapInfo = mapSection?.info;
    const mapButton = mapSection?.button;

    const [formData, setFormData] = useState<ContactFormData>({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        subject: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-6 lg:space-y-8">

                {/* TOP ROW: 4 Information Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={textContainerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {infoCards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={fadeInUpVariants}
                            className="bg-[#F9F4EE] rounded-lg p-4 border border-gray-200/80 shadow-md group hover:border-[#DFB261]/60 transition-all duration-300 space-y-3"
                        >
                            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#DFB261] text-[#121212] flex items-center justify-center shrink-0 shadow-md">
                                {renderIcon(card.icon, LucideIcons.MapPin, "lg:w-7 lg:h-7 w-5 h-5")}
                            </div>
                            <div>
                                <h3
                                    className="text-lg sm:text-xl font-semibold text-[#121212] leading-tight group-hover:text-[#DFB261] transition-colors"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {card.title}
                                </h3>
                                <div className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mt-1 space-y-0.5 break-all">
                                    {card.details.map((line, idx) => (
                                        <p key={idx}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* BOTTOM ROW: Form (Span 7) & Map Card (Span 5) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Send Us a Message Form (Span 7) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={fadeInUpVariants}
                        className="lg:col-span-7 bg-[#F9F4EE] rounded-lg p-4 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-5"
                    >
                        {/* Section Tag */}
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                <span className="text-xs uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                    {formSection?.tag || "SEND US A MESSAGE"}
                                </span>
                            </div>

                            <h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#121212] leading-tight pt-1"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {formSection?.title || "We're Here to Help"}
                            </h2>
                            <div className="w-12 h-[2px] bg-[#DFB261] my-2" />
                            <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                                {formSection?.description ||
                                    "Fill out the form below and our team will get back to you as soon as possible."}
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="bg-white border border-[#DFB261] rounded-lg p-8 text-center space-y-3 my-6 shadow-md">
                                <div className="w-14 h-14 bg-[#DFB261] text-[#121212] rounded-full flex items-center justify-center mx-auto shadow-md">
                                    {renderIcon(successState?.icon, LucideIcons.CheckCircle2, "w-7 h-7")}
                                </div>
                                <h3
                                    className="text-xl font-semibold text-[#121212]"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {successState?.title || "Message Sent Successfully!"}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-md mx-auto">
                                    Thank you, <span className="font-semibold text-[#121212]">{formData.fullName}</span>.{" "}
                                    {successState?.description || "We have received your message and will contact you shortly."}
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-3 px-6 py-2.5 bg-[#121212] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#DFB261] hover:text-black transition-colors cursor-pointer"
                                >
                                    {successState?.buttonText || "Send Another Message"}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* Full Name */}
                                    <div className="space-y-1.5">
                                        <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#121212]">
                                            {fields?.fullName?.label || "Full Name"}{" "}
                                            {fields?.fullName?.required !== false && <span className="text-red-500">*</span>}
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required={fields?.fullName?.required !== false}
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder={fields?.fullName?.placeholder || "Enter your full name"}
                                            className="w-full px-4 py-2 bg-white border border-gray-200/80 rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#DFB261] transition-all"
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-1.5">
                                        <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#121212]">
                                            {fields?.emailAddress?.label || "Email Address"}{" "}
                                            {fields?.emailAddress?.required !== false && <span className="text-red-500">*</span>}
                                        </label>
                                        <input
                                            type="email"
                                            name="emailAddress"
                                            required={fields?.emailAddress?.required !== false}
                                            value={formData.emailAddress}
                                            onChange={handleChange}
                                            placeholder={fields?.emailAddress?.placeholder || "Enter your email address"}
                                            className="w-full px-4 py-2 bg-white border border-gray-200/80 rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#DFB261] transition-all"
                                        />
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* Phone Number */}
                                    <div className="space-y-1.5">
                                        <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#121212]">
                                            {fields?.phoneNumber?.label || "Phone Number"}{" "}
                                            {fields?.phoneNumber?.required !== false && <span className="text-red-500">*</span>}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            required={fields?.phoneNumber?.required !== false}
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder={fields?.phoneNumber?.placeholder || "Enter your phone number"}
                                            className="w-full px-4 py-2 bg-white border border-gray-200/80 rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#DFB261] transition-all"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-1.5">
                                        <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#121212]">
                                            {fields?.subject?.label || "Subject"}{" "}
                                            {fields?.subject?.required !== false && <span className="text-red-500">*</span>}
                                        </label>
                                        <select
                                            name="subject"
                                            required={fields?.subject?.required !== false}
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-white border border-gray-200/80 rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#DFB261] transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>
                                                {fields?.subject?.placeholder || "Select a subject"}
                                            </option>
                                            {(fields?.subject?.options || [
                                                "General Inquiry",
                                                "Appointment Support",
                                                "Feedback & Reviews",
                                                "Partnership",
                                            ]).map((opt, i) => (
                                                <option key={i} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>

                                {/* Your Message */}
                                <div className="space-y-1.5">
                                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#121212]">
                                        {fields?.message?.label || "Your Message"}{" "}
                                        {fields?.message?.required !== false && <span className="text-red-500">*</span>}
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required={fields?.message?.required !== false}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={fields?.message?.placeholder || "Write your message here..."}
                                        className="w-full px-4 py-2 bg-white border border-gray-200/80 rounded-lg text-sm text-[#121212] focus:outline-none focus:border-[#DFB261] transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Row */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center font-medium gap-3 bg-[#DFB261] hover:bg-black hover:border hover:border-[#DFB261] text-black hover:text-white border border-[#DFB261] px-6 py-2.5 sm:px-8 lg:py-3 rounded-full transition-all duration-300 text-sm lg:text-base tracking-wide group">
                                            <span>{submitButton?.text || "Send Message"}</span>
                                            <LucideIcons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </motion.div>

                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                        {renderIcon(securityNote?.icon, LucideIcons.Lock, "w-3.5 h-3.5 text-[#DFB261]")}
                                        <span>{securityNote?.text || "Your information is secure with us."}</span>
                                    </div>
                                </div>

                            </form>
                        )}
                    </motion.div>

                    {/* Right Column: Map Preview & Find Us Easily (Span 5) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={fadeInUpVariants}
                        className="lg:col-span-5 bg-[#F9F4EE] rounded-lg p-4 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-5"
                    >
                        <div>
                            <h3
                                className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {mapSection?.title || "Our Location"}
                            </h3>
                            <div className="w-12 h-[2px] bg-[#DFB261] my-2" />
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                {mapSection?.description ||
                                    "Visit our salon and experience exceptional care in a relaxing and stylish environment."}
                            </p>
                        </div>

                        {/* Map Preview Box (Interactive Google Map or Image Fallback) */}
                        <div className="relative h-56 sm:h-64 rounded-lg overflow-hidden shadow-md border border-gray-200/80 bg-black/5">
                            {mapImage.includes("google.com/maps") || mapImage.includes("embed") ? (
                                <iframe
                                    src={mapImage}
                                    title={mapImageAlt}
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                />
                            ) : (
                                <>
                                    <img
                                        src={mapImage}
                                        alt={mapImageAlt}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Map Marker Pin Badge */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="bg-[#121212] text-[#DFB261] text-xs font-semibold px-4 py-2 rounded-lg shadow-2xl border border-[#DFB261] flex items-center gap-2 animate-bounce">
                                            {renderIcon(pinBadge?.icon, LucideIcons.MapPin, "w-4 h-4 fill-[#DFB261] text-black")}
                                            <span>{pinBadge?.text || "Haicraft Hair Salon"}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Find Us Easily Text */}
                        <div className="space-y-1.5 pt-1">
                            <h4
                                className="text-lg font-semibold text-[#121212]"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {mapInfo?.title || "Find Us Easily"}
                            </h4>
                            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                                {mapInfo?.description ||
                                    "We are conveniently located at 3170 Rosewood Lane Unit 200 , Beverly Hills, CA 90210, with easy access and parking facilities nearby."}
                            </p>
                        </div>

                        {/* Get Directions Button */}
                        <div>
                            <motion.div {...buttonLuxuryLift}>
                                <a
                                    href={mapButton?.href || "https://maps.google.com"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-between w-full border border-gray-300 hover:border-[#DFB261] bg-white hover:bg-[#DFB261] text-[#121212] hover:text-black font-semibold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-sm transition-all duration-200 group"
                                >
                                    <span className="flex items-center gap-2">
                                        {renderIcon(
                                            mapButton?.icon,
                                            LucideIcons.MapPin,
                                            "w-4 h-4 text-[#DFB261] group-hover:text-black transition-colors"
                                        )}
                                        {mapButton?.text || "Get Directions"}
                                    </span>
                                    {renderIcon(
                                        mapButton?.arrowIcon,
                                        LucideIcons.ArrowRight,
                                        "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                    )}
                                </a>
                            </motion.div>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}