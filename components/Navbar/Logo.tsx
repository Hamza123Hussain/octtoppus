import Image from 'next/image'
import React, { useState } from 'react'

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? '/octtoppus.png' : '/Octtoppus_o.png'}
        alt="LOGO"
        width={50}
        height={50}
        className={`transition-all duration-500 ease-in-out cursor-pointer ${
          isHovered ? 'opacity-100 scale-110' : ' '
        }`}
      />
    </div>
  )
}

export default Logo
