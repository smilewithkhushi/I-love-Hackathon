import AboutSection from "@/components/AboutSection";
import CallForPartners from "@/components/CallForPartners";
import FAQSection from "@/components/FAQ";
import FooterSection from "@/components/FooterSection";
import HackathonStats from "@/components/HackathonStats";
import HeroSection from "@/components/HeroSection";
//import PartnersShowcase from "@/components/PartnersShowcase";
import HackathonTimeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection/>
      <HackathonStats/>
      <HackathonTimeline/>
      {/* <PartnersShowcase/> */}
      <CallForPartners/>
      <FAQSection/>
      <FooterSection />
    </div>
  );
}
