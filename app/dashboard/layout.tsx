"use client"
import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import { ProtectedRoute } from "@/components/providers/ProtectedRoute";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-4">
        <AuthHeader />
        <main className="flex-1">{children}</main>
      </div>
    </ProtectedRoute>
  );
}