import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQ";
import FooterSection from "@/components/FooterSection";
import HackathonStats from "@/components/HackathonStats";
import HeroSection from "@/components/HeroSection";
import PartnersShowcase from "@/components/PartnersShowcase";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection/>
      <HackathonStats/>
      <PartnersShowcase/>
      <FAQSection/>
      <FooterSection />
    </div>
  );
}
