import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import StackingCards from "@/components/marketing/stacking-cards";
import ImpactStats from "@/components/marketing/impact-stats";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";

const HomePage = () => {
    return (
        <div className="flex flex-col relative w-full">
            <Wrapper className="pt-20 relative overflow-hidden">
                <Hero />
            </Wrapper>

            <StackingCards />

            <Wrapper className="pb-20 relative overflow-hidden">
                <ImpactStats />
                <Companies />
                <Features />
                <Analysis />
                <Pricing />
                <LanguageSupport />
                <CTA />
            </Wrapper>
        </div>
    )
};

export default HomePage
