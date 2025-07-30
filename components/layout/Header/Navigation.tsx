import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobileMenuStore } from "@/stores/MobileMenuStoreState";
interface NavigationProps {
    isMobile?: boolean
    onItemClick?: () => void
}
const Navigation: React.FC<NavigationProps> = ({ isMobile = false }) => {
    const pathname = usePathname()
    const { setIsOpen } = useMobileMenuStore()
    return (
        <div className={`flex  gap-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
            <Link onClick={() => setIsOpen(false)} href="/landing" className={pathname === '/landing' ? 'text-blue-500' : 'text-gray-500'}>Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/landing/services" className={pathname === '/landing/services' ? 'text-blue-500' : 'text-gray-500'}>Servizi</Link>
            {
                isMobile &&
                <Link onClick={() => setIsOpen(false)} href="/landing/login" className={pathname === '/landing/login' ? 'text-blue-500' : 'text-gray-500'}>Login</Link>
            }
            {
                isMobile &&
                <Link onClick={() => setIsOpen(false)} href="/landing/register" className={pathname === '/landing/register' ? 'text-blue-500' : 'text-gray-500'}>Registrati</Link>
            }
        </div>
    )
}

export default Navigation