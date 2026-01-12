"use client";

import { useEffect, useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

interface Job {
    _id: string;
    title: string;
    location: string;
    job_type: string;
    experience: string;
    positions: number;
}

const CareersPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/jobs");
                if (res.ok) {
                    const data = await res.json();
                    setJobs(data);
                }
            } catch (error) {
                console.error("Failed to fetch jobs", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const [activeTab, setActiveTab] = useState<"US" | "India">("US");

    const usJobs = jobs.filter(job =>
        job.location.toLowerCase().includes("usa") ||
        job.location.toLowerCase().includes("us") ||
        job.location.toLowerCase().includes("united states")
    );

    const indiaJobs = jobs.filter(job =>
        job.location.toLowerCase().includes("india")
    );

    const currentJobs = activeTab === "US" ? usJobs : indiaJobs;

    const JobList = ({ jobs }: { jobs: Job[] }) => (
        <div className="flex flex-col space-y-0">
            {jobs.map((job) => (
                <div key={job._id} className="group border-b border-white/10 last:border-0 py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
                    <div className="flex-1 space-y-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            {job.title}
                        </h3>
                        <p className="text-muted-foreground text-base max-w-2xl line-clamp-2">
                            {(job as any).role_overview || job.experience}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <div className="flex items-center px-4 py-1.5 rounded-full border border-white/10 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 mr-2" />
                                {job.location}
                            </div>
                            <div className="flex items-center px-4 py-1.5 rounded-full border border-white/10 text-sm text-muted-foreground">
                                <Briefcase className="w-4 h-4 mr-2" />
                                {job.job_type}
                            </div>
                            <div className="flex items-center px-4 py-1.5 rounded-full border border-white/10 text-sm text-muted-foreground">
                                {job.positions} Positions
                            </div>
                        </div>
                    </div>

                    <Link
                        href={`/careers/${job._id}`}
                        className="flex items-center text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors shrink-0"
                    >
                        Apply <ArrowRight className="w-5 h-5 ml-2 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">
                        Careers at 4SightAI
                    </h1>
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center max-w-5xl mx-auto">
                        <p>
                            At 4SightAI, we are building the next generation of GenAI-powered applications and platforms for governments and enterprises. This is not an experimental lab or a services-only environment—we focus on real, production-grade GenAI systems that solve complex, mission-critical problems.
                        </p>
                        <p>
                            If you are passionate about Generative AI, modern application architecture, and building systems that actually go live, 4SightAI offers a unique opportunity to work at the intersection of AI innovation and real-world impact. Our teams work closely with customers, domain experts, and technology partners to design, build, and evolve GenAI applications that define the future of intelligent systems.
                        </p>
                        <p>
                            We are looking for motivated professionals who want to build, learn, and grow in a fast-moving GenAI-first environment.
                        </p>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {/* Region Filters */}
                        <div className="flex justify-center mb-12">
                            <div className="inline-flex bg-white/5 p-1 rounded-xl border border-white/10">
                                <button
                                    onClick={() => setActiveTab("US")}
                                    className={`px-8 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "US"
                                        ? "bg-blue-500 text-white shadow-lg"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    United States
                                </button>
                                <button
                                    onClick={() => setActiveTab("India")}
                                    className={`px-8 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "India"
                                        ? "bg-blue-500 text-white shadow-lg"
                                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    India
                                </button>
                            </div>
                        </div>

                        {/* Job List */}
                        {currentJobs.length > 0 ? (
                            <JobList jobs={currentJobs} />
                        ) : (
                            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-muted-foreground text-lg">
                                    Currently no open positions in {activeTab === "US" ? "the United States" : "India"}.
                                    <br />
                                    Please check back later or explore other regions.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </Container>
        </Wrapper>
    )
};

export default CareersPage;
