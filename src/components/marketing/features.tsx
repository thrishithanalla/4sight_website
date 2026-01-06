"use client";

import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";
import {
    ChartColumnBigIcon,
    DatabaseIcon,
    DownloadIcon,
    WandSparklesIcon,
    ZapIcon
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
        <div className="relative flex flex-col items-center justify-center w-full py-20">
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

                            <div className="flex flex-col gap-4 mb-4 z-20">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                        <WandSparklesIcon className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl text-foreground">AI-Powered Automation</h3>
                                </div>
                                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                                    Efficiently manage user data and interactions with advanced AI tools that adapt to your workflow.
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-end w-full mt-auto relative min-h-[140px] pb-4 z-20">
                                <div className="absolute bottom-[2px] w-[90%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0 opacity-50"></div>
                                <div className="absolute bottom-[10px] w-[85%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0 opacity-70"></div>
                                <div className="absolute bottom-[18px] w-[80%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0"></div>

                                <div className="bg-neutral-950 text-white rounded-xl p-3 flex shadow-2xl z-10 w-[85%] max-w-[240px] relative border border-neutral-800">
                                    <div className="bg-blue-600 rounded-lg p-2 mr-3 flex items-center justify-center h-10 w-10 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                                        <ZapIcon className="w-5 h-5 text-white" fill="currentColor" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 mb-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                            LIVE TRENDS
                                        </div>
                                        <div className="text-sm font-semibold leading-tight">Interaction Spike</div>
                                        <div className="text-[10px] text-neutral-400">Analysis complete</div>
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
                                        <ChartColumnBigIcon className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl text-foreground">Deep Analytics</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Gain deep insights into your audience and campaign performance.
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
                                        <DatabaseIcon className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-xl text-foreground">Data Management</h3>
                                </div>
                                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                                    Secure, scalable storage for all your critical business metrics.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 w-full mt-auto z-20 relative">
                                {[1, 2].map(i => (
                                    <div key={i} className="flex items-center gap-4 bg-background/50 border border-border/50 p-2.5 rounded-lg backdrop-blur-sm">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 shrink-0">
                                            <DownloadIcon className="w-4 h-4" />
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500/50 w-2/3 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Card 4 - Spans 3 columns (New Visual Card) */}
                <Container delay={0.4} className="col-span-1 md:col-span-3 w-full h-full">
                    <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 relative border border-transparent h-full min-h-[300px] overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        <div className="p-8 flex flex-col h-full relative z-10 text-white">
                            <h3 className="font-heading font-bold text-2xl mb-2">Ready to scale?</h3>
                            <p className="text-white/80 text-sm mb-6 max-w-xs">
                                Join thousands of companies using 4SightAI to power their growth.
                            </p>
                            <div className="mt-auto">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-between">
                                    <span className="font-medium">Get Started Now</span>
                                    <div className="h-8 w-8 rounded-full bg-white text-violet-600 flex items-center justify-center">
                                        <ZapIcon className="w-4 h-4 fill-current" />
                                    </div>
                                </div>
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
