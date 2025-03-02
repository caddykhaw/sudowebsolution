// src/components/layout/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                SudoWebSolution
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/login"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-white text-teal-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Contact
            </Link>
            <Link
              href="/auth/login"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
