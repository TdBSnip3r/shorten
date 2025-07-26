import { ShrtButtonProps } from "@/interfaces/ShrtButton.interface"

export const ShrtSecondaryVariant: React.FC<ShrtButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 w-full rounded-md font-bold text-gray-700 bg-gray-200 ${props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
            {children}
        </button>
    )
}
