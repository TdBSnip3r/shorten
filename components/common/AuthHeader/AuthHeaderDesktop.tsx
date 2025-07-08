import Logo from "@/components/common/Logo"
import { ShrtButton } from "@/components/common/ShrtButton/ShrtButton"
import AuthNavigation from "./AuthNavigation"
import { ButtonVariant } from "@/enums/ShrtBtnEnum.enum"
import { useUserStore } from "@/stores/UserStore"

const AuthHeaderDesktop = () => {
  const { logout } = useUserStore()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center py-2">
      <div className="flex-1">
        <Logo redirectUrl="/dashboard" />
      </div>
      <div className="flex-1 flex justify-center">
        <AuthNavigation />
      </div>
      <div className="flex-1 flex justify-end gap-4">
        <ShrtButton variant={ButtonVariant.SECONDARY} onClick={logout}>Logout</ShrtButton>
      </div>
    </div>
  )
}

export default AuthHeaderDesktop