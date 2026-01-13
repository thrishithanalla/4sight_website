import JobDetailsClient from "./JobDetailsClient";

interface Job {
    _id: string;
}

export async function generateStaticParams() {
    try {
        const res = await fetch("http://127.0.0.1:8000/api/jobs");
        if (!res.ok) {
            console.warn("Failed to fetch jobs for static params");
            return [];
        }
        const jobs: Job[] = await res.json();
        return jobs.map((job) => ({
            jobId: job._id,
        }));
    } catch (error) {
        console.warn("Backend offline, skipping static param generation");
        return [];
    }
}

export default function JobDetailsPage() {
    return <JobDetailsClient />;
}
