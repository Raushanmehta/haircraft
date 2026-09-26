"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceItem } from "@/sections/home/ServiceSection";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

import * as Icons from "lucide-react";

export interface ServiceCardItem {
    id: string;
    title: string;
    description: string | string[];
    image: string;
    icon: React.ElementType | string;
    href: string;
}

export interface ServiceCardProps {
    service: ServiceCardItem;
    index?: number;
    setActiveIndex?: (index: number) => void;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
    const IconComponent = typeof service.icon === "string"
        ? ((Icons as Record<string, any>)[service.icon] || Icons.Sparkles)
        : (service.icon || Icons.Sparkles);
    const displayDesc = Array.isArray(service.description) ? service.description[0] : service.description;
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
                <Link href={service.href || `/services/${service.id}`} className="block relative h-56 overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </Link>

                {/* Circular Icon Badge */}
                <div className="absolute -bottom-8 left-6 z-10 w-16 h-16 rounded-full bg-[#1a1a1a] border-2 border-[#DFB261] flex items-center justify-center text-[#DFB261] shadow-lg group-hover:bg-[#DFB261] group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 pt-10 flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-2">
                    <h3 className={`${playfair.className} text-2xl font-semibold text-white group-hover:text-[#DFB261] transition-colors`}>
                        <Link href={service.href || `/services/${service.id}`}>
                            {service.title}
                        </Link>
                    </h3>
                    <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3">
                        {displayDesc}
                    </p>
                </div>

                {/* View Details Link */}
                <Link
                    href={service.href || `/services/${service.id}`}
                    className="group/btn flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white group-hover:text-[#DFB261] group-hover/btn:text-[#DFB261] transition-colors duration-300">
                        View Details
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#DFB261] bg-transparent text-[#DFB261] group-hover:bg-[#DFB261] group-hover:text-black group-hover/btn:bg-[#DFB261] group-hover/btn:text-black group-hover:shadow-lg group-hover:shadow-[#DFB261]/30 flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
                        <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}