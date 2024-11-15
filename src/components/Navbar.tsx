"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600">E-Waste Locator</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/facilities" className="text-gray-600 hover:text-green-600 transition-colors">
              Find Facilities
            </Link>
            <Link href="/education" className="text-gray-600 hover:text-green-600 transition-colors">
              Education
            </Link>
            <Link href="/recycle" className="text-gray-600 hover:text-green-600 transition-colors">
              Recycle
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-green-600 transition-colors">
              News
            </Link>
            <button
              className="text-left px-3 py-2 text-gray-600 hover:text-green-600 transition-colors"
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-green-600">
              Home
            </Link>
            <Link href="/facilities" className="block px-3 py-2 text-gray-600 hover:text-green-600">
              Find Facilities
            </Link>
            <Link href="/education" className="block px-3 py-2 text-gray-600 hover:text-green-600">
              Education
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-green-600">
              About
            </Link>
            <button className="w-full text-left px-3 py-2 text-gray-600 hover:text-green-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;