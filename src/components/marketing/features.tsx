"use client";

import Container from "../global/container";
import Link from "next/link";
import { MagicCard } from "../ui/magic-card";
import {
    ChartColumnBigIcon,
    DatabaseIcon,
    DownloadIcon,
    WandSparklesIcon,
    ZapIcon,
    Brain,
    Rocket,
    Handshake,
    Users
} from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
    { val: -2 },
    { val: 2 },
    { val: 5 },
    { val: 3 },
    { val: 10 },
    { val: 18 },
    { val: 25 },
];

const Features = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full pt-4 pb-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Why Choose <br /><span className="font-subheading italic">4SightAI</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Transform your marketing with AI-powered automation. Create campaigns faster, generate better content, and make smarter decisions in minutes.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8 relative w-full px-4 xl:px-0 max-w-6xl mx-auto pb-4 md:pb-0">

                {/* Card 1 - Spans 4 columns */}
                <Container delay={0.1} className="col-span-1 md:col-span-4 w-full h-full">
                    <div className="rounded-3xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[320px] overflow-hidden group">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-8 w-full h-full flex flex-col justify-between relative z-10"
                            gradientColor="rgba(59,130,246,0.05)"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full relative z-20">
                                <div className="flex flex-col justify-center gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                            <Brain className="w-5 h-5 text-blue-500" />
                                        </div>
                                        <h3 className="font-heading font-semibold text-xl text-foreground">Human-Centered GenAI Co-Pilots</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                                        4SightAI builds GenAI co-pilots that take over repetitive and time-intensive tasks—freeing professionals to focus on creativity, strategy, and meaningful work while improving overall work-life balance.
                                    </p>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 backdrop-blur-sm shadow-sm">
                                        <p className="text-muted-foreground text-sm leading-relaxed italic">
                                            "We co-create domain-specific GenAI solutions alongside industry partners, delivering practical, high-impact use cases tailored to real business challenges."
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </MagicCard>
                    </div>
                </Container>

                {/* Card 2 - Spans 2 columns */}
                <Container delay={0.2} className="col-span-1 md:col-span-2 w-full h-full">
                    <div className="rounded-3xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[320px] overflow-hidden group">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#ec4899"
                            className="p-8 w-full h-full flex flex-col justify-between relative z-10"
                            gradientColor="rgba(168,85,247,0.05)"
                        >
                            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex flex-col gap-4 mb-4 z-20">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                        <Rocket className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl text-foreground">Faster Proof-of-Value</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Demonstrate real outcomes quickly with rapid PoC creation that helps secure stakeholder confidence and enables smooth transitions.
                                </p>
                            </div>

                            <div className="w-full h-32 mt-auto z-20 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <Line
                                            type="monotone"
                                            dataKey="val"
                                            stroke="#a855f7"
                                            strokeWidth={3}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Card 3 - Spans 3 columns */}
                <Container delay={0.3} className="col-span-1 md:col-span-3 w-full h-full">
                    <div className="rounded-3xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[300px] overflow-hidden group">
                        <MagicCard
                            gradientFrom="#10b981"
                            gradientTo="#14b8a6"
                            className="p-8 w-full h-full flex flex-col justify-between relative z-10"
                            gradientColor="rgba(16,185,129,0.05)"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex flex-col gap-4 mb-8 z-20">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                        <Handshake className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl text-foreground">Trusted Partner</h3>
                                </div>
                                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                                    From technology selection and cost optimization to governance and adoption, 4SightAI guides enterprises end-to-end through their GenAI journey.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Card 4 - Spans 3 columns (New Visual Card) */}
                <Container delay={0.4} className="col-span-1 md:col-span-3 w-full h-full">
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 relative border border-transparent h-full min-h-[300px] overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        <div className="p-8 flex flex-col h-full relative z-10 text-white">
                            <h3 className="font-heading font-bold text-2xl mb-2">Rapid Collaboration</h3>
                            <p className="text-white/80 text-sm mb-6 max-w-xs">
                                Have a GenAI idea? Our collaborative approach allows organizations to quickly turn concepts into scalable solutions using our proven frameworks.
                            </p>
                            <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                <Link href="/careers" className="flex-1 group/btn">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 h-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                        <span className="font-medium text-sm">Join us</span>
                                    </div>
                                </Link>
                                <Link href="/contact" className="flex-1 group/btn">
                                    <div className="bg-white text-violet-600 rounded-xl p-3 h-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
                                        <span className="font-medium text-sm font-bold flex items-center gap-2">
                                            Share ideas <Users className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    )
};

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-background border border-border p-2 rounded-lg shadow-sm text-xs text-foreground">
                {payload[0].value}
            </div>
        );
    }
    return null;
};

export default Features
