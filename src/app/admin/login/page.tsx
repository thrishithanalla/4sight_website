"use client";

import { useState } from "react";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { useAdminAuth } from "@/context/admin-auth";

const AdminLoginPage = () => {
    const router = useRouter();
    const { login } = useAdminAuth(); // Use Context
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const formData = new URLSearchParams();
            formData.append('username', username);
            formData.append('password', password);

            const res = await fetch("http://127.0.0.1:8000/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData,
            });

            if (res.ok) {
                const data = await res.json();
                login(data.access_token); // Set token in context (memory)
                router.push("/admin/careers");
            } else {
                setError("Invalid username or password");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper className="py-20 flex items-center justify-center min-h-[60vh]">
            <Container>
                <div className="max-w-md mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
                            <Lock className="w-5 h-5 text-foreground" />
                        </div>
                        <h1 className="text-2xl font-bold">Admin Login</h1>
                        <p className="text-sm text-muted-foreground mt-2">Enter your credentials to access the dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg text-center">
                                {error}
                            </div>
                        )}
                        <div>
                            <label className="text-sm font-medium text-muted-foreground block mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-muted-foreground block mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-blue-500 transition-colors"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all mt-6"
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </Container>
        </Wrapper>
    );
};

export default AdminLoginPage;
