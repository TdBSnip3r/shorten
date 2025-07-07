import { useUserStore } from "@/stores/UserStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUserStore()
    const router = useRouter()
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (hydrated && !user) {
            router.push('/landing/login')
        }
    }, [hydrated, user, router])

    if (!hydrated) {
        return null; 
    }

    if (!user) {
        return null;
    }

    return children
}