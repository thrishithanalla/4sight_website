import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    NewspaperIcon,
    SearchIcon,
    BrainCircuitIcon,
    Share2Icon,
    LineChartIcon,
    BellIcon,
    FilterIcon,
    ShieldCheckIcon,
    LayersIcon,
    ArchiveIcon
} from "lucide-react";

const NewsAI360Page = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 hover:border-blue-500/50 hover:bg-white/8 transition-all max-w-5xl mx-auto">
                        <div className="flex flex-col items-center justify-center text-center relative z-10 w-full">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                                NewsAI360
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
                                Intelligent Automation for Modern Media Monitoring.
                            </p>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                Modernize government news monitoring with an AI-powered platform that turns daily media coverage into structured, searchable intelligence.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            From Manual Clipping to AI Insights
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Ensuring the right information reaches the right officials in real time
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full border border-border/50 bg-black/50">
                            {/* Placeholder for NewsAI image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                <NewspaperIcon className="w-16 h-16 opacity-20" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-blue-500">Automated Intelligence</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                NewsAI360 replaces manual newspaper clipping processes with an automated system that collects news from print, e-papers, and digital media. Using advanced AI and language models, the platform analyzes news for relevance, sentiment, and context.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                The system ensures that the right information reaches the right officials in real time. It converts daily media coverage into structured, searchable intelligence, enabling faster awareness, better coordination, and informed decision-making across government departments.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Key Features Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                            Platform Features
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive tools for real-time media monitoring
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <NewspaperIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Automated Ingestion</h3>
                            <p className="text-muted-foreground text-sm">
                                Automated ingestion from print, e-papers, and digital news sources into a centralized system.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <FilterIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Relevance Filtering</h3>
                            <p className="text-muted-foreground text-sm">
                                AI-based relevance filtering ensures personalized news delivery to specific departments and officials.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <LineChartIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced sentiment analysis and emerging trend detection to gauge public opinion accurately.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <LayersIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Story Clustering</h3>
                            <p className="text-muted-foreground text-sm">
                                Intelligently clusters related stories to track issues and narratives over time.
                            </p>
                        </div>
                        {/* Feature 5 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <BrainCircuitIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Bias Insights</h3>
                            <p className="text-muted-foreground text-sm">
                                Provides bias and credibility insights for informed reading and balanced perspective.
                            </p>
                        </div>
                        {/* Feature 6 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <ArchiveIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Digital Archive</h3>
                            <p className="text-muted-foreground text-sm">
                                Creates a secure, searchable digital news archive for historical reference and analysis.
                            </p>
                        </div>
                        {/* Feature 7 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <BellIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
                            <p className="text-muted-foreground text-sm">
                                Delivers instant alerts via web, mobile, email, and WhatsApp for critical updates.
                            </p>
                        </div>
                        {/* Feature 8 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <ShieldCheckIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
                            <p className="text-muted-foreground text-sm">
                                Secure role-based access control and enterprise-grade security for sensitive data.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Impact Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-blue-500 mb-6 text-center md:text-left">Project Impact</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                NewsAI360 transforms governance from reactive to proactive by enabling real-time awareness and data-backed decisions. It significantly reduces manual effort, preserves institutional memory, and improves response speed during critical events.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                By turning raw news into actionable intelligence, the platform enhances transparency, strengthens media strategy, and empowers leaders to anticipate issues, respond confidently, and govern more effectively using AI-driven insights.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default NewsAI360Page;
