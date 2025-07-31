import { MobileMenuButtonProps } from "@/interfaces/MobileMenuButton.interface"


export const MobileMenuButton : React.FC<MobileMenuButtonProps> = ({ onClick }) => {
    
    return (
        <button
            className="cursor-pointer text-white"
            onClick={() => onClick?.()}
            aria-label="Apri menu"
        >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
        </button>
    )
}