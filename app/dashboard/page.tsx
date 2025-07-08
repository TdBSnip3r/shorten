"use client"
import CenteredLayout from "@/components/layout/CenterdLayout"
import { ProtectedRoute } from "@/components/providers/ProtectedRoute"
import { ShortWidget } from "@/components/ShortWidget/ShortWidget"
import { useUserStore } from "@/stores/UserStore"

const DashboardPage = () => {
    const { user } = useUserStore()
    console.log(user)
    return <ProtectedRoute>
        <CenteredLayout>
            <ShortWidget />
        </CenteredLayout>
    </ProtectedRoute>
}

export default DashboardPage