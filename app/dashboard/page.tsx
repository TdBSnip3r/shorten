"use client"
import PaddingPageLayout from "@/components/layout/PaddingPageLayout"
import { ProtectedRoute } from "@/components/providers/ProtectedRoute"
import { ShortWidget } from "@/components/ShortWidget/ShortWidget"
import { useUserStore } from "@/stores/UserStore"

const DashboardPage = () => {
    const { user } = useUserStore()
    console.log(user)
    return <ProtectedRoute>
        <PaddingPageLayout>
            <div className="flex flex-col gap-4 w-full items-center justify-center">
                <h1 className="text-2xl font-bold">Hi {user?.firstName}</h1>
                <div className="w-full max-w-lg">
                    <ShortWidget />
                </div>
            </div>
        </PaddingPageLayout>
    </ProtectedRoute>
}

export default DashboardPage