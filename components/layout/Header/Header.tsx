'use client'
import useWindowDimensions from '@/hooks/WindowsDimensionHook'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header() {
  const { width } = useWindowDimensions()

  if (width < 768) {
    return <HeaderMobile />
  }

  return <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <HeaderDesktop />
  </header>
} 