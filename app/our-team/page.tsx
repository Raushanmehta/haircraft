"use client";

import TeamCard from "@/components/cards/TeamCard";
import PageTopSection from "@/components/common/PageTopSection";
import siteData from "@/data/index";
import { motion } from "framer-motion";
import { staggerContainerFast, fadeInUpVariants } from "@/utils/animations";

export default function OurTeamPage() {
    const { team } = siteData;

    return (
        <main>
            <PageTopSection title="Our Team" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team", href: "/our-team" },]} />
            <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                    {/* Header Section with Title & "View All Stylists" Button */}
                    <div className="relative mb-4 lg:mb-8 flex flex-col lg:flex-row items-center justify-center gap-6">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainerFast}
                            className="text-center max-w-5xl mx-auto space-y-2 flex-[2]">
                            <motion.div variants={fadeInUpVariants} className="flex items-center justify-center gap-3">
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                    {team.subtitle}
                                </span>
                                <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                            </motion.div>

                            <motion.h2 variants={fadeInUpVariants} className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {team.titlePart1} <span className="text-[#DFB261] font-normal">{team.titlePart2}</span>
                            </motion.h2>

                            <motion.p variants={fadeInUpVariants} className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                                {team.description}
                            </motion.p>
                        </motion.div>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainerFast}
                    >
                        {team.members.map((member) => (
                            <motion.div key={member.id} variants={fadeInUpVariants}>
                                <TeamCard item={member} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    )
}