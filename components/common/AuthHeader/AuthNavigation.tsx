import Link from "next/link";
import { usePathname } from "next/navigation";
interface AuthNavigationProps {
    isMobile?: boolean
    onItemClick?: () => void
}
const AuthNavigation : React.FC<AuthNavigationProps> = ({ isMobile = false }) => {
    const pathname = usePathname()
    return (
        <div className={`flex  gap-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          <Link href="/dashboard/links" className={pathname === '/dashboard/links' ? 'text-blue-500' : 'text-gray-500'}>Links</Link>
          <Link href="/dashboard/settings" className={pathname === '/dashboard/settings' ? 'text-blue-500' : 'text-gray-500'}>Impostazioni</Link>
          <Link href="/dashboard/profile" className={pathname === '/dashboard/profile' ? 'text-blue-500' : 'text-gray-500'}>Profilo</Link>
        </div>
    )
}

export default AuthNavigation