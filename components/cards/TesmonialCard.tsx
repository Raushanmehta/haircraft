import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Testimonial } from "@/sections/home/TestimonialSection";
import Image from "next/image";

interface TestimonialCardProps {
    item: Testimonial;
    idx: number;

}const playfair = Playfair_Display({ subsets: ["latin"] });

export default function TestimonialCard({ item, idx }: TestimonialCardProps) {
    return (
        <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}

            className="w-full bg-white rounded-lg p-2 sm:p-3 border border-gray-200/80 shadow-xl shadow-gray-200/50 flex flex-col sm:flex-row gap-4 lg:gap-6 items-center group hover:border-[#DFB261]/50 transition-all duration-300 relative">

            {/* Top Right Quote Icon */}
            <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 text-gray-200 group-hover:text-[#d4af37]/25 transition-colors z-10" />

            {/* Left Column: Client Avatar */}
            <div className="w-full sm:w-32 md:w-40 h-48 sm:h-auto sm:aspect-[3/4] rounded-lg overflow-hidden shrink-0 relative shadow-md">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Column: Review Details */}
            <div className="flex-1 flex flex-col px-2 sm:px-0 py-2 sm:py-0 justify-between space-y-2 w-full">


                {/* Comment Text */}
                <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3">
                    {item.comment}
                </p>

                {/* Gold Divider Line */}
                <div className="w-10 h-[2px] bg-[#DFB261]" />

                {/* Client Name & Role */}
                <div>
                    <h3 className={`${playfair.className} text-2xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors`}>
                        {item.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-semibold mt-1">
                        {item.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}