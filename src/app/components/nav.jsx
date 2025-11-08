'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Menu from '../../../public/menu.svg'
import Link from 'next/link'

function nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
    <div className='py-3'>
        <div className='flex justify-between items-center mx-10'>
            <h1 className='text-xl font-bold'>Bankrupt</h1>
            <Image src={Menu} alt='Menu-Button' onClick={toggleMenu}></Image>
        </div>

        {isMenuOpen ? (
            <ul className='flex flex-col mx-10 mt-5 space-y-5'>
                <li className='hover:underline'><Link href="/">Home</Link></li>
                <li className='hover:underline'><Link href="/pages/about-page">About</Link></li>
                <li className='hover:underline'><Link href="/pages/projects-page">Projects</Link></li>
                <li className='hover:underline'><Link href="/pages/contact-page">Contact</Link></li>
            </ul>
        ): null}
    </div>
    )
}

export default nav