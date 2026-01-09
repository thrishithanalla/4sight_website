import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    SirenIcon,
    RadioTowerIcon,
    WorkflowIcon,
    ShieldCheckIcon,
    AlertTriangleIcon,
    MapPinIcon,
    SmartphoneIcon,
    ClockIcon,
    SettingsIcon,
    FileTextIcon
} from "lucide-react";

const EventGovernancePage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 hover:border-blue-500/50 hover:bg-white/8 transition-all max-w-5xl mx-auto">
                        <div className="flex flex-col items-center justify-center text-center relative z-10 w-full">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                                Event Governance Platform
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
                                Fast, Automated, and Accountable Governance.
                            </p>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                The Event Governance Platform (EGP) is an AI-powered, event-driven system designed to monitor, analyze, and respond to critical incidents in real time.
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
                            Real-Time Response Ecosystem
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From detection to resolution in seconds
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full border border-border/50 bg-black/50">
                            {/* Placeholder for EGP image */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                <RadioTowerIcon className="w-16 h-16 opacity-20" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-blue-500">Automated Intake & Response</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                EGP ingests data from multiple sources such as cameras, sensors, IoT devices, and user reports, converts raw inputs into standardized events, and applies intelligence rules to detect risks and abnormal patterns.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Once an event is identified, EGP automatically triggers predefined response workflows, identifies the right authorities based on location and role, and delivers alerts through appropriate communication channels. The platform enables fast, automated, and accountable governance for safety, security, and operational efficiency.
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
                            Key Features
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive tools for real-time event monitoring and response
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <RadioTowerIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Multi-Source Ingestion</h3>
                            <p className="text-muted-foreground text-sm">
                                Collects events from IoT sensors, CCTV, applications, and manual reports into a unified stream.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <AlertTriangleIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Actionable Intelligence</h3>
                            <p className="text-muted-foreground text-sm">
                                Detects patterns and anomalies using rule-based and AI-driven logic to identify risks.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <WorkflowIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Automated Orchestration</h3>
                            <p className="text-muted-foreground text-sm">
                                Converts events into response actions without manual intervention, streamlining operations.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <MapPinIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Dynamic Resolution</h3>
                            <p className="text-muted-foreground text-sm">
                                Identifies the right responder based on location, role, and availability for rapid dispatch.
                            </p>
                        </div>
                        {/* Feature 5 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <SmartphoneIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Multi-Channel Notify</h3>
                            <p className="text-muted-foreground text-sm">
                                Sends alerts via SMS, voice calls, email, mobile apps, and dashboards to ensure delivery.
                            </p>
                        </div>
                        {/* Feature 6 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <ClockIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Ack & Escalation</h3>
                            <p className="text-muted-foreground text-sm">
                                Tracks responses and automatically escalates if no action is taken within set timeframes.
                            </p>
                        </div>
                        {/* Feature 7 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <SettingsIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Runtime Config</h3>
                            <p className="text-muted-foreground text-sm">
                                Add or modify event workflows and rules on the fly without system downtime.
                            </p>
                        </div>
                        {/* Feature 8 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-blue-500/30">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
                                <FileTextIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Audit Dashboard</h3>
                            <p className="text-muted-foreground text-sm">
                                Provides real-time visibility and complete event traceability for accountability.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Why EGP Matters Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-blue-500 mb-6 text-center md:text-left">Why EGP Matters</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                EGP significantly improves response time, coordination, and decision-making during critical situations. By automating detection, intelligence, and communication, it reduces human dependency and operational delays. The platform ensures that alerts reach the nearest and most relevant authorities, improving safety outcomes and resource utilization.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Its adaptive, configuration-driven design allows governments and enterprises to evolve their response strategies as new risks emerge. Overall, EGP enables proactive governance, enhances public safety, and strengthens trust through transparency, accountability, and data-driven actions.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                                    <h4 className="text-4xl font-bold text-foreground mb-2">Zero</h4>
                                    <h5 className="text-xl font-semibold text-blue-500 mb-2">Major Incidents</h5>
                                    <p className="text-muted-foreground">Maintained flawless safety records during massive religious and political gatherings.</p>
                                </div>
                                <div className="bg-background/50 p-6 rounded-xl border border-border/50">
                                    <h4 className="text-4xl font-bold text-foreground mb-2">20+</h4>
                                    <h5 className="text-xl font-semibold text-blue-500 mb-2">Departments Connected</h5>
                                    <p className="text-muted-foreground">Real-time coordination on a single digital platform for instant communication.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>


        </div>
    );
};

export default EventGovernancePage;
