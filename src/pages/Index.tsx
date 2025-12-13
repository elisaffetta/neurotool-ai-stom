import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import IncludedSection from "@/components/IncludedSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ExamplesSection from "@/components/ExamplesSection";
import SEOStatsSection from "@/components/SEOStatsSection";
import SEOTrendsSection from "@/components/SEOTrendsSection";
import SEOGuideSection from "@/components/SEOGuideSection";
import PricingSection from "@/components/PricingSection";
import CalculatorSection from "@/components/CalculatorSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainPointsSection />
        <ComparisonSection />
        <SolutionSection />
        <ProcessSection />
        <IncludedSection />
        <ServicesSection />
        <CaseStudiesSection />
        <AdvantagesSection />
        <ExamplesSection />
        <SEOStatsSection />
        <SEOTrendsSection />
        <SEOGuideSection />
        <PricingSection />
        <CalculatorSection />
        <TeamSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;