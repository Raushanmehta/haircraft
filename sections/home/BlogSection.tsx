"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";
import siteData from "@/data/index";
import { staggerContainerFast, fadeInUpVariants } from "@/utils/animations";

interface BlogPost {
    id: string;
    category: string;
    date: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

const { blog } = siteData.home;

export default function BlogSection() {
    return (
        <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerFast}
                    className="text-center max-w-4xl mx-auto mb-4 lg:mb-8 space-y-2"
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

                {/* Blog Posts Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainerFast}>
                    {blog.posts.map((post) => (
                        <BlogCard key={post.id} post={post} cardVariants={fadeInUpVariants} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}