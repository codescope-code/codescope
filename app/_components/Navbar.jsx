'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'WORKS', href: '/works' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '#Contact' },
  ];

  return (
    <div className="bg-black text-white font-sans fixed top-0 left-0 w-full z-50">
      
      <nav className="flex justify-between items-center px-6 py-4   ">
        <div className="flex items-center gap-2">
          <Image src="/logo1.png" alt="Logo" width={70} height={70} />
          <Link href="html" className="font-bold text-3xl">
          CodeScope
          </Link>
        </div>

       
        <div className="hidden md:flex space-x-8 text-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-green-400 ${
                pathname === link.href ? 'text-green-400 font-semibold ' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

    
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

     
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 text-sm bg-black border-b border-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block hover:text-green-400 ${
                pathname === link.href ? 'text-green-400 font-semibold' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
