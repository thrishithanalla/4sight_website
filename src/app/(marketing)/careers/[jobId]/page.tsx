import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";

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

/**
 * 🔥 REQUIRED for static export
 */
export async function generateStaticParams() {
    try {
        const res = await fetch("http://127.0.0.1:8000/api/jobs");

        // If backend is down or returns error, skip static generation for dynamic routes
        if (!res.ok) {
            console.warn("Backend offline or error during build. Skipping static generation for /careers/[jobId].");
            return [];
        }

        const jobs: Job[] = await res.json();

        return jobs.map((job) => ({
            jobId: job._id,
        }));
    } catch (error) {
        console.warn("Backend offline (fetch failed). Skipping static generation for /careers/[jobId].");
        return [];
    }
}

export default async function JobDetailsPage({
    params,
}: {
    params: { jobId: string };
}) {
    // In production/static export, this might not run if params weren't generated, 
    // but if we do client-side navigation to a page that wasn't pre-rendered, 
    // we need to handle the fetch gracefully or rely on client-side fetching.
    // For 'output: export', this component runs at build time for known params.

    let job: Job | null = null;

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/jobs/${params.jobId}`);
        if (res.ok) {
            job = await res.json();
        }
    } catch (e) {
        console.warn("Could not fetch job at build time", e);
    }

    if (!job) {
        // Fallback UI if job is not found (or backend down during build)
        return <div>Job details not available locally. Please try again later.</div>;
    }

    return (
        <Wrapper className="py-20">
            <Container>
                <Link href="/careers" className="flex items-center gap-2 mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Careers
                </Link>

                <h1 className="text-4xl font-bold mb-4">{job.title}</h1>

                <div className="flex gap-6 mb-8 text-muted-foreground">
                    <span className="flex items-center gap-2">
                        <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                        <Briefcase size={16} /> {job.job_type}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock size={16} /> {job.experience}
                    </span>
                </div>

                <p className="whitespace-pre-line">{job.role_overview}</p>
            </Container>
        </Wrapper>
    );
}
