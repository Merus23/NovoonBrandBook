'use client'

import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}

function SideMenu({isOpen, onClose}: Props) {
  const pathname = usePathname()

  return (
    <div className={`fixed flex-col bg-gray-800 w-screen h-screen md:right-0 z-10 md:w-64 transition-transform duration-300 ${isOpen ? 'md:translate-x-64' && 'translate-x-full' : 'md:-translate-x-0' && '-translate-x-0:'}`}>
      <div className="p-4 bg-gray-900 text-white">Menu</div>
      <ul className="p-2">
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 1</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 2</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 3</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 4</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 4</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 4</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 4</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 4</Link>
        </li>
        <li className="text-white mb-2">
          <Link href="/" className="hover:bg-gray-700 block px-4 py-2 rounded">Menu 4</Link>
        </li>
      </ul>
      <button
        onClick={() => onClose(false) }
        className="bg-gray-900 w-full text-white p-2 rounded hover:bg-gray-700 transition-colors duration-300"
      >
        Close
      </button>
    </div>
  )
}

export default SideMenu