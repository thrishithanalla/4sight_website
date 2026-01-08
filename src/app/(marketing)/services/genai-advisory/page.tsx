
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, Target, BarChart, Map as MapIcon, Compass, TrendingUp, Settings, Briefcase, HeartPulse, Factory, ShoppingBag, Clapperboard, MonitorCheck } from "lucide-react";

const GenAIAdvisory = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            GenAI Advisory
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            Strategic Generative AI Guidance
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Strategic guidance on integrating Generative AI into your business operations, identifying high-impact use cases and creating actionable roadmaps.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Expert Generative AI Strategy
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transform your business with strategic AI integration
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                alt="GenAI Advisory - Strategic Generative AI Guidance"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is GenAI Advisory?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                GenAI Advisory is our comprehensive consulting service designed to help enterprises navigate the complex
                                landscape of Generative AI adoption. Our expert consultants combine deep technical knowledge with business
                                acumen to identify high-impact opportunities, assess organizational readiness, and develop strategic roadmaps
                                for successful AI integration.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                From initial assessment to full-scale implementation, we provide end-to-end guidance to ensure your GenAI
                                initiatives deliver measurable business value and competitive advantage.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Service Components Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Service Components
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive advisory framework for GenAI success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI Readiness Assessment</h3>
                            <p className="text-muted-foreground text-sm">
                                Comprehensive evaluation of your organization's current AI capabilities, data infrastructure,
                                and cultural readiness for GenAI adoption.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Use Case Identification</h3>
                            <p className="text-muted-foreground text-sm">
                                Strategic analysis to identify high-impact GenAI applications specific to your industry,
                                processes, and business objectives.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">ROI Analysis & Business Case</h3>
                            <p className="text-muted-foreground text-sm">
                                Detailed financial modeling and business case development to quantify the value proposition
                                and justify GenAI investments.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <MapIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Strategic Roadmap Development</h3>
                            <p className="text-muted-foreground text-sm">
                                Creation of phased implementation roadmaps with clear milestones, resource requirements,
                                and success metrics for GenAI initiatives.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Advisory Process Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Advisory Process
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Structured approach to successful GenAI adoption
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Phased Implementation Framework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 font-bold text-2xl text-primary w-16 h-16 flex items-center justify-center">1</div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Discovery & Assessment</h4>
                                <p className="text-muted-foreground text-sm">Initial consultation to understand your business objectives, current capabilities, and GenAI aspirations.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 font-bold text-2xl text-primary w-16 h-16 flex items-center justify-center">2</div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Strategic Analysis</h4>
                                <p className="text-muted-foreground text-sm">Deep-dive analysis of your industry, competitive landscape, and potential GenAI applications.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 font-bold text-2xl text-primary w-16 h-16 flex items-center justify-center">3</div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Solution Design</h4>
                                <p className="text-muted-foreground text-sm">Development of customized GenAI strategies, use cases, and implementation approaches.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 font-bold text-2xl text-primary w-16 h-16 flex items-center justify-center">4</div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Roadmap & Execution</h4>
                                <p className="text-muted-foreground text-sm">Creation of detailed implementation plans with timelines, resources, and success metrics.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Industry Applications Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Industry Applications
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Tailored GenAI strategies across sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" /> Financial Services
                            </h3>
                            <p className="text-muted-foreground text-sm">Risk assessment, algorithmic trading, personalized financial advice, and automated compliance reporting with GenAI-powered insights.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <HeartPulse className="w-5 h-5 text-primary" /> Healthcare & Life Sciences
                            </h3>
                            <p className="text-muted-foreground text-sm">Drug discovery, personalized treatment plans, medical imaging analysis, and clinical trial optimization using GenAI technologies.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Factory className="w-5 h-5 text-primary" /> Manufacturing & Industry
                            </h3>
                            <p className="text-muted-foreground text-sm">Predictive maintenance, quality control, supply chain optimization, and industrial automation with GenAI-driven intelligence.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-primary" /> Retail & E-commerce
                            </h3>
                            <p className="text-muted-foreground text-sm">Personalized shopping experiences, inventory management, demand forecasting, and customer service automation.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Clapperboard className="w-5 h-5 text-primary" /> Media & Entertainment
                            </h3>
                            <p className="text-muted-foreground text-sm">Content creation, audience analysis, personalized recommendations, and automated content moderation systems.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <MonitorCheck className="w-5 h-5 text-primary" /> Professional Services
                            </h3>
                            <p className="text-muted-foreground text-sm">Legal research, contract analysis, consulting intelligence, and knowledge management with GenAI assistance.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Our GenAI Advisory?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Expert guidance for successful AI transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Proven Track Record</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our consultants bring extensive experience from successful GenAI implementations across diverse industries.
                                    We understand the challenges and opportunities of AI adoption and have developed proven methodologies for success.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Technical Excellence</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Deep technical expertise combined with business acumen ensures that our recommendations are both
                                    technologically sound and commercially viable.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Practical Approach</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We focus on actionable insights and practical implementation rather than theoretical concepts.
                                    Our roadmaps are designed for real-world execution with clear milestones and measurable outcomes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Ongoing Support</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our relationship doesn't end with the delivery of recommendations. We provide ongoing support
                                    throughout implementation and help you adapt strategies as the AI landscape evolves.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                        <Link href="/services">
                            <Button size="lg" variant="outline" className="px-8">View All Services</Button>
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default GenAIAdvisory;
