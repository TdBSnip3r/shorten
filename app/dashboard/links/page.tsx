'use client'
import { useEffect } from "react"
import { listShortlinks } from "@/backend/api/shortlinks"
import LinksTable from "@/components/common/LinksTable/LinksTable"
import ColumnLayout from "@/components/layout/ColumnLayout"
import { useMutation } from "@tanstack/react-query"
import { useLinksTableStore } from "@/stores/LinksTableStore"

const LinksPage = () => {
    const { setTotalPage, setPage, setLimit, page, limit, totalPage } = useLinksTableStore();

    const { mutate, isPending, data } = useMutation({
        mutationFn: () => listShortlinks({ page: page, limit: limit }),
        onSuccess: (data) => {
            setTotalPage(data?.pagination?.totalPage || 1)
        }
    })

    useEffect(() => {
        console.log("Cambiamento pagina o limit")
        mutate()
    }, [page, limit])

    return (
            <div className="flex flex-col gap-4 w-full px-4">
                <h1>Qui puoi vedere i tuoi link</h1>
                <LinksTable links={data?.results || []} />
            </div>
    )
}

export default LinksPage