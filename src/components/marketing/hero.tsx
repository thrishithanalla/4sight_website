"use client";

import React from "react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import HeroDiagram from "./hero-diagram";

export default function Hero() {
    return (
        <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-center px-4 lg:px-12 pt-6 lg:pt-0 pb-0 overflow-x-clip overflow-y-visible relative text-gray-900">

            {/* LEFT CONTENT */}
            <Container className="w-full lg:w-[45%] lg:pr-16 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6 max-w-[90%] lg:max-w-none">
                    <span className="text-xs font-bold text-blue-600 tracking-wide md:tracking-widest uppercase whitespace-normal md:whitespace-nowrap text-center lg:text-left break-words leading-relaxed">
                        Empowering Enterprises to harness the power of AI
                    </span>
                </div>

                <h1 className="text-[2.0rem] lg:text-[2.5rem] font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 !leading-tight tracking-tight mb-4">
                    4SightAI <br />
                </h1>

                <p className="text-muted-foreground text-lg md:text-xl max-w-lg font-light leading-relaxed mb-6">
                    4Sight AI is an engineering-focused AI company helping organizations turn complex problems into scalable AI solutions.
                    <br className="hidden md:block" />
                    From Generative AI and LLM systems to enterprise-grade platforms, we build AI that integrates seamlessly into real business workflows.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link href="/contact">
                        <Button size="lg" className="rounded-full px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/20">
                            Contact Us
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost" size="lg" className="rounded-full px-6 py-6 text-gray-600 hover:text-gray-900 hover:bg-gray-100 font-medium text-base">
                            Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </Container>


            {/* RIGHT ILLUSTRATION */}
            <Container className="w-full lg:w-[55%] flex justify-center mt-8 lg:mt-0 relative z-10">
                <div className="relative w-full max-w-[1000px] aspect-[12/7] transform scale-90 lg:scale-100 origin-center">
                    <HeroDiagram />
                </div>
            </Container>
        </div>
    );
}
