"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/saved", label: "Saved" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="w-full px-6 py-4 bg-white shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            className="text-xl font-bold text-blue-600 transition-colors hover:text-blue-800"
            href="/"
          >
            KaarYab Afghanistan
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {links.map((link) => {
              const isActive = pathName === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-blue-600 transition-colors font-semibold "
                      : "text-gray-700 transition-colors hover:text-blue-600"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <button
            className="text-2xl md:hidden text-gray-700 transition-colors hover:text-blue-600"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        <div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-4 flex flex-col gap-4 rounded-lg bg-gray-50 p-4 shadow-md md:hidden">
              {links.map((link) => {
                const isActive = pathName === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={isActive ? "text-blue-600" : "text-gray-700"}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
