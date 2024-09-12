"use client";

import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavbarClient = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'NEW!', path: '/new' },
    { name: 'Clothing', path: '/clothing' },
    { name: 'Bedding', path: '/bedding' },
    { name: 'Furniture', path: '/furniture' },
    { name: 'Accessories', path: '/accessories' },
  ];

  return (
    <div className="py-1 mt-[-45px]">
      <ul className="flex justify-center items-center gap-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className={`text-[14px] font-semibold tracking-tighter px-1 py-1 ${pathname === item.path ? 'bg-[#658C4A] text-white' : 'text-[#333333] hover:bg-[#658C4A] hover:text-white'}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="border-[#658C4A]/75 mt-3"></hr>
    </div>
  );
};

export default NavbarClient;
