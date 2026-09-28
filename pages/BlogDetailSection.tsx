"use client";

import React, { useState } from "react";
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
import { BlogPost, BlogDetailPageData } from "@/data/index";

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

export interface BlogDetailProps {
    post?: BlogPost | any;
    detailConfig?: BlogDetailPageData | any;
    metaIcons?: Record<string, any>;
    recentPosts?: BlogPost[] | any[];
}

export default function BlogDetailSection({
    post,
    detailConfig,
    metaIcons,
    recentPosts,
}: BlogDetailProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const title = post?.title || "";
    const category = post?.category || "";
    const date = post?.date || "";
    const author = (post as any)?.author || "";
    const readTime = (post as any)?.readTime || "";
    const mainImage = post?.image || "";
    const introText = (post as any)?.introText || post?.description || "";
    const sections = (post as any)?.sections || [];
    const quote = (post as any)?.quote || "";
    const quoteAuthor = (post as any)?.quoteAuthor || "";

    const badge = detailConfig?.badge || "BLOG DETAILS";
    const icons = metaIcons;
    const sidebar = detailConfig?.sidebar;
    const sidebarCategories = sidebar?.categories || [];
    const recentPostsTitle = sidebar?.recentPostsTitle || "Recent Posts";
    const categoriesTitle = sidebar?.categoriesTitle || "Categories";
    const promo = sidebar?.promoCard;

    const postsList = recentPosts || [];

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

                    {/* Left Column: Main Article Content (Span 8) */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="lg:col-span-8 space-y-6">
                        {/* Featured Image */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="relative h-[280px] sm:h-[360px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl border border-gray-200/80 bg-[#F9F4EE]">
                            <img
                                src={mainImage}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </motion.div>

                        {/* Main Title & Intro Overview */}
                        <motion.div variants={fadeInUpVariants} className="space-y-2">
                            <h2
                                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#121212] leading-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}>
                                {title}
                            </h2>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-semibold text-gray-500 pt-1">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#DFB261]/15 text-[#DFB261] border border-[#DFB261]/30 uppercase tracking-wider text-[11px]">
                                    {category}
                                </span>
                                <div className="flex items-center gap-1.5">
                                    {renderIcon(icons?.calendar, LucideIcons.Calendar, "w-3.5 h-3.5 text-[#DFB261]")}
                                    <span>{date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {renderIcon(icons?.author, LucideIcons.User, "w-3.5 h-3.5 text-[#DFB261]")}
                                    <span>{author}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {renderIcon(icons?.readTime, LucideIcons.Clock, "w-3.5 h-3.5 text-[#DFB261]")}
                                    <span>{readTime}</span>
                                </div>
                            </div>

                            <div className="w-12 h-[2px] bg-[#DFB261] my-2" />

                            <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                                {introText}
                            </p>
                        </motion.div>

                        {/* Numbered Sections */}
                        <div className="space-y-4 pt-1">
                            {sections.map((sec: any, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUpVariants}
                                    className=" space-y-1"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DFB261] text-[#121212] flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                                            {sec.number.replace(".", "")}
                                        </span>
                                        <h3
                                            className="text-lg sm:text-xl font-semibold text-[#121212] leading-tight group-hover:text-[#DFB261] transition-colors"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {sec.heading}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium pl-10 sm:pl-11">
                                        {sec.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stylized Quote Callout - Matching Luxury Theme */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-[#F9F4EE] border-l-4 border-[#DFB261] rounded-r-lg p-4 sm:p-5 shadow-xl shadow-gray-200/40 border-y border-r border-gray-200/80 relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
                                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                                    <div className=" flex items-center justify-center ">
                                        {renderIcon(icons?.quote, LucideIcons.Quote, "w-4 h-4 sm:w-5 sm:h-5 fill-[#121212]")}
                                    </div>
                                    <p
                                        className="text-base sm:text-lg text-[#121212] italic font-semibold leading-relaxed"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {quote}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0 pl-12 sm:pl-0">
                                    <span className="w-5 h-[2px] bg-[#DFB261]" />
                                    <span className="text-xs uppercase tracking-[0.2em] text-[#DFB261] font-semibold whitespace-nowrap">
                                        {quoteAuthor}
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Right Column: Sidebar (Recent Posts, Categories, CTA Promo) (Span 4) */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="lg:col-span-4 space-y-6">

                        {/* Recent Posts Card */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-[#F9F4EE] rounded-lg p-4  border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4">
                            <div className="">
                                <h3
                                    className="text-xl sm:text-2xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {recentPostsTitle}
                                </h3>
                                <div className="w-10 h-[2px] bg-[#DFB261] mt-2" />
                            </div>

                            <div className="space-y-3 pt-1">
                                {postsList.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={post.slug}
                                        className="flex items-center gap-3.5 group  rounded-lg ">
                                        <div className="w-18 h-16 sm:w-20 sm:h-16 rounded-lg overflow-hidden shrink-0 shadow-sm border border-gray-200/60 bg-black/5">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="space-y-1 flex-1 min-w-0">
                                            <h4
                                                className="text-xs sm:text-sm font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                                                {renderIcon(icons?.calendar, LucideIcons.Calendar, "w-3.5 h-3.5 text-[#DFB261]")}
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>

                        {/* Categories Card */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="bg-[#F9F4EE] rounded-lg p-4 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4">
                            <div>
                                <h3
                                    className="text-xl sm:text-2xl font-semibold text-[#121212] leading-tight"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {categoriesTitle}
                                </h3>
                                <div className="w-10 h-[2px] bg-[#DFB261] mt-2" />
                            </div>

                            <div className="divide-y divide-gray-200/60 pt-1">
                                {sidebarCategories.map((cat: string, index: number) => {
                                    const isSelected = selectedCategory === cat;
                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => setSelectedCategory(isSelected ? null : cat)}
                                            className={`w-full flex items-center justify-between py-2.5 text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer group ${isSelected
                                                ? "text-[#DFB261] font-semibold"
                                                : "text-gray-700 hover:text-[#DFB261]"
                                                }`}>
                                            <span className="group-hover:translate-x-1 transition-transform">
                                                {cat}
                                            </span>
                                            {renderIcon(icons?.chevronRight, LucideIcons.ChevronRight, "w-4 h-4 text-gray-400 group-hover:text-[#DFB261] transition-colors")}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Luxury Dark Promo Card */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="relative rounded-lg overflow-hidden bg-[#121212] text-white p-4 shadow-2xl border border-white/10 space-y-4">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-25"
                                style={{
                                    backgroundImage: `url(${promo?.backgroundImage || "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop"})`,
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-[#121212]/60" />

                            <div className="relative z-10 space-y-3">
                                <h3
                                    className="text-xl sm:text-2xl font-semibold text-white leading-snug"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    {promo?.title || "Ready for Healthier, More Beautiful Hair?"}
                                </h3>
                                <p className="text-gray-300 text-xs sm:text-sm font-normal leading-relaxed">
                                    {promo?.description || "Book your appointment today and let our experts take care of your styling needs."}
                                </p>
                                <div className="pt-2">
                                    <motion.div {...buttonLuxuryLift} className="w-auto inline-block lg:w-full">
                                        <Link
                                            href={promo?.button?.href || "/contact-us"}
                                            className="inline-flex lg:flex items-center justify-center lg:justify-between gap-3 w-auto lg:w-full bg-[#DFB261] hover:bg-[#cfa554] text-black font-semibold px-5 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg shadow-[#DFB261]/20 transition-all duration-200 group"
                                        >
                                            <span className="whitespace-nowrap">{promo?.button?.text || "Book an Appointment"}</span>
                                            {renderIcon(promo?.button?.icon || icons?.arrowRight, LucideIcons.ArrowRight, "w-4 h-4 shrink-0 transform group-hover:translate-x-1 transition-transform")}
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}