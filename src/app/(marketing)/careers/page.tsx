"use client";

import { useEffect, useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

interface Job {
    _id: string;
    title: string;
    department: string;
    location: string;
    job_type: string;
    experience: string;
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

    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Explore exciting opportunities to work on cutting-edge AI technologies.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : jobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <Link href={`/careers/${job._id}`} key={job._id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex flex-col h-full">
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium mb-3">
                                            {job.department}
                                        </span>
                                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                                            {job.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-2 mb-6 flex-grow">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Briefcase className="w-4 h-4 mr-2" />
                                            {job.job_type}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4 mr-2" />
                                            {job.experience}
                                        </div>
                                    </div>

                                    <div className="flex items-center text-sm font-medium text-blue-500 mt-auto">
                                        View Details
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
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
