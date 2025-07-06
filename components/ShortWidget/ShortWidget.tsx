"use client"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { ShrtButton } from "../common/ShrtButton/ShrtButton"
import { ShortUrlSchema } from "@/forms/ShortUrlSchema"
import * as z from "zod/v4"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { createShortlink } from "@/backend/api/shortlinks"
import { useShortUrlStore } from "./store/ShortUrlStore"
import { toast } from 'react-hot-toast';

type ShortUrlForm = z.infer<typeof ShortUrlSchema>;

export const ShortWidget = () => {

    const { addShortUrl } = useShortUrlStore() // <-- Temporary store for short urls (not logged user)

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ShortUrlForm>({
        resolver: zodResolver(ShortUrlSchema),
        mode: "onChange"
    });

    const [shortedUrl, setShortedUrl] = useState<string | null>(null)

    //Use mutation to shorten url
    const mutation = useMutation({
        mutationFn: (value: ShortUrlForm) => {
            return createShortlink({ url: value.longUrl })
        },
        onSuccess: (data) => {
            setShortedUrl(data.shortUrl)
            addShortUrl(data.shortUrl)
            toast.success("URL shortened successfully")
        },
        onError: (error) => {
            toast.error("Error shortening url")
            reset()
            setShortedUrl(null)
        },
    })

    const onSubmit: SubmitHandler<ShortUrlForm> = useCallback(async (value: any) => {
        mutation.mutate(value)
    }, []);

    return (
        <div className="max-w-lg w-full bg-white shadow-2xl rounded-3xl p-8 flex flex-col gap-6 items-center justify-center border border-gray-100 mx-auto">
            {shortedUrl ? (
                <div className="flex flex-col items-center gap-4">
                    <p className="text-lg font-semibold text-green-600">Your shortened URL is:</p>
                    <a href={shortedUrl} target="_blank" rel="noopener noreferrer"
                        className="text-blue-600 underline break-all text-xl font-mono"
                    >
                        {shortedUrl}
                    </a>
                    <ShrtButton
                        onClick={() => {
                            setShortedUrl(null)
                            reset()
                        }}
                        variant={ButtonVariant.PRIMARY}
                        className="w-full mt-2"
                    >
                        Shorten another URL
                    </ShrtButton>
                </div>
            ) : (
                <>
                    <h1 className="text-3xl font-extrabold text-gray-900 text-center">The easiest way to shorten your links.</h1>
                    <p className="text-lg text-gray-500 text-center">Paste your long URL and get a short URL for free</p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Enter your long URL"
                            className="w-full p-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            {...register("longUrl")}
                        />
                        {errors.longUrl && <p className="text-red-500 text-sm">{errors.longUrl.message}</p>}
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


