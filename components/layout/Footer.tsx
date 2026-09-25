"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import Image from "next/image";
import { BiSolidMap } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import siteData from "@/data/index";
import { containerVariants, columnVariants, linkContainerVariants, linkItemVariants } from "@/utils/animations";

const iconMap: Record<string, React.ElementType> = { FaFacebook, BsInstagram, FaWhatsapp, BsYoutube };

export default function Footer() {
    const footerData = siteData.footer;
    return (
        <footer className="bg-[#121212] text-gray-300 border-t border-white/10 pt-16 pb-8 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Main Footer Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-8 border-b border-[#DFB261]"
                >

                    {/* Column 1: Brand Info & Socials (Span 4) */}
                    <motion.div variants={columnVariants} className="lg:col-span-4 space-y-6">
                        <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.3 }} className="inline-block w-fit">
                            <Link href={footerData.logo.href} className="flex items-center gap-3 group inline-flex">
                                <Image src={footerData.logo.src} alt={footerData.logo.alt} width={200} height={200} className="w-[140px] sm:w-[200px] h-auto" />
                            </Link>
                        </motion.div>

                        <p className="text-gray-400 text-md leading-relaxed pr-4">
                            {footerData.description}
                        </p>

                        {/* Tagline / Badges */}
                        <div className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#DFB261] font-semibold pt-2">
                            {footerData.tagline.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <span>{tag}</span>
                                    {index < footerData.tagline.length - 1 && (
                                        <span className="w-1 h-1 rounded-full bg-[#DFB261]"></span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {footerData.socialLinks.map((social, index) => {
                                const IconComponent = iconMap[social.icon];
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.15, y: -3 }}
                                        whileTap={{ scale: 0.92 }}
                                        transition={{ type: "spring", stiffness: 350 }}
                                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-black hover:text-white hover:border-black transition-colors duration-200"
                                    >
                                        {IconComponent && <IconComponent className="w-7 h-7" />}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links (Span 2) */}
                    <motion.div variants={columnVariants} className="lg:col-span-2 space-y-4">
                        <h3 className="font-serif text-xl lg:text-2xl font-medium text-white tracking-wide relative inline-block pb-2">
                            {footerData.quickLinks.title}
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#DFB261]"></span>
                        </h3>
                        <motion.ul variants={linkContainerVariants} className="space-y-3 pt-2">
                            {footerData.quickLinks.links.map((link, index) => (
                                <motion.li key={index} variants={linkItemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-sm lg:text-md text-gray-400 hover:text-[#DFB261] transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-5 h-5 mr-1 text-[#DFB261] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{link.label}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Column 3: Our Services (Span 3) */}
                    <motion.div variants={columnVariants} className="lg:col-span-3 space-y-4">
                        <h3 className="font-serif text-xl lg:text-2xl font-medium text-white tracking-wide relative inline-block pb-2">
                            {footerData.services.title}
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#DFB261]"></span>
                        </h3>
                        <motion.ul variants={linkContainerVariants} className="grid grid-cols-1 gap-3 pt-2">
                            {footerData.services.links.map((service, index) => (
                                <motion.li key={index} variants={linkItemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                    <Link
                                        href={service.href}
                                        className="group flex items-center text-sm lg:text-md text-gray-400 hover:text-[#DFB261] transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-5 h-5 mr-1 text-[#DFB261] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{service.label}</span>
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Column 4: Contact Us (Span 3) */}
                    <motion.div variants={columnVariants} className="lg:col-span-3 space-y-4">
                        <h3 className="font-serif text-xl lg:text-2xl font-medium text-white tracking-wide relative inline-block pb-2">
                            {footerData.contact.title}
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#DFB261]"></span>
                        </h3>
                        <motion.ul variants={linkContainerVariants} className="space-y-4 pt-2 text-sm lg:text-md ">
                            <motion.li variants={linkItemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-center lg:items-start gap-3">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#DFB261]">
                                    <BiSolidMap className="w-5 h-5 lg:w-7 lg:h-7" />
                                </div>
                                <span>{footerData.contact.address}</span>
                            </motion.li>
                            <motion.li variants={linkItemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-center gap-3">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#DFB261]">
                                    <FaPhoneAlt className="w-5 h-5 lg:w-7 lg:h-7" />
                                </div>
                                <span >{footerData.contact.phone}</span>
                            </motion.li>
                            <motion.li variants={linkItemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-center gap-3">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#DFB261]">
                                    <IoMdMail className="w-5 h-5 lg:w-7 lg:h-7" />
                                </div>
                                <span>{footerData.contact.email}</span>
                            </motion.li>
                            <motion.li variants={linkItemVariants} whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="flex items-start gap-3">
                                <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#DFB261]">
                                    <Clock className="w-5 h-5 lg:w-7 lg:h-7" />
                                </div>
                                <div>
                                    <p>{footerData.contact.hours.days}</p>
                                    <p  >{footerData.contact.hours.note}</p>
                                </div>
                            </motion.li>
                        </motion.ul>

                        {/* Appointment CTA Button */}
                        <div className="pt-2">
                            <motion.div whileHover={{ scale: 1.02, x: 5 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                                <Link
                                    href={footerData.cta.href}
                                    className="inline-flex items-center justify-between lg:w-full min-w-[230px] border border-[#DFB261] hover:bg-black text-[#DFB261] hover:text-white hover:border-black font-medium px-5 py-3 rounded-full transition-all duration-300 text-md group"
                                >
                                    <span>{footerData.cta.text}</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>

                {/* Bottom Bar: Copyright & Legal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="pt-4 flex flex-col md:flex-row items-center justify-between text-sm sm:text-md text-gray-400 gap-4 text-center md:text-left"
                >
                    <p>{footerData.bottomBar.copyright}</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        {footerData.bottomBar.legalLinks.map((link, index) => (
                            <React.Fragment key={index}>
                                <Link href={link.href} className="hover:text-[#DFB261] transition-colors">
                                    {link.label}
                                </Link>
                                {index < footerData.bottomBar.legalLinks.length - 1 && (
                                    <span className="hidden sm:inline">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}