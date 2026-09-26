"use client";

import React, { useState } from "react";
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
import { fadeInUpVariants, textContainerVariants, buttonLuxuryLift, fadeInLeftVariants, } from "@/utils/animations";
import siteData from "@/data/index";

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

export interface CareerDetailSectionProps {
    job?: any;
    detailConfig?: any;
    formConfig?: any;
    jobTitle?: string;
    location?: string;
    jobType?: string;
    experience?: string;
    department?: string;
    jobOverview?: string;
    responsibilities?: string[];
    qualifications?: string[];
    perks?: any[];
}

export default function CareerDetailSection({
    job,
    detailConfig,
    formConfig,
    jobTitle,
    location,
    jobType,
    experience,
    department,
    jobOverview,
    responsibilities,
    qualifications,
    perks,
}: CareerDetailSectionProps) {
    const defaultJob = siteData.career.jobs[0];
    const dConfig = detailConfig || siteData.career.detailPage;
    const fConfig = formConfig || siteData.career.applicationForm;

    const currentTitle = job?.title || jobTitle || defaultJob.title;
    const currentLocation = job?.location || location || defaultJob.location;
    const currentType = job?.type || jobType || defaultJob.type;
    const currentExperience = job?.experience || experience || defaultJob.experience;
    const currentDepartment = job?.department || department || defaultJob.department || "Hair Styling";
    const currentOverview = job?.jobOverview || jobOverview || job?.description || defaultJob.jobOverview;
    const currentResponsibilities = job?.responsibilities || responsibilities || defaultJob.responsibilities || [];
    const currentQualifications = job?.qualifications || qualifications || defaultJob.qualifications || [];
    const currentPerks = job?.perks || perks || defaultJob.perks || [];

    const fields = fConfig?.fields;

    const [formData, setFormData] = useState({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        currentLocation: "",
        relevantExperience: "",
        message: "",
    });

    const [fileName, setFileName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Job Overview, Responsibilities, Qualifications, Perks (Span 7) */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="lg:col-span-7 space-y-6">
                        {/* Top Info Banner Card */}
                        <motion.div
                            variants={textContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            className="bg-[#F9F4EE] rounded-lg p-4 py-5 md:py-6 border border-gray-200/80 shadow-xl shadow-gray-200/40 grid grid-cols-2 md:grid-cols-4 items-center gap-x-3 sm:gap-x-6 gap-y-0 md:gap-0 md:divide-x divide-gray-200/80">
                            {/* Location */}
                            <motion.div variants={fadeInUpVariants} className="flex items-center gap-2.5 sm:gap-3 pb-3 md:pb-0">
                                <div className="text-black flex items-center justify-center shrink-0">
                                    {renderIcon(dConfig?.metaLabels?.location?.icon, LucideIcons.MapPin, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] sm:text-xs md:text-xs lg:text-md tracking-wider text-[#DFB261] font-semibold">
                                        {dConfig?.metaLabels?.location?.label || "Location"}
                                    </p>
                                    <p className="text-xs sm:text-sm md:text-sm lg:text-md font-semibold text-[#121212] mt-0.5 leading-snug break-words">
                                        {currentLocation}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Job Type */}
                            <motion.div variants={fadeInUpVariants} className="flex items-center gap-2.5 sm:gap-3 pb-3 md:pb-0 md:pl-6">
                                <div className="text-black flex items-center justify-center shrink-0">
                                    {renderIcon(dConfig?.metaLabels?.jobType?.icon, LucideIcons.Briefcase, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] sm:text-xs md:text-xs lg:text-md tracking-wider text-[#DFB261] font-semibold">
                                        {dConfig?.metaLabels?.jobType?.label || "Job Type"}
                                    </p>
                                    <p className="text-xs sm:text-sm md:text-sm lg:text-md font-semibold text-[#121212] mt-0.5 leading-snug break-words">
                                        {currentType}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Experience */}
                            <motion.div variants={fadeInUpVariants} className="flex items-center gap-2.5 sm:gap-3 pt-3 md:pt-0 md:pl-6 border-t md:border-t-0 border-gray-200/80">
                                <div className="text-black flex items-center justify-center shrink-0">
                                    {renderIcon(dConfig?.metaLabels?.experience?.icon, LucideIcons.Clock, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] sm:text-xs md:text-xs lg:text-md tracking-wider text-[#DFB261] font-semibold">
                                        {dConfig?.metaLabels?.experience?.label || "Experience"}
                                    </p>
                                    <p className="text-xs sm:text-sm md:text-sm lg:text-md font-semibold text-[#121212] mt-0.5 leading-snug break-words">
                                        {currentExperience}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Department */}
                            <motion.div variants={fadeInUpVariants} className="flex items-center gap-2.5 sm:gap-3 pt-3 md:pt-0 md:pl-6 border-t md:border-t-0 border-gray-200/80">
                                <div className="text-black flex items-center justify-center shrink-0">
                                    {renderIcon(dConfig?.metaLabels?.department?.icon, LucideIcons.Users, "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8")}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[11px] sm:text-xs md:text-xs lg:text-md tracking-wider text-[#DFB261] font-semibold">
                                        {dConfig?.metaLabels?.department?.label || "Department"}
                                    </p>
                                    <p className="text-xs sm:text-sm md:text-sm lg:text-md font-semibold text-[#121212] mt-0.5 leading-snug break-words">
                                        {currentDepartment}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Job Overview */}
                        <motion.div variants={fadeInUpVariants} className="space-y-1">
                            <div className="flex items-center gap-3">
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                <span className="text-xs uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                    {dConfig?.overview?.badge || "POSITION DETAILS"}
                                </span>
                            </div>

                            <h3
                                className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}>
                                {dConfig?.overview?.title || "Job Overview"}
                            </h3>

                            <div className="w-12 h-[2px] bg-[#DFB261] my-2" />

                            <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                                {currentOverview}
                            </p>
                        </motion.div>

                        {/* Key Responsibilities */}
                        <motion.div variants={fadeInUpVariants} className="space-y-1">
                            <div>
                                <h3
                                    className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {dConfig?.responsibilities?.title || "Key Responsibilities"}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#DFB261] mt-2" />
                            </div>

                            <div className="space-y-2 pt-1">
                                {currentResponsibilities.map((item: string, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInLeftVariants}
                                        className="flex items-center gap-3 group">
                                        <motion.div
                                            whileHover={{ scale: 1.25, rotate: 360 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-6 h-6 rounded-full bg-[#DFB261]/15 text-[#DFB261] flex items-center justify-center shrink-0 cursor-pointer">
                                            {renderIcon(
                                                dConfig?.responsibilities?.icon || "CheckCircle",
                                                LucideIcons.CheckCircle,
                                                "w-6 h-6 fill-[#DFB261] text-black"
                                            )}
                                        </motion.div>
                                        <span className="text-sm font-medium text-gray-700">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Qualifications */}
                        <motion.div variants={fadeInUpVariants} className="space-y-1">
                            <div>
                                <h3
                                    className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {dConfig?.qualifications?.title || "Qualifications"}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#DFB261] mt-2" />
                            </div>

                            <div className="space-y-2 pt-1">
                                {currentQualifications.map((item: string, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        variants={fadeInLeftVariants}
                                        className="flex items-center gap-3 group">
                                        <motion.div
                                            whileHover={{ scale: 1.25, rotate: 360 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-6 h-6 rounded-full bg-[#DFB261]/15 text-[#DFB261] flex items-center justify-center shrink-0 cursor-pointer">
                                            {renderIcon(
                                                dConfig?.qualifications?.icon || "CheckCircle",
                                                LucideIcons.CheckCircle,
                                                "w-6 h-6 fill-[#DFB261] text-black"
                                            )}
                                        </motion.div>
                                        <span className="text-sm font-medium text-gray-700">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* What We Offer / Perks (Centered icon, title & description as requested) */}
                        <motion.div variants={fadeInUpVariants} className="space-y-1">
                            <div>
                                <h3
                                    className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {dConfig?.perks?.title || "What We Offer"}
                                </h3>
                                <div className="w-12 h-[2px] bg-[#DFB261] my-2" />
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                                {currentPerks.map((perk: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{
                                            y: -4,
                                            boxShadow:
                                                "0 20px 30px -10px rgba(0,0,0,0.08), 0 0 20px rgba(223,178,97,0.2)",
                                        }}
                                        className="bg-[#F9F4EE] rounded-lg p-4 border border-gray-200/80 shadow-sm space-y-2 group hover:border-[#DFB261] transition-all cursor-pointer flex flex-col items-center text-center">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.3 }}
                                            className="w-14 h-14 rounded-full bg-[#DFB261] text-black flex items-center justify-center shadow-sm mx-auto shrink-0">
                                            {renderIcon(perk.icon, LucideIcons.Star, "w-7 h-7")}
                                        </motion.div>
                                        <h4 className="text-sm sm:text-md font-semibold text-[#121212]">
                                            {perk.title}
                                        </h4>
                                        <p className="text-gray-600 text-xs font-medium leading-relaxed">
                                            {perk.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Right Column: Apply for This Position Form (Span 5) */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="lg:col-span-5 bg-[#F9F4EE] rounded-lg p-4 lg:p-6 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4">
                        <div>
                            <h3
                                className="text-2xl sm:text-3xl font-semibold text-[#121212] leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}>
                                {fConfig?.title || "Apply for This Position"}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                                {fConfig?.description ||
                                    "Fill out the form below and take the next step in your luxury styling career with Haicraft."}
                            </p>
                            <div className="w-12 h-[2px] bg-[#DFB261] my-2" />
                        </div>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white border border-[#DFB261] rounded-lg p-6 text-center space-y-3 my-4 shadow-md">
                                <div className="w-14 h-14 bg-[#DFB261] text-black rounded-full flex items-center justify-center mx-auto shadow-md">
                                    {renderIcon(fConfig?.successState?.icon, LucideIcons.CheckCircle2, "w-7 h-7")}
                                </div>
                                <h4
                                    className="text-xl font-semibold text-[#121212]"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {fConfig?.successState?.title || "Application Submitted!"}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                                    {fConfig?.successState?.description
                                        ? fConfig.successState.description
                                            .replace("{fullName}", formData.fullName || "Applicant")
                                            .replace("{jobTitle}", currentTitle)
                                        : `Thank you, ${formData.fullName}. We have received your application for ${currentTitle} and will contact you shortly.`}
                                </p>
                                <div className="pt-2">
                                    <motion.div {...buttonLuxuryLift} className="inline-block">
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFileName("");
                                            }}
                                            className="px-5 py-2 bg-[#DFB261] text-black rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#DFB261]/90 transition-colors shadow-md shadow-[#DFB261]/20"
                                        >
                                            {fConfig?.successState?.buttonText || "Submit Another"}
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3.5 pt-2">
                                {/* Full Name */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.fullName?.label || "Full Name"}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                                            {renderIcon(fields?.fullName?.icon, LucideIcons.User, "w-4 h-4")}
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder={fields?.fullName?.placeholder || "Enter your full name"}
                                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.emailAddress?.label || "Email Address"}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                                            {renderIcon(fields?.emailAddress?.icon, LucideIcons.Mail, "w-4 h-4")}
                                        </div>
                                        <input
                                            type="email"
                                            name="emailAddress"
                                            required
                                            value={formData.emailAddress}
                                            onChange={handleChange}
                                            placeholder={fields?.emailAddress?.placeholder || "Enter your email address"}
                                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.phoneNumber?.label || "Phone Number"}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                                            {renderIcon(fields?.phoneNumber?.icon, LucideIcons.Phone, "w-4 h-4")}
                                        </div>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            required
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder={fields?.phoneNumber?.placeholder || "Enter your phone number"}
                                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Current Location */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.currentLocation?.label || "Current Location"}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                                            {renderIcon(fields?.currentLocation?.icon, LucideIcons.MapPin, "w-4 h-4")}
                                        </div>
                                        <input
                                            type="text"
                                            name="currentLocation"
                                            required
                                            value={formData.currentLocation}
                                            onChange={handleChange}
                                            placeholder={fields?.currentLocation?.placeholder || "Enter your current location"}
                                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Relevant Experience */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.relevantExperience?.label || "Relevant Experience"}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                                            {renderIcon(fields?.relevantExperience?.icon, LucideIcons.Briefcase, "w-4 h-4")}
                                        </div>
                                        <select
                                            name="relevantExperience"
                                            required
                                            value={formData.relevantExperience}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all appearance-none cursor-pointer text-gray-700">
                                            <option value="" disabled>
                                                {fields?.relevantExperience?.placeholder || "Select experience"}
                                            </option>
                                            {fields?.relevantExperience?.options?.map((opt: string) => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            )) || (
                                                    <>
                                                        <option value="0-1 Years">0-1 Years</option>
                                                        <option value="1-3 Years">1-3 Years</option>
                                                        <option value="3-5 Years">3-5 Years</option>
                                                        <option value="5+ Years">5+ Years</option>
                                                    </>
                                                )}
                                        </select>
                                    </div>
                                </div>

                                {/* Upload Your Resume */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.resume?.label || "Upload Your Resume"}{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-3 px-3.5 py-2 bg-white border border-gray-200 rounded-lg">
                                        {renderIcon(fields?.resume?.icon, LucideIcons.FileText, "w-4 h-4 text-[#DFB261] shrink-0")}
                                        <span className="text-xs text-gray-500 truncate flex-1">
                                            {fileName || fields?.resume?.placeholder || "Choose resume file"}
                                        </span>
                                        <label className="bg-[#DFB261]/20 hover:bg-[#DFB261]/30 text-black px-3 py-1 rounded text-xs font-semibold cursor-pointer transition-colors shrink-0">
                                            {fields?.resume?.buttonText || "Browse"}
                                            <input
                                                type="file"
                                                required
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                </div>

                                {/* Additional Message */}
                                <div className="space-y-1">
                                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                                        {fields?.message?.label || "Additional Message (Optional)"}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute top-3 left-3.5 pointer-events-none text-[#DFB261]">
                                            {renderIcon(fields?.message?.icon, LucideIcons.MessageSquare, "w-4 h-4")}
                                        </div>
                                        <textarea
                                            name="message"
                                            rows={3}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder={fields?.message?.placeholder || "Tell us something about yourself..."}
                                            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <motion.div {...buttonLuxuryLift} className="w-full">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center gap-2 w-full bg-[#DFB261] hover:bg-[#DFB261]/90 text-black font-medium py-3 rounded-full shadow-lg shadow-[#DFB261]/20 transition-all text-sm tracking-wide group">
                                            <span>{fConfig?.submitButton?.text || "Submit Application"}</span>
                                            {renderIcon(
                                                fConfig?.submitButton?.icon || "ArrowRight",
                                                LucideIcons.ArrowRight,
                                                "w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                            )}
                                        </button>
                                    </motion.div>
                                </div>

                                <p className="text-center text-[11px] text-gray-500 font-medium pt-1">
                                    {fConfig?.securityNote || "🔒 Your information is secure and treated with luxury privacy."}
                                </p>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}