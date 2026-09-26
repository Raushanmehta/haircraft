"use client";

import React, { useState } from "react";
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
import siteData from "@/data/index";
import {
  fadeInUpVariants,
  textContainerVariants,
  buttonLuxuryLift,
  imageBlurFadeInVariants,
} from "@/utils/animations";
import { The_Nautigal } from "next/font/google";

const nautigal = The_Nautigal({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export interface GetAQuoteFormField {
  label?: string;
  placeholder?: string;
  icon?: any;
  options?: string[];
  required?: boolean;
}

export interface GetAQuoteFeature {
  icon?: any;
  title: string;
  description: string;
}

export interface GetAQuoteData {
  pageTop?: {
    title?: string;
    breadcrumbs?: { label: string; href: string }[];
  };
  subtitle?: string;
  title?: string;
  description?: string;
  form?: {
    fullName?: GetAQuoteFormField;
    phoneNumber?: GetAQuoteFormField;
    emailAddress?: GetAQuoteFormField;
    service?: GetAQuoteFormField;
    preferredDate?: GetAQuoteFormField;
    preferredTime?: GetAQuoteFormField;
    message?: GetAQuoteFormField;
    submitButton?: {
      text?: string;
      icon?: any;
    };
  };
  successState?: {
    icon?: any;
    title?: string;
    description?: string;
    buttonText?: string;
  };
  sideImage?: {
    src?: string;
    alt?: string;
    badge?: {
      line1?: string;
      line2?: string;
    };
  };
  whyChooseUs?: {
    title?: string;
    features?: GetAQuoteFeature[];
  };
}

export interface GetAQuoteSectionProps {
  data?: GetAQuoteData;
}

function renderIcon(icon: any, defaultIcon: React.ElementType, className = "w-4 h-4") {
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

interface QuoteFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function GetAQuoteSection({ data }: GetAQuoteSectionProps) {
  // Parent to child data flow with default fallback
  const content: GetAQuoteData = data || (siteData as any).getAQuote;

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const formConfig = content?.form;
  const whyConfig = content?.whyChooseUs;
  const successConfig = content?.successState;
  const sideImageConfig = content?.sideImage;

  return (
    <section className="bg-[#fcfbfa] text-[#1a1a1a] py-8 lg:py-14 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#DFB261]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Left Column: Request Your Quote Form (Span 7) */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 bg-[#F9F4EE] rounded-lg p-4 lg:p-6 border border-gray-200/80 shadow-xl shadow-gray-200/40"
          >
            {/* Section Tag */}
            <motion.div variants={fadeInUpVariants} className="flex items-center gap-3">
              <span className="w-10 lg:w-16 h-[2px] bg-[#DFB261]"></span>
              <span className="text-xs lg:text-sm uppercase tracking-[0.3em] text-[#DFB261] font-semibold">
                {content?.subtitle || "GET A QUOTE"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUpVariants}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl whitespace-normal md:whitespace-nowrap tracking-tight font-semibold text-[#121212] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {content?.title || "Request Your Quote"}
            </motion.h1>
            <motion.div variants={fadeInUpVariants} className="w-12 h-[2px] bg-[#DFB261] my-3" />
            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 text-sm lg:text-md leading-relaxed font-medium mb-3"
            >
              {content?.description || "Fill out the form below and our team will get back to you with a custom quote based on your needs."}
            </motion.p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-[#DFB261] rounded-lg p-8 text-center space-y-3 my-8 shadow-md"
              >
                <div className="w-14 h-14 bg-[#DFB261] text-black rounded-full flex items-center justify-center mx-auto shadow-md">
                  {renderIcon(successConfig?.icon, LucideIcons.CheckCircle2, "w-7 h-7")}
                </div>
                <h3
                  className="text-2xl font-semibold text-[#121212]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {successConfig?.title || "Quote Request Received!"}
                </h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto font-medium">
                  {successConfig?.description
                    ? successConfig.description.replace("{fullName}", formData.fullName || "valued client")
                    : `Thank you, ${formData.fullName}. We have received your request and will contact you via phone or email shortly.`}
                </p>
                <div className="pt-2">
                  <motion.div {...buttonLuxuryLift} className="inline-block">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-[#DFB261] text-black rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#DFB261]/90 transition-colors shadow-md shadow-[#DFB261]/20"
                    >
                      {successConfig?.buttonText || "Submit Another Request"}
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeInUpVariants}
                onSubmit={handleSubmit}
                className="space-y-3 sm:space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      {formConfig?.fullName?.label || "Full Name"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                        {renderIcon(formConfig?.fullName?.icon, LucideIcons.User, "w-4 h-4")}
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={formConfig?.fullName?.placeholder || "Enter your full name"}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      {formConfig?.phoneNumber?.label || "Phone Number"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                        {renderIcon(formConfig?.phoneNumber?.icon, LucideIcons.Phone, "w-4 h-4")}
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder={formConfig?.phoneNumber?.placeholder || "Enter your phone number"}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                      />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      {formConfig?.emailAddress?.label || "Email Address"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                        {renderIcon(formConfig?.emailAddress?.icon, LucideIcons.Mail, "w-4 h-4")}
                      </div>
                      <input
                        type="email"
                        name="emailAddress"
                        required
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder={formConfig?.emailAddress?.placeholder || "Enter your email address"}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      {formConfig?.service?.label || "Service Interested In"} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                        {renderIcon(formConfig?.service?.icon, LucideIcons.Scissors, "w-4 h-4")}
                      </div>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>{formConfig?.service?.placeholder || "Select a service"}</option>
                        {(formConfig?.service?.options || [
                          "Haircut & Styling",
                          "Hair Wash & Dry",
                          "Beard & Shaving",
                          "Global Hair Color",
                          "Hair Treatment",
                          "Wedding Grooming"
                        ]).map((svc, i) => (
                          <option key={i} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      {formConfig?.preferredDate?.label || "Preferred Date"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                        {renderIcon(formConfig?.preferredDate?.icon, LucideIcons.Calendar, "w-4 h-4")}
                      </div>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all"
                      />
                    </div>
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                      {formConfig?.preferredTime?.label || "Preferred Time"}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#DFB261]">
                        {renderIcon(formConfig?.preferredTime?.icon, LucideIcons.Clock, "w-4 h-4")}
                      </div>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>{formConfig?.preferredTime?.placeholder || "Select a time"}</option>
                        {(formConfig?.preferredTime?.options || [
                          "Morning (10 AM - 1 PM)",
                          "Afternoon (1 PM - 4 PM)",
                          "Evening (4 PM - 8 PM)"
                        ]).map((time, i) => (
                          <option key={i} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                </div>

                {/* Additional Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700">
                    {formConfig?.message?.label || "Additional Message (Optional)"}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#DFB261]">
                      {renderIcon(formConfig?.message?.icon, LucideIcons.MessageSquare, "w-4 h-4")}
                    </div>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={formConfig?.message?.placeholder || "Write your requirements here..."}
                      className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#121212] placeholder-gray-400 focus:outline-none focus:border-[#DFB261] focus:ring-1 focus:ring-[#DFB261] transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.div {...buttonLuxuryLift} className="inline-block w-full sm:w-auto">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#DFB261] hover:bg-[#DFB261]/90 text-black font-medium px-8 py-3.5 rounded-full shadow-lg shadow-[#DFB261]/20 transition-all text-sm tracking-wide group"
                    >
                      <span>{formConfig?.submitButton?.text || "Submit Request"}</span>
                      {renderIcon(
                        formConfig?.submitButton?.icon,
                        LucideIcons.ArrowRight,
                        "w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
                      )}
                    </button>
                  </motion.div>
                </div>

              </motion.form>
            )}
          </motion.div>

          {/* Right Column: Image & Why Get a Quote (Span 5) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Top Stylist Image Card with Floating Badge */}
            <motion.div
              variants={imageBlurFadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative h-72 sm:h-80 rounded-lg overflow-hidden shadow-2xl border border-gray-200 group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={
                  sideImageConfig?.src ||
                  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop"
                }
                alt={sideImageConfig?.alt || "Stylist working on client"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating "Look Good Feel Great" Badge */}
              <div className="absolute bottom-1 right-1 bg-white/95 backdrop-blur-md px-6 py-3.5 rounded-lg shadow-xl border border-white/40 text-center">
                <p
                  className={`text-black text-3xl sm:text-4xl font-bold leading-none ${nautigal.className}`}
                >
                  {sideImageConfig?.badge?.line1 || "Look Good"}
                </p>
                <p
                  className={`text-black text-3xl sm:text-4xl font-bold leading-none mt-1 ${nautigal.className}`}
                >
                  {sideImageConfig?.badge?.line2 || "Feel Great"}
                </p>
              </div>
            </motion.div>

            {/* Why Get a Quote from Us? Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeInUpVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1), 0 0 20px rgba(223,178,97,0.25)" }}
              transition={{ duration: 0.3 }}
              className="bg-[#F9F4EE] rounded-lg p-6 sm:p-7 border border-gray-200/80 shadow-xl shadow-gray-200/40 space-y-4 cursor-pointer"
            >
              <div>
                <h3
                  className="text-3xl whitespace-normal md:whitespace-nowrap tracking-tight text-[#121212] font-semibold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {whyConfig?.title || "Why Get a Quote from Us?"}
                </h3>
                <div className="w-12 h-[2px] bg-[#DFB261] mt-2" />
              </div>

              <div className="space-y-4">
                {(whyConfig?.features || [
                  {
                    icon: "Gem",
                    title: "Personalized Recommendations",
                    description: "Tailored to your hair type and style goals."
                  },
                  {
                    icon: "Clock",
                    title: "Transparent Pricing",
                    description: "No hidden charges. Know the cost upfront."
                  },
                  {
                    icon: "Users",
                    title: "Expert Guidance",
                    description: "Get advice from our professional stylists."
                  },
                  {
                    icon: "Zap",
                    title: "Quick Response",
                    description: "Our team will get back to you shortly."
                  }
                ]).map((feature: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-[#DFB261] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:shadow-md cursor-pointer"
                    >
                      {renderIcon(feature.icon, LucideIcons.Gem, "w-5 h-5")}
                    </motion.div>
                    <div>
                      <h4
                        className="text-lg font-semibold text-[#121212]"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}