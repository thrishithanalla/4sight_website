"use client";

import { useEffect, useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Clock, Calendar } from "lucide-react";

interface Job {
    _id: string;
    title: string;
    location: string;
    job_type: string;
    experience: string;
    positions: number;
    compensation: string;
    role_overview: string;
    key_responsibilities: string;
    core_skills: string;
    highly_desirable: string;
    other_heading?: string;
    other_content?: string;
    created_at: string;
}

const JobDetailsPage = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!jobId) return;

        const fetchJob = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/jobs/${jobId}`);
                if (res.ok) {
                    const data = await res.json();
                    setJob(data);
                }
            } catch (error) {
                console.error("Failed to fetch job details", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [jobId]);

    if (loading) {
        return (
            <Wrapper className="py-20">
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            </Wrapper>
        );
    }

    if (!job) {
        return (
            <Wrapper className="py-20">
                <Container>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
                        <Link href="/careers" className="text-primary hover:underline">
                            Back to Careers
                        </Link>
                    </div>
                </Container>
            </Wrapper>
        );
    }

    return (
        <Wrapper className="py-20 relative">
            <Container>
                <Link href="/careers" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Careers
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                                {job.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 text-muted-foreground">
                                <div className="flex items-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {job.location}
                                </div>
                                <div className="flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2" />
                                    {job.job_type}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-5 h-5 mr-2" />
                                    {job.experience}
                                </div>
                                <div className="flex items-center">
                                    <span className="font-semibold text-foreground mr-2">{job.positions}</span> Openings
                                </div>
                                {job.compensation && (
                                    <div className="flex items-center text-green-400">
                                        {job.compensation}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-8 text-foreground/90 leading-relaxed">
                            {job.role_overview && (
                                <section>
                                    <h2 className="text-2xl font-semibold mb-4 text-foreground">Role Overview</h2>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="whitespace-pre-line">{job.role_overview}</p>
                                    </div>
                                </section>
                            )}

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-foreground">Key Responsibilities</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="whitespace-pre-line">{job.key_responsibilities}</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-foreground">Core Skills</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="whitespace-pre-line">{job.core_skills}</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold mb-4 text-foreground">Highly Desirable</h2>
                                <div className="prose prose-invert max-w-none">
                                    <p className="whitespace-pre-line">{job.highly_desirable}</p>
                                </div>
                            </section>

                            {job.other_heading && job.other_content && (
                                <section>
                                    <h2 className="text-2xl font-semibold mb-4 text-foreground">{job.other_heading}</h2>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="whitespace-pre-line">{job.other_content}</p>
                                    </div>
                                </section>
                            )}

                            <div className="pt-8 border-t border-white/10 mt-12 flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    Posted on {new Date(job.created_at).toLocaleDateString()}
                                </div>
                                <Link
                                    href={`mailto:careers@4sightai.com?subject=Application for ${job.title}`}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default JobDetailsPage;
