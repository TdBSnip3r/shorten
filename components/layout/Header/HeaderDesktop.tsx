import Logo from "@/components/common/Logo"
import { ShrtButton } from "@/components/common/ShrtButton/ShrtButton"
import Navigation from "./Navigation"
import Link from "next/link"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"

const HeaderDesktop = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center py-2 bg-black">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="flex-1 flex justify-center">
            <Navigation />
          </div>
        <div className="flex-1 flex justify-end gap-4">
          <Link href="/landing/login">
            <ShrtButton variant={ButtonVariant.SECONDARY}>Login</ShrtButton>
          </Link>
          <Link href="/landing/register">
            <ShrtButton variant={ButtonVariant.PRIMARY}>Registrati</ShrtButton>
          </Link>
        </div>
      </div>
    )
}

export default HeaderDesktop