import { useMobileMenuStore } from "@/stores/MobileMenuStoreState";
import { useUserStore } from "@/stores/UserStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface AuthNavigationProps {
    isMobile?: boolean
    onItemClick?: () => void
}
const AuthNavigation : React.FC<AuthNavigationProps> = ({ isMobile = false }) => {
    const pathname = usePathname()
    const {setIsOpen } = useMobileMenuStore()
    const { logout } = useUserStore()
    return (
        <div className={`flex  gap-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          <Link onClick={() => setIsOpen(false)} href="/dashboard" className={pathname === '/dashboard' ? 'text-blue-500' : 'text-gray-500'}>Dashboard</Link>
          <Link onClick={() => setIsOpen(false)} href="/dashboard/links" className={pathname === '/dashboard/links' ? 'text-blue-500' : 'text-gray-500'}>Links</Link>
          <Link onClick={() => setIsOpen(false)} href="/dashboard/settings" className={pathname === '/dashboard/settings' ? 'text-blue-500' : 'text-gray-500'}>Impostazioni</Link>
          <Link onClick={() => setIsOpen(false)} href="/dashboard/profile" className={pathname === '/dashboard/profile' ? 'text-blue-500' : 'text-gray-500'}>Profilo</Link>
          <p className="text-gray-500 text cursor-pointer" onClick={logout}>Logout</p>
        </div>
    )
}

export default AuthNavigation