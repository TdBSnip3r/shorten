'use client'
import { useEffect } from "react"
import { listShortlinks } from "@/backend/api/shortlinks"
import LinksTable from "@/components/common/LinksTable/LinksTable"
import { useQuery } from "@tanstack/react-query"
import { useLinksTableStore } from "@/stores/LinksTableStore"

const LinksPage = () => {
    const { setTotalPage, page, limit } = useLinksTableStore();

    const { data, isLoading, error } = useQuery({
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
            <LinksTable links={data?.results || []} />
        </div>
    )
}

export default LinksPage