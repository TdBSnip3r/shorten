"use client"
import AuthHeader from "@/components/common/AuthHeader/AuthHeader";
import EmailVerificationBanner from "@/components/common/EmailVerificationBanner";
import { ProtectedRoute } from "@/components/providers/ProtectedRoute";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-4">
        <AuthHeader />
        <EmailVerificationBanner />
        <main className="flex-1">{children}</main>
      </div>
    </ProtectedRoute>
  );
}