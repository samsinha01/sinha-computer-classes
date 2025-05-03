'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import clsx from 'clsx';

function Footer() {
  const currentYear = new Date().getFullYear();
  const courses = [
    { id: "1", name: "DCA", path: "/courses/dca" },
    { id: "2", name: "BCA", path: "/courses/bca" },
    { id: "3", name: "PGDCA", path: "/courses/pgdca" },
    { id: "4", name: "Web Development", path: "/courses/web-development" },
    { id: "5", name: "C Programming", path: "/courses/c-programming" },
    { id: "6", name: "C++ Programming", path: "/courses/cpp-programming" },
    { id: "7", name: "React JS Development", path: "/courses/react" },
    { id: "8", name: "Python Programming", path: "/courses/python" },
    { id: "9", name: "MERN Stack Development", path: "/courses/mern" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#", name: "Facebook" },
    { icon: <FaTwitter />, url: "#", name: "Twitter" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
              About Us
            </h3>
            <p className="mb-4 text-gray-300">
              We provide quality computer education at affordable fees to help students build successful careers in IT.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
              Our Courses
            </h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link 
                    href={`/courses/${course.id}/${course.name}`} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-500">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-blue-400" />
                <span className="text-gray-300">Behind City Center Mall, Parshuram ward, Bhatapara (C.G)</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  +91 9770661844
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} Sinha Computer Classes. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;