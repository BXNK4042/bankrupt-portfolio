import React from 'react'

function nav() {
  return (
    <div className='flex py-4 justify-between mx-20'>
        <p className='font-semi-bold text-xl'>Bankrupt</p>
        <ul className='flex items-center justify-center font-semi-bold space-x-10'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>About</li>
            <li className='hover:underline'>Projects</li>
            <li className='hover:underline'>Contact</li>
        </ul>
    </div>
  )
}

export default nav