import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { fadeInUpVariants } from "@/utils/animations";

interface Props {
    vid: {
        id: string;
        title: string;
        description: string;
        duration: string;
        thumbnail: string;
        videoUrl: string;
    };
    index: number;
    setActiveVideo: (video: any) => void;
}

export default function GalleryVideoCard({ vid, index, setActiveVideo }: Props) {
    return (
        <motion.div
            key={vid.id}
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            onClick={() => setActiveVideo(vid)}
            className=" rounded-lg  space-y-2"
        >
            {/* Thumbnail Container */}
            <div className="relative h-44 sm:h-48 rounded-lg overflow-hidden shadow-md border border-gray-200/60">
                <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-full bg-[#DFB261] text-black flex items-center justify-center shadow-lg"
                    >
                        <Play className="w-5 h-5 fill-black ml-0.5 text-black" />
                    </motion.div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {vid.duration}
                </div>
            </div>

            {/* Details */}
            <div className="space-y-1">
                <h3
                    className="text-lg sm:text-xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors leading-tight"
                // style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    {vid.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {vid.description}
                </p>
            </div>
        </motion.div>
    );
}