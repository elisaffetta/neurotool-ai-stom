import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import SearchEvolutionSection from "@/components/SearchEvolutionSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import IncludedSection from "@/components/IncludedSection";
import ServicesSection from "@/components/ServicesSection";
import MoneyBackSection from "@/components/MoneyBackSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ExamplesSection from "@/components/ExamplesSection";
import SEOStatsSection from "@/components/SEOStatsSection";
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
        <ComparisonSection />
        <SearchEvolutionSection />
        <SolutionSection />
        <ProcessSection />
        <IncludedSection />
        <AdvantagesSection />
        <ExamplesSection />
        <SEOStatsSection />
        <SEOGuideSection />
        <PricingSection />
        <CalculatorSection />
        <ServicesSection />
        <MoneyBackSection />
        <CaseStudiesSection />
        <TeamSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;