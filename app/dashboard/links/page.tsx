'use client'
import { useEffect } from "react"
import { listShortlinks } from "@/backend/api/shortlinks"
import LinksTable from "@/components/common/LinksTable/LinksTable"
import { useQuery } from "@tanstack/react-query"
import { useLinksTableStore } from "@/stores/LinksTableStore"
import LinksHeroSection from "@/components/LinksHeroSection"
import BlurText from "@/components/common/BlurText"

const LinksPage = () => {
    const { setTotalPage, page, limit } = useLinksTableStore();

    const { data, isLoading: isLoadingShortlinks, error: errorShortlinks } = useQuery({
        queryKey: ['shortlinks', page, limit],
        queryFn: () => listShortlinks({ page: page, limit: limit })
    })

    useEffect(() => {
        if (data?.pagination?.totalPage) {
            setTotalPage(data.pagination.totalPage)
        }

    }, [data, setTotalPage])

    return (
        <div className="flex flex-col gap-4 w-full px-4 pb-10">
            <LinksHeroSection />
            <BlurText bold={true} text="Your links" delay={150} animateBy="words" direction="top" className="text-2xl mb-8 text-white" />
            <LinksTable links={data?.results || []} />
            
        </div>
    )
}

export default LinksPage