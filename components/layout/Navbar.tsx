"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CalendarDays, Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Stylists", href: "/stylists" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [activeTab, setActiveTab] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-[#121212] border-white/10 shadow-lg" : "bg-transparent border-transparent"}`}>
            <div className="max-w-[1400px] mx-auto px-4 ">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap- group">
                        <Image src="/logo/logo.png" alt="Logo" width={200} height={200} className="w-[140px] sm:w-[200px] h-auto" />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => {
                            const isActive = activeTab === item.label;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setActiveTab(item.label)}
                                    className={`relative  text-md font-medium transition-colors duration-200 ${isActive ? "text-[#DFB261]" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DFB261]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Book An Appointment Button */}
                    <div className="hidden lg:flex items-center">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="/appointment"
                                className="flex items-center gap-2 bg-[#DFB261] hover:bg-[#DFB261] text-black font-medium px-6 py-3 rounded-full shadow-lg shadow-[#DFB261]/20 transition-all duration-200 text-md tracking-wide">
                                <CalendarDays className="w-5 h-5" />
                                <span>Book An Appointment</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white  focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#1a1a1a] border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navItems.map((item) => {
                                const isActive = activeTab === item.label;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => {
                                            setActiveTab(item.label);
                                            setMobileMenuOpen(false);
                                        }}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                            ? "text-[#d4af37] bg-white/5"
                                            : "text-gray-300 hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-4">
                                <Link
                                    href="/appointment"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-[#d4af37] hover:bg-[#c59b27] text-black font-medium py-3 rounded-full text-sm"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>Book An Appointment</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}