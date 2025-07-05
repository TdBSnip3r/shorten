import Logo from "@/components/common/Logo"
import { ShrtButton } from "@/components/common/ShrtButton/ShrtButton"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import router from "next/router"
import Navigation from "./Navigation"

const HeaderDesktop = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center py-2">
        <Logo />
        <Navigation />
        <div className="flex flex-row gap-4">
          <ShrtButton onClick={() => router.push('/login')} variant={ButtonVariant.SECONDARY}>Login</ShrtButton>
          <ShrtButton onClick={() => router.push('/register')} variant={ButtonVariant.PRIMARY}>Registrati</ShrtButton>
        </div>
      </div>
    )
}

export default HeaderDesktop