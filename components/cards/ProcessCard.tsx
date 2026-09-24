import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ProcessStep } from "@/sections/home/ProcessSection";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
export default function ProcessCard({
    item,
    index,
}: {
    item: ProcessStep;
    index: number;
}) {
    return (
        <>
            <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group relative z-10">
                {/* Right Connector Line (Desktop Only) */}
                {index < 3 && (
                    <div className="hidden lg:block absolute top-[8rem] left-[calc(50%+8rem)] w-[calc(50%-8rem+1rem)] z-[-1]">
                        <div
                            className="w-full h-[1.5px]"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #DFB261 50%, transparent 50%)',
                                backgroundSize: '16px 1.5px',
                                animation: 'flow-bg 1s linear infinite'
                            }}
                        />
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-2 border-[#DFB261] rounded-full flex items-center justify-center z-10 shadow-sm">
                            <ChevronRight className="text-[#DFB261] w-4 h-4" />
                        </div>
                    </div>
                )}

                {/* Left Connector Line (Desktop Only) */}
                {index > 0 && (
                    <div className="hidden lg:block absolute top-[8rem] right-[calc(50%+8rem)] w-[calc(50%-8rem+1rem)] z-[-1]">
                        <div
                            className="w-full h-[1.5px]"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #DFB261 50%, transparent 50%)',
                                backgroundSize: '16px 1.5px',
                                animation: 'flow-bg 1s linear infinite'
                            }}
                        />
                    </div>
                )}

                {/* Circular Image Container with Gold Border and Step Badge */}
                <div className="relative mb-3 lg:mb-6">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-1.5 border shadow-sm group-hover:scale-105 transition-transform duration-500">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover "
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                        </div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 left-6 w-14 h-14 rounded-full bg-[#DFB261] text-white  font-bold text-lg flex items-center justify-center shadow-md border-3 border-white">
                        {item.step}
                    </div>
                </div>

                {/* Step Title & Description */}
                <div className="space-y-3 px-2">
                    <h3 className={`${playfair.className} text-2xl font-semibold text-[#121212] group-hover:text-[#DFB261] transition-colors`}>
                        {item.title}
                    </h3>
                    <span className="block w-12 h-[2px] bg-[#DFB261] mx-auto"></span>
                    <p className="text-gray-400 text-sm lg:text-md font-medium leading-relaxed line-clamp-3">
                        {item.description}
                    </p>
                </div>
            </motion.div>
        </>
    );
}