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
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 md:mb-16 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400 mb-4 md:mb-6">
                        Events & Webinars
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Join us for upcoming events, workshops, and webinars to stay ahead of the curve in enterprise AI.
                    </p>
                </div>

                <div className="flex flex-col gap-12 md:gap-20 max-w-7xl mx-auto w-full">
                    {/* Main Event Card / Hero Section */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:p-10 hover:border-blue-500/50 hover:bg-white/8 transition-all">
                        <div className="flex flex-col gap-6 md:gap-8">
                            <div className="flex flex-col lg:flex-row gap-8 items-start">

                                <div className="flex-1 w-full space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-500">
                                            AI4AndhraPolice <span className="text-blue-500/80">Hackathon</span>
                                        </h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-black">
                                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                                <span className="font-medium text-black-800 dark:text-black-200">June 27 – 29, 2025</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                <span className="font-medium text-black-800 dark:text-black-200">R.V.R. & J.C. College, Guntur</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="space-y-3">
                                            <h4 className="text-lg md:text-xl font-semibold text-blue-500">Event Overview</h4>
                                            <p className="text-base leading-relaxed text-black-700 dark:text-black-300">
                                                The AI 4 Andhra Police Hackathon is a technology-driven innovation event organized by the Andhra Pradesh Police Department, in collaboration with 4SightAI. It serves as a platform to design practical, deployable AI systems that enhance operational efficiency.
                                            </p>
                                        </div>
                                        <div>
                                            <Link
                                                href="https://ai4andhrapolice.com"
                                                target="_blank"
                                                className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-base w-full md:w-auto"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 md:order-1 w-full h-full min-h-[300px]">
                            <EventGalleryCarousel images={[
                                "1p1_11zon.jpg", "1p2.JPG", "1p3.jpg", "1p4.jpg",
                                "1p5.jpg", "1p6.JPG", "1p7.jpg", "1p8.JPG"
                            ]} />
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-base font-medium">Objective</div>
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Why This Matters</h2>
                            <p className="text-black-700 dark:text-black-300 font-medium leading-relaxed">The primary objective of the hackathon is to bridge the gap between law enforcement needs and cutting-edge AI capabilities.</p>
                            <ul className="space-y-4">
                                {[
                                    "Explore the use of AI in modern policing",
                                    "Reduce manual effort in workflows",
                                    "Enable faster insights from data",
                                    "Encourage ethical use of AI"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span className="text-black-800 dark:text-black-200 text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Key Focus Areas */}
                    <div className="space-y-8 md:space-y-10">
                        <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
                            <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500">
                                Key Focus Areas
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full"></div>
                            <p className="text-muted-foreground text-lg leading-relaxed pt-2">
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
                                <div key={i} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>

                                    <div className="flex flex-col gap-4 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-blue-500/5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors">
                                                    {area.icon}
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-blue-500 transition-colors">{area.title}</h4>
                                        </div>

                                        <p className="text-muted-foreground text-base leading-relaxed group-hover:text-black transition-colors">{area.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Structure & Participants */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-blue-500">Event Structure</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue
                                    -500/10 text-blue-500 font-bold text-sm border border-blue-500/20">1</span>
                                    <p className="text-black">Problem statements defined by senior police officials based on real needs.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm border border-blue-500/20">2</span>
                                    <p className="text-black">Participating teams design and build AI-based solutions within a fixed time frame.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm border border-blue-500/20">3</span>
                                    <p className="text-black">Solutions evaluated on feasibility, scalability, accuracy, and applicability.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm border border-blue-500/20">4</span>
                                    <p className="text-black">Selected solutions considered for further development and pilot implementation.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-blue
                            -500">Who Have Joined</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["AI Engineers & Developers", "Startups & Tech Firms", "Academic Institutions", "Data Science Researchers"].map((p, i) => (
                                    <div key={i} className="bg-black/20 p-4 rounded-lg flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <span className="text-black font-medium">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <h4 className="text-lg font-semibold text-blue
                                -500 mb-3">Expected Outcomes</h4>
                                <ul className="space-y-2 text-sm text-black">
                                    <li>• Development of proof-of-concept AI solutions</li>
                                    <li>• Knowledge exchange between law enforcement & AI ecosystem</li>
                                    <li>• Identification of scalable AI tools for long-term adoption</li>
                                    <li>• Strengthening of AI-driven governance initiatives</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Significance Section */}
                    <div className="bg-gradient-to-r from-blue
                    -500/10 to-transparent border border-blue-500/20 rounded-2xl p-6 md:p-12 text-center space-y-4 md:space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Significance</h2>
                        <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
                            The AI 4 Andhra Police Hackathon represents a step towards <span className="text-blue-400 font-medium">technology-enabled governance</span>, where artificial intelligence is used as a decision-support and productivity tool, while ensuring human oversight, transparency, and ethical compliance.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-white">Event Gallery</h2>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>
                        <EventsCoverflow images={[
                            "ALI04161.JPG", "ALI05290.JPG", "ALI04711.JPG", "ALI05384.JPG",
                            "ALI05258.JPG", "ALI05500.JPG", "MVS02596.JPG", "ALI05414.JPG",
                            "ALI05142.JPG", "ALI05635.JPG", "ALI05708.JPG", "ALI05775.JPG"
                        ]} />
                    </div>
                </div>
                <div className="mt-10 md:mt-16 pt-8 border-t border-white/10">
                    <div className="flex flex-col gap-12 md:gap-20 max-w-7xl mx-auto w-full">
                        {/* Header Section */}
                        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4 md:mb-6">
                                AdAsia 2025
                            </h2>
                            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                                Beijing, China | December 2025
                            </p>
                        </div>

                        {/* Main Event Card / Hero Section */}
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 md:p-10 hover:border-blue-500/50 hover:bg-white/8 transition-all">
                            <div className="flex flex-col gap-6 md:gap-8">
                                <div className="flex flex-col lg:flex-row gap-8 items-start">
                                    <div className="flex-1 w-full space-y-6">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-500">
                                                AdAsia <span className="text-blue-500/80">2025</span>
                                            </h3>
                                            <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-black">
                                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                                    <span className="font-medium text-black dark:text-black">December 2025</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                    <span className="font-medium text-black dark:text-black">Beijing, China</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-6">
                                            <div className="space-y-3">
                                                <h4 className="text-lg md:text-xl font-semibold text-blue-500">Event Overview</h4>
                                                <p className="text-base leading-relaxed text-black dark:text-black">
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
                                                    className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-base w-full md:w-auto"
                                                >
                                                    View Official Website
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                                </Link>
                                                <Link
                                                    href="https://www.adasia2025.org/speakers.php"
                                                    target="_blank"
                                                    className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-base w-full md:w-auto"
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
                                <div className="inline-block px-6 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs md:text-sm tracking-widest uppercase shadow-sm">
                                    Keynote Highlight
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold text-blue-500">
                                    4SightAI at AdAsia
                                </h2>

                                <div className="space-y-4 text-muted-foreground text-base md:text-lg max-w-none">
                                    <p className="leading-relaxed">
                                        A major highlight of AdAsia 2025 was the keynote address delivered by <span className="text-blue-500 font-semibold">Surya Kotha</span>, Chief Executive Officer of 4SightAI (USA).
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <Link href="https://www.adasia2025.org/surya-kotha.php" target="_blank" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors hover:underline">
                                            Speaker Profile
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                                <div className="w-full min-h-[300px]">
                                    <EventGalleryCarousel images={["c1.jpeg", "c2.jpeg", "c3.jpeg", "c5.jpeg", "c8.jpeg", "c22.jpeg", "c14.jpeg", "c13.jpeg", "c11.jpeg"]} />
                                </div>
                                <div className="">
                                    <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-blue-500/40 transition-colors flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                                        <div className="space-y-4 relative z-10">
                                            <div>
                                                <h3 className="text-xl font-bold text-blue-500 mb-1">Keynote Session</h3>
                                                <p className="text-blue-500/90 font-medium text-sm md:text-base">“Building the AI-First Agency: Road from GenAI to AGI”</p>
                                            </div>

                                            <p className="text-black/80 text-sm leading-relaxed">
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
                                                        <div className="mt-1 w-4 h-4 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                        </div>
                                                        <span className="text-black/80 text-sm">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-blue-500/10 relative z-10">
                                            <p className="text-xs md:text-sm text-blue-500/70 italic">
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
                                <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500">
                                    Conference Focus
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full"></div>
                                <p className="text-muted-foreground text-lg leading-relaxed pt-2">
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
                                    <div key={i} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>

                                        <div className="flex flex-col gap-4 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-blue-500/5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue
                                                    -400 group-hover:text-blue
                                                    -300 transition-colors">
                                                        {area.icon}
                                                    </svg>
                                                </div>
                                                <h4 className="text-xl font-bold text-blue-500 transition-colors">{area.title}</h4>
                                            </div>

                                            <p className="text-muted-foreground text-base leading-relaxed group-hover:text-black transition-colors">{area.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Significance Section - Mirrored styling */}
                        <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-6 md:p-12 text-center space-y-4 md:space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-500">Purpose & Impact</h2>
                            <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
                                The event reinforced the role of <span className="text-blue-400 font-medium">AI as a strategic enabler</span> for future growth in advertising, marketing, and media.
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
