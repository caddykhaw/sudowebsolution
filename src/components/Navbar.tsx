"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sudo Web Solution
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-6">
          <Link href="/features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};
