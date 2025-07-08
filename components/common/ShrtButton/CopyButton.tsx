import toast from "react-hot-toast";

interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textToCopy: string;
}

const CopyButton = ({ textToCopy, ...props }: CopyButtonProps) => {
    return (
        <button
            {...props}
            onClick={() => {
                navigator.clipboard.writeText(textToCopy)
                toast.success("Link copiato")
            }}
            className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-150 cursor-pointer"
            title="Copia link"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        </button>
    )
}

export default CopyButton;