import { deleteShortlink } from "@/backend/api/shortlinks";
import CopyButton from "@/components/common/ShrtButton/CopyButton";
import DeleteButton from "@/components/common/ShrtButton/DeleteButton";
import TestButton from "@/components/common/ShrtButton/TestButton";
import { useUserStore } from "@/stores/UserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import BlurText from "../common/BlurText";
interface ShortWidgetClipboardProps {
    shortUrl: string
    onDeleteRequest?: () => void
}
const ShortWidgetClipboard = ({ shortUrl, onDeleteRequest }: ShortWidgetClipboardProps) => {

    const { user } = useUserStore()

    const queryClient = useQueryClient()
    const { mutate: deleteShortlinkMutation, isPending, data } = useMutation({
        mutationFn: (shortlink: string) => deleteShortlink({ shortlink }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shortlinks'] })
            toast.success("Link eliminato con successo")
            onDeleteRequest?.()
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })


    return (
        <div className="w-full flex flex-col sm:flex-row flex-wrap items-center gap-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 shadow-sm w-full">
            <div className="flex-1 truncate">
                <BlurText
                    bold={false}
                    text={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${shortUrl}`}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-sm sm:text-lg mb-8"
                />
            </div>
            <div>
                <CopyButton textToCopy={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${shortUrl}`} />
                <TestButton urlToTest={`${process.env.NEXT_PUBLIC_FRONTEND_URL}${shortUrl}`} />
                {user && <DeleteButton onDeleteRequest={() => deleteShortlinkMutation(shortUrl)} />}
            </div>
        </div>
    )
}

export default ShortWidgetClipboard