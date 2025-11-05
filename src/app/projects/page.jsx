import React from 'react'
import Image from "next/image"
import notFound from "../../../public/not_found.png"

function page() {
  return (
    <div>
      <div className='mx-50 my-15'>
        <div className=''>
          <h1 className='text-2xl'>Projects</h1>
          <div className='m-10'>
            <ul className='grid grid-cols-4 gap-y-15'>
              <li className='shadow-md rounded-xl w-50 h-50 bg-blue-50'>
                <div>
                  <div className='flex justify-center m-5'>
                    <h1>Portfolio Website</h1>
                  </div>
                  <div className='flex justify-center m-5'>
                    <Image src={notFound} alt="not_found" width={100} height={100}/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <h1 className='text-2xl'>Certificate</h1>
          <div className='m-10'>
            <ul className='grid grid-cols-4 gap-y-15'>
              <li className='shadow-md rounded-xl w-50 h-50 bg-blue-50'>
                <div>
                  <div className='flex justify-center m-5'>
                    <h1>CTF2025</h1>
                  </div>
                  <div className='flex justify-center m-5'>
                    <Image src={notFound} alt="not_found" width={100} height={100}/>
                  </div>
                </div>
              </li>
              <li className='shadow-md rounded-xl w-50 h-50 bg-blue-50'>
                <div>
                  <div className='flex justify-center m-5'>
                    <h1>KMITL LEX 2025</h1>
                  </div>
                  <div className='flex justify-center m-5'>
                    <Image src={notFound} alt="not_found" width={100} height={100}/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page