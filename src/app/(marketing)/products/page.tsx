"use client";

import React, { useEffect } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";

const productsData = [
    {
        id: 'ai-envelop',
        title: 'AI Envelop',
        desc: 'AI Envelop is our flagship enterprise AI infrastructure solution designed to seamlessly wrap around your existing systems and processes. Think of it as an intelligent layer that enhances every aspect of your operations without requiring a complete system overhaul.',
        img: '/ps_images/AI Envelope.png',
        alt: 'AI Envelop - Enterprise AI Infrastructure',
        route: '/products/ai-envelop'
    },
    {
        id: 'ai-copilot-consulting',
        title: 'AI Co-pilot (Consulting)',
        desc: 'The AI Co-pilot for Consulting is a specialized tool designed to augment the capabilities of consulting professionals. It serves as an intelligent assistant that helps consultants deliver deeper insights, faster analysis, and more strategic recommendations to their clients.',
        img: '/ps_images/AI Co-pilot Consulting.png',
        alt: 'AI Co-pilot for Consulting',
        route: '/products/ai-copilot-consulting'
    },
    {
        id: 'nutrition-copilot',
        title: 'Nutrition Co-Pilot',
        desc: 'Nutrition Co-Pilot is an AI-powered wellness platform that revolutionizes how individuals and healthcare providers approach nutrition and health management. This intelligent system provides personalized dietary recommendations based on individual health profiles, goals, and preferences.',
        img: '/ps_images/Nutrition CO-PILOT.png',
        alt: 'Nutrition Co-Pilot - Healthcare AI',
        route: '/products/nutrition-copilot'
    },
    {
        id: 'news-ai',
        title: 'News AI',
        desc: 'News AI is an intelligent news aggregation and analysis platform that transforms how organizations and individuals consume information. It goes beyond simple news feeds to provide curated, analyzed, and contextualized news insights tailored to your specific interests and needs.',
        img: '/ps_images/News AI.png',
        alt: 'News AI - Intelligent News Platform',
        route: '/products/news-ai'
    },
    {
        id: 'ai-copilot-police',
        title: 'AI Co-pilot (Police Department)',
        desc: 'The AI Co-pilot for Police Departments is a sophisticated public safety tool designed to enhance law enforcement capabilities while ensuring transparency and accountability. This system assists officers in data analysis, pattern recognition, resource allocation, and administrative tasks.',
        img: '/ps_images/AI CO-PILOT(Police).png',
        alt: 'AI Co-pilot for Police Department',
        route: '/products/ai-copilot-police'
    },
    {
        id: 'personal-finance-copilot',
        title: 'Personal Finance Co-pilot',
        desc: "The Personal Finance Co-pilot is an innovative AI-powered financial advisor designed specifically for Pocket FM's user base. This intelligent assistant helps users make informed financial decisions, manage budgets, track expenses, and plan for their financial future.",
        img: '/ps_images/Personal FInance Co-pilot.png',
        alt: 'Personal Finance Co-pilot',
        route: '/products/personal-finance-copilot'
    },
    {
        id: 'underworks',
        title: 'UnderWorks',
        desc: 'UnderWorks is a comprehensive AI-powered educational platform that brings together three specialized co-pilots designed to transform the academic experience: Study Buddy, Lab Technician Co-pilot, and Campus Co-pilot.',
        img: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=800&q=80',
        alt: 'UnderWorks - Education AI Suite',
        route: '/products/underworks'
    }
];

const ProductsPage = () => {

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
                            <div className="bg-card border border-border/50 p-8 lg:p-10 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center`}>

                                    {/* Image Side - Order swaps based on index */}
                                    <div className={`relative rounded-2xl overflow-hidden shadow-md aspect-video lg:aspect-auto lg:h-[300px] w-full ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                                        <Image
                                            src={product.img}
                                            alt={product.alt}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Side */}
                                    <div className={`flex flex-col text-left ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
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

export default ProductsPage;
