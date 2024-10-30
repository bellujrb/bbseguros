import { Footer } from "@/app/(root)/_components/footer";
import { Hero } from "@/app/(root)/_components/landing-sections/hero-section";
import { VisionSection } from "@/app/(root)/_components/landing-sections/vision-section";
import { Testimonials } from "@/app/(root)/_components/landing-sections/testimonials-section";
import GuideSection from "@/app/(root)/_components/landing-sections/guide-section";
import { ReatltimeSection } from "@/app/(root)/_components/landing-sections/realtime-section";
import AnalisePrevisaoSection from "@/app/(root)/_components/landing-sections/analise-section";
import { FaqSection } from "@/app/(root)/_components/landing-sections/faq-section";
import { PrevisaoSection } from "@/app/(root)/_components/landing-sections/previsao-section";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <VisionSection />
      <ReatltimeSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
