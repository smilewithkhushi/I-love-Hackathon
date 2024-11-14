import AboutSection from "@/components/about/AboutSection";
import CallForPartners from "@/components/CallForPartners";
import FAQSection from "@/components/FAQ";
import HackathonStats from "@/components/HackathonStats";
import HeroSection from "@/components/HeroSection";
import SponsorsShowcase from "@/components/partners/SponsorShowcase";
import PartnersShowcase from "@/components/partners/PartnersShowcase";
import Prizes from "@/components/Prizes";
import HackathonTimeline from "@/components/timeline/Timeline";
import HackathonThemes from "@/components/timeline/Themes";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection/>
      <HackathonStats/>
      <HackathonThemes/>
      <Prizes/>
      <HackathonTimeline/>
      <SponsorsShowcase/>
      <PartnersShowcase/>
      <CallForPartners/>
      <FAQSection/>
    </div>
  );
}
