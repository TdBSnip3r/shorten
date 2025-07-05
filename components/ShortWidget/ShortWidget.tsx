"use client"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { ShrtButton } from "../common/ShrtButton/ShrtButton"
import { useShortWidgetStore } from "./store/ShortWidgetStore"
import { ShortUrlSchema } from "@/forms/ShortUrlSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createShortlink } from "@/backend/api/shortlinks"
import { useEffect } from "react"



export const ShortWidget = () => {
    const { longUrl, setLongUrl, error, setError, setShortedUrl } = useShortWidgetStore()
    const queryClient = useQueryClient()

    const validateForm = (value: string) => {
        const result = ShortUrlSchema.safeParse({ longUrl: value });
        if (!result.success) {
            setError(result.error.issues[0].message)
        } else {
            setError(null)
        }
        return result.success
    }

    useEffect(() => {
        validateForm(longUrl)
    }, [longUrl])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setLongUrl(value)
        validateForm(value)
    }

    const mutation = useMutation({
        mutationFn: (longUrl: string) => createShortlink({ url: longUrl }),
        onSuccess: (data:any) => {
            queryClient.invalidateQueries({ queryKey: ['shortlinks'] })
            setShortedUrl(data.shortUrl)
        },
    })

    const onShortenAction = () => {
        const isValid = validateForm(longUrl)
        if (!isValid) {
            return;
        }

        //Call tanstack mutation
        mutation.mutate(longUrl)
    }

    return (
        <div className="max-w-xl w-full border border-gray-200 rounded-lg p-4 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold">The easiest way to shorten your links.</h1>
            <p className="text-gray-500">Paste your long URL and get a short URL for free</p>
            <input
                type="text"
                placeholder="Enter your long URL"
                className="w-full p-2 border border-gray-200 rounded-md"
                value={longUrl}
                onChange={onChangeInput}
            />
            <ShrtButton
                disabled={error !== null}
                variant={ButtonVariant.PRIMARY}
                onClick={onShortenAction}
            >
                Shorten
            </ShrtButton>
        </div>
    )
}


