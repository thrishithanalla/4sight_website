"use client";

import React, { useEffect } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const governmentProjects = [
    {
        id: 'ai4andhrapolice',
        title: 'AI 4 Andhra Police',
        desc: 'A comprehensive AI-powered initiative to modernize law enforcement in Andhra Pradesh. This project leverages data analytics, predictive modeling, and real-time monitoring to enhance public safety, optimize resource allocation, and improve response times.',
        img: '/gov_images/ai4andhrapolice.jpg',
        alt: 'AI 4 Andhra Police Initiative',
        route: '/government/ai4andhrapolice'
    },
    {
        id: 'cctv-analytics',
        title: 'CCTV Analytics',
        desc: 'Transforming passive surveillance into active intelligence. Our video analytics platform processes thousands of feeds in real-time to detect anomalies, track suspects, and assist law enforcement with edge-based computing.',
        img: '/gov_images/cctv-analytics.jpg',
        alt: 'CCTV Analytics Platform',
        route: '/government/cctv-analytics'
    },
    {
        id: 'event-governance',
        title: 'Event Governance',
        desc: 'An AI-powered, event-driven system designed to monitor, analyze, and respond to critical incidents in real time. It automates workflows and identifies the right authorities for rapid response.',
        img: '/gov_images/event-governance.png',
        alt: 'Event Governance Platform',
        route: '/government/event-governance'
    },
    {
        id: 'newsai360',
        title: 'NewsAI360',
        desc: 'Automated media intelligence platform that modernizes news monitoring. It collects and analyzes news from print and digital sources to ensure the right information reaches the right officials in real time.',
        img: '/gov_images/newsai360.jpg',
        alt: 'NewsAI360 Platform',
        route: '/government/newsai360'
    }
];

const GovernmentPage = () => {

    useEffect(() => {
        // Handle hash navigation
        if (typeof window !== 'undefined' && window.location.hash) {
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <Wrapper className="py-20 relative bg-background lg:!max-w-[90%]">
            <Container>
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-6">
                        Government Initiatives
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Empowering public sector transformation with cutting-edge AI solutions
                    </p>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-12 lg:gap-20 w-full mx-auto pb-20">
                    {governmentProjects.map((project, index) => (
                        <div
                            key={project.id}
                            id={project.id}
                            className="scroll-mt-40"
                        >
                            <div className="bg-card border border-border/50 p-8 lg:p-10 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>

                                    {/* Image Side */}
                                    <div className={`relative rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-auto lg:h-[300px] w-full ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                                        <Image
                                            src={project.img}
                                            alt={project.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`flex flex-col text-left ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-blue-500 mb-4">
                                            {project.title}
                                        </h2>
                                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                                            {project.desc}
                                        </p>
                                        <div>
                                            <Link
                                                href={project.route}
                                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                            >
                                                View Project Details <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Wrapper>
    );
};

export default GovernmentPage;
