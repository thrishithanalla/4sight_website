import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    TargetIcon,
    ZapIcon,
    SearchIcon,
    BarChartIcon,
    GlobeIcon,
    FileTextIcon,
    SmileIcon,
    CheckCircleIcon
} from "lucide-react";

const NewsAIPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            News AI
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            Intelligent News Platform
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Intelligent news aggregation and analysis platform that curates, summarizes, and delivers personalized news insights in real-time.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Intelligent News Intelligence
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transform news consumption with AI-powered insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                                alt="News AI - Intelligent News Platform"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is News AI?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                News AI is an advanced intelligent news platform that revolutionizes how individuals and organizations consume,
                                analyze, and act on news content. This sophisticated AI system combines natural language processing, machine learning,
                                and real-time data processing to deliver personalized, actionable news insights.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Whether you're a busy executive, researcher, investor, or media professional, News AI serves as your intelligent
                                companion in navigating the complex world of information overload.
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
                            Advanced capabilities for intelligent news consumption
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TargetIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Personalized Curation</h3>
                            <p className="text-muted-foreground text-sm">
                                AI-driven news curation that learns your preferences, interests, and reading patterns to deliver
                                highly relevant content tailored to your specific needs.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ZapIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Real-time Analysis</h3>
                            <p className="text-muted-foreground text-sm">
                                Instant analysis and summarization of breaking news with sentiment analysis, trend identification,
                                and impact assessment in real-time.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <SearchIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Deep Content Analysis</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced NLP algorithms that extract key insights, identify bias, cross-reference sources,
                                and provide context-rich understanding of news events.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <BarChartIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Trend Intelligence</h3>
                            <p className="text-muted-foreground text-sm">
                                Predictive analytics and trend forecasting that identify emerging patterns, predict outcomes,
                                and provide strategic insights for decision-making.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* News Intelligence Engine Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            News Intelligence Engine
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Powered by advanced AI and real-time processing
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">Core Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <GlobeIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Multi-Source Aggregation</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive news aggregation from thousands of global sources with automatic duplicate detection and source verification.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <FileTextIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Intelligent Summarization</h4>
                                <p className="text-muted-foreground text-sm">AI-powered summarization that extracts key facts, quotes, and context while maintaining journalistic integrity and accuracy.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <SmileIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Sentiment Analysis</h4>
                                <p className="text-muted-foreground text-sm">Advanced sentiment analysis with contextual understanding, emotional tone detection, and public opinion tracking.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <CheckCircleIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Fact-Checking Integration</h4>
                                <p className="text-muted-foreground text-sm">Automated fact-checking against reliable databases with credibility scoring and misinformation detection.</p>
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
                            Professional Applications
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transforming news consumption across industries
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Executive Briefing", desc: "Daily executive summaries with strategic insights, competitive intelligence, and market-moving news tailored for C-suite decision-making." },
                            { title: "Investment Research", desc: "Real-time market news analysis, earnings impact assessment, and investment opportunity identification with predictive analytics." },
                            { title: "Media Monitoring", desc: "Brand reputation tracking, crisis management alerts, and competitive media analysis with sentiment and trend monitoring." },
                            { title: "Academic Research", desc: "Research-focused news aggregation with academic relevance scoring, citation tracking, and interdisciplinary connection mapping." },
                            { title: "Policy Analysis", desc: "Government and regulatory news monitoring with policy impact assessment, stakeholder analysis, and legislative tracking." },
                            { title: "Industry Intelligence", desc: "Sector-specific news analysis with competitive positioning, market trend identification, and strategic opportunity alerts." }
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
                            Why News AI Matters
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Revolutionizing information consumption and decision-making
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Information Overload Solution</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    In an era of information overload, News AI cuts through the noise to deliver only the most relevant,
                                    high-impact news that matters to you. This focused approach saves time and ensures you never miss critical developments.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Enhanced Decision Quality</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    By providing context, analysis, and predictive insights alongside news, News AI enables more informed
                                    and strategic decision-making across all levels of an organization.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Real-time Competitive Advantage</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Real-time processing and instant alerts provide a significant competitive advantage, enabling organizations
                                    to respond to market changes, regulatory developments, and industry shifts before competitors.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Scalable Intelligence</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    News AI scales effortlessly from individual users to enterprise deployments, providing consistent,
                                    high-quality intelligence regardless of organizational size or complexity.
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
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-6">
                            Stay Ahead of the News
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Discover how News AI can transform your information consumption. Contact our experts for a personalized demonstration.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Request Demo</Button>
                            </Link>
                            <Link href="/products">
                                <Button size="lg" variant="outline" className="px-8">View All Products</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default NewsAIPage;
