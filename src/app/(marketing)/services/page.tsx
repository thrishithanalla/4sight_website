"use client";

import React, { useEffect } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
    {
        id: 'genai-advisory',
        title: 'GenAI Advisory',
        desc: 'Strategic guidance to help you navigate the landscape of Generative AI. We work with your leadership to identify high-impact use cases, assess organizational readiness, and develop a roadmap for sustainable AI adoption.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        alt: 'Advisory',
        route: '#' // route: '/services/genai-advisory'
    },
    {
        id: 'project-scoping',
        title: 'Project Scoping & Blueprint',
        desc: 'Detailed execution plans, technical architectures, and requirements gathered to ensure your AI initiative starts on solid ground. We deliver comprehensive blueprints that minimize risk and clarify resource needs.',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        alt: 'Scoping',
        route: '#' // route: '/services/project-scoping'
    },
    {
        id: 'building-poc',
        title: 'Building GenAI POC',
        desc: 'Rapid prototypes to validate AI use cases before full investment. Our agile POC development process allows you to demonstrate value, test assumptions, and gather user feedback quickly.',
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        alt: 'POC',
        route: '#' // route: '/services/building-poc'
    },
    {
        id: 'genai-consulting',
        title: 'GenAI Consulting',
        desc: 'End-to-end support for your AI transformation journey. From model selection and fine-tuning to integration and change management, our consultants ensure your GenAI solutions deliver real business value.',
        img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        alt: 'Consulting',
        route: '#' // route: '/services/genai-consulting'
    }
];

const ServicesPage = () => {

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
                        Our Services
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Comprehensive GenAI expertise at every stage of your transformation journey
                    </p>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-12 lg:gap-20 w-full mx-auto pb-20">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="scroll-mt-40"
                        >
                            <div className="bg-card border border-border/50 p-8 lg:p-10 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>

                                    {/* Image Side - Order swaps based on index */}
                                    <div className={`relative rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-auto lg:h-[300px] w-full ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                                        <Image
                                            src={service.img}
                                            alt={service.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`flex flex-col text-left ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-blue-500 mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                                            {service.desc}
                                        </p>
                                        <div>
                                            <Link
                                                href={service.route}
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

export default ServicesPage;
