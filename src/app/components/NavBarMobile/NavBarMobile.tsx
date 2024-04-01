import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  onClose: Dispatch<SetStateAction<boolean>>
  logo: {
    src: StaticImageData
    alt: string
    width: number
    height: number
  }
  title: string
}

function NavBarMobile({ onClose, logo, title }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed bg-white md:bg-transparent flex items-center justify-between w-full h-20 z-10 md:h-30 text-black px-2 py-5 ${
        scrollPosition > 0 ? 'top-0 z-10' : ''
      }`}
    >
      {/* Logo */}
      <div className="flex sticky flex-row items-center h-auto w-auto gap-2">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className={`transition-transform duration-700 ${
            scrollPosition > 10 ? 'scale-50' : 'scale-100'
          } font-bold`}
        />
        <h1
          className={`text-3xl font-bold transition-opacity duration-700 ${
            scrollPosition > 0 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {title}
        </h1>
      </div>

      {/* Hamburger menu icon */}
      <Link
        href="#"
        onClick={() => onClose(true)}
        className="flex sticky flex-col justify-center items-center w-12 h-auto right-0 p-1 mr-5 rounded hover:tracking-oneem transform hover:scale-105 transition duration-300"
      >
        <FaBars className="text-2xl m-5" />
        <span
          className={`text-base uppercase rotate-90 w-full hidden md:block transition-opacity duration-700`}
        >
          Menu
        </span>
      </Link>
    </header>
  )
}

export default NavBarMobile
