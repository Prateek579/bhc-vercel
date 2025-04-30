'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { title: 'Products', href: '/ourProducts' },
    { title: 'Solutions', href: '/ourSolution' },
    {
      title: 'Our Initiative',
      href: '/our-initiative',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Animacare', href: '/ourInitiative/animacare' },
        { title: 'Decentralized Health Network', href: '/ourInitiative/decentralized' },
      ]
    },
    {
      title: 'Company',
      href: '/know-us-better',
      hasDropdown: true,
      dropdownItems: [
        { title: 'About Us', href: '/knowUsBetter/about' },
        { title: 'News', href: '/knowUsBetter/news' },
      ]
    },
    { title: 'Contact Us', href: '/contactUs' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/nav-img.png" alt="BHC Logo" width={100} height={40} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group z-50">
              <Link href="/ourProducts" className={`nav-menu-item text-gray-700 hover:text-[#18A093] px-3 py-2 inline-flex items-center ${pathname === '/ourProducts' ? 'nav-menu-item-active' : ''}`}>
                Products
              </Link>
            </div>
            <div className="relative group z-50">
              <Link href="/ourSolution" className={`nav-menu-item text-gray-700 hover:text-[#18A093] px-3 py-2 inline-flex items-center ${pathname === '/ourSolution' ? 'nav-menu-item-active' : ''}`}>
                Solutions
              </Link>
            </div>

            <div className="relative group z-50">
              <button
                className={`nav-menu-item text-gray-700 hover:text-[#18A093] px-3 py-2 inline-flex items-center ${pathname.startsWith('/ourInitiative') ? 'nav-menu-item-active' : ''}`}
              >
                Initiative
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="dropdown-menu absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div role="menu">
                  <Link href="/ourInitiative/animacare" className={`dropdown-item ${pathname === '/ourInitiative/animacare' ? 'text-[#18A093] after:w-[calc(100%-2rem)]' : ''}`}>
                    <span className="dropdown-item-text">Animacare</span>
                  </Link>
                  <Link href="/ourInitiative/decentralized" className={`dropdown-item ${pathname === '/ourInitiative/decentralized' ? 'text-[#18A093] after:w-[calc(100%-2rem)]' : ''}`}>
                    <span className="dropdown-item-text">Decentralized Health Network</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group z-50">
              <button
                className={`nav-menu-item text-gray-700 hover:text-[#18A093] px-3 py-2 inline-flex items-center ${pathname.startsWith('/knowUsBetter') ? 'nav-menu-item-active' : ''}`}
              >
                Company
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="dropdown-menu absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div role="menu">
                  <Link href="/knowUsBetter/about" className={`dropdown-item ${pathname === '/knowUsBetter/about' ? 'text-[#18A093] after:w-[calc(100%-2rem)]' : ''}`}>
                    <span className="dropdown-item-text">About Us</span>
                  </Link>
                  <Link href="/knowUsBetter/news" className={`dropdown-item ${pathname === '/knowUsBetter/news' ? 'text-[#18A093] after:w-[calc(100%-2rem)]' : ''}`}>
                    <span className="dropdown-item-text">News</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group z-50">
              <Link href="/contactUs" className={`nav-menu-item text-gray-700 hover:text-[#18A093] px-3 py-2 inline-flex items-center ${pathname === '/contactUs' ? 'nav-menu-item-active' : ''}`}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mr-4">
            {/* Login */}
            <div className="hidden md:block relative mr-7">
              <Link
                href="https://doctor.bridgehealth.care/"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#18A093] hover:bg-white hover:border-1 hover:border-[#18A093] hover:text-[#18A093] hover:transition-colors duration-300 "
              >
                Doctor Login
              </Link>
            </div>
            {/* Get Involved Button */}
            <div className="hidden md:block relative">
              <Link
                href="/getInvolved"
                className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#003366] hover:bg-white hover:border-1 hover:border-[#003366] hover:text-[#003366] hover:transition-colors duration-300"
              >
                Get Involved
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.title} className="relative">
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="nav-menu-item w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                  >
                    {item.title}
                    <svg
                      className={`ml-2 h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="nav-menu-item block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="nav-menu-item w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="https://doctor.bridgehealth.care/"
            className="w-full inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#18A093] hover:opacity-80 "
          >
            Doctor Login
          </Link>
          <Link
            href="/getInvolved"
            className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-[#003366] hover:bg-blue-900 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;