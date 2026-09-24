import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
    id: string;
    category: string;
    date: string;
    title: string;
    description: string;
    image: string;
    slug: string;
}

interface BlogCardProps {
    post: BlogPost;
    cardVariants: any;
}

export default function BlogCard({ post, cardVariants }: BlogCardProps) {
    return (
        <motion.div
            key={post.id}
            variants={cardVariants}
            className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xl shadow-gray-200/50 flex flex-col justify-between group hover:border-[#DFB261]/50 transition-all duration-300">
            <div>
                {/* Image Container with Category Badge */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-black font-semibold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md">
                        {post.category}
                    </div>
                </div>

                {/* Date */}
                <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium mb-2">
                    {post.date}
                </p>

                {/* Post Title */}
                <h3 className="font-serif text-xl font-semibold text-[#121212] group-hover:text-[#d4af37] transition-colors leading-snug mb-3">
                    {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {post.description}
                </p>
            </div>

            {/* Read More Link */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                    href={post.slug}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#121212] group-hover:text-[#DFB261] transition-colors"
                >
                    <span>Read More</span>
                </Link>
                <div className="w-8 h-8 rounded-full bg-[#DFB261] group-hover:bg-[#DFB261] text-gray-700 group-hover:text-black border border-gray-200 group-hover:border-[#DFB261] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
            </div>
        </motion.div>
    )
}