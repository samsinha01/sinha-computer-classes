'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import clsx from 'clsx';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-1 px-2 border-b-[1px] border-gray-300">
      <div className="flex justify-between items-center gap-2">
        {/* Logo */}
        <div>
          <figure className="w-[120px]">
            <a href="/">
              <img src="/logo.png" alt="Logo" className="w-full" />
            </a>
          </figure>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-1">
            <li><Link href="/" className="py-2 px-2 hover:bg-blue-100 rounded-md">Home</Link></li>
            <li><Link href="/about" className="py-2 px-2 hover:bg-blue-100 rounded-md">About Us</Link></li>
            <li><Link href="/courses" className="py-2 px-2 hover:bg-blue-100 rounded-md">All Courses</Link></li>
            <li><Link href="/contact" className="py-2 px-2 hover:bg-blue-100 rounded-md">Contact Us</Link></li>
          </ul>
        </div>

        {/* Call Button */}
        <div className="hidden md:block">
          <a href="#" className="bg-blue-600 py-2 px-3 text-white rounded-sm">
            Call Us Now
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none mt-2"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        className={clsx(
          'overflow-hidden transition-all duration-500 ease-in-out md:hidden',
          menuOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col px-2 pb-3">
          <li>
            <Link href="/" className="block py-2 px-3 border-b hover:bg-gray-200" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/about" className="block py-2 px-3 border-b hover:bg-gray-200" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link href="/courses" className="block py-2 px-3 border-b hover:bg-gray-200" onClick={() => setMenuOpen(false)}>All Courses</Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 px-3 border-b hover:bg-gray-200" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
          <li className='mt-5'>
            <a href="tel:+919770661844" className="block text-center bg-blue-600 py-2 px-3 text-white rounded-sm" onClick={() => setMenuOpen(false)}>
              Call Us Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
