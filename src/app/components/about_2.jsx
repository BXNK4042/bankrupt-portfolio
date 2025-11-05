import React from 'react'

function about_2() {
  return (
    <div className='flex justify-between mx-40 my-20'>
        <div className='flex justify-center items-center w-1/2 h-150'>
          <img className='shadow-2xl rounded-full w-100 h-100' src="kid.jpeg" alt="" />
        </div>
        <div className='shadow-xl rounded-3xl w-1/2 bg-blue-50'>
          <div className='m-10'>
            <p>— about me</p>
            <div className='flex'>
              <h1 className='text-4xl my-2'>Who is</h1>
              <h1 className='font-bold text-4xl my-2 ml-3'>Parinthon Kongthong?</h1>
            </div>
            <p> a 2nd years university level who passionate about Computer and 
                want to live with it for life, so he try to find way to earn money
                from it and become to Web Developer.
                <br />
                <br />
                Name: Parinthon Kongthong
                <br />
                Nickname: Bank
                <br />
                AKA: Bankrupt
                <br />
                Ages: 19 years old
                <br />
                Birth: 5 February 2006
                <br />
                Height: 175cm
                <br />
                Weight: 55kg
                <br />
                University: KMITL PCC
                <br />
                <br />
                <br />
                —————————————————————
            </p>
          </div>
        </div>
    </div>
  )
}

export default about_2