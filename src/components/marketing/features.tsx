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

            <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 mt-8 relative w-full px-4 xl:px-0 max-w-6xl mx-auto snap-x snap-mandatory scroll-pl-4 pb-4 md:pb-0 scrollbar-hide">

                {/* Card 1 */}
                <Container delay={0.1} className="min-w-[85vw] md:min-w-0 snap-center">
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <WandSparklesIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">Feature 1</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Efficiently manage user data and interactions with advanced AI tools
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-end w-full mt-auto relative min-h-[140px] pb-4">
                                {/* Dashed lines / stacks */}
                                <div className="absolute bottom-[2px] w-[90%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0 opacity-50"></div>
                                <div className="absolute bottom-[10px] w-[85%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0 opacity-70"></div>
                                <div className="absolute bottom-[18px] w-[80%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0"></div>

                                {/* Main Card */}
                                <div className="bg-neutral-950 text-white rounded-xl p-3 flex shadow-xl z-10 w-[85%] max-w-[240px] relative">
                                    <div className="bg-blue-600 rounded-lg p-2 mr-3 flex items-center justify-center h-10 w-10 shrink-0">
                                        <ZapIcon className="w-5 h-5 text-white" fill="currentColor" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-400 mb-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            NEW
                                        </div>
                                        <div className="text-sm font-semibold leading-tight">Top trends</div>
                                        <div className="text-[10px] text-neutral-400">Today, 10:25</div>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Card 2 */}
                <Container delay={0.2} className="min-w-[85vw] md:min-w-0 snap-center">
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <ChartColumnBigIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">Feature 2</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Gain deep insights into your audience and campaign performance
                                </p>
                            </div>

                            <div className="w-full h-40 mt-auto">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <Line
                                            type="monotone"
                                            dataKey="val"
                                            stroke="#2563eb"
                                            strokeWidth={3}
                                            dot={(props) => {
                                                const { cx, cy, index } = props;
                                                if (index === 5) return <circle key={index} cx={cx} cy={cy} r={4} fill="#2563eb" stroke="white" strokeWidth={2} />;
                                                return <circle key={index} r={0} />;
                                            }}
                                        />
                                        <Tooltip
                                            cursor={{ stroke: '#2563eb', strokeWidth: 1, strokeDasharray: "4 4" }}
                                            content={<CustomTooltip />}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                                <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
                                    <span>-5</span><span>0</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                {/* Card 3 */}
                <Container delay={0.3} className="min-w-[85vw] md:min-w-0 snap-center">
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <DatabaseIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">Feature 3</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Manage your data with ease and efficiency
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 w-full mt-auto px-2 pb-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white shrink-0">
                                            <DownloadIcon className="w-4 h-4" />
                                        </div>
                                        <div className="h-2.5 w-full bg-foreground/80 rounded-full opacity-80"></div>
                                    </div>
                                ))}
                            </div>
                        </MagicCard>
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
