import React from 'react'
import Image from 'next/image'
import Mail from '../../../public/gmail.svg'
import Github from '../../../public/github.svg'
import LinkedIn from '../../../public/linkedin.svg'

function page() {
  return (
    <div className='mx-50 my-30'>
      <div className='flex w-full h-150'>
        <div className='bg-blue-100 w-1/2'>
          
        </div>
        <div className='bg-blue-50/75 w-3/2'>
          <div className='m-10'>
            <h1 className='text-4xl'>Contact</h1>
            <div className='mt-15 space-y-1'>
              <div className='flex items-center'>
                <Image src={Mail} width={50} height={50} alt='mail-icon'></Image>
                <h1 className='ml-5 text-lg'>parinthonkongthong@gmail.com</h1> 
              </div>
              <br />
              <div className='flex items-center'>
                <Image src={Github} width={50} height={50} alt='github-icon'></Image>
                <h1 className='ml-5 text-lg'>BXNK4042</h1>
              </div>
              <br />
              <div className='flex items-center'>
                 <Image src={LinkedIn} width={50} height={50} alt='linkedin-icon'></Image>
                 <h1 className='ml-5 text-lg'>(Working on it)</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page