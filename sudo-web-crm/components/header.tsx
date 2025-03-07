// components/header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  label: string;
  href: string;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Define menu items once for both desktop and mobile
  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl">
          <span className={scrolled ? "text-indigo-600" : "text-white"}>
            Sudo
          </span>
          <span className={scrolled ? "text-gray-800" : "text-white"}>Web</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-500 ${
                isActive(item.href)
                  ? scrolled
                    ? "text-indigo-600"
                    : "text-white font-bold"
                  : scrolled
                  ? "text-gray-800"
                  : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Button
            className={`bg-indigo-600 hover:bg-indigo-700 ${
              scrolled ? "" : "border border-white"
            }`}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu
            className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed right-0 top-0 h-full w-4/5 max-w-xs bg-white p-6 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" className="font-bold text-2xl">
                    <span className="text-indigo-600">Sudo</span>
                    <span className="text-gray-800">Web</span>
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6 text-gray-800" />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base font-medium py-2 transition-colors hover:text-indigo-600 ${
                        isActive(item.href)
                          ? "text-indigo-600 font-bold"
                          : "text-gray-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-4">
                    Get Started
                  </Button>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
