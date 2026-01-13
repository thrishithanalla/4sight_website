import EditJobClient from "./EditJobClient";

interface Job {
    _id: string;
}

export async function generateStaticParams() {
    try {
        const res = await fetch("http://127.0.0.1:8000/api/jobs");
        if (!res.ok) {
            console.error("Failed to fetch jobs for static params");
            return [{ jobId: "missing-job-fallback" }];
        }
        const jobs: Job[] = await res.json();
        return jobs.map((job) => ({
            jobId: job._id,
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [{ jobId: "missing-job-fallback" }];
    }
}

export default function Page() {
    return <EditJobClient />;
}
