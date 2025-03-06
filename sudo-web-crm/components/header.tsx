// components/Header.tsx
"use client"; // Client component for interactivity (hamburger menu)

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu (install lucide-react)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="p-4 bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Sudo Web Solution
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-gray-700"
            >
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 text-center">
          <Link href="/" className="hover:underline" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/services"
            className="hover:underline"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link href="/login" onClick={toggleMenu}>
            <Button
              variant="outline"
              className="w-full text-white border-white hover:bg-gray-700"
            >
              Login
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
