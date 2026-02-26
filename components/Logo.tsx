import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 40 }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src="/logo.svg"
        alt="Feet Generator AI Logo"
        width={size}
        height={size}
        className="w-full h-full"
        priority
      />
    </div>
  )
}
