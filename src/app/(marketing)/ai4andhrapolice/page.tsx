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
    Lock,
    Settings,
    Bell,
    Filter,
    Layers,
    Archive
} from "lucide-react";

const AI4AndhraPolicePage = () => {

    const ai4apUseCases = [
        {
            title: "Petition Management System (PMS)",
            description: "The Petition Management System (PMS) modernizes how public petitions are received, reviewed, and resolved within the police department. Using AI-assisted analysis, the system automatically extracts key issues from petitions, identifies required supporting evidence, checks evidence completeness, and generates structured summaries for officers. PMS reduces manual effort, improves consistency, and ensures faster triaging of cases without replacing human judgment. Officers retain full decision-making authority, while AI acts as a reliable assistant to enhance accuracy, speed, and standardization. The result is a transparent, auditable, and citizen-centric petition workflow that improves resolution timelines and accountability.",
            icon: FileText
        },
        {
            title: "Core Services – Police LLM Platform",
            description: "The Police LLM Core Services form the foundational digital backbone for all present and future police applications in Andhra Pradesh. This unified platform ensures that administrative systems and advanced investigation tools operate on clean, structured, and consistent data. It includes centralized core data for personnel, units, and jurisdictions; shared platform services like logging, notifications, and access control; common user management with secure authentication and single sign-on; and reusable AI services such as prompt management, RAG, and AI agents. Together, these services enable scalable, governed, and interoperable solutions across the police ecosystem.",
            icon: BrainCircuit
        },
        {
            title: "Section 91 CrPC Request Management",
            description: "This platform enables secure, end-to-end management of Section 91 CrPC requests for telecom and banking data. AI automatically extracts case details from SHO and IO request letters, generates operator-specific official formats, and tracks request status through a centralized dashboard. Incoming responses are intelligently mapped to corresponding cases and archived in a structured, searchable manner. The system ensures full traceability, regulatory compliance, and audit readiness while significantly reducing manual coordination. By standardizing workflows and automating documentation, officers can focus on investigations while maintaining legal rigor and accountability.",
            icon: Search
        },
        {
            title: "CDR & IPDR Analysis System",
            description: "The CDR & IPDR system is an AI-driven document analysis platform designed to handle complex evidence at scale. It ingests and parses diverse document types such as Call Detail Records, Internet Protocol Detail Records, bank statements, FIRs, and subscriber lists. AI extracts structured insights, links entities, and supports investigative analysis while maintaining a clear audit trail from raw documents to conclusions. The platform minimizes manual data handling, improves accuracy, and ensures traceability of evidence throughout the investigation lifecycle. It enables faster intelligence generation without compromising evidentiary integrity.",
            icon: Activity
        },
        {
            title: "Investigation Co-Pilot for POCSO",
            description: "The Investigation Co-Pilot for POCSO cases assists officers in managing sensitive investigations with greater structure, consistency, and care. The system analyzes multiple evidence documents—including FIRs, CDRs, statements, and reports—using AI to extract relevant facts, timelines, and relationships. It supports investigators with organized insights while preserving full human oversight and legal responsibility. Designed for auditability and compliance, the platform ensures that every investigative step is traceable and documented. By reducing cognitive load and manual work, it helps officers focus on timely, accurate, and sensitive case handling.",
            icon: Shield
        },
        {
            title: "Docs2Data",
            description: "Docs2Data transforms manual document handling into an intelligent, automated data extraction system. Using LLM-powered vision capabilities, the platform understands both visual layouts and textual content in scanned PDFs and images. Documents are automatically classified, key fields are extracted, and data is validated against predefined schemas before secure storage. This ensures high accuracy, consistency, and reliability of records. Docs2Data eliminates repetitive manual entry, reduces errors, and accelerates digitization of service records and official documents, enabling structured data readiness across police systems.",
            icon: Eye
        },
        {
            title: "WhatsApp Summary ",
            description: "Public WhatsApp groups often surface local incidents faster than traditional channels but are noisy, repetitive, and fragmented. This system automatically collects updates from multiple groups, removes duplication, resolves conflicts, and summarizes information into structured incident reports. A centralized dashboard presents actionable updates, allowing officers to quickly assess, verify, and escalate critical events through the hierarchy. By converting unstructured public chatter into organized intelligence, the platform ensures timely awareness while reducing information overload and improving operational responsiveness.",
            icon: Users
        },
        {
            title: "District News Digest",
            description: "The District News Digest provides police leadership with a single, reliable morning brief tailored to each district. The system aggregates police-relevant news from trusted English and Telugu sources, organizes and summarizes key developments, and presents them on a web dashboard. Optional PDF reports and WhatsApp summaries are generated based on SP preferences. By replacing fragmented news tracking with a consistent daily digest, the platform enables faster situational awareness, informed decision-making, and proactive response planning across districts.",
            icon: Globe
        },
    ];

    const cctvUseCases = [
        { title: "Crowd Monitoring", description: "Real-time estimation of crowd density to prevent stampedes and manage large gatherings.", icon: Users },
        { title: "Vehicle Tracking", description: "Automatic license plate recognition (ANPR) and vehicle route tracing across the city.", icon: Video },
        { title: "Suspicious Activity", description: "Automated alerts for unattended objects, fighting, or erratic behavior in public spaces.", icon: AlertTriangle },
        { title: "Facial Recognition", description: "Instant identification of known offenders and missing persons against a central database.", icon: Search },
        { title: "Traffic Violation", description: "Automated detection of signal jumping, wrong-way driving, and no-helmet violations.", icon: Siren },
        { title: "Perimeter Security", description: "Virtual tripwires and intrusion detection for sensitive government zones.", icon: Shield },
        { title: "Object Detection", description: "Smart identification of abandoned baggage or hazardous objects in high-footfall areas.", icon: Archive },
        { title: "Heatmap Analysis", description: "Visualizing high-traffic areas to optimize patrol deployment and resource allocation.", icon: Activity },
    ];

    const eventUseCases = [
        { title: "Multi-Source Event Ingestion", description: "Collects events from IoT sensors, CCTV, applications, and manual reports.", icon: Radio },
        { title: "Actionable Intelligence Engine", description: "Detects patterns and anomalies using rule-based and AI-driven logic.", icon: BrainCircuit },
        { title: "Automated Task Orchestration", description: "Converts events into response actions without manual intervention.", icon: BarChart3 },
        { title: "Dynamic Recipient Resolution", description: "Identifies the right responder based on location, role, and availability.", icon: Users },
        { title: "Multi-Channel Notifications", description: "Sends alerts via SMS, voice calls, email, mobile apps, and dashboards.", icon: Bell },
        { title: "Acknowledgment & Escalation", description: "Tracks responses and escalates automatically if no action is taken.", icon: CheckCircle2 },
        { title: "Runtime Configuration", description: "Add or modify event workflows and rules without system downtime.", icon: Settings },
        { title: "Audit & Monitoring Dashboard", description: "Provides real-time visibility and complete event traceability.", icon: Activity },
    ];

    const newsAIUseCases = [
        { title: "Automated Ingestion", description: "Automated ingestion from print, e-papers, and digital news sources.", icon: Globe },
        { title: "Relevance Filtering", description: "AI-based relevance filtering and personalized news delivery.", icon: Filter },
        { title: "Sentiment & Trend Analysis", description: "Sentiment analysis and emerging trend detection.", icon: Activity },
        { title: "Story Clustering", description: "Story clustering to track issues over time.", icon: Layers },
        { title: "Bias & Credibility Insights", description: "Bias and credibility insights for informed reading.", icon: Shield },
        { title: "Digital Archive", description: "Secure, searchable digital news archive.", icon: Archive },
        { title: "Real-time Alerts", description: "Real-time alerts via web, mobile, email, and WhatsApp.", icon: Bell },
        { title: "Role-Based Access", description: "Role-based access control and enterprise-grade security.", icon: Lock },
    ];

    return (
        <Wrapper className="py-12 md:py-20 relative overflow-hidden">
            <Container>
                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 md:mb-24 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                        Government Projects
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Empowering governance and public safety with state-of-the-art Artificial Intelligence solutions.
                    </p>
                </div>

                <div className="flex flex-col gap-24 md:gap-32">

                    {/* Project 1: AI4AndhraPolice */}
                    <div className="space-y-8">

                        {/* 1. Project Overview Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 text-center max-w-7xl mx-auto w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="flex flex-col items-start space-y-6 text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-500">AI4AndhraPolice</h2>
                                <div className="text-muted-foreground text-base leading-relaxed max-w-none space-y-4">
                                    <p>
                                        AI4AndhraPolice is a comprehensive artificial intelligence initiative aimed at modernizing the Andhra Pradesh Police by integrating advanced AI technologies into everyday policing operations. The project focuses on enhancing decision-making, improving response times, and strengthening operational efficiency through intelligence-driven systems.
                                    </p>
                                    <p>
                                        By applying AI to real-world law enforcement workflows, AI4AndhraPolice supports a shift from reactive processes to proactive, data-informed policing. The initiative emphasizes practical, deployable solutions that assist officers with timely insights and streamlined access to information, while maintaining human oversight, accountability, and ethical governance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. UseCases Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">Use Cases & Features</h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                                    Empowering officers with actionable intelligence through advanced AI modules.
                                </p>
                            </div>

                            {/* Use Case Carousel - Full Width in Card */}
                            <div className="-mx-4 md:mx-0">
                                <ProjectUseCasesCarousel useCases={ai4apUseCases} color="blue" />
                            </div>
                        </div>

                        {/* 3. Impact Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-xl font-bold text-blue-900 mb-8 text-center">Project Impact</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div className="text-center space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-500">40%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Reduced Response Time</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-500">90%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Prediction Accuracy</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-500">10k+</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Man-hours Saved</div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-3xl md:text-4xl font-bold text-blue-500">100%</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">District Coverage</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2: CCTV Analytics */}
                    <div className="space-y-8">

                        {/* 1. Project Overview Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 text-center max-w-7xl mx-auto w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="flex flex-col items-start space-y-6 text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-500">CCTV Analytics</h2>
                                <div className="text-muted-foreground text-base leading-relaxed max-w-none space-y-4">
                                    <p>
                                        Transforming passive surveillance into active intelligence. Our video analytics platform processes thousands of feeds in real-time to detect anomalies and assist law enforcement. It turns standard CCTV networks into proactive security tools that can identify threats before they escalate.
                                    </p>
                                    <p>
                                        With advanced pattern recognition, the system tracks suspects, monitors traffic violations, and alerts authorities to suspicious activities instantly. The analytics engine runs on the edge to minimize latency, ensuring immediate alerts for critical events while significantly reducing human error and operator fatigue.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 2. UseCases Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">Key Features</h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                                    Empowering officers with actionable intelligence through advanced AI modules.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {cctvUseCases.map((uc, i) => (
                                    <UseCaseCard key={i} {...uc} />
                                ))}
                            </div>
                        </div>

                        {/* 3. Impact Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-6 text-center">Operational Impact</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto text-base">
                                By automating surveillance, we maximize the value of existing infrastructure. The system acts as a force multiplier, allowing a small team to effectively monitor entire districts. It provides evidential-grade video clips for investigations and statistical insights for long-term planning. The integration with command centers ensures that insights lead to immediate action, creating a safer environment for citizens through continuous, unbiased, and intelligent monitoring.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                                    <h4 className="font-bold text-lg text-blue-400 mb-2">5000+ Cameras</h4>
                                    <p className="text-blue-900/70 text-sm">Seamlessly integrated across major cities for unified monitoring.</p>
                                </div>
                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                                    <h4 className="font-bold text-lg text-blue-400 mb-2">Real-time Alerts</h4>
                                    <p className="text-blue-900/70 text-sm">Instant detection of traffic violations and security threats.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3: Event Governance Platform */}
                    <div className="space-y-8">

                        {/* 1. Project Overview Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 text-center max-w-7xl mx-auto w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="flex flex-col items-start space-y-6 text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Event Governance Platform</h2>
                                <p className="text-muted-foreground text-base leading-relaxed max-w-none">
                                    The Event Governance Platform (EGP) is an AI-powered, event-driven system designed to monitor, analyze, and respond to critical incidents in real time. It ingests data from multiple sources such as cameras, sensors, IoT devices, and user reports, converts raw inputs into standardized events, and applies intelligence rules to detect risks and abnormal patterns. Once an event is identified, EGP automatically triggers predefined response workflows, identifies the right authorities based on location and role, and delivers alerts through appropriate communication channels. The platform enables fast, automated, and accountable governance for safety, security, and operational efficiency.
                                </p>
                            </div>
                        </div>

                        {/* 2. UseCases Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-4">Key Features</h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                                    Comprehensive tools for real-time event monitoring and response.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {eventUseCases.map((uc, i) => (
                                    <UseCaseCard key={i} {...uc} />
                                ))}
                            </div>
                        </div>

                        {/* 3. Impact Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-6 text-center">Why EGP Matters</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto text-base">
                                EGP significantly improves response time, coordination, and decision-making during critical situations. By automating detection, intelligence, and communication, it reduces human dependency and operational delays. The platform ensures that alerts reach the nearest and most relevant authorities, improving safety outcomes and resource utilization. Its adaptive, configuration-driven design allows governments and enterprises to evolve their response strategies as new risks emerge. Overall, EGP enables proactive governance, enhances public safety, and strengthens trust through transparency, accountability, and data-driven actions.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                                    <h4 className="font-bold text-lg text-blue-400 mb-2">Zero Major Incidents</h4>
                                    <p className="text-blue-900/70 text-sm">Maintained flawless safety records during massive religious and political gatherings.</p>
                                </div>
                                <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                                    <h4 className="font-bold text-lg text-blue-400 mb-2">Real-time Coordination</h4>
                                    <p className="text-blue-900/70 text-sm">Connected 20+ departments on a single digital platform for instant communication.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4: NewsAI */}
                    <div id="news-ai" className="space-y-8 scroll-mt-40">
                        {/* 1. Project Overview Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 text-center max-w-7xl mx-auto w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="flex flex-col items-start space-y-6 text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-blue-500">NewsAI360</h2>
                                <p className="text-muted-foreground text-base leading-relaxed max-w-none">
                                    NewsAI360 is an AI-powered news intelligence platform by 4sightAI designed to modernize government news monitoring. It replaces manual newspaper clipping processes with an automated system that collects news from print, e-papers, and digital media. Using advanced AI and language models, the platform analyzes news for relevance, sentiment, and context, ensuring that the right information reaches the right officials in real time. NewsAI360 converts daily media coverage into structured, searchable intelligence, enabling faster awareness, better coordination, and informed decision-making across government departments.
                                </p>
                            </div>
                        </div>

                        {/* 2. UseCases Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 w-full hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-blue-500 mb-4">Key Features</h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                                    Intelligent automation for modern media monitoring.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {newsAIUseCases.map((uc, i) => (
                                    <UseCaseCard key={i} {...uc} />
                                ))}
                            </div>
                        </div>

                        {/* 3. Impact Card */}
                        <div className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-6 md:p-10 hover:border-blue-500/50 transition-all">
                            <h3 className="text-xl font-bold text-blue-500 mb-6 text-center">Impact of the Project</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8 text-center max-w-4xl mx-auto text-base">
                                NewsAI360 transforms governance from reactive to proactive by enabling real-time awareness and data-backed decisions. It significantly reduces manual effort, preserves institutional memory, and improves response speed during critical events. By turning raw news into actionable intelligence, the platform enhances transparency, strengthens media strategy, and empowers leaders to anticipate issues, respond confidently, and govern more effectively using AI-driven insights.
                            </p>
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
            <div className="font-bold text-blue-500">{value}</div>
            <div className="text-xs text-muted-foreground">{text}</div>
        </div>
    </div>
);

const UseCaseCard = ({ title, description, icon: Icon }: any) => (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group hover:-translate-y-1">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
            <Icon className="w-5 h-5 text-blue-500" />
        </div>
        <h3 className="text-lg font-bold text-blue-500 mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
);

export default AI4AndhraPolicePage;
