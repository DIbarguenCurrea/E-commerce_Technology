import Link from 'next/link'
import React from 'react'

export default function not_found() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
	<h1 className="text-9xl font-extrabold text-[#3F375C] tracking-widest">404</h1>
	<div className="bg-[#BC8034] px-2 text-sm rounded rotate-12 absolute">
		<p className='text-[#3F375C]'>Page Not Found</p>
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#D9CAB3] group focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#3F375C] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#3F375C] border border-current">
          <Link href="/home">Go Home</Link>
        </span>
      </a>
    </button>
</div>
  )
}
