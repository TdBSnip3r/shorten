import { useMobileMenuStore } from "../../../stores/MobileMenuStoreState"
import Navigation from "./Navigation"
import { MobileCloseMenuButton } from "@/components/common/ShrtButton/MobileCloseMenuButton"

export const MenuMobileOverlay = () => {
    const { isOpen, setIsOpen } = useMobileMenuStore()
    return(
        <div
                className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ height: '100vh' }}
            >
                <MobileCloseMenuButton onClick={() => setIsOpen(false)} />
                <Navigation isMobile={true} />
            </div>
    )
}