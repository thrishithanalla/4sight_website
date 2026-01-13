
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap, Database, FlaskConical, TrendingUp, Search, Calendar, Rocket, Repeat, Cpu, ScanEye, Code2, Cloud, Server, HardDrive, ShieldCheck, Timer } from "lucide-react";

const BuildingPOC = () => {
    return (
        <div className="flex flex-col relative w-full">
            {/* Hero Section */}
            <Wrapper className="pt-20 pb-10 relative overflow-hidden">
                <Container>
                    <Container>
                        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 hover:border-blue-500/50 hover:bg-white/8 transition-all max-w-5xl mx-auto">
                            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto relative z-10">
                                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-6">
                                    Building GenAI POC
                                </h1>
                                <p className="text-xl md:text-2xl text-accent-foreground/90 font-medium mb-4">
                                    Proof of Concept Development
                                </p>
                                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                                    Rapid development and validation of Generative AI proof-of-concepts with agile prototyping and iterative testing to demonstrate feasibility and value.
                                </p>
                            </div>
                        </div>
                    </Container>
                </Container>
            </Wrapper>

            {/* Overview Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                            Accelerate AI Innovation
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            From concept to validated solution in weeks, not months
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full">
                            <Image
                                src="/images/building-poc.jpg"
                                alt="Building GenAI POC - Proof of Concept Development"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What is Building GenAI POC?</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Building GenAI POC is our specialized service for rapidly developing and validating Generative AI
                                proof-of-concepts. We combine agile development methodologies with deep AI expertise to transform
                                theoretical AI applications into tangible, working prototypes that demonstrate real business value.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our iterative approach ensures that each POC is not just technically feasible, but also aligned
                                with your business objectives, user needs, and scalability requirements, providing a clear path
                                to production deployment.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Service Components Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                            POC Development Framework
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Structured approach to rapid AI prototyping
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Rapid Prototyping</h3>
                            <p className="text-muted-foreground text-sm">
                                Agile development of functional AI prototypes using pre-trained models, custom fine-tuning,
                                and rapid iteration cycles to validate core hypotheses quickly.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Data Preparation & Integration</h3>
                            <p className="text-muted-foreground text-sm">
                                Comprehensive data pipeline development, quality assessment, and integration with existing
                                systems to ensure robust and reliable AI model performance.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <FlaskConical className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Iterative Testing & Validation</h3>
                            <p className="text-muted-foreground text-sm">
                                Rigorous testing protocols with performance metrics, user acceptance testing, and continuous
                                validation against predefined success criteria.
                            </p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                            <p className="text-muted-foreground text-sm">
                                Model optimization, scalability testing, and performance tuning to ensure production-ready
                                solutions that meet latency, accuracy, and cost requirements.
                            </p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* POC Process Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                            Our POC Development Process
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Agile methodology for rapid AI innovation
                        </p>
                    </div>

                    <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-8">Accelerated Innovation Framework</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Search className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Concept Validation</h4>
                                <p className="text-muted-foreground text-sm">Initial assessment of AI use case feasibility, data availability, and technical requirements through expert consultation.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Calendar className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Sprint Planning</h4>
                                <p className="text-muted-foreground text-sm">Agile sprint planning with defined deliverables, timelines, and success metrics for each development iteration.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Rocket className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Rapid Development</h4>
                                <p className="text-muted-foreground text-sm">Intensive development sprints focusing on core functionality, model training, and integration with minimal viable features.</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary/5 p-4 rounded-full mb-4">
                                    <Repeat className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-foreground">Testing & Iteration</h4>
                                <p className="text-muted-foreground text-sm">User testing, performance evaluation, and iterative improvements based on feedback and validation results.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Technology Stack Section */}
            <Wrapper className="py-20 relative">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                            Technology & Tools
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Cutting-edge AI technologies for rapid prototyping
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Cpu className="w-5 h-5 text-primary" /> Large Language Models
                            </h3>
                            <p className="text-muted-foreground text-sm">GPT-series, BERT, T5, and custom fine-tuned models for natural language processing and generation tasks.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <ScanEye className="w-5 h-5 text-primary" /> Computer Vision
                            </h3>
                            <p className="text-muted-foreground text-sm">YOLO, Detectron2, and Vision Transformers for image recognition, object detection, and visual understanding.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-primary" /> Machine Learning Frameworks
                            </h3>
                            <p className="text-muted-foreground text-sm">TensorFlow, PyTorch, and Hugging Face Transformers for rapid model development and deployment.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Cloud className="w-5 h-5 text-primary" /> Cloud AI Platforms
                            </h3>
                            <p className="text-muted-foreground text-sm">AWS SageMaker, Google Vertex AI, and Azure Machine Learning for scalable model training and inference.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <Server className="w-5 h-5 text-primary" /> MLOps Tools
                            </h3>
                            <p className="text-muted-foreground text-sm">MLflow, Kubeflow, and custom CI/CD pipelines for model versioning, monitoring, and automated deployment.</p>
                        </div>
                        <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-primary/30 transition-colors">
                            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                <HardDrive className="w-5 h-5 text-primary" /> Data Processing
                            </h3>
                            <p className="text-muted-foreground text-sm">Apache Spark, Dask, and custom ETL pipelines for large-scale data processing and feature engineering.</p>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* Benefits Section */}
            <Wrapper className="py-20 bg-muted/20">
                <Container>
                    <div className="flex flex-col items-center justify-center text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
                            Why Choose Our POC Development?
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Accelerate your AI journey with proven expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6" /> Risk Mitigation
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    POC development allows you to validate AI concepts before committing significant resources,
                                    reducing the risk of failed implementations and ensuring ROI on AI investments.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Timer className="w-6 h-6" /> Faster Time-to-Value
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our accelerated development process delivers working prototypes in weeks rather than months,
                                    enabling faster decision-making and competitive advantage.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <Code2 className="w-6 h-6" /> Technical Excellence
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Deep expertise in AI technologies combined with practical implementation experience ensures
                                    that your POC is built on solid technical foundations.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6" /> Scalable Solutions
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    POC designs consider scalability from the outset, providing a clear path from prototype
                                    to production deployment without requiring complete redevelopment.
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
                        <Link href="/services">
                            <Button size="lg" variant="outline" className="px-8">View All Services</Button>
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        </div>
    );
};

export default BuildingPOC;
