"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import HeroDiagram from "./hero-diagram";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollZoomHero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 20]);
    const x = useTransform(scrollYProgress, [0, 0.5], ["0%", "-300%"]); // Move left as it scales to keep center or just simple width expansion?

    // Simpler approach: Width expansion
    // output range needs to be strict percentages for width
    const imageWidth = useTransform(scrollYProgress, [0, 0.6], ["25%", "100%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const textX = useTransform(scrollYProgress, [0, 0.4], ["0%", "-50%"]);
    const imageX = useTransform(scrollYProgress, [0, 0.6], ["0%", "0%"]); // Keep it anchored right or expand left?

    // Improving the "Zoom" feel:
    // Scale starts at 1, goes to maybe 1.5 or just fills viewport.
    // User asked: "image should be zoomed to max"

    return (
        // The container needs scrolling space
        <div ref={targetRef} className="h-[250vh] relative">
            <div className="sticky top-0 h-screen w-full flex overflow-hidden bg-white">

                {/* Text Section: Starts at 75% width */}
                <motion.div
                    style={{ opacity: textOpacity, x: textX }}
                    className="w-[75%] h-full flex flex-col justify-center items-center px-12 z-10"
                >
                    <div className="max-w-5xl flex flex-col items-center text-center">
                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-200 bg-gray-100 mb-6">
                            <span className="text-xs font-bold text-gray-700 tracking-wide uppercase">
                                Empowering Enterprises to harness the power of AI
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground !leading-tight tracking-tight mb-6">
                            4SightAI
                        </h1>

                        <p className="text-muted-foreground text-base md:text-lg max-w-4xl text-center mb-8 text-balance">
                            4SightAI is an Artificial Intelligence and Generative AI company that builds large-scale, domain-specific AI platforms for governments and enterprises, specializing in Large Language Models (LLMs), AI agents, and real-time decision systems. The company develops Government-grade LLMs for Police and Real-Time Governance, while also delivering enterprise AI solutions that embed GenAI into core business workflows to improve productivity, intelligence, and operational efficiency. With strong capabilities across AI architecture, data engineering, and applied GenAI, 4SightAI delivers end-to-end solutions—from master data standardization and AI infrastructure to workflow-driven copilots and autonomous agents—enabling organizations to transition from traditional analytics to AI-driven, real-time, and outcome-focused operating models.
                        </p>

                        <div className="flex gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-8 py-6 bg-black hover:bg-neutral-800 text-white font-semibold text-base shadow-lg shadow-black/20">
                                    Contact Us
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="ghost" size="lg" className="rounded-full px-6 py-6 text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-medium text-base">
                                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Image/Diagram Section: Starts at 25% width, expands to 100% */}
                <motion.div
                    style={{ width: imageWidth }}
                    className="h-full bg-slate-50 flex items-center justify-center relative z-20 overflow-hidden border-l border-gray-100"
                >
                    <div className="w-full h-full relative flex items-center justify-center">
                        {/* We can scale the content inside so it looks like "Zooming in" */}
                        <motion.div
                            style={{ scale: useTransform(scrollYProgress, [0, 0.6], [0.8, 1.5]) }}
                            className="w-full max-w-[800px] aspect-square"
                        >
                            <HeroDiagram />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
