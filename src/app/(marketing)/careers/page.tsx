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
                const res = await fetch("http://localhost:8004/api/jobs");
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

    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8">
                        Explore exciting opportunities to work on cutting-edge AI technologies.
                    </p>


                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : jobs.length > 0 ? (
                    <div className="flex flex-col space-y-0">
                        {jobs.map((job) => (
                            <div key={job._id} className="group border-b border-white/10 last:border-0 py-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                        {job.title}
                                    </h3>
                                    {/* Using experience as the description text since description field was removed */}
                                    <p className="text-muted-foreground text-base max-w-2xl line-clamp-2">
                                        {job.experience}
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
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-muted-foreground text-lg">
                            Currently there are no openings. Please check back later.
                        </p>
                    </div>
                )}
            </Container>
        </Wrapper>
    )
};

export default CareersPage;
