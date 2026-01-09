
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Target, BarChart, Clock, Calculator, Search, ClipboardList, Layers, Calendar, FileText, Settings, ShieldAlert, Award, AlertTriangle, PieChart, Users, Scale, Map as MapIcon } from "lucide-react";

const ProjectScoping = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            Project Scoping & Blueprint
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            AI Project Planning Excellence
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Comprehensive scoping and blueprinting services for successful AI implementations, ensuring clear objectives, realistic timelines, and measurable outcomes.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Strategic AI Project Planning
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Foundation for successful AI implementation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/project-scoping.png"
                                alt="Project Scoping & Blueprint - AI Project Planning"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is Project Scoping & Blueprint?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Project Scoping & Blueprint is our comprehensive planning service that transforms AI aspirations into
                                actionable, well-defined projects. We conduct thorough analysis of your requirements, constraints, and
                                objectives to create detailed technical and business blueprints that serve as the foundation for successful
                                AI implementations.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our systematic approach ensures that every aspect of your AI project is carefully considered, from
                                technical architecture and data requirements to business processes and success metrics, minimizing
                                risks and maximizing the likelihood of successful outcomes.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Service Components Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Service Components
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive planning framework for AI projects
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Requirements Analysis</h3>
                            <p className="text-muted-foreground text-sm">
                                Detailed analysis of business requirements, technical constraints, and success criteria
                                to establish clear project objectives and scope boundaries.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <BarChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Technical Architecture Design</h3>
                            <p className="text-muted-foreground text-sm">
                                Comprehensive technical blueprint including data architecture, AI model specifications,
                                integration points, and infrastructure requirements.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Project Timeline & Milestones</h3>
                            <p className="text-muted-foreground text-sm">
                                Realistic project timelines with clearly defined milestones, dependencies, and critical
                                path analysis for effective project management.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Calculator className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Resource & Budget Planning</h3>
                            <p className="text-muted-foreground text-sm">
                                Detailed resource allocation plans and budget estimates including personnel, technology,
                                and infrastructure costs for the entire project lifecycle.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Planning Process Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Planning Process
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Systematic approach to project success
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Comprehensive Project Planning Framework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Search className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Discovery & Analysis</h4>
                                <p className="text-muted-foreground text-sm">Deep understanding of your business context, current capabilities, and AI objectives through stakeholder interviews and data assessment.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <ClipboardList className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Requirements Definition</h4>
                                <p className="text-muted-foreground text-sm">Clear articulation of functional and non-functional requirements, success metrics, and acceptance criteria for the AI solution.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Layers className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Solution Architecture</h4>
                                <p className="text-muted-foreground text-sm">Design of technical architecture, data pipelines, AI models, and integration patterns that meet your specific requirements.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Calendar className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Implementation Planning</h4>
                                <p className="text-muted-foreground text-sm">Detailed project plan with timelines, resource allocation, risk mitigation strategies, and quality assurance processes.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Deliverables Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Key Deliverables
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive documentation for project success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" /> Project Charter
                            </h3>
                            <p className="text-muted-foreground text-sm">Formal project documentation defining scope, objectives, stakeholders, and success criteria with executive sponsorship.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-primary" /> Technical Blueprint
                            </h3>
                            <p className="text-muted-foreground text-sm">Detailed technical specifications including architecture diagrams, data models, API specifications, and integration requirements.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-primary" /> Risk Assessment
                            </h3>
                            <p className="text-muted-foreground text-sm">Comprehensive risk analysis with mitigation strategies, contingency plans, and risk monitoring frameworks.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <MapIcon className="w-5 h-5 text-primary" /> Implementation Roadmap
                            </h3>
                            <p className="text-muted-foreground text-sm">Phased implementation plan with detailed timelines, resource requirements, and success metrics for each project phase.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-primary" /> Success Metrics Framework
                            </h3>
                            <p className="text-muted-foreground text-sm">Comprehensive measurement framework defining KPIs, success criteria, and evaluation methodologies for project outcomes.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" /> Change Management Plan
                            </h3>
                            <p className="text-muted-foreground text-sm">Organizational change management strategy including training plans, communication strategies, and adoption frameworks.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose Our Scoping Services?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Expert planning for AI project success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6" /> Risk Mitigation
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Thorough planning identifies potential risks and challenges early, allowing for proactive mitigation
                                    strategies that prevent costly delays and project failures.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <PieChart className="w-6 h-6" /> Resource Optimization
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Accurate resource planning ensures optimal allocation of budget, personnel, and technology,
                                    maximizing ROI and minimizing waste.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Users className="w-6 h-6" /> Stakeholder Alignment
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Clear project documentation and communication plans ensure all stakeholders understand objectives,
                                    roles, and expectations from the outset.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Scale className="w-6 h-6" /> Scalable Foundation
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Well-designed blueprints provide a solid foundation for future scaling and expansion,
                                    ensuring long-term success and adaptability.
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
                        <Link href="/services">
                            <Button size="lg" variant="outline" className="px-8">View All Services</Button>
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default ProjectScoping;
