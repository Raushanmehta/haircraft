import AboutSection from "@/sections/home/AboutSection";
import BlogSection from "@/sections/home/BlogSection";
import CtaSection from "@/sections/home/CtaSection";
import HeroSection from "@/sections/home/HeroSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ServiceSection from "@/sections/home/ServiceSection";
import TeamSection from "@/sections/home/TeamSection";
import TestimonialSection from "@/sections/home/TestimonialSection";
import WhyChooseUsSection from "@/sections/home/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProcessSection />
      <CtaSection />
      <TeamSection />
      <WhyChooseUsSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
}
