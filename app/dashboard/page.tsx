"use client"
import CenteredLayout from "@/components/layout/CenterdLayout"
import { ProtectedRoute } from "@/components/providers/ProtectedRoute"
import { ShortWidget } from "@/components/ShortWidget"
import { useUserStore } from "@/stores/UserStore"

const DashboardPage = () => {
    const { user } = useUserStore()
    console.log(user)
    return <ProtectedRoute>
        <CenteredLayout>
            <h1>Dashboard</h1>
            <p>Welcome {user?.firstName} {user?.lastName}</p>
            <ShortWidget />
        </CenteredLayout>
    </ProtectedRoute>
}

export default DashboardPage