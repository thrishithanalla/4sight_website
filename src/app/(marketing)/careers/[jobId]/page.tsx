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
  const res = await fetch("http://localhost:8000/api/jobs");
  const jobs: Job[] = await res.json();

  return jobs.map((job) => ({
    jobId: job._id,
  }));
}

export default async function JobDetailsPage({
  params,
}: {
  params: { jobId: string };
}) {
  const res = await fetch(
    `http://localhost:8000/api/jobs/${params.jobId}`
  );

  if (!res.ok) {
    return <div>Job not found</div>;
  }

  const job: Job = await res.json();

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
