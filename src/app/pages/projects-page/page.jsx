import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center mx-20 my-15 space-y-15'>
        <div className="space-y-5">
          <h1 className='text-xl'>Projects</h1>
          <div className="flex w-70 overflow-x-auto">
            <div className="flex justify-center items-center gap-5">
              <div className="border w-50 h-50"></div>
              <div className="border w-50 h-50"></div>
              <div className="border w-50 h-50"></div>
              <div className="border w-50 h-50"></div>
            </div>
          </div>          
        </div>
        <div className="space-y-5">
          <h1 className='text-xl'>Certificates</h1>
            <div className="flex w-70 overflow-x-auto">
              <div className="flex justify-center items-center gap-5">
                <div className="border w-50 h-50"></div>
                <div className="border w-50 h-50"></div>
                <div className="border w-50 h-50"></div>
                <div className="border w-50 h-50"></div>
              </div>
            </div>          
        </div>
    </div>
  )
}

export default page