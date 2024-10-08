'use client'
import { useState } from 'react'
import Link from 'next/link'
import Links from './Links'
import Logo from './Logo'
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="flex items-center justify-between p-4  text-white">
      {/* Logo */}
      <Logo />
      {/* Menu Items */}
      <Links />
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className={`w-6 h-6 ${isOpen ? 'text-purple-500' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black text-white p-4 space-y-4">
          <Link href="/services" className="block hover:text-gray-300">
            Our Services
          </Link>
          <Link href="/expertise" className="block hover:text-gray-300">
            Our Expertise
          </Link>
          <Link href="/blogs" className="block hover:text-gray-300">
            Blogs
          </Link>
          <Link href="/about" className="block hover:text-gray-300">
            About Us
          </Link>
          <Link href="/contact" className="block hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
export default Navbar
