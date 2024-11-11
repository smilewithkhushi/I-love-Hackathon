import AboutSection from "@/components/about/AboutSection";
import CallForPartners from "@/components/CallForPartners";
import FAQSection from "@/components/FAQ";
import FooterSection from "@/components/FooterSection";
import HackathonStats from "@/components/HackathonStats";
import HeroSection from "@/components/HeroSection";
import PartnersShowcase from "@/components/PartnersShowcase";
import Prizes from "@/components/Prizes";
import HackathonTimeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection/>
      <HackathonStats/>
      <Prizes/>
      <HackathonTimeline/>
      <PartnersShowcase/>
      <CallForPartners/>
      <FAQSection/>
    </div>
  );
}
