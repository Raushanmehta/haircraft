"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/sections/home/ServiceSection";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function ServiceCard({ service, index }: { service: ServiceItem; index: number; setActiveIndex: (index: number) => void; }) {
    const IconComponent = service.icon;
    return (
        <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden flex flex-col hover:border-[#DFB261]/50 transition-all duration-300 shadow-xl">
            {/* Service Image Header with Gradient Mask */}
            <div className="relative">
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* Circular Icon Badge */}
                <div className="absolute -bottom-8 left-6 z-10 w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-[#DFB261] flex items-center justify-center text-[#DFB261] shadow-lg">
                    <IconComponent className="w-8 h-8" />
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-10 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-2">
                    <h3 className={`${playfair.className} text-2xl font-semibold text-white group-hover:text-[#DFB261] transition-colors`}>
                        {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3">
                        {service.description}
                    </p>
                </div>

                {/* View Details Link */}
                <div className=" flex items-center justify-between">
                    <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold  tracking-wider text-white group-hover:text-[#DFB261] transition-colors">
                        <span>View Details</span>
                    </Link>
                    <div className="w-10 h-10 rounded-full border border-[#DFB261]  flex items-center justify-center text-[#DFB261] transition-all duration-300">
                        <ArrowRight className="w-5 h-5 transform text-[#DFB261]" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}