import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    ScanFaceIcon,
    SirenIcon,
    ActivityIcon,
    ZapIcon,
    EyeIcon,
    ServerIcon
} from "lucide-react";

const CCTVAnalyticsPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 hover:border-blue-500/50 hover:bg-white/8 transition-all max-w-5xl mx-auto">
                        <div className="flex flex-col items-center justify-center text-center relative z-10 w-full">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                                CCTV Analytics
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
                                Transforming passive surveillance into active intelligence.
                            </p>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                Our video analytics platform turns standard CCTV networks into proactive security tools that identify threats before they escalate.
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
                            Proactive Security Intelligence
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Detect anomalies and assist law enforcement in real-time
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full border border-border/50 bg-black/50">
                            {/* Placeholder for CCTV image - user to provide later */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                <ActivityIcon className="w-16 h-16 opacity-20" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-blue-500">Intelligent Monitoring</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our video analytics platform processes thousands of feeds in real-time to detect anomalies and assist law enforcement. It moves beyond simple recording to active threat identification.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                With advanced pattern recognition, the system tracks suspects, monitors traffic violations, and alerts authorities to suspicious activities instantly. The analytics engine runs on the edge to minimize latency, ensuring immediate alerts for critical events while significantly reducing human error and operator fatigue.
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
                            Core Capabilities
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Advanced technology for modern public safety
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <ScanFaceIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced algorithms to identify suspicious behaviors, track suspects, and recognize distinct patterns in real-time video feeds.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <ZapIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Edge Computing</h3>
                            <p className="text-muted-foreground text-sm">
                                Analytics engine runs on the edge to minimize latency, ensuring immediate alerts for critical events without bandwidth bottlenecks.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <SirenIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Real-time Alerts</h3>
                            <p className="text-muted-foreground text-sm">
                                Instant notifications to authorities for traffic violations, unauthorized access, and other security breaches.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <EyeIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Reduced Fatigue</h3>
                            <p className="text-muted-foreground text-sm">
                                Automates routine monitoring tasks, significantly reducing human error and operator fatigue in command centers.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Application Areas */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-blue-500 mb-8 text-center md:text-left">Applications in Governance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                                        1
                                    </div>
                                    <h4 className="font-semibold text-lg text-foreground">Traffic Management</h4>
                                    <p className="text-muted-foreground text-sm">Automatic detection of traffic violations, congestion monitoring, and adaptive signal control assistance.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                                        2
                                    </div>
                                    <h4 className="font-semibold text-lg text-foreground">Public Safety</h4>
                                    <p className="text-muted-foreground text-sm">Crowd management, behavioral anomaly detection, and tracking of persons of interest in public spaces.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                                        3
                                    </div>
                                    <h4 className="font-semibold text-lg text-foreground">Infrastructure Protection</h4>
                                    <p className="text-muted-foreground text-sm">Perimeter security for critical government buildings and assets, preventing unauthorized access.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>


        </div>
    );
};

export default CCTVAnalyticsPage;
