"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarClientProps {
  isAuthenticated: boolean;
}

const NavbarClient = ({ isAuthenticated }: NavbarClientProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'NEW!', path: '/new' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Bedding', path: '/bedding' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Accessories', path: '/accessories' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomeOrNew = pathname === '/' || pathname === '/new'; // Check if on Home or New

  return (
    <div className="pt-5 md:mt-[-60px]">
      <ul className="hidden md:flex md:justify-center md:items-center md:gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`lg:text-[14px] font-semibold tracking-tighter px-1 py-1 ${
                isAuthenticated && item.path === '/new' && isHomeOrNew // Only activate "NEW!" if user is authenticated
                  ? 'bg-[#658C4A] text-white'
                  : pathname === item.path
                  ? 'bg-[#658C4A] text-white' // Highlight other links based on pathname
                  : 'text-[#333333] hover:bg-[#658C4A] hover:text-white' // Inactive state
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className='hidden lg:flex justify-center'></div>
      <div className="flex justify-end mt-[-60px] md:hidden mr-11">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 1.15, ease: 'easeInOut' }}
        className="overflow-hidden md:hidden"
      >
        <ul className="flex flex-col items-center gap-4 mt-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                onClick={toggleMenu}
                className={`block text-sm font-semibold tracking-tighter px-3 py-2 ${
                  isAuthenticated && item.path === '/new' && isHomeOrNew // Only activate "NEW!" if user is authenticated
                    ? 'bg-[#658C4A] text-white'
                    : pathname === item.path
                    ? 'bg-[#658C4A] text-white' // Highlight other links based on pathname
                    : 'text-[#333333] hover:bg-[#658C4A] hover:text-white' // Inactive state
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul> 
      </motion.div>
    </div>
  );
};

export default NavbarClient;
