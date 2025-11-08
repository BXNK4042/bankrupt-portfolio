import React from 'react'
import Image from 'next/image'
import Kid from '../../../../public/kid.png'

function page() {
  return (
    <div className='flex flex-col items-center mx-20 my-15 space-y-10'>
      <Image src={Kid} width={200} alt='bankrupt-kid'></Image>
      <div className="flex flex-col bg-blue-50 p-10 space-y-1">
        <p className='text-md'>— about me</p>
        <h1 className='text-2xl'>Who is</h1>
        <h1 className='text-2xl font-bold'>Parinthon Kongthong?</h1>
        <p>a 2nd years university level who passionate about Computer and want to live with it for life, so he try to find way to earn money from it and become to Web Developer.</p>
        <p className='my-5 text-sm'>
          Name: Parinthon Kongthong <br />
          Nickname: Bank <br />
          AKA: Bankrupt <br />
          Ages: 19 years old <br />
          Birth: 5 February 2006 <br />
          Height: 175cm <br />
          Weight: 55kg <br />
          University: KMITL PCC <br />
          <br />
          ———————————————
        </p>
      </div>
    </div>
  )
}

export default page