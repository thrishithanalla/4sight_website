"use client";

import React, { useEffect } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";

const productsData = [
    {
        id: 'ai4ap',
        title: 'AI4AndhraPolice',
        desc: 'A comprehensive AI initiative designed to modernize the Andhra Pradesh Police force. By integrating cutting-edge technologies into daily operations, we aim to enhance decision-making, improve response times, and build a proactive policing framework. Our advanced machine learning models facilitate real-time data analysis, predictive policing, and automated resource allocation. This system not only streamlines administrative tasks but also empowers officers on the ground with actionable intelligence. From intelligent surveillance networks to automated incident reporting, the AI4AndhraPolice initiative represents a paradigm shift in law enforcement. We are committed to fostering a safer environment through transparency, accountability, and technological innovation. The platform leverages natural language processing to digitize and index historical records, making them instantly searchable. Computer vision algorithms monitor traffic feeds to identify violations and optimize flow. Furthermore, our secure communication channels ensure inter-departmental coordination is seamless and encrypted. By continuously learning from new data, the system evolves to meet emerging threats and community needs effectively.',
        img: '/ps_images/AI CO-PILOT(Police).png',
        alt: 'AI4AndhraPolice',
        route: '/products/ai4ap'
    },
    {
        id: 'cctv',
        title: 'CCTV Analytics',
        desc: 'Transforming passive surveillance into active intelligence. Our video analytics platform processes thousands of feeds in real-time to detect anomalies and assist law enforcement. Features include facial recognition, license plate detection, and crowd behavior analysis. This system turns standard CCTV networks into proactive security tools that can identify threats before they escalate. With advanced pattern recognition, it can track suspects across the city, monitor traffic violations automatically, and alert authorities to suspicious unattended objects. The analytics engine runs on the edge to minimize latency and bandwidth usage, ensuring immediate alerts for critical events. By automating the monitoring process, we significantly reduce human error and fatigue, allowing operators to focus on verified incidents. The system also generates detailed reports and heatmaps to help identify long-term trends and optimize deployment strategies.',
        img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
        alt: 'CCTV Analytics',
        route: '/products/cctv'
    },
    {
        id: 'egp',
        title: 'Event Governance Platform',
        desc: 'The Event Governance Platform (EGP) is an AI-powered, event-driven system designed to monitor, analyze, and respond to critical incidents in real time. It ingests data from multiple sources such as cameras, sensors, IoT devices, and user reports, converts raw inputs into standardized events, and applies intelligence rules to detect risks and abnormal patterns. Once an event is identified, EGP automatically triggers predefined response workflows, identifies the right authorities based on location and role, and delivers alerts through appropriate communication channels. The platform enables fast, automated, and accountable governance for safety, security, and operational efficiency.',
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
        alt: 'Event Governance Platform',
        route: '/products/egp'
    },
    {
        id: 'news-ai',
        title: 'NewsAI360',
        desc: 'NewsAI360 is an AI-powered news intelligence platform by 4sightAI designed to modernize government news monitoring. It replaces manual newspaper clipping processes with an automated system that collects news from print, e-papers, and digital media. Using advanced AI and language models, the platform analyzes news for relevance, sentiment, and context, ensuring that the right information reaches the right officials in real time. NewsAI360 converts daily media coverage into structured, searchable intelligence, enabling faster awareness, better coordination, and informed decision-making across government departments.',
        img: '/ps_images/News AI.png',
        alt: 'NewsAI360 - Intelligent News Platform',
        route: '/products/news-ai'
    }
];

const ProductsPage2 = () => {

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
                        Our Products
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Cutting-edge AI technologies tailored for diverse enterprise needs
                    </p>
                </div>

                {/* Products List */}
                <div className="flex flex-col gap-12 lg:gap-20 w-full mx-auto pb-20">
                    {productsData.map((product, index) => (
                        <div
                            key={product.id}
                            id={product.id}
                            className="scroll-mt-40"
                        >
                            <div className="bg-card border border-border/50 p-8 lg:p-10 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/20 min-h-[500px] flex items-center">
                                <div className={`grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-center w-full`}>

                                    {/* Image Side - Order swaps based on index */}
                                    <div className={`relative rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-auto lg:h-[300px] w-full lg:col-span-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                                        <Image
                                            src={product.img}
                                            alt={product.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`flex flex-col text-left lg:col-span-3 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-blue-500 mb-4">
                                            {product.title}
                                        </h2>
                                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                                            {product.desc}
                                        </p>
                                        <div>
                                            <Link
                                                href={product.route}
                                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-lg transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                            >
                                                Learn More
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

export default ProductsPage2;
