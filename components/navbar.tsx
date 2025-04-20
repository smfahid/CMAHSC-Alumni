"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Events", href: "#" },
  { name: "Membership", href: "/membership" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#963634] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center">
          <div className="relative flex items-center justify-center h-16 md:h-20">
            <span className="font-bold text-2xl md:text-3xl tracking-wider uppercase whitespace-nowrap border-2 border-white px-3 py-2 rounded">
              CMAHSC ALUMNI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium transition-colors hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-0.5 hover:after:w-full hover:after:bg-white"
            >
              <span className="flex items-center">{item.name}</span>
            </Link>
          ))}
          <Link
            href="/login"
            className="ml-4 rounded-md border border-white px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-[#963634]"
          >
            Member Login
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-between">
                  {item.name}
                </span>
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 rounded-md border border-white px-4 py-2 text-center text-sm font-medium transition-colors hover:bg-white hover:text-[#963634]"
              onClick={() => setIsMenuOpen(false)}
            >
              Member Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
