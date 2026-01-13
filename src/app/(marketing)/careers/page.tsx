"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { ArrowRight, Briefcase, MapPin, Clock, CheckCircle, Loader2, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
    // Detailed fields (optional in list, required in detail view)
    compensation?: string;
    role_overview?: string;
    key_responsibilities?: string;
    core_skills?: string;
    highly_desirable?: string;
    other_heading?: string;
    other_content?: string;
    created_at?: string;
}

const CareersPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    // Modal & Details State
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [loadingDetails, setLoadingDetails] = useState(false);

    // Application Form State
    const [showApplyForm, setShowApplyForm] = useState(false);
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

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/jobs");
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

    // Fetch full details when opening modal
    const handleViewDetails = async (jobId: string) => {
        setLoadingDetails(true);
        setIsDetailOpen(true);
        setShowApplyForm(false);
        setIsSuccess(false);
        setErrorMessage("");

        try {
            const res = await fetch(`http://127.0.0.1:8000/api/jobs/${jobId}`);
            if (res.ok) {
                const data = await res.json();
                setSelectedJob(data);
            }
        } catch (error) {
            console.error("Failed to fetch job details", error);
        } finally {
            setLoadingDetails(false);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResume(e.target.files[0]);
        }
    };

    const handleSubmitApplication = async (e: FormEvent) => {
        e.preventDefault();
        if (!selectedJob) return;
        if (!resume) {
            setErrorMessage("Please upload your resume.");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage("");

        const data = new FormData();
        data.append("job_id", selectedJob._id);
        data.append("job_title", selectedJob.title);
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
            const res = await fetch("http://127.0.0.1:8000/api/applications", {
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

                    <button
                        onClick={() => handleViewDetails(job._id)}
                        className="flex items-center text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors shrink-0"
                    >
                        View Details <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
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

                {/* Job Details Modal */}
                <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border text-foreground">
                        {loadingDetails || !selectedJob ? (
                            <div className="space-y-4">
                                <DialogHeader>
                                    <DialogTitle>Loading Job Details...</DialogTitle>
                                </DialogHeader>
                                <div className="flex justify-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold">{selectedJob.title}</DialogTitle>
                                    <DialogDescription className="text-base flex flex-wrap gap-4 pt-2">
                                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {selectedJob.location}</span>
                                        <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {selectedJob.job_type}</span>
                                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {selectedJob.experience}</span>
                                    </DialogDescription>
                                </DialogHeader>

                                {showApplyForm ? (
                                    /* Apply Form View */
                                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                                            <h3 className="text-xl font-semibold">Application Form</h3>
                                            <Button variant="ghost" onClick={() => setShowApplyForm(false)}>
                                                Back to Description
                                            </Button>
                                        </div>

                                        {isSuccess ? (
                                            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                                                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center">
                                                    <CheckCircle className="h-8 w-8 text-green-500" />
                                                </div>
                                                <h3 className="text-xl font-semibold">Application Received!</h3>
                                                <p className="text-muted-foreground max-w-xs">
                                                    Thank you for applying. We have received your details and will be in touch soon.
                                                </p>
                                                <Button onClick={() => setIsDetailOpen(false)} className="mt-4">
                                                    Close
                                                </Button>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmitApplication} className="space-y-6">
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
                                                        <Select
                                                            name="experience"
                                                            value={formData.experience}
                                                            onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select experience" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="0-1">0-1 years</SelectItem>
                                                                <SelectItem value="1-2">1-2 years</SelectItem>
                                                                <SelectItem value="2-3">2-3 years</SelectItem>
                                                                <SelectItem value="3-4">3-4 years</SelectItem>
                                                                <SelectItem value="4+">4+ years</SelectItem>
                                                            </SelectContent>
                                                        </Select>
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
                                                    <Button type="submit" disabled={isSubmitting} className="w-full">
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
                                    </div>
                                ) : (
                                    /* Job Description View */
                                    <div className="space-y-6">
                                        <div className="space-y-8 text-foreground/90 leading-relaxed">
                                            {selectedJob.role_overview && (
                                                <section>
                                                    <h3 className="text-xl font-semibold mb-2 text-foreground">Role Overview</h3>
                                                    <p className="whitespace-pre-line text-sm md:text-base text-muted-foreground">{selectedJob.role_overview}</p>
                                                </section>
                                            )}

                                            {selectedJob.key_responsibilities && (
                                                <section>
                                                    <h3 className="text-xl font-semibold mb-2 text-foreground">Key Responsibilities</h3>
                                                    <p className="whitespace-pre-line text-sm md:text-base text-muted-foreground">{selectedJob.key_responsibilities}</p>
                                                </section>
                                            )}

                                            {selectedJob.core_skills && (
                                                <section>
                                                    <h3 className="text-xl font-semibold mb-2 text-foreground">Core Skills</h3>
                                                    <p className="whitespace-pre-line text-sm md:text-base text-muted-foreground">{selectedJob.core_skills}</p>
                                                </section>
                                            )}

                                            {selectedJob.highly_desirable && (
                                                <section>
                                                    <h3 className="text-xl font-semibold mb-2 text-foreground">Highly Desirable</h3>
                                                    <p className="whitespace-pre-line text-sm md:text-base text-muted-foreground">{selectedJob.highly_desirable}</p>
                                                </section>
                                            )}
                                        </div>

                                        <div className="pt-6 sticky bottom-0 bg-card border-t border-white/10 mt-6 flex justify-end">
                                            <Button size="lg" onClick={() => setShowApplyForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                                                Apply Now
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </Container>
        </Wrapper>
    )
};

export default CareersPage;
