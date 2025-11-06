'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Menu from '../../../public/menu.svg'

function nav_2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false) 

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

  return (
    <nav className='p-4'>
      <div className="flex items-center justify-between">
        <p className='text-2xl font-bold'>Bankrupt</p>

        <div className='md:hidden'>
          <button id='menu-toggle' onClick={toggleMenu}>
            <Image src={Menu} width={50} height={50}></Image>
          </button>
        </div>

        <ul className='hidden md:flex space-x-15 text-xl'>
            <li className='hover:underline'><Link href="/">Home</Link></li>
            <li className='hover:underline'><Link href="/pages/about-page">About</Link></li>
            <li className='hover:underline'><Link href="/pages/projects-page">Projects</Link></li>
            <li className='hover:underline'><Link href="/pages/contact-page">Contact</Link></li>
        </ul>

      </div>

      {isMenuOpen ? (
        <ul className='bg-white py-6 flex-col md:hidden space-y-5 text-xl'>
          <li className='hover:underline'><Link href="/">Home</Link></li>
          <li className='hover:underline'><Link href="/pages/about-page">About</Link></li>
          <li className='hover:underline'><Link href="/pages/projects-page">Projects</Link></li>
          <li className='hover:underline'><Link href="/pages/contact-page">Contact</Link></li>
        </ul>
      ): null}
      

    </nav>
  )
}

export default nav_2