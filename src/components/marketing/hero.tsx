import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">

            <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">
                <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                    <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-4 text-foreground/70" />
                        <Icons.circle2 className="size-1 text-foreground/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative hidden lg:block overflow-hidden">
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-8">
                            <span className="text-sm font-medium text-muted-foreground">
                                Empowering Enterprises to harness the power of AI
                            </span>
                        </div>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto tracking-tight relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70">
                                Welcome to
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient-x bg-[length:200%_auto]">
                                4sight AI
                            </span>
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                            Where the future of enterprise technology begins
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link href="/contact" className="flex items-center gap-2 group">
                                <Button size="lg" className="h-12 px-8 text-base rounded-full bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                                    Start Your Journey
                                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                    <Container delay={0.3} className="relative">
                        <div className="relative p-2 mt-20 max-w-6xl mx-auto">
                            {/* Improved Gradient Effects */}
                            <div className="absolute top-1/2 left-1/2 -z-10 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-400 w-3/4 lg:w-[90%] -translate-x-1/2 h-64 -translate-y-1/2 blur-[5rem] lg:blur-[12rem] animate-pulse opacity-40"></div>
                            <div className="absolute top-1/2 left-1/2 -z-20 bg-gradient-to-br from-fuchsia-500 to-indigo-500 w-1/2 -translate-x-1/2 h-80 -translate-y-1/2 blur-[8rem] opacity-30"></div>

                            {/* Glassmorphism accent */}
                            <div className="hidden lg:block absolute inset-0 bg-background/5 backdrop-blur-[1px] rounded-full border border-white/5 opacity-20 pointer-events-none"></div>
                        </div>
                    </Container>

                </div>
            </div>
        </div>
    )
};

export default Hero
