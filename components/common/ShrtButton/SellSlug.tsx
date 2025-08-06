import toast from "react-hot-toast";

interface SellSlugButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onSellRequest: () => void;
}

const SellSlugButton = ({ onSellRequest, ...props }: SellSlugButtonProps) => {
    return (
        <button
            {...props}
            onClick={() => {
                onSellRequest();
                toast.success("Richiesta di vendita inviata!");
            }}
            className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-md transition-all duration-150 cursor-pointer"
            title="Vendi Slug"
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L19 10m-3.5 4l-2.091 2.091M12 10V8m0 4v4m-4.5 5H19a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </button>
    )
}

export default SellSlugButton;
