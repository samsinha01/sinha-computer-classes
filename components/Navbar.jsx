import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="py-1 px-2 border-b-[1px] border-gray-300">
        <div className="flex justify-between items-center gap-2">
            <div>
                <figure className="w-[120px]">
                    <a href="/">
                        <img src="/logo.svg" alt="" className="w-full"/>
                    </a>
                </figure>
            </div>
            <div>
                <ul className="flex items-center gap-1">
                    <li><Link href="/" className="py-2 px-2 hover:bg-blue-100 rounded-md">Home</Link></li>
                    <li><Link href="/about" className="py-2 px-2 hover:bg-blue-100 rounded-md">About Us</Link></li>
                    <li><Link href="#" className="py-2 px-2 hover:bg-blue-100 rounded-md">All Courses</Link></li>
                    <li><Link href="#" className="py-2 px-2 hover:bg-blue-100 rounded-md">Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <a href="#" className='bg-blue-600 py-2 px-3 text-white rounded-sm'>Call Us Now</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar