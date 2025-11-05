import React from 'react'
import Link from 'next/link'

function nav() {
  return (
    <div className='flex py-4 justify-between mx-20'>
        <p className='font-bold text-xl'>Bankrupt</p>
        <ul className='flex items-center justify-center font-semi-bold space-x-10'>
            <li className='hover:underline'><Link href="/">Home</Link></li>
            <li className='hover:underline'><Link href="/about">About</Link></li>
            <li className='hover:underline'><Link href="/projects">Projects</Link></li>
            <li className='hover:underline'><Link href="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default nav