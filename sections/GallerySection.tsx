"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryVideoCard from "@/components/cards/GalleryVideoCard";
import GalleryImageCard from "@/components/cards/GalleryImageCard";
import { fadeInUpVariants, textContainerVariants } from "@/utils/animations";
import siteData, { HairCraftGalleryData, SectionProps } from "@/data/index";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

export default function GallerySection({
    data,
    className = "",
}: SectionProps<HairCraftGalleryData>) {
    const content = data || (siteData as any).gallery;

    const imageSection = content?.imageSection;
    const videoSection = content?.videoSection;

    const imagesList = imageSection?.images || [];
    const videosList = videoSection?.videos || [];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [activeVideo, setActiveVideo] = useState<any | null>(null);

    const currentIndex = imagesList.findIndex((item: any) => item.src === selectedImage);

    const handlePrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex === -1 || imagesList.length <= 1) return;
        const prevIndex = (currentIndex - 1 + imagesList.length) % imagesList.length;
        setSelectedImage(imagesList[prevIndex].src);
    }, [currentIndex, imagesList]);

    const handleNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex === -1 || imagesList.length <= 1) return;
        const nextIndex = (currentIndex + 1) % imagesList.length;
        setSelectedImage(imagesList[nextIndex].src);
    }, [currentIndex, imagesList]);

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                handlePrev();
            } else if (e.key === "ArrowRight") {
                handleNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, handlePrev, handleNext]);

    return (
        <section className={`bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden ${className}`}>
            {/* Background Decorative Glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10 space-y-4">

                {/* PART 1: IMAGE GALLERY */}
                <div className="space-y-4">

                    {/* Image Section Header */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-2"
                    >
                        <div>
                            <motion.h2
                                variants={fadeInUpVariants}
                                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121212] leading-tight "
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {imageSection?.title || "Image Gallery"}
                            </motion.h2>

                            <motion.div variants={fadeInUpVariants} className="w-12 h-[2px] bg-[#DFB261] my-3" />
                        </div>

                        <motion.p
                            variants={fadeInUpVariants}
                            className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium max-w-lg"
                        >
                            {imageSection?.description ||
                                "Explore moments from our salon, client transformations, styling sessions and the vibrant atmosphere at Haicraft."}
                        </motion.p>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-4">
                        {imagesList.map((img: any, index: number) => (
                            <GalleryImageCard
                                key={img.id}
                                index={index}
                                img={img}
                                setSelectedImage={setSelectedImage}
                            />
                        ))}
                    </div>

                </div>

                {/* PART 2: VIDEO GALLERY */}
                <div className="space-y-4 lg:pt-6 ">

                    {/* Video Section Header */}
                    <motion.div
                        variants={textContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="flex flex-col md:flex-row md:items-end justify-between "
                    >
                        <div>
                            <motion.h2
                                variants={fadeInUpVariants}
                                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121212] leading-tight "
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                {videoSection?.title || "Video Gallery"}
                            </motion.h2>

                            <motion.div variants={fadeInUpVariants} className="w-12 h-[2px] bg-[#DFB261] my-2" />
                        </div>

                        <motion.p
                            variants={fadeInUpVariants}
                            className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium max-w-lg"
                        >
                            {videoSection?.description ||
                                "Watch our experts in action and get inspired by real transformations, styling tips and behind-the-scenes moments."}
                        </motion.p>
                    </motion.div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {videosList.map((vid: any, index: number) => (
                            <GalleryVideoCard
                                key={vid.id}
                                index={index}
                                vid={vid}
                                setActiveVideo={setActiveVideo}
                            />
                        ))}
                    </div>

                </div>

            </div>

            {/* Image Lightbox Dialog */}
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent
                    showCloseButton={false}
                    className="max-w-5xl sm:max-w-5xl p-0 bg-transparent border-none shadow-none ring-0 flex flex-col items-center justify-center outline-none select-none"
                >
                    <DialogTitle className="sr-only">Image Preview</DialogTitle>
                    <DialogDescription className="sr-only">Enlarged gallery view</DialogDescription>

                    <div className="relative w-full flex flex-col items-center justify-center">
                        {/* Top Controls Bar */}
                        <div className="w-full flex items-center justify-between pb-3 px-2 sm:px-0 text-white">
                            {imagesList.length > 0 && currentIndex !== -1 ? (
                                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#DFB261] bg-black/60 px-3.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                                    {currentIndex + 1} / {imagesList.length}
                                </span>
                            ) : <div />}

                            <button
                                type="button"
                                onClick={() => setSelectedImage(null)}
                                className="text-white hover:text-[#DFB261] p-1.5 transition-colors cursor-pointer rounded-full bg-black/50 hover:bg-black/80 border border-white/10 backdrop-blur-sm"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6 sm:w-7 sm:h-7" />
                            </button>
                        </div>

                        {/* Image Display Area with Nav Buttons */}
                        <div className="relative flex items-center justify-center w-full">
                            {/* Previous Button */}
                            {imagesList.length > 1 && (
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#DFB261] text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md border border-white/20 shadow-xl group"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:-translate-x-0.5" />
                                </button>
                            )}

                            {selectedImage && (
                                <img
                                    key={selectedImage}
                                    src={selectedImage}
                                    alt="Enlarged gallery view"
                                    className="max-h-[75vh] sm:max-h-[82vh] max-w-[94vw] md:max-w-4xl rounded-lg object-contain shadow-2xl border border-white/20 select-none"
                                />
                            )}

                            {/* Next Button */}
                            {imagesList.length > 1 && (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#DFB261] text-white hover:text-black flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-md border border-white/20 shadow-xl group"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:translate-x-0.5" />
                                </button>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Video Player Dialog */}
            <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
                <DialogContent
                    showCloseButton={true}
                    className="max-w-2xl sm:max-w-2xl bg-[#F9F4EE] border border-gray-200/80 rounded-lg p-5 sm:p-7 shadow-2xl ring-0 text-[#121212] outline-none"
                >
                    <DialogHeader className="gap-1 pr-6 text-left">
                        <DialogTitle
                            className="text-xl sm:text-2xl font-semibold text-[#121212] leading-tight"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {activeVideo?.title || "Video Player"}
                        </DialogTitle>
                        <div className="w-10 h-[2px] bg-[#DFB261] my-1" />
                        <DialogDescription className="text-gray-600 text-xs sm:text-sm font-medium">
                            {activeVideo?.description}
                        </DialogDescription>
                    </DialogHeader>

                    {/* Video Player Embed */}
                    <div className="relative h-60 sm:h-80 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-gray-200/40 mt-1">
                        {activeVideo?.videoUrl ? (
                            <iframe
                                src={`${activeVideo.videoUrl}?autoplay=1`}
                                title={activeVideo?.title}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <img
                                src={activeVideo?.thumbnail}
                                alt={activeVideo?.title}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}