"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUpVariants, staggerContainerFast } from "@/utils/animations";
import siteData from "@/data/index";
import { ArrowRight } from "lucide-react";
import { FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { RiScissors2Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

interface Skill {
    name: string;
    percentage: number;
}

interface TeamDetailProps {
    name?: string;
    role?: string;
    subtitle?: string;
    description?: string;
    bioParagraphs?: string[];
    experience?: string;
    specialization?: string;
    location?: string;
    email?: string;
    phone?: string;
    image?: string;
    skills?: Skill[];
    socials?: {
        facebook?: string;
        instagram?: string;
        whatsapp?: string;
        youtube?: string;
        linkedin?: string;
    };
}

const defaultMember = siteData.team.members[0];

const defaultSkills: Skill[] = [];
if (defaultMember.stack) {
    if (defaultMember.stack.name1) defaultSkills.push({ name: defaultMember.stack.name1, percentage: defaultMember.stack.percentage1 });
    if (defaultMember.stack.name2) defaultSkills.push({ name: defaultMember.stack.name2, percentage: defaultMember.stack.percentage2 });
    if (defaultMember.stack.name3) defaultSkills.push({ name: defaultMember.stack.name3, percentage: defaultMember.stack.percentage3 });
    if (defaultMember.stack.name4) defaultSkills.push({ name: defaultMember.stack.name4, percentage: defaultMember.stack.percentage4 });
}

export default function TeamDetailSection({
    name = defaultMember.name,
    role = defaultMember.role,
    subtitle = defaultMember.subtitle,
    description = defaultMember.description,
    bioParagraphs = defaultMember.bioParagraphs,
    experience = defaultMember.experience,
    specialization = defaultMember.specialization,
    location = defaultMember.location,
    email = defaultMember.email,
    phone = defaultMember.phone,
    image = defaultMember.image,
    skills = defaultSkills,
    socials = defaultMember.socials,
}: TeamDetailProps) {
    return (
        <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/4 right-0 w-72 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 space-y-4 lg:space-y-6 relative z-10">

                {/* Top Profile Overview Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerFast}>

                    {/* Column 1: Stylist Portrait Image (Span 4) */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-4 relative">
                        <div className="relative h-[350px] md:h-[360px] lg:h-[440px] rounded-md overflow-hidden shadow-md group">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Column 2: Bio & Quick Details Card (Span 8 - split into bio content & info card) */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                        {/* Main Info (Span 7) */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="md:col-span-7 space-y-2 ">

                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                                    <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                                        {role}
                                    </span>
                                </div>
                                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {name}
                                </h1>
                                <p className="text-gray-500 font-medium text-base text-md sm:text-lg">
                                    {subtitle}
                                </p>
                            </div>

                            <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                                {description || bioParagraphs?.[0]}
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3 pt-2">
                                {socials?.facebook && (
                                    <Link
                                        href={socials.facebook}
                                        className="w-10 h-10 rounded-full border-2 border-[#DFB261] bg-white text-gray-700 hover:text-black hover:border-[#DFB261] hover:bg-[#DFB261] flex items-center justify-center transition-all shadow-sm"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebook className="w-5 h-5" />
                                    </Link>
                                )}
                                {socials?.instagram && (
                                    <Link
                                        href={socials.instagram}
                                        className="w-10 h-10 rounded-full border-2 border-[#DFB261] bg-white text-gray-700 hover:text-black hover:border-[#DFB261] hover:bg-[#DFB261] flex items-center justify-center transition-all shadow-sm"
                                        aria-label="Instagram"
                                    >
                                        <BsInstagram className="w-5 h-5" />
                                    </Link>
                                )}
                                {socials?.whatsapp && (
                                    <Link
                                        href={socials.whatsapp}
                                        className="w-10 h-10 rounded-full border-2 border-[#DFB261] bg-white text-gray-700 hover:text-black hover:border-[#DFB261] hover:bg-[#DFB261] flex items-center justify-center transition-all shadow-sm"
                                        aria-label="WhatsApp"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                    </Link>
                                )}
                                {socials?.youtube && (
                                    <Link
                                        href={socials.youtube}
                                        className="w-10 h-10 rounded-full border-2 border-[#DFB261] bg-white text-gray-700 hover:text-black hover:border-[#DFB261] hover:bg-[#DFB261] flex items-center justify-center transition-all shadow-sm"
                                        aria-label="YouTube"
                                    >
                                        <BsYoutube className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4 pt-4">
                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                    <Link
                                        href="/appointment"
                                        className="inline-flex items-center gap-2 bg-[#DFB261] hover:bg-[#DFB261] text-black font-medium px-8 py-3.5 rounded-full shadow-lg shadow-[#DFB261]/20 transition-all text-sm tracking-wide"
                                    >
                                        <span>Book an Appointment</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                    <Link
                                        href="/our-team"
                                        className="inline-flex items-center gap-2 border border-gray-300 hover:border-[#DFB261] bg-white text-[#121212] px-6 py-3.5 rounded-full transition-all text-sm font-medium">
                                        <span>View Our Team</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Information Card Sidebar (Span 5) */}
                        <motion.div
                            variants={fadeInUpVariants}
                            className="md:col-span-5 bg-[#F9F4EE] rounded-sm p-6 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-2">
                            {/* Experience */}
                            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                <div className=" text-[#DFB261] flex items-center justify-center shrink-0 mt-0.5">
                                    <IoStar className="w-8 h-8 fill-[#DFB261]" />
                                </div>
                                <div>
                                    <p className="text-xs lg:text-md  tracking-wider text-[#121212] font-medium">Experience</p>
                                    <p className="text-sm lg:text-md font-semibold text-gray-400  mt-0.5">{experience}</p>
                                </div>
                            </div>

                            {/* Specialization */}
                            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                <div className=" text-[#DFB261] flex items-center justify-center shrink-0 mt-0.5">
                                    <RiScissors2Fill className="w-8 h-8 fill-[#DFB261]" />
                                </div>
                                <div>
                                    <p className="text-xs lg:text-md  tracking-wider text-[#121212] font-medium">Specialization</p>
                                    <p className="text-sm lg:text-md font-semibold text-gray-400  mt-0.5">{specialization}</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                <div className=" text-[#DFB261] flex items-center justify-center shrink-0 mt-0.5">
                                    <FaMapMarkerAlt className="w-8 h-8 fill-[#DFB261]" />
                                </div>
                                <div>
                                    <p className="text-xs lg:text-md  tracking-wider text-[#121212] font-medium">Location</p>
                                    <p className="text-sm lg:text-md font-semibold text-gray-400  mt-0.5">{location}</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                                <div className=" text-[#DFB261] flex items-center justify-center shrink-0 mt-0.5">
                                    <IoMdMail className="w-8 h-8 fill-[#DFB261]" />
                                </div>
                                <div>
                                    <p className="text-xs lg:text-md  tracking-wider text-[#121212] font-medium">Email</p>
                                    <p className="text-sm lg:text-md font-semibold text-gray-400  mt-0.5">{email}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className=" text-[#DFB261] flex items-center justify-center shrink-0 mt-0.5">
                                    <FaPhoneAlt className="w-8 h-8 fill-[#DFB261]" />
                                </div>
                                <div>
                                    <p className="text-xs lg:text-md  tracking-wider text-[#121212] font-medium">Phone</p>
                                    <p className="text-sm lg:text-md font-semibold text-gray-400  mt-0.5">{phone}</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </motion.div>

                {/* Bottom Detailed Bio & Skills Section */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainerFast}
                >

                    {/* About Stylist Paragraphs (Span 6) */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-6 space-y-2">

                        <h2 className="text-3xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            About {name}
                        </h2>
                        <div className="w-12 h-[2px] bg-[#DFB261]" />

                        <div className="space-y-4 text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                            {bioParagraphs?.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Skills & Expertise Progress Bars (Span 6) */}
                    <motion.div
                        variants={fadeInUpVariants}
                        className="lg:col-span-6 space-y-2"
                    >
                        <h2 className="text-3xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Skills & Expertise
                        </h2>
                        <div className="w-12 h-[2px] bg-[#DFB261]" />

                        <div className="space-y-2 ">
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center text-sm font-medium text-[#121212]">
                                        <span>{skill.name}</span>
                                        <span className="font-bold">{skill.percentage}%</span>
                                    </div>
                                    {/* Progress Bar Track */}
                                    <div className="w-full h-3 bg-[#F9F4EE] rounded-full overflow-hidden p-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-[#DFB261] to-[#DFB261] rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </section >
    );
}