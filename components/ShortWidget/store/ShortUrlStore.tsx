import { create } from "zustand"
import { persist } from "zustand/middleware"

interface ShortUrlStore {
    shortUrls: string[]
    setShortUrls: (shortUrls: string[]) => void
    addShortUrl: (shortUrl: string) => void
}

export const useShortUrlStore = create<ShortUrlStore>()(
    persist(
        (set) => ({
            shortUrls: [],
            setShortUrls: (shortUrls: string[]) => set({ shortUrls }),
            addShortUrl: (shortUrl: string) => set((state) => ({ shortUrls: [...state.shortUrls, shortUrl] }))
        }),
        {
            name: 'short-urls-storage', // chiave nel localStorage
        }
    )
)