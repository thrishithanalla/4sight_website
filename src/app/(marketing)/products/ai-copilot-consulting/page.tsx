import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    BarChartIcon,
    MessageSquareIcon,
    TargetIcon,
    ZapIcon,
    SearchIcon,
    TrendingUpIcon,
    LightbulbIcon,
    ClipboardListIcon
} from "lucide-react";

const AICopilotConsultingPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            AI Co-pilot (Consulting)
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            Intelligent Consulting Assistant
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Your AI-powered strategic partner that enhances decision-making, provides data-driven insights, and accelerates consulting outcomes.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            AI-Powered Consulting Intelligence
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transform consulting with intelligent automation and strategic insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/ai-copilot-consulting.jpg"
                                alt="AI Co-pilot Consulting - Intelligent Consulting Assistant"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is AI Co-pilot (Consulting)?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                AI Co-pilot (Consulting) is an intelligent consulting assistant designed to augment human consultants
                                with AI-powered capabilities. This sophisticated platform combines advanced analytics, machine learning,
                                and natural language processing to provide consultants with unprecedented insights, automation, and strategic guidance.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Whether you're conducting market research, analyzing financial data, or developing strategic recommendations,
                                AI Co-pilot (Consulting) serves as your intelligent partner throughout the entire consulting lifecycle.
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
                            Advanced capabilities that redefine consulting excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <BarChartIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Data Analysis & Insights</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced data processing and analysis capabilities that uncover hidden patterns, trends, and insights
                                from complex datasets to inform strategic recommendations.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <MessageSquareIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                            <p className="text-muted-foreground text-sm">
                                Sophisticated NLP capabilities for processing unstructured data, generating reports, and facilitating
                                natural communication between consultants and clients.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TargetIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Strategic Recommendations</h3>
                            <p className="text-muted-foreground text-sm">
                                AI-driven strategic analysis that provides data-backed recommendations, risk assessments, and
                                implementation roadmaps tailored to specific business contexts.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ZapIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Automation & Efficiency</h3>
                            <p className="text-muted-foreground text-sm">
                                Intelligent automation of routine consulting tasks, allowing consultants to focus on high-value
                                strategic activities and client relationships.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Consulting Workflow Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Consulting Workflow Integration
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Seamlessly integrated into every phase of the consulting process
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">End-to-End Consulting Support</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <SearchIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Discovery & Analysis</h4>
                                <p className="text-muted-foreground text-sm">Automated data collection, stakeholder interviews, and initial analysis to establish project scope and objectives.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <TrendingUpIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Market Research</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive market analysis, competitive intelligence, and industry benchmarking with real-time data insights.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <LightbulbIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Strategy Development</h4>
                                <p className="text-muted-foreground text-sm">AI-assisted strategy formulation, scenario planning, and recommendation development with risk assessment.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <ClipboardListIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Implementation Planning</h4>
                                <p className="text-muted-foreground text-sm">Detailed implementation roadmaps, resource planning, and change management strategies with timeline optimization.</p>
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
                            Consulting Use Cases
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transforming consulting across industries and domains
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Management Consulting", desc: "Strategic planning, organizational design, and operational efficiency improvements with data-driven insights and automated analysis." },
                            { title: "Financial Advisory", desc: "Financial modeling, risk assessment, and investment analysis with real-time market data and predictive analytics." },
                            { title: "Technology Consulting", desc: "Digital transformation strategies, technology assessments, and implementation planning with technical expertise augmentation." },
                            { title: "HR Consulting", desc: "Talent management, organizational development, and change management with predictive analytics and employee insights." },
                            { title: "Marketing Consulting", desc: "Market research, customer segmentation, and campaign optimization with consumer behavior analysis and predictive modeling." },
                            { title: "Operations Consulting", desc: "Process optimization, supply chain analysis, and performance improvement with operational data analytics and automation." }
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
                            Why AI Co-pilot (Consulting) Matters
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Elevating consulting to new levels of excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Enhanced Decision Quality</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    AI Co-pilot (Consulting) processes vast amounts of data and considers multiple variables simultaneously,
                                    leading to more comprehensive and accurate recommendations. This data-driven approach reduces bias and increases confidence in strategic decisions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Accelerated Delivery</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Automation of routine analysis and reporting tasks allows consultants to deliver projects faster while maintaining high quality.
                                    This efficiency enables consultants to take on more complex engagements and provide more value to clients.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Competitive Advantage</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Organizations using AI Co-pilot (Consulting) can offer more sophisticated services at competitive rates,
                                    differentiating themselves in a crowded consulting market. The ability to process and analyze data at scale provides unique insights that competitors cannot match.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Scalable Expertise</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    AI Co-pilot (Consulting) makes expert-level consulting capabilities accessible to a broader range of consultants,
                                    enabling firms to scale their services without proportional increases in staffing costs.
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

export default AICopilotConsultingPage;
