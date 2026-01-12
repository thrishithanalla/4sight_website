"use client";

import { AdminAuthProvider } from "@/context/admin-auth";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminAuthProvider>
            {children}
        </AdminAuthProvider>
    );
}
