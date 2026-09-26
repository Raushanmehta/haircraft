import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type HairCraftSchema = typeof siteData.HairCraft;
export type HairCraftSections = HairCraftSchema["sections"];
export type HairCraftTemplateComponents = HairCraftSchema["templateComponents"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type HairCraftNavbarData = HairCraftSections["navbar"]["variants"]["HairCraftNavbar1"];
export type HairCraftNavItemsData = HairCraftNavbarData["navItems"];
export type HairCraftFooterData = HairCraftSections["footer"]["variants"]["HairCraftFooter1"];
export type HairCraftHeroData = HairCraftSections["hero"]["variants"]["HairCraftHero1"];
export type HairCraftAboutData = HairCraftSections["about"]["variants"]["HairCraftAbout1"];
export type HairCraftServicesData = HairCraftSections["services"]["variants"]["HairCraftServices1"];
export type HairCraftProcessData = HairCraftSections["process"]["variants"]["HairCraftProcess1"];
export type HairCraftCtaData = HairCraftSections["cta"]["variants"]["HairCraftCta1"];
export type HairCraftTeamData = HairCraftSections["team"]["variants"]["HairCraftTeam1"];
export type HairCraftWhyChooseUsData = HairCraftSections["whyChooseUs"]["variants"]["HairCraftWhyChooseUs1"];
export type HairCraftTestimonialsData = HairCraftSections["testimonials"]["variants"]["HairCraftTestimonials1"];
export type HairCraftBlogData = HairCraftSections["blog"]["variants"]["HairCraftBlog1"];
export type HairCraftPageTopData = HairCraftSections["pageTopSection"]["variants"]["HairCraftPageTop1"];
export type HairCraftGetAQuoteData = HairCraftSections["getAQuote"]["variants"]["HairCraftGetAQuote1"];
export type HairCraftCareerData = HairCraftSections["career"]["variants"]["HairCraftCareer1"];
export type JobOpening = HairCraftCareerData["jobs"][number];
export type JobPerk = NonNullable<JobOpening["perks"]>[number];
export type HairCraftGalleryData = HairCraftSections["gallery"]["variants"]["HairCraftGallery1"];

// ── Canonical Mapped Site Data Object ──
const sec = siteData.HairCraft.sections;

const servicesVariant = sec.services.variants.HairCraftServices1;
const servicesMapped = {
  ...servicesVariant,
  list: servicesVariant.ServiceItem,
  ServiceItem: servicesVariant.ServiceItem,
};

const siteMap = {
  navbar: sec.navbar.variants.HairCraftNavbar1,
  navItems: sec.navbar.variants.HairCraftNavbar1.navItems,
  footer: sec.footer.variants.HairCraftFooter1,

  hero: sec.hero.variants.HairCraftHero1,
  about: sec.about.variants.HairCraftAbout1,
  services: servicesMapped,
  process: sec.process.variants.HairCraftProcess1,
  cta: sec.cta.variants.HairCraftCta1,
  team: sec.team.variants.HairCraftTeam1,
  whyChooseUs: sec.whyChooseUs.variants.HairCraftWhyChooseUs1,
  testimonials: sec.testimonials.variants.HairCraftTestimonials1,
  blog: sec.blog.variants.HairCraftBlog1,
  pageTopSection: sec.pageTopSection.variants.HairCraftPageTop1,
  getAQuote: sec.getAQuote.variants.HairCraftGetAQuote1,
  career: sec.career.variants.HairCraftCareer1,
  gallery: sec.gallery.variants.HairCraftGallery1,

  // Compatibility object so existing components importing `siteData.home.hero` don't break
  home: {
    hero: sec.hero.variants.HairCraftHero1,
    about: sec.about.variants.HairCraftAbout1,
    services: servicesMapped,
    process: sec.process.variants.HairCraftProcess1,
    cta: sec.cta.variants.HairCraftCta1,
    team: sec.team.variants.HairCraftTeam1,
    whyChooseUs: sec.whyChooseUs.variants.HairCraftWhyChooseUs1,
    testimonials: sec.testimonials.variants.HairCraftTestimonials1,
    blog: sec.blog.variants.HairCraftBlog1,
  },

  // Root Tree
  HairCraft: siteData.HairCraft,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;
