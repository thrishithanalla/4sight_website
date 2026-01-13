"use client";

import React from "react";
import Container from "../global/container";
import {
    HeartPulse,
    GraduationCap,
    Building2,
    TrendingUp,
    Activity,
    School,
    Landmark,
    BarChart3,
    Briefcase,
    Handshake,
    Clapperboard,
    Radio
} from "lucide-react";

// List: Education, Healthcare, Consulting, Government, Finance, Media
const useCases = [
    {
        id: "education",
        title: "Education",
        icon: GraduationCap,
        secondaryIcon: School,
        description: "Personalized learning paths and automated grading",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
    },
    {
        id: "healthcare",
        title: "Healthcare",
        icon: HeartPulse,
        secondaryIcon: Activity,
        description: "AI-driven diagnostics and patient care optimization",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
    },
    {
        id: "consulting",
        title: "Consulting",
        icon: Briefcase,
        secondaryIcon: Handshake,
        description: "Strategic AI implementation and workflow optimization",
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
    },
    {
        id: "government",
        title: "Government",
        icon: Building2,
        secondaryIcon: Landmark,
        description: "Efficient public services and data management",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        id: "finance",
        title: "Finance",
        icon: TrendingUp,
        secondaryIcon: BarChart3,
        description: "Predictive market analysis and fraud detection",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
    },
    {
        id: "media",
        title: "Media",
        icon: Clapperboard,
        secondaryIcon: Radio,
        description: "Content generation, analysis, and trend verification",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
];

const UseCases = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center text-center mb-8 md:mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Our Usecases
                    </h2>
                    <p className="text-muted-foreground text-base leading-6 max-w-2xl">
                        Transforming diverse industries with specialized AI solutions tailored for impact and efficiency.
                    </p>
                </div>

                {/* Container: Scaled down to 600px */}
                <div className="relative w-full max-w-[600px] mx-auto h-[600px] hidden md:flex items-center justify-center">

                    {/* Circle Backgrounds - Scaled down */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[450px] h-[450px] rounded-full border border-dashed border-border/50 animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-border/30" />
                    </div>

                    {/* Central Hub - Scaled down */}
                    <div className="relative z-20 w-32 h-32 rounded-full bg-background border-2 border-primary/20 shadow-[0_0_50px_rgba(37,99,235,0.15)] flex items-center justify-center p-4">
                        <div className="text-center">
                            <span className="block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-violet-500">
                                6+
                            </span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                Industries
                            </span>
                        </div>
                    </div>

                    {/* Circular Nodes - Explicit Math Positioning with reduced radius */}
                    <div className="absolute inset-0">
                        {useCases.map((useCase, index) => {
                            const totalItems = useCases.length;
                            const radius = 230; // Reduced radius for 600px container

                            // Angle in radians. Start at -PI/2 (Top)
                            const angle = (index / totalItems) * 2 * Math.PI - (Math.PI / 2);

                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            return (
                                <div
                                    key={useCase.id}
                                    className="absolute flex flex-col items-center group cursor-pointer"
                                    style={{
                                        // Center the pivot point
                                        left: "50%",
                                        top: "50%",
                                        // Translate by Radius (x, y) AND center the element itself (-50%, -50%)
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                    }}
                                >
                                    <NodeCard useCase={useCase} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile View Replacement (Stacked) */}
                <div className="grid grid-cols-1 gap-6 md:hidden mt-8">
                    {useCases.map((useCase) => (
                        <div key={useCase.id} className={`p-6 rounded-2xl border ${useCase.border} ${useCase.bg} flex items-center gap-4`}>
                            <div className={`p-3 rounded-full bg-background border ${useCase.border} ${useCase.color}`}>
                                <useCase.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className={`font-bold text-lg ${useCase.color}`}>{useCase.title}</h3>
                                <p className="text-muted-foreground text-base leading-6">{useCase.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

const NodeCard = ({ useCase }: { useCase: any }) => (
    <div className="relative flex flex-col items-center w-48 text-center z-30 transition-all duration-300 hover:scale-110">
        <div className={`w-14 h-14 rounded-2xl ${useCase.bg} border ${useCase.border} flex items-center justify-center mb-2 shadow-lg backdrop-blur-sm group-hover:shadow-${useCase.color}/20 transition-all duration-300`}>
            <useCase.icon className={`w-7 h-7 ${useCase.color}`} />
        </div>
        <div className="bg-background/80 backdrop-blur-md border border-border/50 px-3 py-1.5 rounded-xl shadow-sm">
            <h3 className="font-bold text-sm whitespace-nowrap">{useCase.title}</h3>
        </div>

        {/* Hover Description Tooltip */}
        <div className="absolute top-full mt-2 w-48 p-3 rounded-xl bg-popover border border-border shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
            <p className="text-muted-foreground text-base leading-6">{useCase.description}</p>
        </div>
    </div>
);

export default UseCases;
