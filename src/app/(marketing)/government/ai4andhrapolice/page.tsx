import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    FileTextIcon,
    BrainCircuitIcon,
    SearchIcon,
    ActivityIcon,
    ShieldIcon,
    EyeIcon,
    UsersIcon,
    GlobeIcon,
    FileText,
    BrainCircuit,
    Search,
    Activity,
    Shield,
    Eye,
    Users,
    Globe
} from "lucide-react";

const AI4AndhraPolicePage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/5 p-8 md:p-12 hover:border-black/70 hover:bg-white/8 transition-all max-w-5xl mx-auto">
                        <div className="flex flex-col items-center justify-center text-center relative z-10">
                            <div className="mb-6 relative w-24 h-24 md:w-32 md:h-32">
                                <Image
                                    src="/images/ai4ap-logo.png"
                                    alt="AI 4 Andhra Police Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                AI 4 Andhra Police
                            </h1>
                            <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
                                Modernizing Law Enforcement with AI.
                            </p>
                            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                A comprehensive initiative to enhance public safety, optimize resource allocation, and improve response times through data analytics and predictive modeling.
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
                            Proactive Policing
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From reactive processes to intelligence-driven operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full border border-border/50 bg-black/50">
                            <Image
                                src="/gov_images/ai4andhrapolice.jpg"
                                alt="AI 4 Andhra Police Overview"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-foreground">Intelligence-Driven Systems</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                AI4AndhraPolice is a comprehensive artificial intelligence initiative aimed at modernizing the Andhra Pradesh Police by integrating advanced AI technologies into everyday policing operations. The project focuses on enhancing decision-making, improving response times, and strengthening operational efficiency.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                By applying AI to real-world law enforcement workflows, AI4AndhraPolice supports a shift from reactive processes to proactive, data-informed policing. The initiative emphasizes practical, deployable solutions that assist officers with timely insights while maintaining human oversight and ethical governance.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Key Initiatives Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Various Projects
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Core components of the modernization drive
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 1. Petition Management System */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Petition Management System (PMS)</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                The Petition Management System (PMS) modernizes how public petitions are received, reviewed, and resolved within the police department. Using AI-assisted analysis, the system automatically extracts key issues from petitions, identifies required supporting evidence, checks evidence completeness, and generates structured summaries for officers. PMS reduces manual effort, improves consistency, and ensures faster triaging of cases without replacing human judgment. Officers retain full decision-making authority, while AI acts as a reliable assistant to enhance accuracy, speed, and standardization. The result is a transparent, auditable, and citizen-centric petition workflow that improves resolution timelines and accountability.
                            </p>
                        </div>

                        {/* 3. Section 91 CrPC */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Section 91 CrPC Request Management</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                This platform enables secure, end-to-end management of Section 91 CrPC requests for telecom and banking data. AI automatically extracts case details from SHO and IO request letters, generates operator-specific official formats, and tracks request status through a centralized dashboard. Incoming responses are intelligently mapped to corresponding cases and archived in a structured, searchable manner. The system ensures full traceability, regulatory compliance, and audit readiness while significantly reducing manual coordination. By standardizing workflows and automating documentation, officers can focus on investigations while maintaining legal rigor and accountability.
                            </p>
                        </div>
                        {/* 4. CDR & IPDR Analysis */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">CDR & IPDR Analysis System</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                The CDR & IPDR system is an AI-driven document analysis platform designed to handle complex evidence at scale. It ingests and parses diverse document types such as Call Detail Records, Internet Protocol Detail Records, bank statements, FIRs, and subscriber lists. AI extracts structured insights, links entities, and supports investigative analysis while maintaining a clear audit trail from raw documents to conclusions. The platform minimizes manual data handling, improves accuracy, and ensures traceability of evidence throughout the investigation lifecycle. It enables faster intelligence generation without compromising evidentiary integrity.
                            </p>
                        </div>
                        {/* 5. POCSO Co-Pilot */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Investigation Co-Pilot for POCSO</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                The Investigation Co-Pilot for POCSO cases assists officers in managing sensitive investigations with greater structure, consistency, and care. The system analyzes multiple evidence documents—including FIRs, CDRs, statements, and reports—using AI to extract relevant facts, timelines, and relationships. It supports investigators with organized insights while preserving full human oversight and legal responsibility. Designed for auditability and compliance, the platform ensures that every investigative step is traceable and documented. By reducing cognitive load and manual work, it helps officers focus on timely, accurate, and sensitive case handling.
                            </p>
                        </div>
                        {/* 6. Docs2Data */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">Docs2Data</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                Docs2Data transforms manual document handling into an intelligent, automated data extraction system. Using LLM-powered vision capabilities, the platform understands both visual layouts and textual content in scanned PDFs and images. Documents are automatically classified, key fields are extracted, and data is validated against predefined schemas before secure storage. This ensures high accuracy, consistency, and reliability of records. Docs2Data eliminates repetitive manual entry, reduces errors, and accelerates digitization of service records and official documents, enabling structured data readiness across police systems.
                            </p>
                        </div>
                        {/* 7. WhatsApp Summary */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">WhatsApp Summary</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                Public WhatsApp groups often surface local incidents faster than traditional channels but are noisy, repetitive, and fragmented. This system automatically collects updates from multiple groups, removes duplication, resolves conflicts, and summarizes information into structured incident reports. A centralized dashboard presents actionable updates, allowing officers to quickly assess, verify, and escalate critical events through the hierarchy. By converting unstructured public chatter into organized intelligence, the platform ensures timely awareness while reducing information overload and improving operational responsiveness.
                            </p>
                        </div>
                        {/* 8. District News Digest */}
                        <div className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group hover:border-black/50 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-4 text-center">District News Digest</h3>
                            <p className="text-muted-foreground text-base leading-relaxed">
                                The District News Digest provides police leadership with a single, reliable morning brief tailored to each district. The system aggregates police-relevant news from trusted English and Telugu sources, organizes and summarizes key developments, and presents them on a web dashboard. Optional PDF reports and WhatsApp summaries are generated based on SP preferences. By replacing fragmented news tracking with a consistent daily digest, the platform enables faster situational awareness, informed decision-making, and proactive response planning across districts.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Impact Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-foreground mb-6 text-center md:text-left">Project Impact</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold text-foreground">40%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Reduced Response Time</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold text-foreground">90%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Prediction Accuracy</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold text-foreground">10k+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Man-hours Saved</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold text-foreground">100%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">District Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

        </div>
    );
};

export default AI4AndhraPolicePage;
