import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQ";
import FooterSection from "@/components/FooterSection";
import HackathonStats from "@/components/HackathonStats";
import HeroSection from "@/components/HeroSection";
import PartnersShowcase from "@/components/PartnersShowcase";
import HackathonTimeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <HeroSection />
      <AboutSection/>
      <HackathonStats/>
      <HackathonTimeline/>
      <PartnersShowcase/>
      <FAQSection/>
      <FooterSection />
    </div>
  );
}
