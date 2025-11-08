import React from 'react'
import Image from 'next/image'
import Bank from "../../public/bank.png"
import Stack from "../../public/front.png"

function page() {
  return (
    <div className='flex flex-col gap-5 mx-20 my-10'>
      <Image src={Bank} alt='bankrupt-profile'></Image>
      <div className="flex flex-col">
        <p className='text-md'>Hi, I am</p>
        <h1 className='text-2xl font-bold'>Web Developer</h1>
        <p className='text-md'>My name is Parinthon Kongthong, you can call me "Bank" and this is my personal portfolio, please enjoy.</p>
        <div className="flex">
          <div className="w-1/2"></div>
          <p className='w-3/2 text-xs my-5'>"Your time is limited, so don’t waste it living someone else’s life." — Steve Jobs</p>
        </div>
      </div>
      <div className="my-3"></div>
      <Image src={Stack} className='my-4' alt='web-developer-stack'></Image>
      <div className="flex flex-col space-y-2">
        <h1 className='text-xl font-bold'>About Me</h1>
        <p className='text-md'>	&#8192;	&#8192;I’m a Frontend Developer passionate about crafting smooth, responsive and user-friendly web experiences. I love turning ideas into interactive designs using HTML, CSS, JavaScript, and modern frameworks like React. My focus is on building pixel-perfect interfaces that not only look great but also perform seamlessly across devices.</p>
      </div>
    </div>
  )
}

export default page