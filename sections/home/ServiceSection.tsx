"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Scissors, Palette, UserCheck } from "lucide-react";
import ServiceCard from "@/components/cards/ServiceCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
    href: string;
}

const services: ServiceItem[] = [
    {
        id: "01",
        title: "Hair Wash & Dry",
        description: "Refresh your look with our professional hair wash & blow dry service, designed to leave your hair smooth and shiny.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
        icon: Sparkles,
        href: "/services/hair-wash-dry",
    },
    {
        id: "02",
        title: "Beard & Shaving",
        description: "Expert grooming services for a sharp, clean and confident look. From beard trims to classic shaving, we've got you covered.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
        icon: Scissors,
        href: "/services/beard-shaving",
    },
    {
        id: "03",
        title: "Global Hair Color",
        description: "Transform your look with our professional hair coloring services. From subtle tones to bold hues, we create your perfect shade.",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop",
        icon: Palette,
        href: "/services/global-hair-color",
    },
    {
        id: "04",
        title: "Wedding Grooming",
        description: "Look your best on your special day with our customized bridal hair and grooming services, tailored to your style and occasion.",
        image: "https://images.unsplash.com/photo-1583234947900-474d284fb8e9?q=80&w=600&auto=format&fit=crop",
        icon: UserCheck,
        href: "/services/wedding-grooming",
    },
    {
        id: "05",
        title: "Wedding Grooming",
        description: "Look your best on your special day with our customized bridal hair and grooming services, tailored to your style and occasion.",
        image: "https://images.unsplash.com/photo-1583234947900-474d284fb8e9?q=80&w=600&auto=format&fit=crop",
        icon: UserCheck,
        href: "/services/wedding-grooming",
    },
];

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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8 space-y-2">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            Our Services
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Premium Hair Care <span className="text-[#DFB261] font-normal">Services</span>
                    </h2>

                    <p className="text-gray-400 text-sm lg:text-md leading-relaxed font-medium">
                        From classic cuts to advanced treatments, we offer a complete  hair care solutions to bring out your best look.
                    </p>
                </div>

                {/* Services Cards Carousel */}
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full">
                    <CarouselContent className=" ">
                        {services.map((service, index) => {
                            return (
                                <CarouselItem key={index} className=" basis-full sm:basis-1/2 lg:basis-1/4">
                                    <ServiceCard service={service} index={index} setActiveIndex={() => api?.scrollTo(index)} />
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>

                {/* Bottom Carousel Indicators & "View All Services" Button */}
                <div className="pt-10 flex flex-col items-center justify-center gap-6 relative w-full">

                    {/* Pagination Indicators */}
                    <div className="flex items-center gap-2">
                        {services.map((_, idx) => (
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
                    <div className="sm:absolute right-0">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 text-sm font-medium text-white hover:text-[#DFB261] transition-colors group"
                        >
                            <span>View All Services</span>
                            <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#DFB261] group-hover:bg-[#DFB261] group-hover:text-black flex items-center justify-center transition-all duration-300">
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}