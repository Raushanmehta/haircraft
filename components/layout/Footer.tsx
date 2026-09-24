"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    ChevronRight,
    MessageCircle,

} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import Image from "next/image";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Stylists", href: "/stylists" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
];

const services = [
    { label: "Haircut & Styling", href: "/services/haircut-styling" },
    { label: "Hair Coloring", href: "/services/hair-coloring" },
    { label: "Hair Treatment", href: "/services/hair-treatment" },
    { label: "Hair Spa", href: "/services/hair-spa" },
    { label: "Beard Grooming", href: "/services/beard-grooming" },
    { label: "Hair Care Products", href: "/services/products" },
    { label: "Bridal & Event Styling", href: "/services/bridal" },
    { label: "Consultation", href: "/services/consultation" },
];

const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: BsInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: MessageCircle, href: "https://whatsapp.com", label: "WhatsApp" },
    { icon: BsYoutube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="bg-[#121212] text-gray-300 border-t border-white/10 pt-16 pb-8">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-16 border-b border-white/10">

                    {/* Column 1: Brand Info & Socials (Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group inline-flex">
                            <Image src="/logo/logo.png" alt="Logo" width={200} height={200} className="w-[140px] sm:w-[200px] h-auto" />
                        </Link>

                        <p className="text-gray-400 text-md leading-relaxed pr-4">
                            At Haicraft, we believe great hair creates confidence. Our expert stylists deliver personalized care, modern styles, and a premium salon experience tailored just for you.
                        </p>

                        {/* Tagline / Badges */}
                        <div className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#DFB261] font-semibold pt-2">
                            <span>Style</span>
                            <span className="w-1 h-1 rounded-full bg-[#DFB261]"></span>
                            <span>Care</span>
                            <span className="w-1 h-1 rounded-full bg-[#DFB261]"></span>
                            <span>Confidence</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-[#DFB261] hover:border-[#DFB261] transition-colors duration-200"
                                    >
                                        <IconComponent className="w-7 h-7" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Span 2) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h3 className="font-serif text-2xl font-medium text-white tracking-wide relative inline-block pb-2">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#DFB261]"></span>
                        </h3>
                        <ul className="space-y-3 pt-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center text-md text-gray-400 hover:text-[#DFB261] transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-5 h-5 mr-1 text-[#DFB261] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Services (Span 3) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-serif text-2xl font-medium text-white tracking-wide relative inline-block pb-2">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#DFB261]"></span>
                        </h3>
                        <ul className="grid grid-cols-1 gap-3 pt-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="group flex items-center text-md text-gray-400 hover:text-[#DFB261] transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-5 h-5 mr-1 text-[#DFB261] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                                        <span>{service.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us (Span 3) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="font-serif text-2xl font-medium text-white tracking-wide relative inline-block pb-2">
                            Contact Us
                            <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#DFB261]"></span>
                        </h3>
                        <ul className="space-y-4 pt-2 text-md ">
                            <li className="flex items-start gap-3">
                                <div className="w-14 h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#DFB261]">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <span>123 Styling Street, New Delhi, India - 110001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 text-[#DFB261]">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <span >+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-14 h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 text-[#DFB261]">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <span>info@haicraftsalon.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-14 h-14 rounded-full bg-[#DFB261]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#DFB261]">
                                    <Clock className="w-7 h-7" />
                                </div>
                                <div>
                                    <p>Mon – Sun: 10:00 AM – 8:00 PM</p>
                                    <p  >(Closed on Tuesday)</p>
                                </div>
                            </li>
                        </ul>

                        {/* Appointment CTA Button */}
                        <div className="pt-2">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/appointment"
                                    className="inline-flex items-center justify-between w-full border border-[#DFB261] hover:bg-[#DFB261] text-[#DFB261] hover:text-black font-medium px-5 py-3 rounded-full transition-all duration-300 text-md group"
                                >
                                    <span>Book an Appointment</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm sm:text-md text-gray-500 gap-4 text-center md:text-left">
                    <p> © 2026 Haircarft. All Rights Reserved. Powered by Lestow</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        <Link href="/privacy-policy" className="hover:text-[#d4af37] transition-colors">
                            Privacy Policy
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/terms" className="hover:text-[#d4af37] transition-colors">
                            Terms & Conditions
                        </Link>
                        <span className="hidden sm:inline">|</span>
                        <Link href="/faqs" className="hover:text-[#d4af37] transition-colors">
                            FAQs
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}