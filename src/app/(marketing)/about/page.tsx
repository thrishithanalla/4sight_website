
"use client";

import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { MagicCard } from "@/components/ui/magic-card";
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

const AboutPage = () => {
    return (
        <Wrapper className="py-12 md:py-20 relative overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-12 md:mb-20 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-4 md:mb-6">
                        Welcome to 4sight AI - where the future of enterprise technology begins
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg mb-4 md:mb-6">
                        4sight AI is the brainchild of a dynamic team comprising ERP Industry Veterans, Visionary Product Developers, and seasoned Enterprise Consulting Professionals. Our collective mission to embark on an exhilarating journey of tapping into the boundless potential of AI. We're dedicated to transforming essential Enterprise processes into sleek, AI-driven tasks, unlocking the magic of Generative AI Processes, and laying the foundation for the awe-inspiring future of Enterprise Artificial General Intelligence (AGI).
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Join us on this extraordinary expedition into the frontiers of technology and innovation. Together, we're shaping the future of the Enterprise world with pioneering AI solutions that are nothing short of admirable.
                    </p>
                </div>

                {/* Vision, Mission, Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative w-full">
                    {/* Card 1: Vision */}
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[300px]">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <WandSparklesIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">OUR VISION</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    Efficiently manage user data and interactions with advanced AI tools
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-end w-full mt-auto relative min-h-[140px] pb-4">
                                <div className="absolute bottom-[2px] w-[90%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0 opacity-50"></div>
                                <div className="absolute bottom-[10px] w-[85%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0 opacity-70"></div>
                                <div className="absolute bottom-[18px] w-[80%] border-t border-dashed border-neutral-300 dark:border-neutral-700 z-0"></div>

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

                    {/* Card 2: Mission */}
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[300px]">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <ChartColumnBigIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">OUR MISSION</h3>
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

                    {/* Card 3: Values */}
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[300px]">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <DatabaseIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">OUR VALUES</h3>
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
                </div>
            </Container>
        </Wrapper>
    )
};

export default AboutPage;
