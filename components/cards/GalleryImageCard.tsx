import React from "react";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import { fadeInUpVariants } from "@/utils/animations";

interface Props {
    img: {
        id: string;
        src: string;
        alt: string;
        span?: string;
    };
    index: number;
    setSelectedImage: (image: string) => void;
}

export default function GalleryImageCard({ img, index, setSelectedImage }: Props) {
    return (
        <motion.div
            key={img.id}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            whileHover={{ y: -4, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1), 0 0 20px rgba(223,178,97,0.25)" }}
            onClick={() => setSelectedImage(img.src)}
            className="relative h-44 sm:h-52 lg:h-60 rounded-lg overflow-hidden shadow-md group cursor-pointer border border-gray-200/80 hover:border-[#DFB261]/80 transition-all duration-300 bg-[#F9F4EE]"
        >
            <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
            />
            {/* Subtle Gradient & Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.div
                    whileHover={{ scale: 1.15, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#DFB261] text-black flex items-center justify-center shadow-lg cursor-pointer"
                >
                    <ZoomIn className="w-5 h-5 text-black" />
                </motion.div>
            </div>
        </motion.div>
    );
}