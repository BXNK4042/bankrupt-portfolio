import React from 'react'
import Image from 'next/image'
import Mail from '../../../../public/svg/gmail.svg'
import Github from '../../../../public/svg/github.svg'
import LinkedIn from '../../../../public/svg/linkedin.svg'

function page() {
  return (
    <div className='flex flex-col items-center mx-20 my-15'>
      <div className="flex flex-col">
        <div className="bg-blue-200 h-30"></div>
        <div className="bg-blue-50 h-120 p-7">
          <h1 className='text-2xl font-bold'>Contact</h1>
          <div className="space-y-5 mt-10">
            <div className="flex">
              <Image src={Mail} width={30} alt='mail-logo'></Image>
              <p className='mx-3 truncate'>parinthonkongthong@gmail.com</p>
            </div>
            <div className="flex">
              <Image src={Github} width={30} alt='github-logo'></Image>
              <p className='mx-3'>BXNK4042</p>            
            </div>
            <div className="flex">
              <Image src={LinkedIn} width={30} alt='linkedin-logo'></Image>
              <p className='mx-3'>(working on it.....)</p>            
            </div>             
          </div>
        </div>
      </div>
    </div>
  )
}

export default page 