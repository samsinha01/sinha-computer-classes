'use client'
import { IoIosMail, IoMdCall } from "react-icons/io";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

export default function Header() {
  return (
    <header className="hidden md:block py-2 px-4 md:px-6 bg-blue-950 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
        {/* Contact Info */}
        <ul className="flex gap-4 md:gap-8 items-center">
          <li className="flex items-center gap-2">
            <IoMdCall className="text-lg" />
            <a href="tel:+919770661844" className="hover:underline">9770661844</a>
          </li>
          <li className="flex items-center gap-2">
            <IoIosMail className="text-lg" />
            <a href="mailto:anuragsinha.2011@gmail.com" className="hover:underline">
              anuragsinha.2011@gmail.com
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://instagram.com" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl text-pink-400 hover:scale-110 transition" />
          </a>
          <a
            href="https://wa.me/919770661844"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-xl text-green-400 hover:scale-110 transition" />
          </a>
          <a
            href="tel:+919770661844"
            aria-label="Call"
          >
            <MdAddCall className="text-xl hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </header>
  );
}