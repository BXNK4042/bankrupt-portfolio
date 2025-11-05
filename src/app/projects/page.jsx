import React from 'react'
import Nav from "../components/nav"
import Footer from "../components/footer"
import Image from "next/image"
import notFound from "../../../public/not_found.png"

function page() {
  return (
    <div>
      <Nav></Nav>
      <div className='mx-50'>
        <div className=''>
          <h1>Projects</h1>
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
          <h1>Certificate</h1>
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
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page