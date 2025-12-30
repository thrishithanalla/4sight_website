import React from 'react';
import { cn } from "@/lib";
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Wrapper from '../global/wrapper';
import Container from '../global/container';

// --- Data Definitions ---

const WHY_CHOOSE_ITEMS = [
    {
        id: "analytics",
        title: "Intelligent Analytics",
        label: "Insights",
        desc: "Gain real-time insights into your operations with our advanced AI-driven analytics platform. Make data-driven decisions with confidence.",
        gradient: "from-blue-500 to-cyan-400",
        link: "#",
        linkText: "Learn more",
    },
    {
        id: "automation",
        title: "Automated Workflows",
        label: "Efficiency",
        desc: "Streamline your business processes by automating repetitive tasks with 99.9% accuracy. Reduce errors and save valuable time.",
        gradient: "from-purple-500 to-pink-500",
        link: "#",
        linkText: "Discover Automation",
    },
    {
        id: "security",
        title: "Secure Infrastructure",
        label: "Security",
        desc: "Enterprise-grade security ensuring your data remains protected while leveraging the power of cloud AI. Compliance and safety first.",
        gradient: "from-orange-500 to-amber-400",
        link: "#",
        linkText: "View Security",
    },
];

const PRODUCT_ITEMS = [
    {
        id: "vision-ai",
        title: "Vision AI",
        label: "Computer Vision",
        desc: "Advanced image and video recognition capabilities for security monitoring, quality control, and visual data analysis.",
        gradient: "from-indigo-500 to-blue-500",
        link: "#",
        linkText: "Explore Vision AI",
    },
    {
        id: "nlp-core",
        title: "NLP Core",
        label: "Natural Language",
        desc: "Sophisticated natural language processing engine for sentiment analysis, document processing, and automated customer support interaction.",
        gradient: "from-green-500 to-emerald-400",
        link: "#",
        linkText: "Explore NLP Core",
    },
    {
        id: "predictive-suite",
        title: "Predictive Suite",
        label: "Forecasting",
        desc: "Predict market trends and customer behavior with our predictive modeling tools, giving your business a strategic advantage.",
        gradient: "from-rose-500 to-red-400",
        link: "#",
        linkText: "Explore Predictive Suite",
    },
    {
        id: "data-mesh",
        title: "Data Mesh",
        label: "Infrastructure",
        desc: "A decentralized data architecture that allows you to manage and scale your data ecosystem effortlessly across your enterprise.",
        gradient: "from-cyan-500 to-teal-400",
        link: "#",
        linkText: "Explore Data Mesh",
    },
    {
        id: "decision-engine",
        title: "Decision Engine",
        label: "Decisioning",
        desc: "Automate complex decision-making processes with our explainable AI engine, ensuring transparency and reliability in every outcome.",
        gradient: "from-violet-500 to-purple-400",
        link: "#",
        linkText: "Explore Decision Engine",
    },
];

const SERVICE_ITEMS = [
    {
        id: "consulting",
        title: "AI Consulting",
        label: "Strategy",
        desc: "Expert guidance to help you identify AI opportunities, define your strategy, and build a roadmap for successful implementation.",
        gradient: "from-yellow-500 to-orange-400",
        link: "#",
        linkText: "View Consulting",
    },
    {
        id: "integration",
        title: "System Integration",
        label: "Deployment",
        desc: "Seamlessly integrate our AI solutions with your existing IT infrastructure, ensuring minimal disruption and maximum performance.",
        gradient: "from-lime-500 to-green-400",
        link: "#",
        linkText: "View Integration",
    },
    {
        id: "custom-dev",
        title: "Custom Development",
        label: "Engineering",
        desc: "Tailor-made AI models and applications designed specifically to meet your unique business requirements and challenges.",
        gradient: "from-fuchsia-500 to-pink-400",
        link: "#",
        linkText: "View Custom Dev",
    },
    {
        id: "managed-services",
        title: "Managed Services",
        label: "Support",
        desc: "Ongoing support, monitoring, and maintenance of your AI systems to ensure they operate at peak efficiency 24/7.",
        gradient: "from-sky-500 to-indigo-400",
        link: "#",
        linkText: "View Managed Services",
    },
    {
        id: "training",
        title: "Training & Enablement",
        label: "Education",
        desc: "Empower your team with the skills and knowledge needed to leverage AI tools effectively through our comprehensive training programs.",
        gradient: "from-red-500 to-orange-400",
        link: "#",
        linkText: "View Training",
    },
];


// --- Types ---

interface Item {
    id: string;
    title: string;
    label: string;
    desc: string;
    gradient: string;
    link: string;
    linkText: string;
}

// --- Components ---

const StackingCard = ({ item, index }: { item: Item, index: number }) => {
    const isAlternate = index % 2 !== 0;

    return (
        <div
            className="sticky top-24 lg:top-32 w-full mb-10"
            style={{
                zIndex: index + 10,
            }}
        >
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12 rounded-3xl border border-border bg-card shadow-2xl overflow-hidden min-h-[400px]">
                {/* Card Items Content */}
                <div className={cn(
                    "flex flex-col justify-center gap-6 order-2 z-10",
                    isAlternate ? "lg:order-2" : "lg:order-1"
                )}>
                    <div className="flex items-center gap-4">
                        {item.label && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                {item.label}
                            </span>
                        )}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground">
                        {item.title}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {item.desc}
                    </p>
                    {item.link && (
                        <Link href={item.link} className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
                            {item.linkText} <ArrowRightIcon className="size-4" />
                        </Link>
                    )}
                </div>

                {/* Abstract Visuals */}
                <div className={cn(
                    "relative order-1 flex items-center justify-center min-h-[250px] lg:min-h-full rounded-2xl overflow-hidden bg-muted/30",
                    isAlternate ? "lg:order-1" : "lg:order-2"
                )}>
                    <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-br", item.gradient)} />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={cn("w-32 h-32 lg:w-48 lg:h-48 rounded-full blur-2xl opacity-40 animate-pulse bg-gradient-to-tr", item.gradient)} />
                        <div className={cn("absolute w-20 h-20 lg:w-32 lg:h-32 rounded-full blur-xl opacity-60 bg-gradient-to-bl", item.gradient)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SectionHeader = ({ title, description }: { title: string, description: string }) => (
    <div className="flex flex-col items-center justify-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl">
            {description}
        </p>
    </div>
);

const StackingCards = () => {
    return (
        <section className="relative w-full bg-background/50">
            {/* Why Choose Section */}
            <div className="py-20">
                <Wrapper className="lg:!max-w-[90%]">
                    <Container>
                        <SectionHeader
                            title="Why Choose 4sight AI?"
                            description="Discover how our cutting-edge technology can transform your enterprise operations."
                        />
                        <div className="relative flex flex-col gap-4 pb-10">
                            {WHY_CHOOSE_ITEMS.map((item, index) => (
                                <StackingCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </div>

            {/* Products Section */}
            <div className="py-20 bg-muted/20">
                <Wrapper className="lg:!max-w-[90%]">
                    <Container>
                        <SectionHeader
                            title="Our Products"
                            description="A comprehensive suite of AI tools designed to empower your business intelligence."
                        />
                        <div className="relative flex flex-col gap-4 pb-10">
                            {PRODUCT_ITEMS.map((item, index) => (
                                <StackingCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </div>

            {/* Services Section */}
            <div className="py-20">
                <Wrapper className="lg:!max-w-[90%]">
                    <Container>
                        <SectionHeader
                            title="Our Services"
                            description="End-to-end support and consulting to ensure your AI journey is a success from day one."
                        />
                        <div className="relative flex flex-col gap-4 pb-10">
                            {SERVICE_ITEMS.map((item, index) => (
                                <StackingCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </Container>
                </Wrapper>
            </div>
        </section>
    );
};

export default StackingCards;
