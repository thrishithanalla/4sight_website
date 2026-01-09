
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Brain, GitBranch, Globe, Zap, Microscope, FlaskConical, Rocket, Cpu, Users, Sparkles, Monitor } from "lucide-react";

const UnderWorks = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            UnderWorks
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            AI Development Platform
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Advanced AI development platform featuring cutting-edge solutions and emerging technologies currently in development.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Next-Generation AI Development
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Innovative AI solutions shaping the future
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/underworks.jpg"
                                alt="UnderWorks - AI Development Platform"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is UnderWorks?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                UnderWorks represents our cutting-edge AI development platform where innovation meets implementation.
                                This advanced ecosystem combines bleeding-edge AI technologies, experimental approaches, and forward-thinking
                                solutions that push the boundaries of what's possible with artificial intelligence.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Currently in active development, UnderWorks serves as our research and development hub for next-generation
                                AI capabilities that will define the future of enterprise intelligence and human-AI collaboration.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Development Focus Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Development Focus Areas
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Exploring the frontiers of AI innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Advanced AGI Research</h3>
                            <p className="text-muted-foreground text-sm">
                                Exploring artificial general intelligence frameworks and architectures that can adapt to multiple domains
                                and learn from diverse data sources with minimal supervision.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Neural Architecture Search</h3>
                            <p className="text-muted-foreground text-sm">
                                Automated discovery and optimization of neural network architectures using evolutionary algorithms
                                and reinforcement learning for superior performance and efficiency.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Multi-Modal AI Systems</h3>
                            <p className="text-muted-foreground text-sm">
                                Integration of multiple data modalities including text, images, audio, and video for comprehensive
                                understanding and more nuanced AI decision-making.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Edge AI Optimization</h3>
                            <p className="text-muted-foreground text-sm">
                                Development of lightweight AI models optimized for edge computing devices, enabling intelligent
                                processing at the network periphery with minimal latency.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Innovation Pipeline Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Innovation Pipeline
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From concept to commercialization
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Research & Development Stages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Microscope className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Research Phase</h4>
                                <p className="text-muted-foreground text-sm">Fundamental research into novel AI algorithms, architectures, and theoretical frameworks that challenge current paradigms.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <FlaskConical className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Prototyping</h4>
                                <p className="text-muted-foreground text-sm">Rapid prototyping and proof-of-concept development to validate theoretical approaches and demonstrate feasibility.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <FlaskConical className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Testing & Validation</h4>
                                <p className="text-muted-foreground text-sm">Rigorous testing, benchmarking, and validation against industry standards and real-world performance metrics.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Rocket className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Commercialization</h4>
                                <p className="text-muted-foreground text-sm">Product development, scaling, and market introduction of validated AI innovations ready for enterprise deployment.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Emerging Technologies Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Emerging Technologies
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Exploring the next frontier of AI capabilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-primary" /> Quantum-Enhanced AI
                            </h3>
                            <p className="text-muted-foreground text-sm">Integration of quantum computing principles with traditional AI algorithms for exponential performance improvements in complex optimization problems.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-primary" /> Neuromorphic Computing
                            </h3>
                            <p className="text-muted-foreground text-sm">Brain-inspired computing architectures that mimic neural structures for more efficient, adaptive, and energy-conscious AI processing.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" /> Autonomous AI Systems
                            </h3>
                            <p className="text-muted-foreground text-sm">Self-evolving AI systems capable of independent learning, adaptation, and optimization without human intervention or supervision.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" /> AI-Human Symbiosis
                            </h3>
                            <p className="text-muted-foreground text-sm">Seamless integration of AI capabilities with human cognition, creating augmented intelligence systems that enhance human potential.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" /> Consciousness Modeling
                            </h3>
                            <p className="text-muted-foreground text-sm">Advanced research into artificial consciousness, self-awareness, and emotional intelligence in AI systems.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Monitor className="w-5 h-5 text-primary" /> Universal AI Interfaces
                            </h3>
                            <p className="text-muted-foreground text-sm">Development of universal communication protocols enabling seamless interaction between different AI systems and human operators.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Vision Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            The Future of AI Development
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Pushing the boundaries of artificial intelligence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Innovation First Approach</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    UnderWorks embodies our commitment to pushing the boundaries of AI innovation. We believe that true breakthroughs
                                    come from exploring uncharted territories and challenging established paradigms. Our development philosophy
                                    prioritizes fundamental research alongside practical applications.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Collaborative Ecosystem</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We actively collaborate with leading research institutions, industry partners, and the global AI community
                                    to accelerate innovation and ensure that our developments benefit society as a whole.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Responsible AI Development</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ethical considerations and responsible AI development are core to everything we do at UnderWorks.
                                    We prioritize transparency, fairness, and safety in all our research and development activities.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Open Innovation</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Through open-source contributions, research publications, and collaborative partnerships, we share our
                                    findings and methodologies with the broader AI community to accelerate collective progress.
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

export default UnderWorks;
