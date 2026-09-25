import { motion } from "framer-motion";
import { TeamMember } from "../../sections/home/TeamSection";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { fadeInUpVariants } from "@/utils/animations";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface TeamCardProps {
    item: TeamMember;
}

export default function TeamCard({ item }: TeamCardProps) {
    return (
        <motion.div
            key={item.id}
            variants={fadeInUpVariants}
            className="bg-white rounded-lg p-1 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between group hover:border-[#d4af37]/40 transition-all duration-300">
            {/* Image Container */}
            <Link href={`/our-team/${item.id}`} className="relative h-64 sm:h-72 rounded-lg overflow-hidden block">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Stylist Details */}
            <div className="text-center space-y-3 px-4 py-4 flex-1 flex flex-col justify-between">
                <div>
                    <Link href={`/our-team/${item.id}`}>
                        <h3 className={`${playfair.className} text-2xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors`}>
                            {item.name}
                        </h3>
                    </Link>
                    <span className="inline-block text-xs lg:text-sm uppercase tracking-[0.25em] text-[#DFB261] font-semibold mb-1">
                        {item.role}
                    </span>
                    <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3">
                        {item.description}
                    </p>
                </div>

                {/* Social Media Links */}
                {item.socials && (
                    <div className="flex items-center justify-center gap-2.5 pt-2">
                        {item.socials.facebook && (
                            <Link
                                href={item.socials.facebook}
                                className="w-9 h-9 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 shadow-sm"
                                aria-label={`${item.name} Facebook`}
                            >
                                <FaFacebook className="w-4 h-4" />
                            </Link>
                        )}
                        {item.socials.instagram && (
                            <Link
                                href={item.socials.instagram}
                                className="w-9 h-9 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 shadow-sm"
                                aria-label={`${item.name} Instagram`}
                            >
                                <CgInstagram className="w-4 h-4" />
                            </Link>
                        )}
                        {item.socials.whatsapp && (
                            <Link
                                href={item.socials.whatsapp}
                                className="w-9 h-9 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 shadow-sm"
                                aria-label={`${item.name} WhatsApp`}
                            >
                                <FaWhatsapp className="w-4 h-4" />
                            </Link>
                        )}
                        {item.socials.youtube && (
                            <Link
                                href={item.socials.youtube}
                                className="w-9 h-9 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 shadow-sm"
                                aria-label={`${item.name} YouTube`}
                            >
                                <BsYoutube className="w-4 h-4" />
                            </Link>
                        )}
                        {item.socials.linkedin && (
                            <Link
                                href={item.socials.linkedin}
                                className="w-9 h-9 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-all duration-200 shadow-sm"
                                aria-label={`${item.name} LinkedIn`}
                            >
                                <BsLinkedin className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}