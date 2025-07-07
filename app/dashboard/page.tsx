"use client"
import { ProtectedRoute } from "@/components/providers/ProtectedRoute"
import { useUserStore } from "@/stores/UserStore"

const DashboardPage = () => {
    const { user } = useUserStore()
    console.log(user)
    return <ProtectedRoute>
        <div>
            <h1>Dashboard</h1>
            <p>Welcome {user?.firstName} {user?.lastName}</p>
        </div>
    </ProtectedRoute>
}

export default DashboardPage