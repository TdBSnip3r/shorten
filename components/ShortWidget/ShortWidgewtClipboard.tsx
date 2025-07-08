import { deleteShortlink } from "@/backend/api/shortlinks";
import CopyButton from "@/components/common/ShrtButton/CopyButton";
import DeleteButton from "@/components/common/ShrtButton/DeleteButton";
import { useUserStore } from "@/stores/UserStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
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
        <div className="w-full flex flex-row items-center gap-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 shadow-sm w-full">
            <span className="flex-1 truncate text-lg font-mono text-blue-700" title={shortUrl}>
                {shortUrl}
            </span>
            <CopyButton textToCopy={shortUrl} />
            {user && <DeleteButton onDeleteRequest={() => deleteShortlinkMutation(shortUrl)} />}
        </div>
    )
}

export default ShortWidgetClipboard