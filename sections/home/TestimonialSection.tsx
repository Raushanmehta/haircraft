"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import TestimonialCard from "@/components/cards/TesmonialCard";

import siteData from "@/data/index";
import { motion } from "framer-motion";
import { staggerContainerFast, fadeInUpVariants } from "@/utils/animations";

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    comment: string;
    image: string;
    rating: number;
}

const { testimonials } = siteData.home;

export default function TestimonialSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerFast}
                    className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 space-y-2"
                >
                    <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            {testimonials.subtitle}
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </motion.div>

                    <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {testimonials.titlePart1} <span className="text-[#DFB261]  font-normal">{testimonials.titlePart2}</span>
                    </motion.h2>

                    <motion.p variants={fadeInUpVariants} className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                        {testimonials.description}
                    </motion.p>
                </motion.div>

                {/* Testimonials Carousel / Grid Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Carousel
                        opts={{ align: "start" }}
                        setApi={setApi}
                        className="w-full relative "
                    >
                        <CarouselContent className="">
                            {testimonials.list.map((item, idx) => (
                                <CarouselItem key={item.id} className=" md:basis-1/2 lg:basis-1/3">
                                    <TestimonialCard item={item} idx={idx} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                    {/* Carousel Navigation Controls */}
                    <div className=" flex items-center justify-center gap-6">
                        <div className="w-24 h-[1px] bg-gray-300 hidden sm:block" />

                        <div className="flex items-center gap-3 mt-6">
                            {/* Prev Button */}
                            <button
                                onClick={() => api?.scrollPrev()}
                                className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:border-[#DFB261] hover:text-[#DFB261] flex items-center justify-center text-gray-700 shadow-sm transition-all disabled:opacity-50"
                                aria-label="Previous Testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex items-center gap-2 px-2">
                                {Array.from({ length: count }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => api?.scrollTo(idx)}
                                        className={`h-2 transition-all duration-300 rounded-full ${current === idx ? "w-6 bg-[#DFB261]" : "w-2 bg-gray-300 hover:bg-gray-400"
                                            }`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => api?.scrollNext()}
                                className="w-11 h-11 rounded-full bg-[#DFB261] hover:bg-[#DFB261] text-black flex items-center justify-center shadow-md transition-all disabled:opacity-50"
                                aria-label="Next Testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="w-24 h-[1px] bg-gray-300 hidden sm:block" />
                    </div>
                    </Carousel>
                </motion.div>

            </div>
        </section>
    );
}