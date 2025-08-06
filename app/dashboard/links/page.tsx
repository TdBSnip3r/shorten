'use client'
import { useEffect } from "react"
import { listShortlinks } from "@/backend/api/shortlinks"
import LinksTable from "@/components/common/LinksTable/LinksTable"
import { useQuery } from "@tanstack/react-query"
import { useLinksTableStore } from "@/stores/LinksTableStore"
import LinksHeroSection from "@/components/LinksHeroSection"
import SlugTable from "@/components/common/SlugTable/SlugTable"
import { fetchMySlugs } from "@/backend/api/slugs"
import BlurText from "@/components/common/BlurText"
import { useSlugTableStore } from "@/stores/SlugTableStore"
import { MySlugsRequest } from "@/backend/types/api-types"

const LinksPage = () => {
    const { setTotalPage, page, limit } = useLinksTableStore();
    const { setTotalPage: setTotalPageSlugs, page: pageSlugs, limit: limitSlugs } = useSlugTableStore();

    const { data, isLoading: isLoadingShortlinks, error: errorShortlinks } = useQuery({
        queryKey: ['shortlinks', page, limit],
        queryFn: () => listShortlinks({ page: page, limit: limit })
    })

    const { data: slugs, isLoading: isLoadingSlugs, isError: isErrorSlugs } = useQuery<MySlugsRequest>({
        queryKey: ['mySlugs', pageSlugs, limitSlugs],
        queryFn: () => fetchMySlugs(pageSlugs, limitSlugs),
    });

    useEffect(() => {
        if (data?.pagination?.totalPage) {
            setTotalPage(data.pagination.totalPage)
        }
        if (slugs?.pagination?.totalPage) {
            setTotalPageSlugs(slugs.pagination.totalPage)
        }
    }, [data, setTotalPage, slugs, setTotalPageSlugs])

    return (
        <div className="flex flex-col gap-4 w-full px-4 pb-10">
            <LinksHeroSection />
            <BlurText bold={true} text="Your links" delay={150} animateBy="words" direction="top" className="text-2xl mb-8 text-white" />
            <LinksTable links={data?.results || []} />
            <BlurText bold={true} text="Your slugs" delay={150} animateBy="words" direction="top" className="text-2xl mb-8 text-white" />
            <SlugTable slugs={slugs?.results || []} />
        </div>
    )
}

export default LinksPage