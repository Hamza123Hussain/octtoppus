import Link from 'next/link'
import React from 'react'

const Links = () => {
  const links = [
    { href: '/services', label: 'Our Services' },
    { href: '/expertise', label: 'Our Expertise' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <div className="hidden md:flex space-x-8 relative">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="relative block text-gray-300   hover:text-purple-600 transition-all duration-300"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Links
