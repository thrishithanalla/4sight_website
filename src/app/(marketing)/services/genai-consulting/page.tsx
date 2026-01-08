
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Target, Settings, Users, BarChart, Search, Calculator, Rocket, RefreshCw, Briefcase, HeartPulse, Factory, ShoppingBag, Laptop, MonitorCheck, TrendingUp, Cpu } from "lucide-react";

const GenAIConsulting = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            GenAI Consulting
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            Strategic AI Implementation
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            End-to-end Generative AI consulting services including strategy development, implementation, deployment, and ongoing support for enterprise AI transformation.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Comprehensive AI Transformation
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From strategy to production deployment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                alt="GenAI Consulting - Strategic AI Implementation"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is GenAI Consulting?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                GenAI Consulting represents our full-service approach to Generative AI implementation. We provide
                                comprehensive consulting services that guide enterprises through every phase of their AI transformation
                                journey, from initial strategy development to production deployment and ongoing optimization.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our experienced consultants combine deep technical expertise with business acumen to ensure that
                                your GenAI initiatives not only deliver cutting-edge capabilities but also drive measurable business
                                value and competitive advantage.
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
                            Consulting Services
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            End-to-end AI implementation support
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI Strategy Development</h3>
                            <p className="text-muted-foreground text-sm">
                                Comprehensive AI strategy formulation including use case identification, ROI analysis,
                                technology roadmap, and organizational readiness assessment.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Settings className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Technical Implementation</h3>
                            <p className="text-muted-foreground text-sm">
                                Full-stack AI implementation including model development, data pipeline construction,
                                integration with existing systems, and production deployment.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Change Management</h3>
                            <p className="text-muted-foreground text-sm">
                                Organizational change management including training programs, adoption strategies,
                                and cultural transformation to ensure successful AI integration.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Performance Monitoring</h3>
                            <p className="text-muted-foreground text-sm">
                                Ongoing performance monitoring, optimization, and maintenance services to ensure
                                sustained AI system effectiveness and continuous improvement.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Consulting Process Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Consulting Process
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Structured methodology for successful AI implementation
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Enterprise AI Transformation Framework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Search className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Assessment & Planning</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive assessment of current capabilities, identification of AI opportunities, and development of strategic roadmap.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Calculator className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Design & Architecture</h4>
                                <p className="text-muted-foreground text-sm">Technical architecture design, data strategy development, and integration planning for scalable AI solutions.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Rocket className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Implementation & Deployment</h4>
                                <p className="text-muted-foreground text-sm">Agile development, rigorous testing, and production deployment with comprehensive quality assurance processes.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <RefreshCw className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Optimization & Support</h4>
                                <p className="text-muted-foreground text-sm">Continuous monitoring, performance optimization, user training, and ongoing support for sustained success.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>


            {/* Industry Expertise Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Industry Expertise
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Tailored consulting for diverse sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" /> Financial Services
                            </h3>
                            <p className="text-muted-foreground text-sm">Regulatory compliance, risk management, algorithmic trading, personalized wealth management, and fraud detection systems.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <HeartPulse className="w-5 h-5 text-primary" /> Healthcare & Life Sciences
                            </h3>
                            <p className="text-muted-foreground text-sm">Clinical decision support, drug discovery, personalized medicine, medical imaging analysis, and healthcare administration.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Factory className="w-5 h-5 text-primary" /> Manufacturing & Industry
                            </h3>
                            <p className="text-muted-foreground text-sm">Predictive maintenance, quality control, supply chain optimization, industrial automation, and smart manufacturing.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-primary" /> Retail & E-commerce
                            </h3>
                            <p className="text-muted-foreground text-sm">Personalized recommendations, inventory optimization, dynamic pricing, customer service automation, and market analysis.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Laptop className="w-5 h-5 text-primary" /> Technology & Software
                            </h3>
                            <p className="text-muted-foreground text-sm">Code generation, automated testing, user experience design, product development acceleration, and technical documentation.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <MonitorCheck className="w-5 h-5 text-primary" /> Professional Services
                            </h3>
                            <p className="text-muted-foreground text-sm">Legal research automation, contract analysis, consulting intelligence, knowledge management, and business process automation.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Our GenAI Consulting?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Expert guidance for enterprise AI success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6" /> Proven Track Record
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Extensive experience across industries with successful AI implementations that deliver measurable
                                    business outcomes and competitive advantages.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Users className="w-6 h-6" /> Full-Service Support
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Comprehensive consulting services covering every aspect of AI implementation, from strategy
                                    to ongoing optimization, ensuring complete project success.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Cpu className="w-6 h-6" /> Technical Excellence
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Deep technical expertise combined with practical implementation experience ensures robust,
                                    scalable, and maintainable AI solutions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Target className="w-6 h-6" /> Business Alignment
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Strong focus on business value ensures that AI initiatives align with organizational objectives,
                                    deliver ROI, and support long-term strategic goals.
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

export default GenAIConsulting;
