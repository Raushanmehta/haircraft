"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

interface HeroSlide {
    id: number;
    subtitle: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    image: string;
    neonText?: string;
}

import siteData from "@/data/index";

const { slides, ctaPrimary, ctaVideo, features } = siteData.home.hero;

export default function HeroSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    // Auto-slide effect every 6 seconds
    useEffect(() => {
        if (!api) return;
        const timer = setInterval(() => {
            api.scrollNext();
        }, 10000);
        return () => clearInterval(timer);
    }, [api]);

    const nextSlide = useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const prevSlide = useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    return (
        <section className="relative min-h-[70svh] md:min-h-[60svh] lg:min-h-[100svh] flex items-center bg-[#121212] overflow-hidden">
            <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "start", duration: 40 }}
                className="w-full h-full absolute inset-0 z-0">
                <CarouselContent className="h-[70svh] md:h-[60svh] lg:h-[100svh] ml-0">
                    {slides.map((slide, index) => (
                        <CarouselItem key={slide.id} className="pl-0 relative h-full w-full">
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <div
                                    className="absolute inset-0 bg-cover bg-center sm:bg-top bg-no-repeat w-full h-full"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                />
                                {/* Gradient Overlays matching the reference dark theme */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/60 to-transparent" />
                            </div>

                            {/* Slide Content */}
                            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px- w-full h-full flex items-center">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-center w-full">
                                    <div className="lg:col-span-8 xl:col-span-7 space-y-2">
                                        <AnimatePresence mode="wait">
                                            {current === index && (
                                                <motion.div
                                                    key={slide.id}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={{
                                                        hidden: {},
                                                        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
                                                        exit: { opacity: 0, transition: { duration: 0.3 } }
                                                    }}
                                                    className="space-y-4 lg:space-y-4 lg:mt-10"
                                                >
                                                    {/* Subtitle */}
                                                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
                                                        <span className="inline-block text-sm sm:text- uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 font-medium">
                                                            {slide.subtitle}
                                                        </span>
                                                    </motion.div>

                                                    {/* Main Heading */}
                                                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
                                                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                                            {slide.titlePart1} <br />
                                                            <span className="text-[#DFB261] font-normal">
                                                                {slide.titlePart2}
                                                            </span>
                                                        </h1>
                                                    </motion.div>

                                                    {/* Description */}
                                                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>
                                                        <p className="text-gray-300 text-sm lg:text-base max-w-xl font-medium leading-relaxed">
                                                            {slide.description}
                                                        </p>
                                                    </motion.div>

                                                    {/* CTA Buttons */}
                                                    <motion.div 
                                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                                                        className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 "
                                                    >
                                                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                            <Link
                                                                href={ctaPrimary.href}
                                                                className="inline-flex items-center justify-center font-medium gap-3 bg-[#DFB261] hover:bg-black text-black hover:text-white border border-[#DFB261] hover:border-black px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg shadow-[#DFB261]/20 transition-all duration-300 text-sm lg:text-base tracking-wide group"
                                                            >
                                                                <span>{ctaPrimary.text}</span>
                                                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                            </Link>
                                                        </motion.div>

                                                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                            <button
                                                                onClick={() => alert("Playing salon tour video...")}
                                                                className="inline-flex items-center gap-3 px-2 sm:px-6 text-sm lg:text-base tracking-wide group"
                                                            >
                                                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-2 border-[#DFB261] text-black flex items-center justify-center">
                                                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white ml-0.5 " />
                                                                </div>
                                                                <span className="text-white">{ctaVideo.text}</span>
                                                            </button>
                                                        </motion.div>
                                                    </motion.div>

                                                    {/* Bottom Feature Highlights */}
                                                    <motion.div 
                                                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                                                        className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-4 pt-4 sm:pt-4 border-t border-white/10  sm:max-w-sm"
                                                    >
                                                        {features.map((feature, fIdx) => (
                                                            <div key={fIdx} className="border-l-2 border-[#DFB261] pl-3">
                                                                <p className="text-white font-medium text-md sm:text-lg">{feature.title}</p>
                                                                <p className="text-gray-400 text-sm sm:text-md">{feature.subtitle}</p>
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:border-[#DFB261] hover:text-[#DFB261] transition-all"
                aria-label="Previous Slide">
                <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-10 sm:h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:border-[#DFB261] hover:text-[#DFB261] transition-all"
                aria-label="Next Slide">
                <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>

            {/* Carousel Indicators Center Aligned */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center w-full">
                    {/* Indicators */}
                    <div className="flex items-center gap-2 sm:gap-3 flex">
                        {slides.map((s, idx) => (
                            <button
                                key={s.id}
                                onClick={() => api?.scrollTo(idx)}
                                className={`h-1.5 sm:h-2 transition-all duration-300 rounded-full ${current === idx ? "w-8 sm:w-10 bg-[#DFB261]" : "w-2 sm:w-3 bg-white/30 hover:bg-white/60"
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}