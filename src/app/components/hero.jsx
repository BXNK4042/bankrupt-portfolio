import React from 'react'
import Image from 'next/image'

function hero() {
  return (
    <div className='flex justify-center mx-40 my-30 ml-70'>
        <div className='w-1/2 space-y-3'>
            <h1 className='text-xl'>Hi, I am</h1>
            <h1 className='text-7xl font-bold'>Web Developer</h1>
            <h1 className='text-xl'>My name is Parinthon Kongthong, you can call me "Bank" <br />
            and this is my personal portfolio, please enjoy.
            </h1>
            <div className='flex justify-between'>
                <span className='w-1/2'></span>
                <h1 className='w-1/2'> 
                    "Your time is limited, so don’t waste it living someone else’s life." <br />
                    — Steve Jobs
                </h1>
            </div>
        </div>
        <div className='flex w-1/2 justify-center'>
            <img className='w-70 h-70 rounded-full' src="me.jpeg" alt="" />
        </div>
    </div>
  )
}

export default hero