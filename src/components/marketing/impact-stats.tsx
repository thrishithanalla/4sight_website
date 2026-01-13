"use client";

import React, { useRef } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import NumberFlow from "@number-flow/react";
import { useInView } from "framer-motion";

const STATS = [
    {
        label: "Industries",
        value: 7,
    },
    {
        label: "Deployments",
        value: 2,
    },
    {
        label: "In Works",
        value: 3,
    },
    {
        label: "In Blueprinting",
        value: 2,
    },
    {
        label: "In Discussions",
        value: 1,
    },
    {
        label: "Research Hours",
        value: 10000,
    },
    {
        label: "AI Productivity Increase (%)",
        value: 60,
    },
];

const ImpactStats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="relative w-full py-20 bg-background text-foreground">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                            Our Impact
                        </h2>
                        <p className="text-muted-foreground text-base leading-6 max-w-2xl">
                            Delivering measurable results across industries
                        </p>
                    </div>

                    <div
                        ref={ref}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
                    >
                        {STATS.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 py-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300"
                            >
                                <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                                    <NumberFlow
                                        value={isInView ? stat.value : 0}
                                        trend={0} // Disable trend color
                                        format={{
                                            useGrouping: true // Enable 10,000 formatting
                                        }}
                                    />
                                </span>
                                <span className="text-base leading-6 font-medium text-muted-foreground text-center">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default ImpactStats;
