import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import React from 'react';
import EventGalleryCarousel from "@/components/marketing/event-gallery-carousel";
import EventsCoverflow from "@/components/marketing/events-coverflow";

const EventsPage = () => {
    return (
        <Wrapper className="py-12 md:py-20 relative overflow-hidden">
            <Container>
                {/* Header Section */}
                <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/5 p-8 md:p-12 hover:border-black/70 hover:bg-white/8 transition-all max-w-5xl mx-auto mb-16 md:mb-20">
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto relative z-10">
                        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                            Events & Webinars
                        </h1>
                        <p className="text-muted-foreground text-base leading-6 max-w-2xl mx-auto">
                            Join us for upcoming events, workshops, and webinars to stay ahead of the curve in enterprise AI.
                        </p>
                    </div>
                </div>

                {/* Small Event Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-20 p-8 bg-white/5 border border-black rounded-2xl max-w-6xl mx-auto hover:border-black/70 transition-all">
                    <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/surya-police-session.png"
                            alt="AI Strategy Workshop Session"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-block px-3 py-1 bg-white/10 border border-black rounded-full text-white text-sm font-medium">
                            Upcoming Session
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            AI Strategy Workshop
                        </h3>
                        <p className="text-base leading-6 text-muted-foreground">
                            Join us for a focused session on implementing AI strategies in your organization.
                            Quick, impactful, and ready to deploy solutions for modern challenges.
                        </p>
                        <div className="flex flex-wrap items-center gap-6 text-base leading-6 text-gray-300 pt-4">
                            <div className="flex items-center gap-2">
                                <span>📅</span>
                                <span className="font-medium">Oct 15, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>📍</span>
                                <span className="font-medium">Virtual Meet</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-12 md:gap-20 max-w-7xl mx-auto w-full">
                    {/* Main Event Card / Hero Section */}
                    <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/5 p-5 md:p-10 hover:border-black/70 hover:bg-white/8 transition-all">
                        <div className="flex flex-col gap-6 md:gap-8">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">

                                <div className="flex-1 w-full space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                                            AI4AndhraPolice <span className="text-foreground/80">Hackathon</span>
                                        </h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4 text-base leading-6 text-black">
                                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                                <span className="font-medium text-black-800 dark:text-black-200">June 27 – 29, 2025</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                <span className="font-medium text-black-800 dark:text-black-200">R.V.R. & J.C. College, Guntur</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="space-y-3">
                                            <h4 className="text-lg md:text-xl font-semibold text-foreground">Event Overview</h4>
                                            <p className="text-base leading-6 text-black-700 dark:text-black-300">
                                                The AI 4 Andhra Police Hackathon is a technology-driven innovation event organized by the Andhra Pradesh Police Department, in collaboration with 4SightAI. It serves as a platform to design practical, deployable AI systems that enhance operational efficiency.
                                            </p>
                                        </div>
                                        <div>
                                            <Link
                                                href="https://ai4andhrapolice.com"
                                                target="_blank"
                                                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium text-base leading-6 w-full md:w-auto"
                                            >
                                                View Official Website
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Objectives Section */}
                    <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/5 p-5 md:p-10 hover:border-black/70 hover:bg-white/8 transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="order-2 md:order-1 w-full h-full min-h-[300px]">
                                <EventGalleryCarousel items={[
                                    { src: "1p1_11zon.jpg" }, { src: "1p2.JPG" }, { src: "1p3.jpg" }, { src: "1p4.jpg" },
                                    { src: "1p5.jpg" }, { src: "1p6.JPG" }, { src: "1p7.jpg" }, { src: "1p8.JPG" }
                                ]} />
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <div className="inline-block px-4 py-1.5 bg-white/10 border border-black rounded-full text-foreground text-base leading-6 font-medium">Objective</div>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why This Matters</h2>
                                <p className="text-black-700 dark:text-black-300 font-medium text-base leading-6">The primary objective of the hackathon is to bridge the gap between law enforcement needs and cutting-edge AI capabilities.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Explore the use of AI in modern policing",
                                        "Reduce manual effort in workflows",
                                        "Enable faster insights from data",
                                        "Encourage ethical use of AI"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <span className="text-black-800 dark:text-black-200 text-base leading-6">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Key Focus Areas */}
                    <div className="space-y-8 md:space-y-10">
                        <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                                Key Focus Areas
                            </h2>
                            <div className="h-1 w-20 bg-foreground mx-auto rounded-full"></div>
                            <p className="text-muted-foreground text-base leading-6 pt-2">
                                Problem statements defined by senior police officials based on real operational needs, targeting high-impact areas of law enforcement.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Record Analysis",
                                    desc: "AI-powered analysis of police records and petitions for actionable insights.",
                                    icon: <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                },
                                {
                                    title: "Intelligent Search",
                                    desc: "Smart search and summarization of crime and case data.",
                                    icon: <CircleIcon />
                                },
                                {
                                    title: "Voice Interfaces",
                                    desc: "Voice and language-based interfaces for seamless interaction with police systems.",
                                    icon: <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                                },
                                {
                                    title: "Fraud Detection",
                                    desc: "Detection and analysis of digital fraud and cybercrime patterns.",
                                    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                },
                                {
                                    title: "Workflow Automation",
                                    desc: "Automating routine tasks and decision-support systems for efficiency.",
                                    icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                }
                            ].map((area, i) => (
                                <div key={i} className="group relative overflow-hidden bg-white/5 p-6 rounded-2xl border border-black hover:border-black/70 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 transition-opacity group-hover:opacity-100"></div>

                                    <div className="relative z-10 flex flex-col gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-black bg-white/5 shadow-inner shadow-black/5 transition-transform duration-300 group-hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-foreground transition-colors">
                                                    {area.icon}
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-foreground transition-colors">{area.title}</h4>
                                        </div>

                                        <p className="text-base leading-6 text-muted-foreground transition-colors group-hover:text-black">{area.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Structure & Participants */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 rounded-2xl border border-black p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground">Event Structure</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-foreground font-bold text-sm border border-black">1</span>
                                    <p className="text-black text-base leading-6">Problem statements defined by senior police officials based on real needs.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-foreground font-bold text-sm border border-black">2</span>
                                    <p className="text-black text-base leading-6">Participating teams design and build AI-based solutions within a fixed time frame.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-foreground font-bold text-sm border border-black">3</span>
                                    <p className="text-black text-base leading-6">Solutions evaluated on feasibility, scalability, accuracy, and applicability.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-foreground font-bold text-sm border border-black">4</span>
                                    <p className="text-black text-base leading-6">Selected solutions considered for further development and pilot implementation.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/5 rounded-2xl border border-black p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground">Who Have Joined</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["AI Engineers & Developers", "Startups & Tech Firms", "Academic Institutions", "Data Science Researchers"].map((p, i) => (
                                    <div key={i} className="bg-black/20 p-4 rounded-lg flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-foreground"></div>
                                        <span className="text-black font-medium text-base leading-6">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-black">
                                <h4 className="text-lg font-semibold text-foreground mb-3">Expected Outcomes</h4>
                                <ul className="space-y-2 text-base leading-6 text-black">
                                    <li>• Development of proof-of-concept AI solutions</li>
                                    <li>• Knowledge exchange between law enforcement & AI ecosystem</li>
                                    <li>• Identification of scalable AI tools for long-term adoption</li>
                                    <li>• Strengthening of AI-driven governance initiatives</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Significance Section */}
                    <div className="bg-white/5 border border-black rounded-2xl p-6 md:p-12 text-center space-y-4 md:space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Significance</h2>
                        <p className="text-black max-w-3xl mx-auto text-base leading-6">
                            The AI 4 Andhra Police Hackathon represents a step towards <span className="text-foreground font-medium">technology-enabled governance</span>, where artificial intelligence is used as a decision-support and productivity tool, while ensuring human oversight, transparency, and ethical compliance.
                        </p>
                    </div>

                    {/* Combined Galleries Section with reduced spacing */}
                    <div className="flex flex-col gap-8 md:gap-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold text-white">Event Gallery</h2>
                                <div className="h-px bg-white/10 flex-1"></div>
                            </div>
                            <EventsCoverflow items={[
                                { src: "ALI04161.JPG" }, { src: "ALI05290.JPG" }, { src: "ALI04711.JPG" }, { src: "ALI05384.JPG" },
                                { src: "ALI05258.JPG" }, { src: "ALI05500.JPG" }, { src: "MVS02596.JPG" }, { src: "ALI05414.JPG" },
                                { src: "ALI05142.JPG" }, { src: "ALI05635.JPG" }, { src: "ALI05708.JPG" }, { src: "ALI05775.JPG" }
                            ]} />
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="inline-block px-8 py-3 rounded-full bg-white/10 border border-black text-foreground font-semibold text-base leading-6 tracking-widest uppercase shadow-sm">
                                    Hackathon Highlights
                                </div>
                            </div>
                            <EventsCoverflow items={[
                                { src: "ALI04081.JPG", caption: "Use Cases led by Malika Garg, IPS; B. Raja Kumari, IPS; and Tushar Dudi, IPS" },
                                { src: "ALI04096.JPG", caption: "Use Cases led by Kommi Prathap Sive Kishore, IPS; and Dr. Fakkeerappa Kaginelli, IPS" },
                                { src: "ALI05635.JPG", caption: "Caption for Image 4" },
                                { src: "3u.jpeg", caption: "Caption for Image 6" },
                                { src: "4u.jpeg", caption: "Caption for Image 7" },
                                { src: "10u.jpeg", caption: "Caption for Image 8" },
                                { src: "6u.jpeg", caption: "Caption for Image 9" },
                                { src: "7u.jpeg", caption: "The Grid Dynamics team worked on the use case to generate district-focused intelligence from newspaper content using AI." },
                                { src: "8u.jpeg", caption: "Tech Talk on AI4AndhraPolice" },
                                { src: "9u.jpeg", caption: "Team 4sightAI " },
                                { src: "UC 1-7.jpg", caption: "Sri Vakul Jindal, IPS led the use case on AI-assisted petition analysis for effective grievance redressal." },
                                { src: "UC 2.jpg", caption: "Use Case led by Tushar Dudi, IPS on AI-powered voice-based natural language querying and report generation from CCTNS data." },
                                { src: "UC 2(1).jpg", caption: "Validation on usecase the voice-enabled AI access to CCTNS for intuitive querying and automated report generation." },
                                { src: "UC 3.jpg", caption: "Dr. Fakkeerappa Kaginelli, IPS led the use case focusing on AI-driven identification and escalation of social media scam advertisements." },
                                { src: "UC 3(1).jpg", caption: "Validation of the Usecase AI-driven identification and escalation of social media scam advertisementsss." },
                                { src: "UC 4.jpg", caption: "Kommi Prathap Sive Kishore, IPS led the use case focused on intelligent CDR/IPDR analytics to uncover complex crime networks." },
                                { src: "UC 4(1).jpg", caption: "validation of usecase Centralized intelligence platform enabling secure analysis of telecom, financial, and multi-source investigation data." },
                                { src: "UC 4(2).jpg", caption: "Advanced analytics and link analysis dashboards supporting evidence-driven crime network identification." },
                                { src: "UC 5-8.jpg", caption: "Malika Garg, IPS leading the use case on AI-powered analysis of Dial 112 and FIR data for hotspot identification and early law & order alerts." },
                                { src: "UC 6.jpg", caption: "B. Raja Kumari, IPS leading the use case focused on intelligent digitization and analysis of police service records for personnel management." },
                                { src: "UC 6(1).jpg", caption: "Validation of the use case Intelligent digitization and validation of police service records for rewards, medals, and career management." },
                                { src: "UC 1-7(1).jpg", caption: "Use Case led by Sri Vakul Jindal, IPS on AI-powered analysis of WhatsApp group chats to flag key points, track tasks, and enable early warnings for proactive policing." },
                                { src: "UC 5-8(1).jpg", caption: "Use Case led by Malika Garg, IPS on AI-powered analysis of newspaper news feeds to generate district-focused daily intelligence digests for policing." }
                            ]} />
                        </div>
                    </div>
                </div>
                <div className="mt-10 md:mt-16 pt-8 border-t border-black">
                    <div className="flex flex-col gap-12 md:gap-20 max-w-7xl mx-auto w-full">
                        {/* Header Section */}
                        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Our Events
                            </h1>
                            <p className="text-muted-foreground text-base leading-6 max-w-2xl mx-auto">
                                Beijing, China | December 2025
                            </p>
                        </div>

                        {/* Main Event Card / Hero Section */}
                        <div className="group relative overflow-hidden rounded-2xl border border-black bg-white/5 p-5 md:p-10 hover:border-black/70 hover:bg-white/8 transition-all">
                            <div className="flex flex-col gap-6 md:gap-8">
                                <div className="flex flex-col lg:flex-row gap-8 items-start">
                                    <div className="flex-1 w-full space-y-6">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                                                AdAsia <span className="text-foreground/80">2025</span>
                                            </h3>
                                            <div className="flex flex-wrap gap-3 md:gap-4 text-base leading-6 text-black">
                                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-black">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                                    <span className="font-medium text-black dark:text-black">December 2025</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-black">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                    <span className="font-medium text-black dark:text-black">Beijing, China</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6">
                                            <div className="space-y-3">
                                                <h4 className="text-lg md:text-xl font-semibold text-foreground">Event Overview</h4>
                                                <p className="text-base leading-6 text-black dark:text-black">
                                                    AdAsia 2025 was a landmark international conference in the global advertising, marketing, and media (Marcom) ecosystem, held in Beijing, China. The event convened senior industry leaders, strategists, technologists, and creative professionals from across the world to examine how emerging technologies are redefining the future of brand communication.
                                                    <br /><br />
                                                    Anchored around the theme AI: Advertising Innovation and Artificial Intelligence,” AdAsia 2025 focused on the growing convergence of artificial intelligence and creative practice. The conference explored how AI is influencing strategy, creativity, media planning, and agency operations, while emphasizing human-centric innovation and responsible adoption.
                                                    <br /><br />
                                                    The multi-day program featured keynote addresses, panel discussions, and expert-led sessions covering topics such as generative AI in advertising, data-driven creativity, AI-powered decision-making, and the strategic integration of advanced technologies into marketing workflows. With participation from delegates across multiple countries, the event fostered cross-border dialogue, collaboration, and knowledge exchange.
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                                <Link
                                                    href="https://www.adasia2025.org/"
                                                    target="_blank"
                                                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium text-base leading-6 w-full md:w-auto"
                                                >
                                                    View Official Website
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                                </Link>
                                                <Link
                                                    href="https://www.adasia2025.org/speakers.php"
                                                    target="_blank"
                                                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium text-base leading-6 w-full md:w-auto"
                                                >
                                                    View Speakers
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Keynote Highlight Section */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            <div className="space-y-4">
                                <div className="inline-block px-6 py-2 rounded-full bg-white/10 border border-black text-foreground font-semibold text-base leading-6 tracking-widest uppercase shadow-sm">
                                    Keynote Highlight
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                                    4SightAI at AdAsia
                                </h2>

                                <div className="space-y-4 text-muted-foreground text-base leading-6 max-w-none">
                                    <p className="leading-relaxed">
                                        A major highlight of AdAsia 2025 was the keynote address delivered by <span className="text-foreground font-semibold">Surya Kotha</span>, Chief Executive Officer of 4SightAI (USA).
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <Link href="https://www.adasia2025.org/surya-kotha.php" target="_blank" className="inline-flex items-center gap-2 text-foreground hover:text-foreground/90 font-medium transition-colors hover:underline">
                                            Speaker Profile
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                                <div className="w-full min-h-[300px]">
                                    <EventGalleryCarousel items={[
                                        { src: "c1.jpeg" }, { src: "c2.jpeg" }, { src: "c3.jpeg" },
                                        { src: "c5.jpeg" }, { src: "c8.jpeg" }, { src: "c22.jpeg" },
                                        { src: "c14.jpeg" }, { src: "c13.jpeg" }, { src: "c11.jpeg" }
                                    ]} />
                                </div>
                                <div className="">
                                    <div className="bg-white/5 border border-black rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-black/70 transition-colors flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                                        <div className="space-y-4 relative z-10">
                                            <div>
                                                <h3 className="text-xl font-bold text-foreground mb-1">Keynote Session</h3>
                                                <p className="text-foreground/90 font-medium text-base leading-6">“Building the AI-First Agency: Road from GenAI to AGI”</p>
                                            </div>

                                            <p className="text-black/80 text-base leading-6">
                                                In this session, 4SightAI presented a forward-looking vision of how agencies can evolve by embedding AI deeply into their intellectual property, workflows, and operational core.
                                            </p>

                                            <ul className="space-y-2.5">
                                                {[
                                                    "Transitioning from experimental GenAI tools to AI-native agency models",
                                                    "Using AI as an intelligence layer that continuously learns from data and practice",
                                                    "Enhancing human creativity through AI augmentation, not replacement",
                                                    "Building future-ready agencies that combine strategic thinking, technology, and creativity"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-black text-foreground">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                        </div>
                                                        <span className="text-black/80 text-base leading-6">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-black relative z-10">
                                            <p className="text-base leading-6 text-foreground/70 italic">
                                                This keynote positioned 4SightAI as a thought leader in AI-driven transformation for the global advertising and marketing industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Key Focus Areas */}
                        <div className="space-y-8 md:space-y-10">
                            <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
                                <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                                    Conference Focus
                                </h2>
                                <div className="h-1 w-20 bg-foreground mx-auto rounded-full"></div>
                                <p className="text-muted-foreground text-base leading-6 pt-2">
                                    AdAsia 2025 explored how artificial intelligence is transforming the advertising ecosystem.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        title: "Generative AI",
                                        desc: "Generative AI in creative development.",
                                        icon: <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                                    },
                                    {
                                        title: "Responsible AI",
                                        desc: "Human-centric and responsible AI applications.",
                                        icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    },
                                    {
                                        title: "Data Strategy",
                                        desc: "Data-driven creative and media strategies.",
                                        icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                    },
                                    {
                                        title: "Agency Ops",
                                        desc: "AI integration into agency operations and communication.",
                                        icon: <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    },
                                    {
                                        title: "Collaboration",
                                        desc: "Cross-border collaboration and innovation in Marcom.",
                                        icon: <CircleIcon />
                                    }
                                ].map((area, i) => (
                                    <div key={i} className="group relative overflow-hidden bg-white/5 p-6 rounded-2xl border border-black hover:border-black/70 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 transition-opacity group-hover:opacity-100"></div>

                                        <div className="flex flex-col gap-4 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-black group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-black/5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-foreground transition-colors">
                                                        {area.icon}
                                                    </svg>
                                                </div>
                                                <h4 className="text-xl font-bold text-foreground transition-colors">{area.title}</h4>
                                            </div>

                                            <p className="text-muted-foreground text-base leading-6 group-hover:text-black transition-colors">{area.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Significance Section - Mirrored styling */}
                        <div className="bg-white/5 border border-black rounded-2xl p-6 md:p-12 text-center space-y-4 md:space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Purpose & Impact</h2>
                            <p className="text-black max-w-3xl mx-auto text-base leading-6">
                                The event reinforced the role of <span className="text-foreground font-medium">AI as a strategic enabler</span> for future growth in advertising, marketing, and media.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
};

{/* Helper Icon Component for the search icon inside the map */ }
function CircleIcon() {
    return (
        <React.Fragment>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </React.Fragment>
    )
}

export default EventsPage;
