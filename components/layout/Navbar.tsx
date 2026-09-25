"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CalendarDays, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import siteData from "@/data/index";

interface NavItem {
    label: string;
    href: string;
    subItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = siteData.navItems;

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
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? "bg-[#121212] border-white/10 shadow-lg" : "bg-transparent border-transparent"}`}
        >
            <div className="max-w-[1400px] mx-auto px-4 ">
                <div className="flex items-center justify-between h-20">

                    {/* Logo Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href={siteData.navbar.logo.href} className="flex items-center group">
                            <Image src={siteData.navbar.logo.src} alt={siteData.navbar.logo.alt} width={200} height={200} className="w-[140px] sm:w-[200px] h-auto" />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation Links */}
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                        }}
                        className="hidden lg:flex items-center space-x-8 h-full"
                    >
                        {navItems.map((item) => {
                            const isActive = activeTab === item.label;
                            const hasSubItems = item.subItems && item.subItems.length > 0;
                            return (
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: -20 },
                                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
                                    }}
                                    key={item.label}
                                    className="relative group h-full flex items-center"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setActiveTab(item.label)}
                                        className={`flex items-center gap-1 relative text-md font-medium transition-colors duration-200 py-2 ${isActive ? "text-[#DFB261]" : "text-gray-300 hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                        {hasSubItems && (
                                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                        )}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#DFB261]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>

                                    {hasSubItems && (
                                        <div className="absolute top-[60px] left-0 w-52 bg-[#1a1a1a] border border-white/10 rounded-b-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[70px] transition-all duration-300 z-50 overflow-hidden">
                                            <div className="py-2">
                                                {item.subItems!.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-[#DFB261]"
                                                        onClick={() => setActiveTab(item.label)}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.nav>

                    {/* Book An Appointment Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden lg:flex items-center"
                    >
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href={siteData.navbar.bookButton.href}
                                className="flex items-center gap-2 bg-[#DFB261] hover:bg-[#DFB261] text-black font-medium px-6 py-3 rounded-full shadow-lg shadow-[#DFB261]/20 transition-all duration-200 text-md tracking-wide">
                                <CalendarDays className="w-5 h-5" />
                                <span>{siteData.navbar.bookButton.text}</span>
                            </Link>
                        </motion.div>
                    </motion.div>

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
                                const hasSubItems = item.subItems && item.subItems.length > 0;
                                return (
                                    <div key={item.label}>
                                        <Link
                                            href={item.href}
                                            onClick={() => {
                                                setActiveTab(item.label);
                                                if (!hasSubItems) setMobileMenuOpen(false);
                                            }}
                                            className={`flex justify-between items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                                ? "text-[#d4af37] bg-white/5"
                                                : "text-gray-300 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            {item.label}
                                            {hasSubItems && (
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
                                            )}
                                        </Link>

                                        {hasSubItems && isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-6 space-y-1 mt-1 overflow-hidden"
                                            >
                                                {item.subItems!.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        onClick={() => {
                                                            setMobileMenuOpen(false);
                                                        }}
                                                        className="block px-3 py-2 rounded-md text-sm text-gray-400 hover:text-white hover:bg-white/5"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                );
                            })}
                            <div className="pt-4">
                                <Link
                                    href={siteData.navbar.bookButton.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-[#d4af37] hover:bg-[#c59b27] text-black font-medium py-3 rounded-full text-sm">
                                    <Calendar className="w-4 h-4" />
                                    <span>{siteData.navbar.bookButton.text}</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}