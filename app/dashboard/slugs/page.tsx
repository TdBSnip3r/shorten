"use client"
import { fetchFindSlug, fetchMySlugs } from "@/backend/api/slugs";
import { FindSlugRequest, MySlugsRequest } from "@/backend/types/api-types";
import BlurText from "@/components/common/BlurText";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import SlugCard from "@/components/common/SlugCard/SlugCard";
import SlugTable from "@/components/common/SlugTable/SlugTable";
import { useSlugTableStore } from "@/stores/SlugTableStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const SlugsPage = () => {
    const { setTotalPage, page: pageSlugs, limit: limitSlugs } = useSlugTableStore();
    const [searchValue, setSearchValue] = useState('');

    const { data: slugs, isLoading: isLoadingSlugs, isError: isErrorSlugs } = useQuery<MySlugsRequest>({
        queryKey: ['mySlugs', pageSlugs, limitSlugs],
        queryFn: () => fetchMySlugs(pageSlugs, limitSlugs),
    });

    const { data: findSlugData, isLoading: isLoadingFindSlug, isError: isErrorFindSlug } = useQuery<FindSlugRequest>({
        queryKey: ['findSlug', searchValue],
        queryFn: () => fetchFindSlug(searchValue),
    });

    useEffect(() => {
        if (slugs?.pagination?.totalPage) {
            setTotalPage(slugs.pagination.totalPage)
        }
    }, [ slugs, setTotalPage])


    return (
        <div className="flex flex-col gap-4 w-full px-4 pb-10">
            <BlurText bold={true} text="Your slugs" delay={150} animateBy="words" direction="top" className="text-2xl mb-8 text-white" />
            <SlugTable slugs={slugs?.results || []} />
            <BlurText bold={true} text="Find a slug" delay={150} animateBy="words" direction="top" className="text-2xl mb-8 text-white" />
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            {
                findSlugData && !isLoadingFindSlug && searchValue && (
                    <SlugCard isLoading={isLoadingFindSlug} slugData={findSlugData} />
                )
            }
        </div>
    )
}

export default SlugsPage;