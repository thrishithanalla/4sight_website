"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, Clock, Upload, Loader2, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

const JobDetailsClient = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(true);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        address: "",
        why_hire_me: "",
        linkedin_url: "",
        github_url: "",
    });
    const [resume, setResume] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!jobId) return;

        const fetchJob = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
                const res = await fetch(`${API_URL}/api/jobs/${jobId}`);
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

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!job) return;
        if (!resume) {
            setErrorMessage("Please upload your resume.");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage("");

        const data = new FormData();
        data.append("job_id", job._id);
        data.append("job_title", job.title);
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("experience", formData.experience);
        data.append("address", formData.address);
        data.append("why_hire_me", formData.why_hire_me);
        data.append("linkedin_url", formData.linkedin_url);
        data.append("github_url", formData.github_url);
        data.append("resume", resume);

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const res = await fetch(`${API_URL}/api/applications`, {
                method: "POST",
                body: data,
            });

            if (res.ok) {
                setIsSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    experience: "",
                    address: "",
                    why_hire_me: "",
                    linkedin_url: "",
                    github_url: "",
                });
                setResume(null);
            } else {
                setErrorMessage("Failed to submit application. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-10">
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
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="rounded-full px-8 border-white/20 hover:bg-white/10"
                                    onClick={() => document.getElementById('job-description')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Read Description
                                </Button>

                                <Dialog open={open} onOpenChange={setOpen}>
                                    <DialogTrigger asChild>
                                        <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 font-semibold text-white">
                                            Apply Now
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border text-foreground">
                                        <DialogHeader>
                                            <DialogTitle>Apply for {job.title}</DialogTitle>
                                            <DialogDescription>
                                                Fill out the form below to submit your application.
                                            </DialogDescription>
                                        </DialogHeader>

                                        {isSuccess ? (
                                            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                                                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center">
                                                    <CheckCircle className="h-8 w-8 text-green-500" />
                                                </div>
                                                <h3 className="text-xl font-semibold">Application Received!</h3>
                                                <p className="text-muted-foreground max-w-xs">
                                                    Thank you for applying. We have received your details and will be in touch soon.
                                                </p>
                                                <Button onClick={() => setOpen(false)} className="mt-4">
                                                    Close
                                                </Button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                                                        <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                                                        <Input id="email" type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                                                        <Input id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 000-0000" />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="experience">Years of Experience <span className="text-red-500">*</span></Label>
                                                        <Input id="experience" name="experience" required value={formData.experience} onChange={handleInputChange} placeholder="e.g. 5+ years" />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="address">Address</Label>
                                                    <Textarea id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State, Country" rows={2} />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="why_hire_me">Why should we hire you? <span className="text-red-500">*</span></Label>
                                                    <Textarea id="why_hire_me" name="why_hire_me" required value={formData.why_hire_me} onChange={handleInputChange} placeholder="Tell us about yourself and why you're a good fit..." rows={4} />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="linkedin_url">LinkedIn Profile</Label>
                                                        <Input id="linkedin_url" name="linkedin_url" value={formData.linkedin_url} onChange={handleInputChange} placeholder="https://linkedin.com/in/..." />
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="github_url">GitHub Profile</Label>
                                                        <Input id="github_url" name="github_url" value={formData.github_url} onChange={handleInputChange} placeholder="https://github.com/..." />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="resume">Resume (PDF/DOCX) <span className="text-red-500">*</span></Label>
                                                    <div className="border border-input rounded-md p-2 flex items-center gap-2 bg-background">
                                                        <Input
                                                            id="resume"
                                                            type="file"
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={handleFileChange}
                                                            className="border-0 bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 h-auto p-0"
                                                        />
                                                    </div>
                                                </div>

                                                {errorMessage && (
                                                    <div className="text-red-500 text-sm font-medium bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                                                        {errorMessage}
                                                    </div>
                                                )}

                                                <div className="flex justify-end pt-4">
                                                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto min-w-[150px]">
                                                        {isSubmitting ? (
                                                            <>
                                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                                                            </>
                                                        ) : (
                                                            "Submit Application"
                                                        )}
                                                    </Button>
                                                </div>
                                            </form>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        <div id="job-description" className="space-y-8 text-foreground/90 leading-relaxed">
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

                            <div className="pt-8 border-t border-white/10 mt-12">
                                <span className="text-sm text-muted-foreground">
                                    Posted on {new Date(job.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

export default JobDetailsClient;
