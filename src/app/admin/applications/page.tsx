"use client";

import { useEffect, useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { ArrowLeft, LogOut, FileText, Download, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/context/admin-auth";

interface Application {
    _id: string;
    job_title: string;
    name: string;
    email: string;
    phone: string;
    experience: string;
    resume_path: string;
    created_at: string;
    status: string;
    linkedin_url?: string;
    github_url?: string;
    why_hire_me: string;
}

const AdminApplicationsPage = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { token, logout, isAuthenticated, isLoading: authLoading } = useAdminAuth();

    const getAuthHeaders = () => {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
    };

    const fetchApplications = async () => {
        if (authLoading) return;

        if (!isAuthenticated || !token) {
            router.push("/admin/login");
            return;
        }

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const res = await fetch(`${API_URL}/api/applications`, {
                headers: getAuthHeaders()
            });
            if (res.ok) {
                const data = await res.json();
                console.log("DEBUG: Fetched applications:", data);
                setApplications(data);
            } else if (res.status === 401) {
                logout();
            }
        } catch (error) {
            console.error("Failed to fetch applications", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authLoading) return;

        if (!isAuthenticated) {
            router.push("/admin/login");
        } else {
            fetchApplications();
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
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <Link href="/admin/careers" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
                            <ArrowLeft className="w-4 h-4 inline mr-2" /> Back to Jobs
                        </Link>
                        <h1 className="text-3xl font-bold">Job Applications</h1>
                        <p className="text-muted-foreground">Review incoming candidate applications</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/admin/careers"
                            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-foreground rounded-lg transition-colors"
                        >
                            <Briefcase className="w-4 h-4 mr-2" />
                            Manage Jobs
                        </Link>
                        <button
                            onClick={logout}
                            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded-lg transition-colors border border-red-600/20"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center p-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[1000px]">
                                <thead>
                                    <tr className="border-b border-white/10 text-muted-foreground text-sm uppercase bg-white/5">
                                        <th className="p-4">Date</th>
                                        <th className="p-4">Candidate</th>
                                        <th className="p-4">Role</th>
                                        <th className="p-4">Experience</th>
                                        <th className="p-4">Contact</th>
                                        <th className="p-4 text-center">Resume</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {applications.map((app) => (
                                        <tr key={app._id} className="hover:bg-white/5 transition-colors group">
                                            <td className="p-4 text-sm text-muted-foreground whitespace-nowrap">
                                                {new Date(app.created_at).toLocaleDateString()}
                                            </td>
                                            <td className="p-4">
                                                <div className="font-semibold text-foreground">{app.name}</div>
                                                <div className="text-xs text-muted-foreground max-w-[200px] truncate" title={app.why_hire_me}>
                                                    {app.why_hire_me}
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm">{app.job_title}</td>
                                            <td className="p-4 text-sm">{app.experience}</td>
                                            <td className="p-4 text-sm space-y-1">
                                                <div className="text-foreground">{app.email}</div>
                                                <div className="text-muted-foreground">{app.phone}</div>
                                                <div className="flex gap-2 text-xs">
                                                    {app.linkedin_url && (
                                                        <a href={app.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
                                                    )}
                                                    {app.github_url && (
                                                        <a href={app.github_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <a
                                                    href={`${process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"}/uploads/${app.resume_path}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded transition-colors"
                                                    title="Download Resume"
                                                >
                                                    <Download className="w-4 h-4" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    {applications.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="p-8 text-center text-muted-foreground">
                                                No applications received yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </Container>
        </Wrapper>
    );
};

export default AdminApplicationsPage;
