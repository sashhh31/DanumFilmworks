import Link from "next/link"
import Image from "next/image"
import { Search, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white">

      <div className="container mx-auto px-4 items-center justify-center">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-20">
              <Image
                src="/logo.png"
                alt="DanumFilmWorks Logo"
                width={128}
                height={140}
                className="object-contain"
              />
          
            </div>
          </Link>
          <nav className="hidden md:flex items-center md:mr-  justify-center space-x-16 text-bold">
            <Link href="/" className="text-gray-800 text-bold text-xl  hover:text-orange-500">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-800 text-bold text-lg  hover:text-orange-500">
              About Us
            </Link>
            <Link href="/services" className="text-gray-800 text-bold text-lg  hover:text-orange-500">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-800 text-bold text-lg  hover:text-orange-500">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-800 text-bold text-xl  hover:text-orange-500">
              Blog
            </Link>
            <Link href="/contact-us" className="text-gray-800 text-bold text-xl  hover:text-orange-500">
              Contact Us
            </Link>


          </nav>
        </div>
      </div>
    </header>
  )
}
