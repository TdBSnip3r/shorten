import Logo from "@/components/common/Logo";
import { MobileMenuButton } from "@/components/common/ShrtButton/MobileMenuButton";
import { MenuMobileOverlay } from "./MenuMobileOverlay";
import { useMobileMenuStore } from "../../../stores/MobileMenuStoreState";



export default function HeaderMobile() {
    const { setIsOpen } = useMobileMenuStore()
    return (
        <div className="px-4 w-full h-16 bg-black shadow-sm border-b border-gray-200 flex flex-row justify-between items-center relative">
            <Logo />
            <MobileMenuButton onClick={() => setIsOpen(true)} />
            <MenuMobileOverlay />
        </div>
    )
}