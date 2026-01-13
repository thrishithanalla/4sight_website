
"use client";

import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { MagicCard } from "@/components/ui/magic-card";
import {
    ChartColumnBigIcon,
    DatabaseIcon,
    DownloadIcon,
    WandSparklesIcon,
    ZapIcon,
    RocketIcon,
    Building2Icon,
    ShieldCheckIcon,
    RefreshCwIcon,
    UsersIcon
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
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                        Turning AI potential into enterprise reality.
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg mb-4 md:mb-6">
                        4SightAI is an Artificial Intelligence and Generative AI company that builds production-ready, large-scale AI platforms for governments and enterprises. We specialize in domain-specific Large Language Models (LLMs), AI agents, and real-time decision systems that move organizations beyond experimentation into real-world impact.
                    </p>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Led by experienced enterprise architects and AI practitioners, we help organizations transition from traditional software systems to AI-first and GenAI-driven operating models. Our end-to-end approach spans AI architecture, data foundations, governance, and deployment. Through our 4SightAI Accelerators, we provide up to 40% of the foundational building blocks required for GenAI projects—reducing time, cost, and risk while ensuring scalability and long-term value.
                    </p>
                </div>

                {/* Vision, Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full mb-12">
                    {/* Card 1: Vision */}
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[300px]">
                        <MagicCard
                            gradientFrom="#ffffff"
                            gradientTo="#a3a3a3"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(255,255,255,0.05)"
                        >
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-2">
                                    <WandSparklesIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">OUR VISION</h3>
                                </div>
                                <p className="text-muted-foreground text-base leading-6">
                                    To enable organizations and governments to operate intelligently, responsibly, and in real time by building AI-first systems that evolve from today’s GenAI capabilities toward future autonomous and decision-driven models.
                                </p>
                            </div>

                            <div className="w-full h-40 mt-auto">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <Line
                                            type="monotone"
                                            dataKey="val"
                                            stroke="#000000"
                                            strokeWidth={3}
                                            dot={(props) => {
                                                const { cx, cy, index } = props;
                                                if (index === 5) return <circle key={index} cx={cx} cy={cy} r={4} fill="#000000" stroke="white" strokeWidth={2} />;
                                                return <circle key={index} r={0} />;
                                            }}
                                        />
                                        <Tooltip
                                            cursor={{ stroke: '#000000', strokeWidth: 1, strokeDasharray: "4 4" }}
                                            content={<CustomTooltip />}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </MagicCard>
                    </div>

                    {/* Card 2: Mission */}
                    <div className="rounded-2xl bg-card relative border border-border/50 hover:border-border/100 transition-colors h-full min-h-[300px]">
                        <MagicCard
                            gradientFrom="#ffffff"
                            gradientTo="#a3a3a3"
                            className="p-6 w-full h-full flex flex-col justify-between"
                            gradientColor="rgba(255,255,255,0.05)"
                        >
                            <div className="flex flex-col gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <ChartColumnBigIcon className="w-5 h-5 text-foreground" />
                                    <h3 className="font-semibold text-lg text-foreground">OUR MISSION</h3>
                                </div>
                                <p className="text-muted-foreground text-base leading-6">
                                    To design, build, and scale production-grade AI and GenAI platforms by combining deep enterprise architecture expertise, reusable accelerators, and continuous innovation—helping customers move confidently from traditional applications to AI-powered operating models with measurable outcomes.
                                </p>
                            </div>

                            <div className="w-full h-40 mt-auto">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <Line
                                            type="monotone"
                                            dataKey="val"
                                            stroke="#000000"
                                            strokeWidth={3}
                                            dot={(props) => {
                                                const { cx, cy, index } = props;
                                                if (index === 5) return <circle key={index} cx={cx} cy={cy} r={4} fill="#000000" stroke="white" strokeWidth={2} />;
                                                return <circle key={index} r={0} />;
                                            }}
                                        />
                                        <Tooltip
                                            cursor={{ stroke: '#000000', strokeWidth: 1, strokeDasharray: "4 4" }}
                                            content={<CustomTooltip />}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </MagicCard>
                    </div>

                </div>

                {/* Core Values Section */}
                <div className="flex flex-col items-center justify-center w-full mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                        Our Core Values
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {[
                            {
                                title: "Production Over Promises",
                                icon: RocketIcon,
                                desc: "We prioritize real deployments, operational reliability, and measurable impact over experimentation and hype."
                            },
                            {
                                title: "Architecture Matters",
                                icon: Building2Icon,
                                desc: "Strong AI systems require solid foundations. We believe long-term success comes from robust architecture, data readiness, and governance."
                            },
                            {
                                title: "Responsible AI by Design",
                                icon: ShieldCheckIcon,
                                desc: "We build AI systems that are transparent, secure, and accountable—especially in mission-critical enterprise and government environments."
                            },
                            {
                                title: "Continuous Evolution",
                                icon: RefreshCwIcon,
                                desc: "AI is moving fast. We commit to continuous learning and adoption, ensuring our solutions remain current and future-ready."
                            },
                            {
                                title: "Partnership Mindset",
                                icon: UsersIcon,
                                desc: "We work as long-term partners, collaborating closely with customers and ecosystem players to co-create value and scale impact."
                            }
                        ].map((value, index) => (
                            <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-h-[250px] relative rounded-2xl bg-card border border-border/50 hover:border-border/100 transition-all duration-300">
                                <MagicCard
                                    gradientFrom="#ffffff"
                                    gradientTo="#a3a3a3"
                                    className="p-6 w-full h-full flex flex-col items-start gap-4"
                                    gradientColor="rgba(255,255,255,0.05)"
                                >
                                    <div className="p-3 rounded-xl bg-white/10 text-foreground mb-2">
                                        <value.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                                    <p className="text-muted-foreground text-base leading-6">
                                        {value.desc}
                                    </p>
                                </MagicCard>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners & Collaborations Section */}
                <div className="flex flex-col items-center justify-center w-full mt-20 max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                        Partners & Collaborations
                    </h2>

                    <div className="prose prose-invert max-w-none text-muted-foreground">
                        <p className="text-base md:text-lg text-center mb-8">
                            Collaboration is a core pillar of how 4SightAI builds and scales meaningful AI solutions. We work closely with industry partners, domain experts, technology providers, system integrators, research institutions, and public sector stakeholders to co-create production-ready GenAI platforms.
                        </p>

                        <p className="text-base md:text-lg text-center mb-12">
                            By combining partner domain expertise with our GenAI frameworks, accelerators, and enterprise-grade architecture, we enable faster innovation, reduced delivery risk, and scalable outcomes across industries. Our collaboration model supports co-innovation, shared solution development, and joint go-to-market efforts, ensuring that GenAI solutions are both technically robust and deeply aligned with real-world needs.
                        </p>

                        <div className="bg-card border border-border/50 rounded-2xl p-8 mb-12">
                            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">We actively collaborate across areas such as:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Enterprise platforms and business applications",
                                    "Industry-specific solutions (Real Estate, Automotive, Healthcare, Financial Services)",
                                    "Government, public safety, and citizen-centric systems",
                                    "Applied AI research and emerging GenAI technologies"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                                        <div className="mt-1">
                                            <div className="w-2 h-2 rounded-full bg-foreground"></div>
                                        </div>
                                        <span className="text-base leading-6">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-center font-medium text-foreground">
                            Whether you are bringing domain knowledge, technology platforms, or high-impact GenAI use cases, 4SightAI welcomes collaboration to jointly build next-generation AI solutions with long-term value.
                        </p>
                    </div>
                </div>
            </Container>
        </Wrapper>
    )
};

export default AboutPage;
