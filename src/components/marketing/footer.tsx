import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <span className="text-base md:text-lg font-medium text-foreground">
                                4sightAI
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                            AI-powered platform that transforms your marketing workflow in seconds.
                        </p>
                    </div>
                </Container>

                <div className="md:grid md:grid-cols-5 md:gap-8 mt-16 xl:col-span-2 xl:mt-0">
                    <Container delay={0.1} className="h-auto">
                        <h3 className="text-base font-medium text-foreground">
                            Government
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                            <li>
                                <Link href="/government/ai4andhrapolice" className="link hover:text-foreground transition-all duration-300">
                                    AI for Andhra Police
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/government/cctv-analytics" className="link hover:text-foreground transition-all duration-300">
                                    CCTV Analytics
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/government/event-governance" className="link hover:text-foreground transition-all duration-300">
                                    Event Governance
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/government/newsai360" className="link hover:text-foreground transition-all duration-300">
                                    NewsAI360
                                </Link>
                            </li>
                        </ul>
                    </Container>
                    <Container delay={0.1} className="h-auto">
                        <h3 className="text-base font-medium text-foreground">
                            Products
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                            <li className="mt-2">
                                <Link href="/products/ai-envelop" className="link hover:text-foreground transition-all duration-300">
                                    AI Envelop
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/products/ai-copilot-consulting" className="link hover:text-foreground transition-all duration-300">
                                    AI Co-pilot (Consulting)
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/products/nutrition-copilot" className="link hover:text-foreground transition-all duration-300">
                                    Nutrition Co-Pilot
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/products/news-ai" className="link hover:text-foreground transition-all duration-300">
                                    News AI
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/products/ai-copilot-police" className="link hover:text-foreground transition-all duration-300">
                                    AI Co-pilot (Police)
                                </Link>
                            </li>
                        </ul>
                    </Container>
                    <Container delay={0.2} className="h-auto">
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium text-foreground">
                                Services
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li>
                                    <Link href="/services/genai-advisory" className="link hover:text-foreground transition-all duration-300">
                                        GenAI Advisory
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/services/project-scoping" className="link hover:text-foreground transition-all duration-300">
                                        Project Scoping
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/services/building-poc" className="link hover:text-foreground transition-all duration-300">
                                        Building GenAI POC
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/services/genai-consulting" className="link hover:text-foreground transition-all duration-300">
                                        GenAI Consulting
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Container>

                    <Container delay={0.3} className="h-auto">
                        <h3 className="text-base font-medium text-foreground">
                            Socials
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                            <li className="mt-2">
                                <Link href="https://www.linkedin.com/company/4sight-ai/posts/?feedView=all" target="_blank" className="link hover:text-foreground transition-all duration-300">
                                    LinkedIn
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://www.instagram.com/_4sightai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="link hover:text-foreground transition-all duration-300">
                                    Instagram
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                    Facebook
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://x.com/_4sightai?s=21" target="_blank" className="link hover:text-foreground transition-all duration-300">
                                    Twitter
                                </Link>
                            </li>
                        </ul>
                    </Container>
                    <Container delay={0.4} className="h-auto">
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium text-foreground">
                                Company
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4">
                                <li>
                                    <Link href="/about" className="link hover:text-foreground transition-all duration-300">
                                        About Us
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="#" className="link hover:text-foreground transition-all duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/terms" className="link hover:text-foreground transition-all duration-300">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </div >

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} 4sightAI. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer >
    )
};

export default Footer
