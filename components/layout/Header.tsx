"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Tools", href: "/tools" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <style jsx>{`
        .logo-light {
          display: block;
        }
        .logo-dark {
          display: none;
        }
        @media (prefers-color-scheme: dark) {
          .logo-light {
            display: none;
          }
          .logo-dark {
            display: block;
          }
        }
      `}</style>
      <div className="max-w-[1536px] mx-auto px-8">
        <nav className="flex items-center justify-between gap-12 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-90 transition-all duration-300">
            {/* Light mode: BLACK logo on white background */}
            <Image
              src="/images/logos/CC_logo_ultrasmooth_black_on_transparent.png"
              alt="CognitiveCommons - Unlocking Shared Intelligence"
              width={168}
              height={60}
              className="h-12 w-auto logo-light"
              priority
            />
            {/* Dark mode: WHITE logo on dark background */}
            <Image
              src="/images/logos/CC_logo_ultrasmooth_white_on_transparent.png"
              alt="CognitiveCommons - Unlocking Shared Intelligence"
              width={168}
              height={60}
              className="h-12 w-auto logo-dark"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium text-sm transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <Link
              href="/courses"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 font-medium text-sm transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md text-center"
              >
                Join Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
