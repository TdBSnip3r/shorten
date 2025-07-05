import { ShrtButtonProps } from "@/interfaces/ShrtButton.interface"

export const ShrtPrimaryVariant: React.FC<ShrtButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded-md  font-bold bg-blue-500 text-white ${props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
            {children}
        </button>
    )
}
