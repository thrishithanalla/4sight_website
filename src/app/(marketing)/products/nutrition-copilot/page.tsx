import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    TargetIcon,
    ActivityIcon,
    BrainIcon,
    SmartphoneIcon,
    UtensilsIcon,
    CalendarIcon,
    LineChartIcon,
    TrendingUpIcon
} from "lucide-react";

const NutritionCopilotPage = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                            Nutrition Co-Pilot
                        </h1>
                        <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                            AI-Powered Nutrition Guidance
                        </p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Intelligent nutrition guidance that provides personalized dietary recommendations and health insights for wellness enterprises.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Intelligent Nutrition Intelligence
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transform wellness with AI-powered nutrition guidance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/nutrition-copilot.jpg"
                                alt="Nutrition Co-Pilot - AI-Powered Nutrition Guidance"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is Nutrition Co-Pilot?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Nutrition Co-Pilot is an advanced AI-powered nutrition guidance system designed specifically for wellness enterprises.
                                This intelligent platform combines cutting-edge machine learning, nutritional science, and personalized medicine
                                to provide comprehensive dietary recommendations and health insights.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Whether you're a nutritionist, wellness coach, or healthcare provider, Nutrition Co-Pilot serves as your intelligent
                                partner in delivering personalized nutrition plans that optimize health outcomes and client satisfaction.
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
                            Advanced capabilities for personalized nutrition guidance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TargetIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                            <p className="text-muted-foreground text-sm">
                                AI-driven dietary recommendations tailored to individual health profiles, preferences, goals, and
                                medical conditions for optimal nutrition outcomes.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <ActivityIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Health Data Integration</h3>
                            <p className="text-muted-foreground text-sm">
                                Seamless integration with wearable devices, health apps, and medical records to provide comprehensive
                                health insights and nutrition correlations.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <BrainIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Machine Learning Insights</h3>
                            <p className="text-muted-foreground text-sm">
                                Advanced ML algorithms that learn from nutritional outcomes, adapt recommendations over time,
                                and predict health trends based on dietary patterns.
                            </p>
                        </div>
                        {/* Feature 4 */}
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <SmartphoneIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Multi-Platform Access</h3>
                            <p className="text-muted-foreground text-sm">
                                Accessible across web, mobile, and desktop platforms with real-time synchronization and
                                collaborative features for healthcare teams.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Nutrition Intelligence Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Nutrition Intelligence Engine
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Powered by advanced AI and nutritional science
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8 text-center md:text-left">Core Capabilities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <UtensilsIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Nutrient Analysis</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive analysis of macronutrients, micronutrients, and nutritional density with real-time tracking and optimization.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <CalendarIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Meal Planning</h4>
                                <p className="text-muted-foreground text-sm">Intelligent meal planning algorithms that consider dietary restrictions, preferences, and health goals for optimal nutrition.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <LineChartIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Health Correlations</h4>
                                <p className="text-muted-foreground text-sm">Advanced correlation analysis between dietary patterns and health outcomes, enabling predictive nutrition interventions.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4 text-primary">
                                    <TrendingUpIcon className="w-8 h-8" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Progress Tracking</h4>
                                <p className="text-muted-foreground text-sm">Comprehensive progress monitoring with biometric correlations, goal achievement tracking, and adaptive recommendations.</p>
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
                            Wellness Applications
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Transforming nutrition guidance across wellness domains
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Weight Management", desc: "Personalized weight loss or gain plans with sustainable dietary recommendations, progress tracking, and metabolic optimization." },
                            { title: "Sports Nutrition", desc: "Athlete-specific nutrition plans optimizing performance, recovery, and body composition for competitive and recreational athletes." },
                            { title: "Medical Nutrition Therapy", desc: "Therapeutic nutrition plans for managing chronic conditions like diabetes, hypertension, and gastrointestinal disorders." },
                            { title: "Preventive Wellness", desc: "Proactive nutrition strategies for disease prevention, immune system support, and long-term health optimization." },
                            { title: "Maternal & Child Nutrition", desc: "Specialized nutrition guidance for pregnancy, lactation, infant feeding, and pediatric nutritional development." },
                            { title: "Senior Nutrition", desc: "Age-appropriate nutrition plans addressing sarcopenia, bone health, cognitive function, and chronic disease management." }
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
                            Why Nutrition Co-Pilot Matters
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Revolutionizing nutrition guidance and wellness outcomes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Personalized Precision</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nutrition Co-Pilot analyzes individual genetic factors, medical history, lifestyle, and preferences to create
                                    truly personalized nutrition plans. This precision approach leads to better adherence and superior health outcomes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Evidence-Based Intelligence</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Built on the latest nutritional science and continuously updated with new research, Nutrition Co-Pilot ensures
                                    that recommendations are always current and backed by scientific evidence.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3">Scalable Expertise</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Nutrition Co-Pilot makes expert-level nutritional guidance accessible to wellness practitioners of all experience levels,
                                    enabling them to provide sophisticated nutrition services at scale.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">Continuous Learning</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    The AI continuously learns from user outcomes and feedback, improving recommendations over time and adapting
                                    to new nutritional research and individual response patterns.
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
                        <Link href="/products">
                            <Button size="lg" variant="outline" className="px-8">View All Products</Button>
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default NutritionCopilotPage;
