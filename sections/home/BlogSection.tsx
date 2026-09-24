"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/cards/BlogCard";

interface BlogPost {
    id: string;
    category: string;
    date: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        category: "HAIR CARE",
        date: "12 AUG 2025",
        title: "Top Haircut Trends for Men This Season",
        description: "Discover the latest haircut styles that are trending right now and find the perfect look to match your personality.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop",
        slug: "/blog/top-haircut-trends-for-men",
    },
    {
        id: "2",
        category: "BEARD CARE",
        date: "08 AUG 2025",
        title: "How to Maintain a Perfect Beard",
        description: "Learn simple tips and routines to keep your beard clean, healthy, and stylish every day.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
        slug: "/blog/how-to-maintain-a-perfect-beard",
    },
    {
        id: "3",
        category: "SKINCARE",
        date: "05 AUG 2025",
        title: "Skincare Routine for a Fresh Look",
        description: "A simple skincare guide to keep your face clean, healthy, and glowing throughout the day.",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop",
        slug: "/blog/skincare-routine-for-a-fresh-look",
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function BlogSection() {
    return (
        <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-4 lg:mb-8 space-y-2">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            OUR BLOG
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Latest Tips, Trends, <br />
                        <span className="text-[#DFB261] font-normal">Expert Advice  Guides</span>
                    </h2>

                    <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                        Stay updated with the latest grooming trends, expert tips, and style inspiration from our professionals, stylish, and confident.
                    </p>
                </div>

                {/* Blog Posts Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} cardVariants={cardVariants} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}