import JobDetailsClient from "./JobDetailsClient";

interface Job {
    _id: string;
}

// Generate segments for [jobId]
// Safe fallback for static export (if active)
export async function generateStaticParams() {
    return [];
}

export default function JobDetailsPage() {
    return <JobDetailsClient />;
}
