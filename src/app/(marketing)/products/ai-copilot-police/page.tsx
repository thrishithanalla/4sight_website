import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    SearchIcon,
    ActivityIcon,
    TargetIcon,
    ClipboardListIcon,
    MapPinIcon,
    SirenIcon,
    UsersIcon,
    CarIcon
} from "lucide-react";

const AICopilotPolicePage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            AI Co-pilot (Police)
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            Law Enforcement AI Assistant
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Intelligent AI assistant designed to support police operations with data analysis, pattern recognition, and evidence-based decision-making.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            AI-Powered Law Enforcement Support
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Enhancing public safety through intelligent technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/ai-copilot-police.jpg"
                                alt="AI Co-pilot Police - Law Enforcement AI Assistant"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is AI Co-pilot (Police)?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                AI Co-pilot (Police) is a specialized AI assistant designed specifically for law enforcement agencies.
                                This intelligent system combines advanced data analytics, pattern recognition, and predictive modeling
                                to support police officers in their daily operations, investigations, and decision-making processes.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Built with a focus on public safety and ethical AI principles, AI Co-pilot (Police) serves as a
                                reliable partner that enhances officer capabilities while maintaining human judgment and accountability
                                in all critical decisions.
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
                            Advanced capabilities for modern law enforcement
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <SearchIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Crime Pattern Analysis</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced pattern recognition algorithms that identify crime trends, hotspots, and predictive
                                patterns to optimize resource allocation and preventive measures.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ActivityIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Real-time Intelligence</h3>
                            <p className="text-muted-foreground text-sm">
                                Real-time data processing and analysis from multiple sources including surveillance systems,
                                public records, and community reports for immediate situational awareness.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TargetIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
                            <p className="text-muted-foreground text-sm">
                                Intelligent risk assessment tools that evaluate threat levels, prioritize responses, and
                                provide decision support for high-stakes situations.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ClipboardListIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Investigation Support</h3>
                            <p className="text-muted-foreground text-sm">
                                Automated evidence correlation, witness statement analysis, and case file organization
                                to accelerate investigations and improve case resolution rates.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Applications Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Applications in Law Enforcement
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Supporting police operations across multiple domains
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">Comprehensive Police Support System</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <MapPinIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Patrol Optimization</h4>
                                <p className="text-muted-foreground text-sm">Dynamic patrol route optimization based on real-time crime data, historical patterns, and community needs for maximum preventive impact.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <SirenIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Emergency Response</h4>
                                <p className="text-muted-foreground text-sm">Intelligent prioritization of emergency calls and optimal resource deployment based on incident severity, location, and response times.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <UsersIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Community Policing</h4>
                                <p className="text-muted-foreground text-sm">Data-driven insights for community engagement strategies, identifying at-risk areas, and developing targeted intervention programs.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <CarIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Traffic Management</h4>
                                <p className="text-muted-foreground text-sm">Real-time traffic analysis, accident prediction, and automated citation processing to improve road safety and traffic flow.</p>
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
                            Law Enforcement Use Cases
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transforming police operations and public safety
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Criminal Investigation", desc: "Advanced case analysis with evidence correlation, suspect profiling, and investigative lead generation using machine learning algorithms." },
                            { title: "Crime Prevention", desc: "Predictive policing models that identify potential crime hotspots and enable proactive deployment of preventive resources." },
                            { title: "Resource Management", desc: "Optimal allocation of police personnel, vehicles, and equipment based on real-time demand patterns and historical data." },
                            { title: "Public Safety Monitoring", desc: "Continuous monitoring of public spaces with automated anomaly detection and immediate alert generation for potential threats." },
                            { title: "Intelligence Analysis", desc: "Comprehensive intelligence gathering and analysis from multiple sources with automated report generation and threat assessment." },
                            { title: "Administrative Support", desc: "Automated report writing, case file management, and administrative task optimization to allow officers to focus on field work." }
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
                            Why AI Co-pilot (Police) Matters
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Advancing public safety through intelligent technology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Enhanced Officer Safety</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    AI Co-pilot (Police) provides officers with real-time situational awareness and risk assessment,
                                    enabling them to make informed decisions that prioritize personal safety and public protection.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Improved Response Times</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Intelligent call prioritization and resource optimization significantly reduce response times
                                    to emergencies, potentially saving lives and preventing crime escalation.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Data-Driven Policing</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Evidence-based decision-making replaces intuition with data-driven insights, leading to more
                                    effective policing strategies and better allocation of limited resources.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Community Trust</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Transparent and accountable AI systems help build community trust by ensuring fair and
                                    unbiased application of law enforcement resources and decision-making.
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

export default AICopilotPolicePage;
