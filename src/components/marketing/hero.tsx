"use client";

import React from "react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Hero() {
    return (
        <div className="w-full bg-white flex flex-col lg:flex-row items-center justify-center px-4 lg:px-2 py-12 lg:pt-10 lg:pb-20 overflow-hidden relative text-gray-900">

            {/* LEFT CONTENT */}
            <Container className="w-full lg:w-1/2 lg:pr-32 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-8 max-w-[90%] lg:max-w-none">
                    <span className="text-xs font-bold text-blue-600 tracking-wide md:tracking-widest uppercase whitespace-normal md:whitespace-nowrap text-center lg:text-left break-words leading-relaxed">
                        Empowering Enterprises to harness the power of AI
                    </span>
                </div>

                <h1 className="text-[2.0rem] font-heading font-bold text-gray-900 !leading-tight tracking-tight mb-6">
                    4SightAI <br />
                </h1>

                <p className="text-gray-500 text-lg md:text-xl max-w-lg font-light leading-relaxed mb-8">
                    4Sight AI is an engineering-focused AI company helping organizations turn complex problems into scalable AI solutions.
                    <br className="hidden md:block" />
                    From Generative AI and LLM systems to enterprise-grade platforms, we build AI that integrates seamlessly into real business workflows.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link href="/contact">
                        <Button size="lg" className="rounded-full px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/20">
                            Explore Platform
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
            <Container className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative z-10">
                <div className="relative w-full max-w-[480px] aspect-square transform scale-100 lg:scale-110">
                    <svg
                        viewBox="0 0 520 520"
                        className="w-full h-full"
                    >
                        {/* OUTER CIRCLE */}
                        <circle
                            cx="260"
                            cy="260"
                            r="245"
                            fill="#ffffff"
                            stroke="#f3f4f6"
                            strokeWidth="1"
                        />
                        <circle
                            cx="260"
                            cy="260"
                            r="180"
                            fill="none"
                            stroke="#f9fafb"
                            strokeWidth="1"
                        />

                        {/* DIVIDERS */}
                        <line x1="260" y1="15" x2="260" y2="505" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="4 4" />
                        <line x1="15" y1="260" x2="505" y2="260" stroke="#f3f4f6" strokeWidth="2" strokeDasharray="4 4" />

                        {/* CENTER LLM */}
                        <circle cx="260" cy="260" r="75" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
                        <Network x={260} y={260} />

                        <text x="260" y="365" textAnchor="middle" className="text-[10px] fill-gray-400 font-semibold uppercase tracking-widest">
                            LLM — Model Layer
                        </text>

                        {/* VECTOR DB */}
                        <RingSystem x={385} y={135} />
                        <Label x={385} y={60} text="Vector DB — Semantic Index" />

                        {/* RAG */}
                        <RAGSystem x={135} y={135} />
                        <Label x={135} y={60} text="RAG — Retrieval & Reasoning" />

                        {/* LANGCHAIN */}
                        <Pipeline x={385} y={385} />
                        <Label x={385} y={455} text="Orchestration Layer" />

                        {/* LANGGRAPH */}
                        <FlowGraph x={135} y={385} />
                        <Label x={135} y={455} text="Control & Flow Layer" />
                    </svg>
                </div>
            </Container>
        </div>
    );
}

/* ---------------- COMPONENTS ---------------- */

interface PositionProps {
    x: number;
    y: number;
}

interface LabelProps extends PositionProps {
    text: string;
}

function Network({ x, y }: PositionProps) {
    const nodes = [
        [x, y - 35],
        [x - 30, y],
        [x + 30, y],
        [x, y + 35],
        [x - 22, y - 22],
        [x + 22, y - 22],
        [x - 22, y + 22],
        [x + 22, y + 22],
    ];

    return (
        <>
            {nodes.map(([nx, ny], i) => (
                <circle key={i} cx={nx} cy={ny} r="4" fill="#3b82f6" />
            ))}
            {nodes.map(([nx, ny], i) => (
                <line
                    key={`l-${i}`}
                    x1={x}
                    y1={y}
                    x2={nx}
                    y2={ny}
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                />
            ))}
        </>
    );
}

function RingSystem({ x, y }: PositionProps) {
    return (
        <>
            <circle cx={x} cy={y} r="45" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="30" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2 2" />
            {[...Array(8)].map((_, i) => (
                <circle
                    key={i}
                    cx={x + 30 * Math.cos((i * Math.PI) / 4)}
                    cy={y + 30 * Math.sin((i * Math.PI) / 4)}
                    r="4"
                    fill="#94a3b8"
                />
            ))}
        </>
    );
}

function RAGSystem({ x, y }: PositionProps) {
    return (
        <>
            <rect x={x - 25} y={y - 35} width="50" height="20" rx="4" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
            <rect x={x - 25} y={y - 10} width="50" height="20" rx="4" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
            <line x1={x} y1={y + 10} x2={x} y2={y + 40} stroke="#cbd5e1" strokeWidth="2" />
            <circle cx={x} cy={y + 50} r="12" fill="#fff" stroke="#3b82f6" strokeWidth="2" />
        </>
    );
}

function Pipeline({ x, y }: PositionProps) {
    return (
        <>
            {[0, 1, 2].map((i) => (
                <rect
                    key={i}
                    x={x - 40 + i * 30}
                    y={y - 15}
                    width="24"
                    height="30"
                    rx="6"
                    fill="#fff"
                    stroke="#e5e7eb"
                    strokeWidth="1.5"
                />
            ))}
            <line x1={x - 40} y1={y + 25} x2={x + 40} y2={y + 25} stroke="#cbd5e1" strokeWidth="2" />
        </>
    );
}

function FlowGraph({ x, y }: PositionProps) {
    const points = [
        [x, y - 30],
        [x - 30, y],
        [x + 30, y],
        [x, y + 30],
    ];

    return (
        <>
            {points.map(([px, py], i) => (
                <circle key={i} cx={px} cy={py} r="6" fill="#64748b" />
            ))}
            <line x1={x} y1={y - 30} x2={x - 30} y2={y} stroke="#94a3b8" strokeWidth="2" />
            <line x1={x} y1={y - 30} x2={x + 30} y2={y} stroke="#94a3b8" strokeWidth="2" />
            <line x1={x - 30} y1={y} x2={x} y2={y + 30} stroke="#94a3b8" strokeWidth="2" />
            <line x1={x + 30} y1={y} x2={x} y2={y + 30} stroke="#94a3b8" strokeWidth="2" />
        </>
    );
}

function Label({ x, y, text }: LabelProps) {
    return (
        <text
            x={x}
            y={y}
            textAnchor="middle"
            className="text-[10px] fill-gray-400 font-medium uppercase tracking-widest"
        >
            {text}
        </text>
    );
}
