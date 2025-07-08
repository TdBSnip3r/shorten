import Link from "next/link";

interface LogoProps {
  redirectUrl?: string
}

export default function Logo({ redirectUrl = "/landing" }: LogoProps) {
  return (
    <Link href={redirectUrl || "/landing"} className="text-2xl font-bold text-gray-900">
      <img src="/logo.svg" alt="logo" className="w-10 h-10" />
    </Link>
  )
}