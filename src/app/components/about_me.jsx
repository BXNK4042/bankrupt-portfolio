import React from 'react'

function about() {
  return (
    <div className='flex justify-center m-40 ml-50'>
        <div className='flex justify-center items-center w-1/2'>
            <img className='w-100' src="front.jpg" alt="" />
        </div>
        <div className='space-y-5 w-1/2'>
            <h1 className='font-bold text-3xl'>About Me</h1>
            <p className='pr-20'>I’m a Frontend Developer passionate about crafting smooth, responsive 
                and user-friendly web experiences. I love turning ideas into interactive designs using
                HTML, CSS, JavaScript, and modern frameworks like React.
                My focus is on building pixel-perfect interfaces that not only look great but also perform seamlessly across devices.
            </p>
        </div>

    </div>
  )
}

export default about