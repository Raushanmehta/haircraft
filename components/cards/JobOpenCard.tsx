import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";
import Link from "next/link";
import { buttonLuxuryLift } from "@/utils/animations";
import { JobOpening } from "@/data/index";

function renderIcon(icon: any, defaultIcon: React.ElementType, className = "w-3.5 h-3.5") {
    if (!icon) {
        const Fallback = defaultIcon;
        return <Fallback className={className} />;
    }
    if (typeof icon === "string") {
        const cleanName = icon.trim();
        const capitalized = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
        const Comp =
            (LucideIcons as Record<string, any>)[cleanName] ||
            (LucideIcons as Record<string, any>)[capitalized] ||
            (FaIcons as Record<string, any>)[cleanName] ||
            (Fa6Icons as Record<string, any>)[cleanName] ||
            (IoIcons as Record<string, any>)[cleanName] ||
            (Io5Icons as Record<string, any>)[cleanName] ||
            (RiIcons as Record<string, any>)[cleanName] ||
            (MdIcons as Record<string, any>)[cleanName] ||
            (BsIcons as Record<string, any>)[cleanName] ||
            (TbIcons as Record<string, any>)[cleanName] ||
            defaultIcon;
        return <Comp className={className} />;
    }
    const Comp = icon;
    return <Comp className={className} />;
}

interface JobOpenCardProps {
    job: JobOpening;
    index: number;
    handleApply?: (jobTitle: string) => void;
    applyButton?: {
        text?: string;
        icon?: string;
    };
}

export default function JobOpenCard({
    job,
    index,
    applyButton,
}: JobOpenCardProps) {
    const buttonText = applyButton?.text || "Apply";

    return (
        <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{
                y: -4,
                boxShadow:
                    "0 20px 30px -10px rgba(0,0,0,0.08), 0 0 20px rgba(223,178,97,0.2)",
            }}
            className="rounded-lg p-4 border border-gray-200/80 shadow-sm shadow-gray-200/40 hover:border-[#DFB261]/60 transition-all duration-300 group bg-white"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                <div>
                    <Link href={`/career/${job.id}`}>
                        <h3
                            className="text-xl sm:text-2xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors cursor-pointer"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            {job.title}
                        </h3>
                    </Link>

                    {/* Meta badges */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 font-medium mt-2">
                        <div className="flex items-center gap-1.5">
                            {renderIcon("MapPin", LucideIcons.MapPin, "w-3.5 h-3.5 text-[#DFB261]")}
                            <span>{job.location}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1.5">
                            {renderIcon("Briefcase", LucideIcons.Briefcase, "w-3.5 h-3.5 text-[#DFB261]")}
                            <span>{job.type}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1.5">
                            {renderIcon("Clock", LucideIcons.Clock, "w-3.5 h-3.5 text-[#DFB261]")}
                            <span>{job.experience}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons: on small screen placed on far right bottom; links to detail page */}
                <div className="flex items-center gap-2.5 shrink-0 justify-end self-end sm:self-auto w-full sm:w-auto">
                    <motion.div {...buttonLuxuryLift} className="inline-block">
                        <Link
                            href={`/career/${job.id}`}
                            className="inline-flex items-center gap-1.5 bg-[#DFB261] hover:bg-[#DFB261]/90 text-black font-medium px-8 py-2.5 rounded-full shadow-md shadow-[#DFB261]/20 transition-all text-xs tracking-wider uppercase group/btn cursor-pointer"
                        >
                            <span>{buttonText}</span>
                            {renderIcon(
                                applyButton?.icon || "ArrowRight",
                                LucideIcons.ArrowRight,
                                "w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                            )}
                        </Link>
                    </motion.div>
                </div>
            </div>

            <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed pt-3 border-t border-gray-200/60">
                {job.description}
            </p>
        </motion.div>
    );
}