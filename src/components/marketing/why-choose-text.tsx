import React from 'react';
import Container from '../global/container';
import { MagicCard } from '../ui/magic-card';
import { ScrollArea } from '../ui/scroll-area';

const WhyChooseText = () => {
    return (
        <div className="relative w-full pb-20 pt-10">
            <Container className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-0">
                <div className="rounded-3xl bg-card relative border border-border/50 hover:border-border/100 transition-colors w-full overflow-hidden group shadow-sm">
                    <MagicCard
                        gradientFrom="#38bdf8"
                        gradientTo="#3b82f6"
                        className="p-8 md:p-10 w-full flex flex-col relative z-10"
                        gradientColor="rgba(59,130,246,0.05)"
                    >
                        {/* <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-foreground">
                            Why Choose <span className="text-blue-600">4SightAI</span>
                        </h3> */}

                        <ScrollArea className="h-[400px] w-full pr-4">
                            <div className="flex flex-col gap-6 text-muted-foreground">
                                <p className="text-muted-foreground text-base leading-6">
                                    In an era where many organizations claim to “do AI” but struggle to deliver production-ready, end-to-end AI systems, <strong className="font-medium text-foreground">4SightAI</strong> stands apart by focusing on real deployments, measurable outcomes, and long-term AI architecture. Our strength lies not in experimentation alone, but in building comprehensive, scalable, and enterprise-grade GenAI solutions that operate reliably in real-world environments.
                                </p>

                                <p className="text-muted-foreground text-base leading-6">
                                    4SightAI is led by seasoned enterprise architects and AI practitioners with deep expertise across traditional enterprise systems and modern Generative AI. This dual perspective allows us to understand—and successfully execute—the complex transition from conventional applications to the GenAI → AGI era. We do not treat GenAI as a standalone feature; we design it as a foundational capability, integrated with data, workflows, governance, security, and operational processes.
                                </p>

                                <p className="text-muted-foreground text-base leading-6">
                                    Over time, we have distilled this experience into a set of proven best practices, reusable building blocks, and architectural patterns that dramatically reduce risk and time-to-value for GenAI initiatives. Our <strong className="font-medium text-foreground">4SightAI Accelerators</strong> typically contribute up to 40% of the foundational components required for any GenAI project—covering AI infrastructure, data readiness, prompt frameworks, agent design, evaluation mechanisms, and governance—allowing clients to focus on high-impact, domain-specific innovation rather than rebuilding fundamentals.
                                </p>

                                <p className="text-muted-foreground text-base leading-6">
                                    In a rapidly evolving AI landscape, our deep industry awareness and continuous technology benchmarking ensure that we stay aligned with the latest GenAI tools, models, and platforms. More importantly, we translate these advancements into practical, cost-effective solutions, passing on both innovation benefits and efficiency gains to our customers.
                                </p>

                                <p className="text-muted-foreground text-base leading-6">
                                    For organizations that aspire to be first movers—those willing to lead their industries with meaningful GenAI use cases rather than follow trends—<strong className="font-medium text-foreground">4SightAI</strong> is not just a vendor, but a long-term AI transformation partner committed to building systems that are production-ready today and future-proof for tomorrow.
                                </p>
                            </div>
                        </ScrollArea>
                    </MagicCard>
                </div>
            </Container>
        </div>
    );
};

export default WhyChooseText;
