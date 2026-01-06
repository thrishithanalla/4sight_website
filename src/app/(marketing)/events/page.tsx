import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import React from 'react';

const EventsPage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 mb-6">
                        Events & Webinars
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Join us for upcoming events, workshops, and webinars to stay ahead of the curve in enterprise AI.
                    </p>
                </div>

                <div className="space-y-20">
                    {/* Main Event Card / Hero Section */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 transition-all hover:border-orange-500/50 hover:bg-white/8">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start">

                                <div className="flex-1 space-y-6">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
                                            AI4AndhraPolice <span className="text-orange-500">Hackathon</span>
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-orange-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                                <span className="font-medium text-black">June 27 – 29, 2025</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 text-orange-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                                <span className="font-medium text-black">R.V.R. & J.C. College of Engineering, Guntur</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6 items-start">
                                        <div>
                                            <h4 className="text-xl font-semibold text-orange-500 mb-3">Event Overview</h4>
                                            <p className="text-gray-200 leading-relaxed text-black">
                                                The AI 4 Andhra Police Hackathon is a technology-driven innovation event organized by the Andhra Pradesh Police Department, in collaboration with 4SightAI. The event focuses on applying Artificial Intelligence and Generative AI to address real-world policing and public safety challenges. It serves as a platform to design practical, deployable AI systems that enhance operational efficiency, decision support, and data-driven policing.
                                            </p>
                                        </div>
                                        <div className="pt-2">
                                            <Link
                                                href="https://ai4andhrapolice.com"
                                                target="_blank"
                                                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium text-base"
                                            >
                                                View Official Website
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Objectives Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-auto h-full min-h-[400px]">
                            <img src="/events_images/ALI05712.JPG" alt="Hackathon Team" className="object-cover w-full h-full opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-base font-medium">Objective</div>
                            <h2 className="text-3xl font-bold text-orange-500">Why This Matters</h2>
                            <p className="text-gray-300 font-medium text-black">The primary objective of the hackathon is to bridge the gap between law enforcement needs and cutting-edge AI capabilities.</p>
                            <ul className="space-y-4 text-black">
                                {[
                                    "Explore the use of AI in modern policing",
                                    "Reduce manual effort in administrative and investigative workflows",
                                    "Enable faster insights from large volumes of data",
                                    "Encourage responsible and ethical use of AI in law enforcement"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><polyline points="20 6 9 17 4 12" /></svg>
                                        </div>
                                        <span className="text-black">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Key Focus Areas */}
                    <div className="space-y-10">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-500 to-orange-500">
                                Key Focus Areas
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
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
                                <div key={i} className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100"></div>

                                    <div className="flex flex-col gap-4 relative z-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform duration-300 shadow-inner shadow-orange-500/5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-orange-400 group-hover:text-orange-300 transition-colors">
                                                    {area.icon}
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-orange-500 transition-colors">{area.title}</h4>
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
                            <h3 className="text-2xl font-bold text-orange-500">Event Structure</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm border border-orange-500/20">1</span>
                                    <p className="text-black">Problem statements defined by senior police officials based on real needs.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm border border-orange-500/20">2</span>
                                    <p className="text-black">Participating teams design and build AI-based solutions within a fixed time frame.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm border border-orange-500/20">3</span>
                                    <p className="text-black">Solutions evaluated on feasibility, scalability, accuracy, and applicability.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm border border-orange-500/20">4</span>
                                    <p className="text-black">Selected solutions considered for further development and pilot implementation.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/5 rounded-2xl border border-white/10 p-8 space-y-6">
                            <h3 className="text-2xl font-bold text-orange-500">Who Should Join?</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["AI Engineers & Developers", "Startups & Tech Firms", "Academic Institutions", "Data Science Researchers"].map((p, i) => (
                                    <div key={i} className="bg-black/20 p-4 rounded-lg flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                        <span className="text-black font-medium">{p}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <h4 className="text-lg font-semibold text-orange-500 mb-3">Expected Outcomes</h4>
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
                    <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Significance</h2>
                        <p className="text-black max-w-3xl mx-auto text-lg leading-relaxed">
                            The AI 4 Andhra Police Hackathon represents a step towards <span className="text-orange-400 font-medium">technology-enabled governance</span>, where artificial intelligence is used as a decision-support and productivity tool, while ensuring human oversight, transparency, and ethical compliance.
                        </p>
                    </div>

                    {/* Gallery Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <h2 className="text-2xl font-bold text-white">Event Gallery</h2>
                            <div className="h-px bg-white/10 flex-1"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "ALI04161.JPG", "ALI04501.JPG", "ALI04711.JPG", "ALI05105.JPG",
                                "ALI05258.JPG", "ALI05500.JPG", "MVS02596.JPG", "ALI05373.JPG",
                                "ALI05142.JPG", "ALI05635.JPG", "ALI05708.JPG", "ALI05775.JPG"
                            ].map((img, i) => (
                                <div key={i} className={`aspect-square bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group ${i % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                                    <img
                                        src={`/events_images/${img}`}
                                        alt={`Event Gallery ${i + 1}`}
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                                        loading="eager"
                                        decoding="sync"
                                    />
                                </div>
                            ))}
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
