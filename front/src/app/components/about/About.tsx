import Link from 'next/link'
import React from 'react'

function about() {
  return (
    <div className='w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8'>
      <div className="px-1 mx-12 my-12 md:px-4">
        <h1 className='text-5xl font-sans font-bold text-[#3F375C]'>About me?</h1>
      </div>
      <div className='text-xl text-center font-sans my-8 mx-8 md:px-4 text-[#3F375C]'>
        <p>
          It´s very simple, I am an application created by a person who has spent long hours of the day, at night, writing almost perfect code so that you can observe his creation.

          Don´t be ungrateful, don´t say bad things about the project.

          If you have words, ideas or codes to share, go to <Link
            href="/contact" 
            className='text-[#BC8034] font-extrabold underline decoration-[#3F375C] '>
            Contact
          </Link> and send the message.
        </p>
      </div>
    </div>
  )
}

export default about