"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TeamCard from "@/components/cards/TeamCard";

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    description: string;
    image: string;
    socials: {
        facebook: string;
        instagram: string;
        linkedin: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Devendra Chauhan",
        role: "SENIOR BARBER",
        description: "Specializes in modern haircuts, fades and classic grooming with attention to every detail.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=600&auto=format&fit=crop",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
        id: "2",
        name: "Simran Singh",
        role: "TRANSFORMATION EXPERT",
        description: "Expert in style makeovers, trendy cuts and personalized hair transformations for all hair types.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
        id: "3",
        name: "Arvind Sharma",
        role: "GROOMING SPECIALIST",
        description: "Passionate about precision grooming, beard styling and creating sharp, confident looks.",
        image: "https://images.unsplash.com/photo-1622287162692-0382f1e0b64f?q=80&w=600&auto=format&fit=crop",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
        id: "4",
        name: "Rohit Mehta",
        role: "HAIR COLOR SPECIALIST",
        description: "Creative color expert known for natural tones, bold looks and long-lasting results.",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop",
        socials: { facebook: "#", instagram: "#", linkedin: "#" },
    },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function TeamSection() {
    return (
        <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Header Section with Title & "View All Stylists" Button */}
                <div className="relative mb-4 lg:mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left spacer for perfect centering on desktop */}
                    <div className="hidden md:block flex-1"></div>

                    <div className="text-center max-w-5xl mx-auto space-y-2 flex-[2]">
                        <div className="flex items-center justify-center gap-3">
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                OUR EXPERTS
                            </span>
                            <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl lg:whitespace-nowrap tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Meet Our <span className="text-[#DFB261] font-normal">Professional Stylists</span>
                        </h2>

                        <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                            Our talented team of stylists are passionate about creating looks that make you feel confident and look your best.
                        </p>
                    </div>

                    {/* View All Stylists Button - Right Aligned */}
                    <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/team"
                                className="inline-flex items-center gap-3 bg-white hover:bg-[#DFB261] text-[#121212] hover:text-black font-medium px-5 py-2.5 rounded-full border-2 border-gray-200 shadow-sm transition-all duration-300 text-sm group">
                                <span>View All Stylists</span>
                                <div className="w-7 h-7 rounded-full bg-[#121212] group-hover:bg-black text-[#DFB261] flex items-center justify-center transition-colors">
                                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Stylists Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {teamMembers.map((member) => (
                        <TeamCard key={member.id} item={member} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}