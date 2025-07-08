
import { ShrtButton } from "../common/ShrtButton/ShrtButton"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { useUserStore } from "@/stores/UserStore"
import Link from "next/link"
import ShortWidgetClipboard from "./ShortWidgewtClipboard"
interface ShortWidgetResultsProps {
    shortedUrl: string
    onShortAnotherUrl: () => void
}
const ShortWidgetResults = ({ shortedUrl, onShortAnotherUrl }: ShortWidgetResultsProps) => {
    const { user } = useUserStore()
    return (
        <div className="flex flex-col items-center gap-4">
            <ShortWidgetClipboard shortUrl={shortedUrl} onDeleteRequest={onShortAnotherUrl} />
            <div className="flex flex-col md:flex-row gap-2 w-full">
                <ShrtButton
                    onClick={onShortAnotherUrl}
                    variant={ButtonVariant.SECONDARY}
                    className="w-full mt-2"
                >
                    Shorten another URL
                </ShrtButton>
                {user && <Link href="/dashboard/links"><ShrtButton variant={ButtonVariant.SECONDARY}>Vai alla pagina dei tuoi link</ShrtButton></Link>}
            </div>
        </div>
    )
}

export default ShortWidgetResults