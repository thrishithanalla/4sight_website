import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Intelligent marketing  <br /><span className="font-subheading italic">dashboard</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Gain detailed insights into your marketing performance and campaign metrics with our advanced analytics tools.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-3xl bg-card/40 backdrop-blur-xl relative border border-border/50 overflow-hidden group hover:border-blue-500/50 transition-all duration-500">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden relative z-10"
                        >
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors"></div>

                            <div className="space-y-6 relative z-20">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-blue-500/10">
                                            <TrendingUpIcon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        Campaign Insights
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Track your campaign performance with data-driven insights.
                                    </p>
                                </div>

                                <div className="space-y-4 bg-background/50 rounded-xl p-4 border border-border/50">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-bold tracking-tight">
                                                $12,834
                                            </div>
                                            <div className="text-sm text-emerald-500 flex items-center gap-1 mt-1 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full w-fit">
                                                <TrendingUpIcon className="w-3.5 h-3.5" />
                                                +25% growth
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                                <FilterIcon className="w-4 h-4 text-muted-foreground" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {[
                                            { name: "Sales", status: "Active", val: "45K", color: "bg-blue-500" },
                                            { name: "Emails", status: "Done", val: "28K", color: "bg-purple-500" },
                                            { name: "Ads", status: "Active", val: "62K", color: "bg-emerald-500" },
                                        ].map((item) => (
                                            <div key={item.name} className="flex items-center justify-between text-sm p-2 hover:bg-muted/50 rounded-lg transition-colors cursor-default group/item">
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                                                    <span className="font-medium text-foreground">{item.name}</span>
                                                </div>
                                                <div className="text-muted-foreground group-hover/item:text-foreground transition-colors">{item.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="rounded-3xl bg-card/40 backdrop-blur-xl relative border border-border/50 overflow-hidden group hover:border-violet-500/50 transition-all duration-500">
                        <MagicCard
                            gradientFrom="#a855f7"
                            gradientTo="#6366f1"
                            gradientColor="rgba(168,85,247,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden relative z-10"
                        >
                            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-violet-500/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-violet-500/30 transition-colors"></div>

                            <div className="space-y-6 relative z-20">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-violet-500/10">
                                            <FilterIcon className="w-5 h-5 text-violet-600" />
                                        </div>
                                        Audience Metrics
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Understand your audience behavior and engagement patterns.
                                    </p>
                                </div>

                                <div className="space-y-4 bg-background/50 rounded-xl p-4 border border-border/50">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-bold tracking-tight">84,392</div>
                                            <div className="text-sm text-blue-500 flex items-center gap-1 mt-1 font-medium bg-blue-500/10 px-2 py-0.5 rounded-full w-fit">
                                                <TrendingUpIcon className="w-3.5 h-3.5" />
                                                High engagement
                                            </div>
                                        </div>
                                    </div>

                                    {/* Abstract Visual Representation instead of table */}
                                    <div className="flex items-end justify-between h-32 w-full gap-2 pt-4">
                                        {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                                            <div key={i} className="w-full bg-muted/50 rounded-t-lg relative group/bar overflow-hidden">
                                                <div
                                                    style={{ height: `${h}%` }}
                                                    className="absolute bottom-0 w-full bg-gradient-to-t from-violet-500 to-indigo-400 opacity-80 group-hover/bar:opacity-100 transition-opacity rounded-t-lg"
                                                ></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between text-xs text-muted-foreground px-1">
                                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
