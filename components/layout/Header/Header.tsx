'use client'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import { useWindowSize } from "@uidotdev/usehooks";

export default function Header() {
  const size = useWindowSize();

  if (size && size.width && size.width < 870) {
    return <HeaderMobile />
  }

  return <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <HeaderDesktop />
  </header>
} 