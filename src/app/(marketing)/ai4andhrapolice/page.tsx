"use client";

import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import ProjectUseCasesCarousel from "@/components/marketing/project-use-cases-carousel";
import {
    Shield,
    Siren,
    FileText,
    Users,
    TrendingUp,
    Search,
    Video,
    Activity,
    Globe,
    Radio,
    AlertTriangle,
    CheckCircle2,
    Eye,
    BarChart3,
    BrainCircuit,
    Lock
} from "lucide-react";

const AI4AndhraPolicePage = () => {

    const ai4apUseCases = [
        { title: "Real-time Incident Analysis", description: "Immediate processing of reported incidents to dispatch resources effectively.", icon: Siren },
        { title: "Predictive Policing", description: "AI models to forecast potential crime hotspots and allocate patrols proactively.", icon: TrendingUp },
        { title: "Automated FIR Analysis", description: "Natural language processing to extract key insights and patterns from FIR texts.", icon: FileText },
        { title: "Resource Optimization", description: "Data-driven allocation of personnel and vehicles for maximum coverage.", icon: Users },
        { title: "Traffic Management", description: "Intelligent monitoring of traffic flow to reduce congestion and accidents.", icon: Activity },
        { title: "Facial Recognition", description: "Advanced identification systems for missing persons and suspect tracking.", icon: Eye },
        { title: "Cybercrime Detection", description: "Pattern recognition algorithms to identify digital fraud and threats.", icon: Lock },
        { title: "Citizen Safety Bots", description: "Automated chat interfaces for citizens to report non-emergency issues.", icon: BrainCircuit },
    ];

    const cctvUseCases = [
        { title: "Crowd Monitoring", description: "Real-time estimation of crowd density to prevent stampedes and manage large gatherings.", icon: Users },
        { title: "Vehicle Tracking", description: "Automatic license plate recognition (ANPR) and vehicle route tracing.", icon: Video },
        { title: "Suspicious Activity", description: "Automated alerts for unattended objects, fighting, or erratic behavior.", icon: AlertTriangle },
    ];

    const eventUseCases = [
        { title: "Operational Dashboards", description: "Centralized view of all deployment units, incidents, and logistics during major events.", icon: BarChart3 },
        { title: "Emergency Response", description: "Coordinated rapid response mechanisms integrated with on-ground units.", icon: Siren },
        { title: "Sentiment Analysis", description: "Monitoring public sentiment and feedback during the event for quick adjustments.", icon: Activity },
    ];

    const newsAIUseCases = [
        { title: "Fake News Detection", description: "Identifying and flagging misinformation spreading across social media channels.", icon: Shield },
        { title: "Trend Monitoring", description: "Tracking emerging narratives and public concerns in real-time.", icon: TrendingUp },
        { title: "Sentiment Analysis", description: "Understanding public opinion on government policies and initiatives.", icon: Activity },
    ];

    return (
        <Wrapper className="py-12 md:py-20 relative overflow-hidden">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-24 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                        Government Initiatives
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Empowering governance and public safety with state-of-the-art Artificial Intelligence solutions.
                    </p>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">

                    {/* Project 1: AI4AndhraPolice */}
                    <div className="space-y-8">

                        {/* 1. Project Overview Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 text-center max-w-7xl mx-auto w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="flex flex-col items-center space-y-6">
                                <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-500 rounded-full text-sm font-medium">Flagship Project</div>
                                <h2 className="text-4xl md:text-5xl font-bold text-blue-500">AI4AndhraPolice</h2>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl">
                                    A comprehensive AI initiative designed to modernize the Andhra Pradesh Police force. By integrating cutting-edge technologies into daily operations, we aim to enhance decision-making, improve response times, and build a proactive policing framework.
                                </p>
                            </div>
                        </div>

                        {/* 2. UseCases Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl font-bold text-white mb-4">Use Cases & Features</h3>
                                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                    Empowering officers with actionable intelligence through advanced AI modules.
                                </p>
                            </div>

                            {/* Use Case Carousel - Full Width in Card */}
                            <div className="-mx-4 md:mx-0">
                                <ProjectUseCasesCarousel useCases={ai4apUseCases} color="blue" />
                            </div>
                        </div>

                        {/* 3. Impact Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-black p-8 md:p-12 hover:border-blue-500/50 transition-all">
                            <h3 className="text-2xl font-bold text-white mb-10 text-center">Project Impact</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center space-y-2">
                                    <div className="text-4xl md:text-5xl font-bold text-blue-500">40%</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Reduced Response Time</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-4xl md:text-5xl font-bold text-blue-500">90%</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Prediction Accuracy</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-4xl md:text-5xl font-bold text-blue-500">10k+</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">Man-hours Saved</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-4xl md:text-5xl font-bold text-blue-500">100%</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">District Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: CCTV Analytics */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">CCTV Analytics</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Transforming passive surveillance into active intelligence. Our video analytics platform processes thousands of feeds in real-time to detect anomalies and assist law enforcement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cctvUseCases.map((uc, i) => (
                                <UseCaseCard key={i} {...uc} />
                            ))}
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="space-y-2">
                                <h4 className="text-xl font-semibold text-white">Impact at Scale</h4>
                                <p className="text-gray-400">Deployed across major cities monitoring critical infrastructure 24/7.</p>
                            </div>
                            <div className="flex gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-500">5000+</div>
                                    <div className="text-sm text-gray-500">Cameras Connected</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-blue-500">99.9%</div>
                                    <div className="text-sm text-gray-500">Uptime</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Event Governance Platform */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Event Governance Platform</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                A unified command and control system for managing large-scale public events, ensuring safety, smooth operations, and rapid emergency response.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {eventUseCases.map((uc, i) => (
                                <UseCaseCard key={i} {...uc} />
                            ))}
                        </div>

                        {/* Impact Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
                                <h4 className="font-bold text-lg text-blue-400 mb-2">Zero Major Incidents</h4>
                                <p className="text-gray-400 text-sm">Maintained flawless safety records during massive religious and political gatherings.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
                                <h4 className="font-bold text-lg text-blue-400 mb-2">Real-time Coordination</h4>
                                <p className="text-gray-400 text-sm">Connected 20+ departments on a single digital platform for instant communication.</p>
                            </div>
                        </div>
                    </div>

                    {/* Project 4: NewsAI */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">News AI</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Advanced media monitoring tool that aggregates and analyzes news from thousands of sources to provide actionable intelligence on public perception and emerging threats.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {newsAIUseCases.map((uc, i) => (
                                <UseCaseCard key={i} {...uc} />
                            ))}
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl font-bold text-white mb-6 text-center">Operational Impact</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: "Sources Tracked", val: "10K+" },
                                    { label: "Languages", val: "12+" },
                                    { label: "Alert Latency", val: "< 1 min" },
                                    { label: "Accuracy", val: "95%" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center p-4 bg-black/20 rounded-lg">
                                        <div className="text-2xl font-bold text-blue-500">{stat.val}</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </Wrapper>
    )
};

const ImpactItem = ({ text, value }: { text: string, value: string }) => (
    <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-blue-500" />
        </div>
        <div>
            <div className="font-bold text-white">{value}</div>
            <div className="text-xs text-gray-400">{text}</div>
        </div>
    </div>
);

const UseCaseCard = ({ title, description, icon: Icon }: any) => (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
            <Icon className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

export default AI4AndhraPolicePage;
