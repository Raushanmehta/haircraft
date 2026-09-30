"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import siteData from "@/data/index";

function getEmbedUrl(url?: string): string {
    if (!url) return "https://www.youtube.com/embed/dQw4w9WgXcQ";
    if (url.includes("/embed/")) return url;

    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch && ytMatch[1]) {
        return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }

    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return url;
}


const { slides, ctaPrimary, ctaVideo, features } = siteData.home.hero;

export default function HeroSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        <section className="relative min-h-[100svh] md:min-h-[100svh] lg:min-h-[100svh] flex items-center bg-[#121212] overflow-hidden">
            <Carousel
                setApi={setApi}
                opts={{ loop: true, align: "start", duration: 40 }}
                className="w-full h-full absolute inset-0 z-0">
                <CarouselContent className="h-[100svh] md:h-[100svh] lg:h-[100svh] ml-0">
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
                                                        className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 ">
                                                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                            <Link
                                                                href={ctaPrimary.href}
                                                                className="inline-flex items-center justify-center font-medium gap-3 bg-[#DFB261] hover:bg-black hover:border hover:border-[#DFB261] text-black hover:text-white border border-[#DFB261] px-6 py-3 sm:px-8 sm:py-4 rounded-full  transition-all duration-300 text-sm lg:text-base tracking-wide group">
                                                                <span>{ctaPrimary.text}</span>
                                                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                                            </Link>
                                                        </motion.div>

                                                        {/* video play button  */}
                                                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                                            <button
                                                                type="button"
                                                                onClick={() => setIsVideoOpen(true)}
                                                                className="inline-flex items-center gap-3 px-2 sm:px-6 text-sm lg:text-base tracking-wide group cursor-pointer focus:outline-none"
                                                                aria-label={ctaVideo.text || "Watch Salon Video"}
                                                            >
                                                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[#DFB261] text-black flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#DFB261]/20 group-hover:shadow-[0_0_20px_rgba(223,178,97,0.4)]">
                                                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white ml-0.5 transition-transform duration-300 group-hover:scale-110" />
                                                                </div>
                                                                <span className="text-white group-hover:text-[#DFB261] transition-colors">{ctaVideo.text}</span>
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

            {/* Video Player Modal */}
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogContent
                    showCloseButton={true}
                    className="max-w-3xl sm:max-w-4xl bg-[#141414] border border-[#DFB261]/40 rounded-2xl p-4 sm:p-6 shadow-[0_0_50px_rgba(223,178,97,0.25)] ring-0 text-white outline-none [&_[data-slot=dialog-close]]:text-white/80 [&_[data-slot=dialog-close]]:hover:text-white [&_[data-slot=dialog-close]]:hover:bg-white/10 [&_[data-slot=dialog-close]]:top-4 [&_[data-slot=dialog-close]]:right-4 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:p-1.5"
                >
                    <DialogHeader className="gap-1 pr-10 text-left">
                        <DialogTitle
                            className="text-xl sm:text-2xl font-semibold text-white tracking-wide"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {(ctaVideo as any)?.title || "Hair Craft Luxury Salon Experience"}
                        </DialogTitle>
                        <div className="w-12 h-[2px] bg-[#DFB261] my-1" />
                        <DialogDescription className="text-gray-300 text-xs sm:text-sm font-medium">
                            {(ctaVideo as any)?.description || "Step inside Hair Craft and witness our signature hair transformations, luxury spa therapies, and expert styling."}
                        </DialogDescription>
                    </DialogHeader>

                    {/* Video Player Container */}
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl mt-2">
                        {isVideoOpen && (
                            (() => {
                                const videoSrc = (ctaVideo as any)?.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ";
                                const isDirect = videoSrc.endsWith(".mp4") || videoSrc.endsWith(".webm") || videoSrc.endsWith(".ogg");

                                if (isDirect) {
                                    return (
                                        <video
                                            src={videoSrc}
                                            controls
                                            autoPlay
                                            className="w-full h-full object-contain bg-black"
                                        />
                                    );
                                }

                                const embedUrl = getEmbedUrl(videoSrc);
                                const finalUrl = `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0`;

                                return (
                                    <iframe
                                        src={finalUrl}
                                        title={(ctaVideo as any)?.title || "Salon Tour Video"}
                                        className="w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                );
                            })()
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}