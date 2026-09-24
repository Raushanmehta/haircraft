import { motion } from "framer-motion";
import { TeamMember } from "../../sections/home/TeamSection";
import { FaFacebook } from "react-icons/fa";
import { CgInstagram } from "react-icons/cg";
import { BsLinkedin } from "react-icons/bs";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

interface TeamCardProps {
    item: TeamMember;
}

export default function TeamCard({ item }: TeamCardProps) {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
    };

    return (
        <motion.div
            key={item.id}
            variants={cardVariants}
            className="bg-white rounded-lg p-1 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col justify-between group hover:border-[#d4af37]/40 transition-all duration-300">
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden py">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Stylist Details */}
            <div className="text-center space-y-3 px-4 py-4 flex-1 flex flex-col justify-between">
                <div>

                    <h3 className={`${playfair.className} text-2xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors`}>
                        {item.name}
                    </h3>
                    <span className="inline-block text-xs lg:text-sm uppercase tracking-[0.25em] text-[#DFB261] font-semibold mb-1">
                        {item.role}
                    </span>
                    <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3">
                        {item.description}
                    </p>
                </div>

                {/* Social Media Links */}
                <div className=" flex items-center justify-center gap-3">
                    <Link
                        href={item.socials.facebook}
                        className="w-10 h-10 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-colors duration-200"
                        aria-label={`${item.name} Facebook`}
                    >
                        <FaFacebook className="w-5 h-5" />
                    </Link>
                    <Link
                        href={item.socials.instagram}
                        className="w-10 h-10 rounded-full bg-[#F5EEE4] hover:bg-[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-colors duration-200"
                        aria-label={`${item.name} Instagram`}
                    >
                        <CgInstagram className="w-5 h-5" />
                    </Link>
                    <Link
                        href={item.socials.linkedin}
                        className="w-10 h-10 rounded-full bg-[#F5EEE4] hover:bg[[#DFB261] text-gray-700 hover:text-black border border-gray-200 hover:border-[#d4af37] flex items-center justify-center transition-colors duration-200"
                        aria-label={`${item.name} LinkedIn`}
                    >
                        <BsLinkedin className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}