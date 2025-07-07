import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from "@/types/User"

type UserStore = {
    user: User | null
    setUser: (user: User) => void
    logout: () => void
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user: User) => set({ user }),
            logout: () => {
                set({ user: null })
                //Refreshing the page
                window.location.reload()
            },
        }),
        {
            name: 'user-storage', // chiave nel localStorage
        }
    )
)