"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/cards/ServiceCard";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi, } from "@/components/ui/carousel";

import siteData from "@/data/index";
import * as Icons from "lucide-react";
import { staggerContainerFast, fadeInUpVariants, buttonHoverGlow } from "@/utils/animations";

export interface ServiceItem {
    id: string;
    title: string;
    description: string | string[];
    image: string;
    icon: React.ElementType | string;
    href: string;
}

const { services } = siteData.home;

// Map the JSON strings to actual Lucide components
const servicesList: ServiceItem[] = services.list.map((item) => ({
    ...item,
    icon: (Icons as any)[item.icon] || Icons.Sparkles,
}));

export default function ServiceSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [api, setApi] = useState<CarouselApi>();

    React.useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setActiveIndex(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="bg-[#121212] text-white py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFB261]/10 rounded-full blur-[100px] pointer-events-none"
            />
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainerFast}
                    className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 space-y-2">
                    <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            {services.subtitle}
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </motion.div>

                    <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {services.titlePart1} <span className="text-[#DFB261] font-normal">{services.titlePart2}</span>
                    </motion.h2>

                    <motion.p variants={fadeInUpVariants} className="text-gray-400 text-sm lg:text-md leading-relaxed font-medium">
                        {services.description}
                    </motion.p>
                </motion.div>

                {/* Services Cards Carousel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full">
                        <CarouselContent className=" ">
                            {servicesList.map((service, index) => {
                                return (
                                    <CarouselItem key={index} className=" basis-full sm:basis-1/2 lg:basis-1/4">
                                        <ServiceCard service={service} index={index} setActiveIndex={() => api?.scrollTo(index)} />
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

                {/* Bottom Carousel Indicators & "View All Services" Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="pt-10 flex flex-col items-center justify-center gap-6 relative w-full">

                    {/* Pagination Indicators */}
                    <div className="flex items-center gap-2">
                        {servicesList.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => api?.scrollTo(idx)}
                                className={`h-1.5 transition-all duration-300 rounded-full ${activeIndex === idx ? "w-8 bg-[#DFB261]" : "w-3 bg-white/20 hover:bg-white/40"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    {/* View All Services Link */}
                    <motion.div {...buttonHoverGlow} className="sm:absolute right-0 pl-4 ">
                        <Link
                            href={services.cta.href}
                            className="inline-flex items-center gap-3 text-sm font-medium text-white hover:text-[#DFB261] transition-colors group ">
                            <span>{services.cta.text}</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#DFB261] group-hover:bg-[#DFB261] group-hover:text-black flex items-center justify-center transition-all duration-300">
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}