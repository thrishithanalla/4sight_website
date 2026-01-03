
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Target, TrendingUp, Wallet, LineChart } from "lucide-react";

const PersonalFinanceCopilot = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            Personal Finance Co-Pilot
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            AI-Powered Financial Guidance
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Intelligent personal finance assistant providing personalized financial planning, investment recommendations, and wealth management insights.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Intelligent Financial Intelligence
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transform your financial future with AI-powered guidance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
                                alt="Personal Finance Co-Pilot - AI-Powered Financial Guidance"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is Personal Finance Co-Pilot?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Personal Finance Co-Pilot is an advanced AI-powered financial assistant designed to democratize
                                access to sophisticated financial planning and investment strategies. This intelligent platform
                                combines machine learning, financial analytics, and behavioral economics to provide personalized
                                financial guidance that adapts to your unique circumstances and goals.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Whether you're saving for retirement, planning major purchases, or optimizing your investment portfolio,
                                Personal Finance Co-Pilot serves as your intelligent financial partner, making complex financial concepts
                                accessible and actionable.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Key Features Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Key Features
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Advanced capabilities for intelligent financial management
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Personalized Financial Planning</h3>
                            <p className="text-muted-foreground text-sm">
                                AI-driven financial planning tailored to your income, expenses, goals, risk tolerance, and
                                life stage for optimal wealth accumulation and protection.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Investment Intelligence</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced portfolio analysis, asset allocation recommendations, and market timing insights
                                based on historical data, economic indicators, and predictive modeling.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expense Optimization</h3>
                            <p className="text-muted-foreground text-sm">
                                Intelligent expense tracking and categorization with automated savings recommendations,
                                budget optimization, and spending pattern analysis.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <LineChart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Financial Forecasting</h3>
                            <p className="text-muted-foreground text-sm">
                                Predictive financial modeling that forecasts future cash flows, retirement readiness,
                                and long-term wealth accumulation based on current trajectories.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Financial Intelligence Engine Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Financial Intelligence Engine
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Powered by advanced AI and financial analytics
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Core Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Risk Assessment</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive risk profiling and tolerance analysis with dynamic portfolio rebalancing recommendations based on market conditions.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Tax Optimization</h4>
                                <p className="text-muted-foreground text-sm">Intelligent tax planning and optimization strategies including deduction identification, tax-loss harvesting, and retirement account recommendations.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Goal Tracking</h4>
                                <p className="text-muted-foreground text-sm">Automated progress tracking for financial goals with milestone alerts, adjustment recommendations, and achievement probability calculations.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Market Intelligence</h4>
                                <p className="text-muted-foreground text-sm">Real-time market analysis with sentiment tracking, economic indicator monitoring, and automated alerts for significant market events.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Use Cases Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
                            Financial Applications
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transforming personal finance across life stages
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Retirement Planning", desc: "Comprehensive retirement analysis with savings projections, Social Security optimization, and withdrawal strategies for sustainable retirement income." },
                            { title: "Investment Management", desc: "Automated portfolio management with rebalancing, dividend reinvestment, and tax-efficient investment strategies tailored to your risk profile." },
                            { title: "Debt Management", desc: "Intelligent debt consolidation and payoff strategies with interest rate analysis, payment optimization, and debt elimination roadmaps." },
                            { title: "Education Funding", desc: "College savings planning with 529 plan optimization, scholarship matching, and education cost inflation projections for future planning." },
                            { title: "Estate Planning", desc: "Integrated estate planning with inheritance projections, beneficiary optimization, and wealth transfer strategy recommendations." },
                            { title: "Tax Planning", desc: "Year-round tax planning with deduction identification, tax bracket optimization, and year-end tax strategy recommendations." }
                        ].map((useCase, idx) => (
                            <div key={idx} className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                                <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
                                <p className="text-muted-foreground text-sm">{useCase.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Personal Finance Co-Pilot Matters
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Empowering financial confidence and wealth building
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Democratized Expertise</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Personal Finance Co-Pilot makes sophisticated financial planning accessible to everyone,
                                    not just high-net-worth individuals. Advanced algorithms provide the same level of analysis
                                    that previously required expensive financial advisors.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Behavioral Finance Integration</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Understanding of behavioral biases and emotional decision-making helps overcome common
                                    financial pitfalls, leading to more rational and successful financial behaviors.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Continuous Optimization</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    The AI continuously learns from your financial patterns and market conditions, providing
                                    increasingly personalized and accurate recommendations over time.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Proactive Financial Health</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Early warning systems and predictive analytics help identify potential financial issues
                                    before they become problems, enabling proactive rather than reactive financial management.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* CTA Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mb-6">
                            Take Control of Your Finances
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8">
                            Discover how Personal Finance Co-Pilot can transform your financial future. Start your journey to financial freedom today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Get Started</Button>
                            </Link>
                            <Link href="/products">
                                <Button size="lg" variant="outline" className="px-8">View All Products</Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default PersonalFinanceCopilot;
