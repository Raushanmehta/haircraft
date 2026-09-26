"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Calendar,
    ChevronRight,
    Quote,
    ArrowRight,
    User,
    Tag,
} from "lucide-react";

interface RecentPost {
    id: string;
    title: string;
    date: string;
    image: string;
    slug: string;
}

interface BlogDetailProps {
    title?: string;
    category?: string;
    date?: string;
    author?: string;
    mainImage?: string;
    introText?: string;
    sections?: {
        number: string;
        heading: string;
        content: string;
    }[];
    quote?: string;
    quoteAuthor?: string;
    recentPosts?: RecentPost[];
    categories?: string[];
}

const defaultRecentPosts: RecentPost[] = [
    {
        id: "1",
        title: "5 Essential Hair Care Tips for Healthier, Shinier Hair",
        date: "April 15, 2025",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=300&auto=format&fit=crop",
        slug: "/blog/5-essential-hair-care-tips",
    },
    {
        id: "2",
        title: "How to Choose the Right Hair Treatment for Your Type",
        date: "April 10, 2025",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=300&auto=format&fit=crop",
        slug: "/blog/how-to-choose-right-hair-treatment",
    },
    {
        id: "3",
        title: "Top Hair Trends You'll Love This Season",
        date: "April 05, 2025",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=300&auto=format&fit=crop",
        slug: "/blog/top-hair-trends-this-season",
    },
    {
        id: "4",
        title: "The Benefits of Regular Hair Spa Treatments",
        date: "March 28, 2025",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&auto=format&fit=crop",
        slug: "/blog/benefits-of-regular-hair-spa",
    },
];

const defaultCategories = [
    "Hair Care",
    "Styling Tips",
    "Hair Treatments",
    "Trends & Inspiration",
    "Salon Life",
];

export default function BlogDetailSection({
    mainImage = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop",
    introText = "Healthy, shiny hair is not just about looking good – it's a reflection of proper care, a balanced lifestyle, and the right hair routine. At Haicraft, we believe that beautiful hair begins with healthy habits. Whether you have straight, wavy, or curly hair, following a few essential care tips can make a big difference in the way your hair looks and feels.",
    sections = [
        {
            number: "1.",
            heading: "Use the Right Shampoo and Conditioner",
            content:
                "Choosing the right shampoo and conditioner for your hair type is the first step towards healthy hair. A good shampoo cleanses your scalp without stripping natural oils, while a nourishing conditioner keeps your hair soft and manageable.",
        },
        {
            number: "2.",
            heading: "Don't Skip Regular Trims",
            content:
                "Regular trims help remove split ends, prevent breakage, and keep your hair looking fresh and healthy. Even if you're trying to grow your hair, a small trim every few months can make it stronger in the long run.",
        },
        {
            number: "3.",
            heading: "Protect Your Hair from Heat",
            content:
                "Excessive use of heat styling tools like straighteners, curling irons, and blow dryers can damage your hair. Always use a heat protectant spray and try to keep the heat setting on a moderate level.",
        },
        {
            number: "4.",
            heading: "Keep Your Scalp Healthy",
            content:
                "A healthy scalp is the foundation for healthy hair. Regular cleansing, gentle massage, and proper hydration can improve blood circulation and promote hair growth.",
        },
        {
            number: "5.",
            heading: "Maintain a Balanced Diet",
            content:
                "Your diet plays a crucial role in the health of your hair. Include foods rich in vitamins, minerals, and proteins such as leafy greens, eggs, nuts, and fish to nourish your hair from within.",
        },
    ],
    quote = "“Great hair doesn't happen by chance, it happens by care.”",
    quoteAuthor = "Hair Experts at Haicraft",
    recentPosts = defaultRecentPosts,
    categories = defaultCategories,
}: BlogDetailProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left Column: Main Article Content (Span 8) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8 space-y-8"
                    >
                        {/* Featured Image Card */}
                        <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                            <img
                                src={mainImage}
                                alt="Blog featured"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>

                        {/* Intro Text */}
                        <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
                            {introText}
                        </p>

                        {/* Article Sections (Numbered items) */}
                        <div className="space-y-8 pt-4">
                            {sections.map((sec, index) => (
                                <div key={index} className="space-y-2">
                                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121212] flex items-center gap-2">
                                        <span className="text-[#d4af37]">{sec.number}</span>
                                        <span>{sec.heading}</span>
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed pl-6">
                                        {sec.content}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Stylized Quote Callout Box */}
                        <div className="bg-[#f8f5ee] border-l-4 border-[#d4af37] rounded-r-2xl p-6 sm:p-8 my-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <p className="font-serif text-lg sm:text-xl text-[#121212] italic font-normal">
                                {quote}
                            </p>
                            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold shrink-0">
                                — {quoteAuthor}
                            </span>
                        </div>

                    </motion.div>

                    {/* Right Column: Sidebar (Recent Posts, Categories, CTA) (Span 4) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-4 space-y-8 sticky top-28"
                    >

                        {/* Recent Posts Card */}
                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-6">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-[#121212]">
                                    Recent Posts
                                </h3>
                                <div className="w-10 h-[2px] bg-[#d4af37] mt-2" />
                            </div>

                            <div className="space-y-4">
                                {recentPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={post.slug}
                                        className="flex items-center gap-4 group pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                                    >
                                        <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-gray-100">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <h4 className="font-serif text-xs sm:text-sm font-semibold text-[#121212] group-hover:text-[#d4af37] transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium">
                                                <Calendar className="w-3 h-3 text-[#d4af37]" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories Card */}
                        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-6">
                            <div>
                                <h3 className="font-serif text-xl font-bold text-[#121212]">
                                    Categories
                                </h3>
                                <div className="w-10 h-[2px] bg-[#d4af37] mt-2" />
                            </div>

                            <div className="divide-y divide-gray-100">
                                {categories.map((cat, index) => {
                                    const isSelected = selectedCategory === cat;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`w-full flex items-center justify-between py-3 text-left text-xs sm:text-sm font-medium transition-colors ${isSelected
                                                    ? "text-[#d4af37] font-semibold"
                                                    : "text-gray-700 hover:text-[#d4af37]"
                                                }`}
                                        >
                                            <span>{cat}</span>
                                            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Bottom Promo Card */}
                        <div className="relative rounded-3xl overflow-hidden bg-[#121212] text-white p-6 sm:p-7 shadow-2xl border border-white/10 space-y-4">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-25"
                                style={{
                                    backgroundImage: `url(https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop)`,
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/90 to-[#121212]/60" />

                            <div className="relative z-10 space-y-3">
                                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                                    Ready for Healthier, More Beautiful Hair?
                                </h3>
                                <p className="text-gray-300 text-xs font-light leading-relaxed">
                                    Book your appointment today and let our experts take care of you.
                                </p>
                                <div className="pt-2">
                                    <Link
                                        href="/appointment"
                                        className="inline-flex items-center justify-between w-full bg-[#d4af37] hover:bg-[#c59b27] text-black font-medium px-5 py-3 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all group"
                                    >
                                        <span>Book an Appointment</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}