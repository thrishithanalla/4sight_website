import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, LinkIcon, ZapIcon, ShieldCheckIcon, TrendingUpIcon } from "lucide-react";

const AIEnvelopPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            AI Envelop
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            Enterprise AI Infrastructure Solution
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Think of it as an intelligent layer that enhances every aspect of your operations without requiring a complete system overhaul.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Comprehensive Enterprise AI Infrastructure
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transform your enterprise operations with seamless AI integration
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/ai-envelop-hero.jpg"
                                alt="AI Envelop - Enterprise AI Infrastructure"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is AI Envelop?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                AI Envelop is our flagship enterprise AI infrastructure solution designed to seamlessly wrap around
                                your existing systems and processes. This comprehensive platform enables organizations to integrate AI capabilities across multiple touchpoints—from customer
                                service and data analysis to workflow automation and predictive analytics.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                AI Envelop adapts to your unique business context, learning from your data and processes to provide increasingly sophisticated insights and automation.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Key Features Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Key Features
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Advanced capabilities that drive enterprise transformation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <LinkIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
                            <p className="text-muted-foreground text-sm">
                                Seamlessly integrates with existing enterprise systems without requiring complete overhauls.
                                Our modular architecture ensures compatibility with your current infrastructure.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ZapIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced real-time data processing and analytics capabilities that provide instant insights
                                and enable immediate decision-making across your organization.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ShieldCheckIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
                            <p className="text-muted-foreground text-sm">
                                Enterprise-grade security frameworks with advanced encryption, compliance monitoring,
                                and robust governance protocols to protect your sensitive data.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TrendingUpIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                            <p className="text-muted-foreground text-sm">
                                Built for growth with scalable infrastructure that supports increasing workloads and
                                expanding AI capabilities as your business evolves.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Technical Architecture Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Technical Architecture
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Built for enterprise-scale AI deployment
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Core Components</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Microservices Architecture</h4>
                                <p className="text-muted-foreground text-sm">Flexible deployment with independent, scalable services that can be updated and maintained separately.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">API-First Design</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive API ecosystem enabling seamless third-party integrations and custom development.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Multi-Cloud Support</h4>
                                <p className="text-muted-foreground text-sm">Native support for AWS, Azure, and Google Cloud with hybrid deployment capabilities.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Real-time Streaming</h4>
                                <p className="text-muted-foreground text-sm">Advanced data streaming capabilities for real-time processing and instant insights delivery.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Use Cases Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Use Cases
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transforming industries across the enterprise landscape
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Customer Service Automation", desc: "Intelligent customer service systems that provide instant responses, personalized recommendations, and seamless support experiences." },
                            { title: "Predictive Maintenance", desc: "AI-powered asset optimization that predicts maintenance needs, reduces downtime, and extends equipment lifespan." },
                            { title: "Supply Chain Intelligence", desc: "Advanced analytics for supply chain optimization, demand forecasting, and real-time inventory management." },
                            { title: "Document Processing", desc: "Automated document analysis, classification, and extraction that transforms unstructured data into actionable insights." },
                            { title: "Business Intelligence", desc: "Real-time business intelligence and reporting systems that provide instant access to critical performance metrics." },
                            { title: "Workflow Automation", desc: "Intelligent workflow automation that streamlines processes, reduces manual effort, and improves operational efficiency." }
                        ].map((useCase, idx) => (
                            <div key={idx} className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                                <p className="text-muted-foreground text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why AI Envelop is Essential
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Revolutionary impact on enterprise operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Enhanced User Experience</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    AI Envelop makes software applications more accessible and user-friendly, especially for those without specialized knowledge.
                                    This natural interaction paradigm removes barriers to technology adoption and enables users of all skill levels to leverage sophisticated AI capabilities.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Increased Efficiency</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Automating routine tasks and data processing reduces time and resource expenditure by up to 50%.
                                    This allows your team to focus on high-value activities that require human creativity and judgment.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Competitive Edge</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    In a market where user experience is key, AI Envelop provides a significant advantage by modernizing and enhancing software capabilities.
                                    Organizations using AI Envelop report improved customer satisfaction and higher retention rates.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Future-Readiness</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    As AI continues to shape the technological landscape, having an AI wrapper ensures that software remains relevant and cutting-edge.
                                    AI Envelop positions your organization to quickly adopt new AI innovations as they emerge.
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
                        <Link href="/products">
                            <Button size="lg" variant="outline" className="px-8">View All Products</Button>
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default AIEnvelopPage;
