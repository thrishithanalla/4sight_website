"use client";

import { useState, useEffect } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/context/admin-auth";

const AddJobPage = () => {
    const router = useRouter();
    const { token, isAuthenticated, isLoading: authLoading } = useAdminAuth();
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        job_type: "Full-time",
        experience: "",
        positions: 1,
        compensation: "",
        role_overview: "",
        key_responsibilities: "",
        core_skills: "",
        highly_desirable: "",
        other_heading: "",
        other_content: "",
    });

    const [region, setRegion] = useState<"US" | "India">("US");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isAuthenticated || !token) {
            router.push("/admin/login");
            return;
        }

        setSubmitting(true);

        // Auto-append country if not present
        let finalLocation = formData.location;
        if (region === "US" && !finalLocation.toLowerCase().includes("usa") && !finalLocation.toLowerCase().includes("united states")) {
            finalLocation += ", USA";
        } else if (region === "India" && !finalLocation.toLowerCase().includes("india")) {
            finalLocation += ", India";
        }

        const submissionData = {
            ...formData,
            location: finalLocation
        };

        try {
            const res = await fetch("http://127.0.0.1:8000/api/jobs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(submissionData),
            });

            if (res.ok) {
                router.push("/admin/careers");
            } else {
                alert("Failed to create job. Please check your input.");
            }
        } catch (error) {
            console.error("Error creating job:", error);
            alert("An error occurred.");
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (authLoading) return;
        if (!isAuthenticated) {
            router.push("/admin/login");
        }
    }, [isAuthenticated, authLoading, router]);

    if (authLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <Wrapper className="py-20">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <Link href="/admin/careers" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
                            <ArrowLeft className="w-4 h-4 inline mr-2" /> Back to Dashboard
                        </Link>
                        <h1 className="text-3xl font-bold">Add New Job</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-xl">

                        {/* Region Selector */}
                        <div className="space-y-3 pb-6 border-b border-white/10">
                            <label className="text-base font-medium text-foreground">Select Region</label>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${region === "US"
                                        ? "bg-blue-500 border-blue-500 text-white"
                                        : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                                        }`}
                                >
                                    United States (West Coast)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setRegion("India")}
                                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-medium transition-all ${region === "India"
                                        ? "bg-blue-500 border-blue-500 text-white"
                                        : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                                        }`}
                                >
                                    India
                                </button>
                            </div>
                            <p className="text-xs text-muted-foreground">
                                This will categorize the job under the selected region on the careers page.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Job Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="e.g. Senior Backend Engineer"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="e.g. San Francisco, CA (Remote)"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Employment Type</label>
                                <select
                                    name="job_type"
                                    value={formData.job_type}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Contract to Hire">Contract to Hire</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Internship (with potential Contract-to-Hire opportunity based on performance)">Internship (w/ potential Contract-to-Hire)</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Experience Level</label>
                                <input
                                    type="text"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="e.g. 3+ years"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Positions</label>
                                <input
                                    type="number"
                                    name="positions"
                                    value={formData.positions}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Compensation</label>
                                <input
                                    type="text"
                                    name="compensation"
                                    value={formData.compensation}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="e.g. Market competitive"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Role Overview</label>
                            <textarea
                                name="role_overview"
                                value={formData.role_overview}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Brief summary of the role..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Key Responsibilities</label>
                            <textarea
                                name="key_responsibilities"
                                value={formData.key_responsibilities}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="List key responsibilities..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Core Skills</label>
                            <textarea
                                name="core_skills"
                                value={formData.core_skills}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="List core skills..."
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Highly Desirable</label>
                            <textarea
                                name="highly_desirable"
                                value={formData.highly_desirable}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="List highly desirable skills..."
                            />
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <h3 className="text-lg font-medium mb-4">Other (Optional)</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Section Heading</label>
                                    <input
                                        type="text"
                                        name="other_heading"
                                        value={formData.other_heading}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="e.g. Benefits or Working Hours"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Content</label>
                                    <textarea
                                        name="other_content"
                                        value={formData.other_content}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Add content for this section..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-all flex justify-center items-center"
                            >
                                {submitting ? "Saving..." : <><Save className="w-4 h-4 mr-2" /> Publish Job</>}
                            </button>
                        </div>
                    </form>
                </div >
            </Container >
        </Wrapper >
    );
};

export default AddJobPage;
