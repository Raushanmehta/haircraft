import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";

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


const playfair = Playfair_Display({ subsets: ["latin"] });

export default function BlogCard({ post, cardVariants }: BlogCardProps) {
    return (
        <motion.div
            key={post.id}
            variants={cardVariants}
            className="bg-white rounded-2xl  border border-gray-200/80 shadow-xl shadow-gray-200/50 flex flex-col justify-between group hover:border-[#DFB261]/50 transition-all duration-300">
            <div>
                {/* Image Container with Category Badge */}
                <div className="relative h-48 lg:h-54 rounded-xl overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-4 left-4 bg-[#DFB261] text-black font-semibold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md">
                        {post.category}
                    </div>
                </div>

                <div className="p-4">
                    {/* Date */}
                    <div className="space-y-2 mb-2">
                        <p className="text-xs lg:text-sm uppercase tracking-[0.2em] text-gray-400 font-medium ">
                            {post.date}
                        </p>

                        {/* Post Title */}
                        <h3 className={`${playfair.className} text-2xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors`}>
                            {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3 ">
                            {post.description}
                        </p>
                    </div>
                    {/* Read More Link */}
                    <div className="pt-2 mt-4 border-t border-gray-100 flex items-center">
                        <Link
                            href={post.slug}
                            className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider text-[#121212] group-hover:text-[#DFB261] transition-colors">
                            <span>Read More</span>
                            <div className="w-8 h-8 rounded-full bg-[#DFB261] text-black border border-[#DFB261] flex items-center justify-center transition-all duration-300">
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}