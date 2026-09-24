"use client";
import ProcessCard from "@/components/cards/ProcessCard";

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    image: string;
}

const steps: ProcessStep[] = [
    {
        step: "01",
        title: "Book Your Appointment",
        description: "Schedule your visit online or give us a call. Choose your preferred service, date, and time — it's quick and easy.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
    },
    {
        step: "02",
        title: "Consultation",
        description: "Our expert stylist will understand your needs, suggest the best options, and create a personalized plan for your look.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
    },
    {
        step: "03",
        title: "Get Pampered",
        description: "Sit back and relax while our professionals work their magic using premium products and advanced techniques.",
        image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop",
    },
    {
        step: "04",
        title: "Step Out with Confidence",
        description: "Enjoy your refreshed look and feel more confident, stylish, and you — because you deserve it[cite: 6].",
        image: "https://images.unsplash.com/photo-1583234947900-474d284fb8e9?q=80&w=600&auto=format&fit=crop",
    },
];

export default function ProcessSection() {
    return (
        <section className="bg-[#FFFFFF] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8 space-y-2">
                    <div className="flex items-center justify-center gap-3">
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                        <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                            How It Works
                        </span>
                        <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#121212] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Your Perfect Look in <span className="text-[#DFB261] font-normal">Simple Steps</span>
                    </h2>

                    <p className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium">
                        We make your salon experience easy, seamless, and relaxing — from booking to beautiful results.
                    </p>
                </div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative">

                    {steps.map((item, index) => (
                        <ProcessCard key={index} item={item} index={index} />
                    ))}

                </div>

            </div>
        </section>
    );
}