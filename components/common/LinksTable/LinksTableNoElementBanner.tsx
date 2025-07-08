import Link from "next/link";
import { ShrtButton } from "../ShrtButton/ShrtButton";


const LinksTableNoElementBanner = () => {
    return (
        <div className="flex flex-col items-center justify-center text-gray-400">
            <svg className="w-12 h-12 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <Link href="/dashboard">
                <ShrtButton>Crea link</ShrtButton>
            </Link>
        </div>
    )
}

export default LinksTableNoElementBanner;