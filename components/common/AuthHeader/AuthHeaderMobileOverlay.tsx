import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { useMobileMenuStore } from "../../../stores/MobileMenuStoreState"
import { ShrtButton } from "../ShrtButton/ShrtButton"
import AuthNavigation from "./AuthNavigation"
import { MobileCloseMenuButton } from "@/components/common/ShrtButton/MobileCloseMenuButton"
import { useUserStore } from "@/stores/UserStore"

export const AuthHeaderMobileOverlay = () => {
    const { isOpen, setIsOpen } = useMobileMenuStore()
    return (
        <div
            className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            style={{ height: '100vh' }}
        >
            <MobileCloseMenuButton onClick={() => setIsOpen(false)} />
            <AuthNavigation isMobile={true} />
        </div>
    )
}