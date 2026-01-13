"use client";

import { useEffect, useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { Trash2, Eye, EyeOff, Plus, ArrowLeft, Pencil, LogOut } from "lucide-react";

import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/context/admin-auth";

interface Job {
    _id: string;
    title: string;
    location: string;
    positions: number;
    is_active: boolean;
}

const AdminCareersPage = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { token, logout, isAuthenticated, isLoading: authLoading } = useAdminAuth();

    const getAuthHeaders = () => {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        };
    };

    const fetchJobs = async () => {
        if (authLoading) return;

        if (!isAuthenticated || !token) {
            router.push("/admin/login");
            return;
        }

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const res = await fetch(`${API_URL}/api/admin/jobs`, {
                headers: getAuthHeaders()
            });
            if (res.ok) {
                const data = await res.json();
                setJobs(data);
            } else if (res.status === 401) {
                logout();
            }
        } catch (error) {
            console.error("Failed to fetch jobs", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (authLoading) return;

        if (!isAuthenticated) {
            router.push("/admin/login");
        } else {
            fetchJobs();
        }
    }, [isAuthenticated, authLoading, router]);

    const toggleVisibility = async (id: string, currentStatus: boolean) => {
        const action = currentStatus ? "hide" : "show";
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const res = await fetch(`${API_URL}/api/jobs/${id}/${action}`, {
                method: "PUT",
                headers: getAuthHeaders()
            });
            if (res.ok) {
                fetchJobs(); // Refresh list
            } else if (res.status === 401) {
                router.push("/admin/login");
            }
        } catch (error) {
            console.error("Failed to update job visibility", error);
        }
    };

    const deleteJob = async (id: string) => {
        if (!confirm("Are you sure you want to delete this job? This action cannot be undone.")) return;

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
            const res = await fetch(`${API_URL}/api/jobs/${id}`, {
                method: "DELETE",
                headers: getAuthHeaders()
            });
            if (res.ok) {
                setJobs(jobs.filter(job => job._id !== id));
            } else if (res.status === 401) {
                router.push("/admin/login");
            }
        } catch (error) {
            console.error("Failed to delete job", error);
        }
    };

    return (
        <Wrapper className="py-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div>
                        <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
                            <ArrowLeft className="w-4 h-4 inline mr-2" /> Back to Careers Site
                        </Link>
                        <h1 className="text-3xl font-bold">Manage Jobs</h1>
                        <p className="text-muted-foreground">Admin Dashboard</p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/admin/careers/new"
                            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Add New Job
                        </Link>
                        <Link
                            href="/admin/applications"
                            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-foreground rounded-lg transition-colors"
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            View Applications
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
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-muted-foreground text-sm uppercase bg-white/5">
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Location</th>
                                    <th className="p-4 text-center">Positions</th>
                                    <th className="p-4 text-center">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {jobs.map((job) => (
                                    <tr key={job._id} className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium">{job.title}</td>
                                        <td className="p-4 text-muted-foreground">{job.location}</td>
                                        <td className="p-4 text-center text-muted-foreground">{job.positions}</td>
                                        <td className="p-4 text-center">
                                            <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${job.is_active
                                                ? "bg-green-500/20 text-green-500"
                                                : "bg-yellow-500/20 text-yellow-500"
                                                }`}>
                                                {job.is_active ? "Active" : "Hidden"}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/careers/edit/${job._id}`}
                                                    className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded transition-colors"
                                                    title="Edit Job"
                                                >
                                                    <Pencil className="w-4 h-4" />
                                                </Link>
                                                <button
                                                    onClick={() => toggleVisibility(job._id, job.is_active)}
                                                    className="p-2 text-muted-foreground hover:text-white hover:bg-white/10 rounded transition-colors"
                                                    title={job.is_active ? "Hide Job" : "Show Job"}
                                                >
                                                    {job.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                                <button
                                                    onClick={() => deleteJob(job._id)}
                                                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded transition-colors"
                                                    title="Delete Job"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {jobs.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="p-8 text-center text-muted-foreground">
                                            No jobs found. Start by adding one.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </Container>
        </Wrapper>
    );
};

export default AdminCareersPage;
