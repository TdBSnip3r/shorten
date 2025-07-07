import Link from "next/link";
import { usePathname } from "next/navigation";
interface NavigationProps {
    isMobile?: boolean
    onItemClick?: () => void
}
const Navigation : React.FC<NavigationProps> = ({ isMobile = false }) => {
    const pathname = usePathname()
    return (
        <div className={`flex  gap-4 ${isMobile ? 'flex-col' : 'flex-row'}`}>
          <Link href="/landing" className={pathname === '/landing' ? 'text-blue-500' : 'text-gray-500'}>Home</Link>
          <Link href="/landing/about" className={pathname === '/landing/about' ? 'text-blue-500' : 'text-gray-500'}>Chi Siamo</Link>
          <Link href="/landing/services" className={pathname === '/landing/services' ? 'text-blue-500' : 'text-gray-500'}>Servizi</Link>
          <Link href="/landing/contacts" className={pathname === '/landing/contacts' ? 'text-blue-500' : 'text-gray-500'}>Contatti</Link>
        </div>
    )
}

export default Navigation