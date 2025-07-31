import { MobileCloseMenuButtonProps } from "@/interfaces/MobileCloseMenuButton.interface"

export const MobileCloseMenuButton : React.FC<MobileCloseMenuButtonProps> = ({ onClick }) => {
    return (
        <button
            className="absolute top-6 right-6 text-3xl cursor-pointer text-white"
            onClick={() => onClick?.()}
            aria-label="Chiudi menu"
        >
            &times;
        </button>
    )
}