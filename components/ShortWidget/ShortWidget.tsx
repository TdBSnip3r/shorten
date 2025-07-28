"use client"

import { ShrtButton } from "../common/ShrtButton/ShrtButton"
import { ShortUrlSchema } from "@/forms/ShortUrlSchema"
import * as z from "zod/v4"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useEffect, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { checkSlug, createShortlink } from "@/backend/api/shortlinks"
import { useShortUrlStore } from "../../stores/ShortUrlStore"
import { toast } from 'react-hot-toast';
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { CreateShortlinkResponse } from "@/backend/types/api-types"
import { useUserStore } from "@/stores/UserStore"
import ShortWidgetResults from "./ShortWidgetResults"
import BlurText from "../common/BlurText"

type ShortUrlForm = z.infer<typeof ShortUrlSchema>;

export const ShortWidget = () => {

    const { addShortUrl } = useShortUrlStore() // <-- Temporary store for short urls (not logged user)
    const { user } = useUserStore()

    const { register, handleSubmit, formState: { errors, isValid }, reset, watch, setError } = useForm<ShortUrlForm>({
        resolver: zodResolver(ShortUrlSchema),
        mode: "onChange"
    });

    const [shortedUrl, setShortedUrl] = useState<string | null>(null)

    //Use mutation to shorten url
    const mutation = useMutation({
        mutationFn: (value: ShortUrlForm) => {
            const payload = { url: value.longUrl, ...(value.slug && { slug: value.slug }) }
            return createShortlink(payload)
        },
        onSuccess: (data: CreateShortlinkResponse) => {
            setShortedUrl(data.shortUrl)
            addShortUrl(data.shortUrl)
            toast.success("URL shortened successfully")
        },
        onError: (error: any) => {
            toast.error(error.response?.data?.message || "Error shortening url")
            reset()
            setShortedUrl(null)
        },
    })

    //Slug realtime check
    const checkSlugMutation = useMutation({
        mutationFn: (slug: string) => checkSlug(slug),
        onSuccess: (data: any) => { },
        onError: (error: any) => {setError("slug", { message: "You are not the owner of this slug" })},
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            if (watch("slug") && user) { checkSlugMutation.mutate(watch("slug") as string) }
        }, 200)
        return () => clearTimeout(timer)
    }, [watch("slug"), user])

    const onSubmit: SubmitHandler<ShortUrlForm> = useCallback(async (value: any) => { mutation.mutate(value) }, []);

    return (
        <div className="bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-6 items-center justify-center border border-gray-100 mx-auto">
            {shortedUrl ? (
                <ShortWidgetResults
                    shortedUrl={shortedUrl}
                    onShortAnotherUrl={() => {
                        setShortedUrl(null)
                        reset()
                    }} />
            ) : (
                <>
                    <BlurText bold={true} text="The easiest way to shorten your links." delay={150} animateBy="words" direction="top" className="text-2xl mb-8" />
                    <BlurText bold={false} text="Paste your long URL and get a short URL for free" delay={150} animateBy="words" direction="top" className="text-lg mb-8" />
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Enter your long URL"
                            className={"w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none transition " + (errors.longUrl ? "border-red-500" : "")}
                            {...register("longUrl")}
                        />
                        {errors.longUrl && <p className="text-red-500 text-sm">{errors.longUrl.message}</p>}
                        {
                            user && (
                                <input
                                    type="text"
                                    placeholder="Enter your custom slug"
                                    className={"w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none transition " + (errors.slug ? "border-red-500" : "")}
                                    {...register("slug")}
                                />
                            )
                        }
                        {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
                        <ShrtButton
                            type="submit"
                            disabled={!isValid}
                            variant={ButtonVariant.PRIMARY}
                            className="w-full py-3 text-lg font-bold transition hover:brightness-110"
                        >
                            Shorten
                        </ShrtButton>
                    </form>
                </>
            )}
        </div>
    )
}