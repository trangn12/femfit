import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YgY6nFjKs6i3slHRBo7Ux6i4tNODYt.png"
            alt="FemFit Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-soft-pink to-lavender bg-clip-text text-transparent">
            FemFit
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/features" className="text-gray-700 hover:text-soft-pink">
            Features
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-soft-pink">
            How It Works
          </Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-soft-pink">
            Dashboard
          </Link>
        </div>
      </nav>
    </header>
  )
}

