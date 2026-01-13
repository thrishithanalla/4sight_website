"use client";

import React, { useState, useEffect } from "react";
import Container from "../global/container";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Ben Pines",
        role: "CMO at Elementor",
        quote: "4SightAI is a great solution for adding intelligent automation to your site. The list of features are impressive, and there is a great and helpful team of developers behind this solid platform.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    {
        id: 2,
        name: "Raelene Morey",
        role: "Founder at Words By Birds",
        quote: "I've worked with a lot of different AI tools and I can honestly say 4SightAI is the BEST solution for Enterprise. It's powerful, yet so much fun to use. The free version has more features than other premium tools!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
    {
        id: 3,
        name: "Daniel Pataki",
        role: "CTO at Kinsta",
        quote: "No matter what you want to accomplish, I can heartily recommend the free version. It already provides more functionality than any other AI plugin — even many premium ones.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        role: "VP of Product at TechFlow",
        quote: "The scalability of 4SightAI is unmatched. We integrated it into our existing workflow in days, not months. The ROI was visible almost immediately.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
        }),
    };

    return (
        <section className="py-20 relative overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <Container>
                <div className="flex flex-col items-center justify-center text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Trusted and Loved by The World's Best
                    </h2>
                    <p className="text-muted-foreground text-base leading-6 max-w-2xl">
                        We're honored that some of the most talented designers and developers out there work with 4SightAI — and you can too.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
                    {/* Navigation Buttons - Desktop */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/50 hover:bg-background/80 text-foreground backdrop-blur-sm transition-all hidden md:flex items-center justify-center border border-border/50 shadow-lg hover:border-primary/50"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/50 hover:bg-background/80 text-foreground backdrop-blur-sm transition-all hidden md:flex items-center justify-center border border-border/50 shadow-lg hover:border-primary/50"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>

                    {/* Mobile Scroll View (Horizontal) */}
                    <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="min-w-[85vw] snap-center h-full">
                                <div className="bg-card/50 backdrop-blur-sm text-card-foreground rounded-2xl p-8 shadow-sm border border-border/50 h-full flex flex-col items-center text-center">
                                    <div className="relative w-16 h-16 mx-auto mb-4">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            width={64}
                                            height={64}
                                            className="rounded-full object-cover border-2 border-background shadow-md"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-1 rounded-full shadow-sm">
                                            <Quote className="w-2.5 h-2.5 fill-current" />
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground text-base leading-6 italic mb-4 flex-1">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-muted-foreground text-base leading-6 font-medium">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Carousel Area */}
                    <div className="hidden md:flex relative h-[400px] md:h-[350px] overflow-hidden items-center justify-center">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute w-full max-w-3xl"
                            >
                                <div className="bg-card/50 backdrop-blur-sm text-card-foreground rounded-2xl p-8 md:p-10 shadow-2xl mx-4 text-center border border-border/50">
                                    <div className="relative w-20 h-20 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                                        <Image
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover border-4 border-background shadow-lg"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-1.5 rounded-full shadow-md">
                                            <Quote className="w-3 h-3 fill-current" />
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-base leading-6 italic mb-6">
                                        "{testimonials[currentIndex].quote}"
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-bold text-foreground">
                                            {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-muted-foreground text-base leading-6 font-medium mt-1">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Pagination Dots */}
                    <div className="hidden md:flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "bg-primary scale-125"
                                    : "bg-primary/20 hover:bg-primary/40"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
