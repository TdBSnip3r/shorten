import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ShortWidgetStore {
    longUrl: string
    error: string | null
    shortedUrl: string | null
    setLongUrl: (longUrl: string) => void
    setError: (error: string | null) => void
    setShortedUrl: (shortedUrl: string | null) => void
}

export const useShortWidgetStore = create<ShortWidgetStore>()(
    (set) => ({
        longUrl: '',
        error: null,
        shortedUrl: null,
        setLongUrl: (longUrl: string) => set({ longUrl }),
        setError: (error: string | null) => set({ error }),
        setShortedUrl: (shortedUrl: string | null) => set({ shortedUrl })
    })
)