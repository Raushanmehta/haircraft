"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "@/components/cards/BlogCard";
import PageTopSection from "@/components/common/PageTopSection";
import siteData from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainerFast, fadeInUpVariants } from "@/utils/animations";

function BlogPageContent() {
    const { blog } = siteData;
    const searchParams = useSearchParams();
    const queryCategory = searchParams?.get("category");

    const [activeCategory, setActiveCategory] = useState<string>(
        queryCategory ? queryCategory.toUpperCase().trim() : "ALL"
    );

    // Extract unique categories from posts
    const categories = useMemo(() => {
        const set = new Set<string>();
        blog.posts.forEach((p) => {
            if (p.category) set.add(p.category.trim().toUpperCase());
        });
        return ["ALL", ...Array.from(set)];
    }, [blog.posts]);

    // Format category nicely
    const formatCategory = (cat: string) => {
        if (cat === "ALL") return "All Posts";
        return cat
            .toLowerCase()
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
    };

    // Filter posts
    const filteredPosts = useMemo(() => {
        if (!activeCategory || activeCategory === "ALL") {
            return blog.posts;
        }
        return blog.posts.filter(
            (p) => p.category?.trim().toUpperCase() === activeCategory.toUpperCase()
        );
    }, [blog.posts, activeCategory]);

    return (
        <main>
            <PageTopSection
                title={blog.pageTop?.title || "Blogs"}
                breadcrumbs={blog.pageTop?.breadcrumbs || [
                    { label: "Home", href: "/" },
                    { label: "Blogs", href: "/blog" },
                ]}
            />
            <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-6 lg:space-y-8">

                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainerFast}
                        className="text-center max-w-4xl mx-auto space-y-2"
                    >
                        <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                {blog.subtitle}
                            </span>
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        </motion.div>

                        <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            {blog.titlePart1} <br />
                            <span className="text-[#DFB261] font-normal">{blog.titlePart2}</span>
                        </motion.h2>

                        <motion.p variants={fadeInUpVariants} className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                            {blog.description}
                        </motion.p>
                    </motion.div>

                    {/* Category Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                    >
                        {categories.map((cat) => {
                            const isSelected = activeCategory === cat;
                            const count =
                                cat === "ALL"
                                    ? blog.posts.length
                                    : blog.posts.filter((p) => p.category?.trim().toUpperCase() === cat).length;

                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                                        isSelected
                                            ? "bg-[#DFB261] text-black shadow-md shadow-[#DFB261]/20 font-semibold scale-105"
                                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                                    }`}
                                >
                                    <span>{formatCategory(cat)}</span>
                                    <span
                                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                                            isSelected ? "bg-black/20 text-black font-bold" : "bg-black/5 text-gray-500"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </motion.div>

                    {/* Blog Posts Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredPosts.map(post => (
                                <BlogCard key={post.id} post={post} cardVariants={fadeInUpVariants} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12 text-gray-500 font-medium">
                            No articles found for this category.
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <BlogPageContent />
        </Suspense>
    );
}