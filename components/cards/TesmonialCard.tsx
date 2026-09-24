import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/sections/home/TestimonialSection";

interface TestimonialCardProps {
    item: Testimonial;
    idx: number;
}

export default function TestimonialCard({ item, idx }: TestimonialCardProps) {
    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xl shadow-gray-200/50 flex flex-col justify-between relative group hover:border-[#DFB261]/50 transition-all duration-300"
        >
            {/* Top Row: Stars & Quote Icon */}
            <div className="flex items-center justify-between mb-6">
                <Quote className="w-8 h-8 text-gray-200 group-hover:text-[#DFB261]/20 transition-colors" />
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed italic mb-8 flex-1">
                {item.comment}
            </p>

            {/* Divider Line */}
            <div className="w-12 h-[2px] bg-[#DFB261] mb-6" />

            {/* User Profile Info */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#DFB261]/30">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="font-serif text-lg font-semibold text-[#121212]">
                        {item.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mt-0.5">
                        {item.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}