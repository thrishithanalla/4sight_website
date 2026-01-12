import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import {
    BrainCircuitIcon,
    VideoIcon,
    SirenIcon,
    NetworkIcon,
    ShieldCheckIcon,
    WorkflowIcon,
    EyeIcon,
    ActivityIcon
} from "lucide-react";

const CCTVAnalyticsPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 hover:border-blue-500/50 hover:bg-white/8 transition-all max-w-5xl mx-auto">
                        <div className="flex flex-col items-center justify-center text-center relative z-10 w-full">
                            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                                CCTV Intelligence & Video LLM Innovation
                            </h1>
                            <p className="text-lg md:text-xl text-foreground/90 font-medium mb-6">
                                Advancing governance AI with near-term production systems and future Video LLM research.
                            </p>
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                                4SightAI is advancing two complementary tracks in the CCTV and governance AI ecosystem—one focused on near-term, production-ready systems, and the other on next-generation Video LLM research for future government and enterprise use cases.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Track 1: Video LLM Research (R&D) */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-6">
                                <BrainCircuitIcon className="w-4 h-4" />
                                R&D Track
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Video LLM Research & Innovation
                            </h2>
                            <div className="prose prose-invert max-w-none text-muted-foreground text-lg">
                                <p className="mb-6">
                                    4SightAI is actively investing in Video Large Language Model (Video LLM) research to explore how multi-modal AI can reason over video streams, events, and contextual data.
                                </p>
                                <p className="mb-6">
                                    This work aims to go beyond traditional AI/ML and rule-based video analytics by enabling semantic understanding, cross-event reasoning, and policy-aware intelligence.
                                </p>
                                <div className="bg-card border border-border/50 rounded-xl p-6">
                                    <h4 className="font-semibold text-foreground mb-4">Exploring Use Cases For:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {[
                                            "Law enforcement and public safety",
                                            "Traffic and transportation systems",
                                            "Mining and industrial monitoring",
                                            "Warehousing and logistics",
                                            "Healthcare and critical infrastructure"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="mt-6 text-sm italic opacity-80">
                                    This track represents forward-looking research and is not positioned as a replacement for existing video analytics systems today.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:flex w-full md:w-1/3 justify-center items-center">
                            <div className="relative w-full aspect-square max-w-sm rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 flex items-center justify-center animate-pulse">
                                <VideoIcon className="w-32 h-32 text-blue-500/50" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Track 2: Production Track */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-6">
                            <ActivityIcon className="w-4 h-4" />
                            Production Track
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                            CCTV Intelligence & Event Governance
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl">
                            A near-complete, production-grade implementation designed to work with today’s CCTV and video analytics ecosystems. Rather than performing video analysis, this platform acts as the intelligence and orchestration layer above CCTV systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition-all">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                                <SirenIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">AI Agents for Alert & Event Management</h3>
                            <p className="text-muted-foreground">
                                Ingesting, normalizing, correlating, and tracking alerts and events generated by existing video analytics platforms.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition-all">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                                <NetworkIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Cross-Camera and Location Intelligence</h3>
                            <p className="text-muted-foreground">
                                Identifying patterns, hotspots, repeat violations, and trends across cameras, locations, and time.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition-all">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                                <WorkflowIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Operational Coordination & Action Enablement</h3>
                            <p className="text-muted-foreground">
                                Supporting law enforcement and traffic personnel by prioritizing events, recommending actions, tracking responses, and ensuring closure.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:border-blue-500/50 transition-all">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-blue-500">
                                <ShieldCheckIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Real-Time Governance Insights</h3>
                            <p className="text-muted-foreground">
                                Providing command centers with real-time situational awareness and outcome-driven intelligence.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                        <EyeIcon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Immediate Operational Value</h3>
                        <p className="text-muted-foreground">
                            This implementation enables agencies to move immediately from alert-heavy surveillance systems to AI-assisted, outcome-driven operations, without replacing existing camera or analytics investments.
                        </p>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default CCTVAnalyticsPage;
