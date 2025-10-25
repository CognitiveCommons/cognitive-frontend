"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
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
      <Container>
        <nav className="flex items-center justify-between py-2.5">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            {/* Light mode: BLACK logo on white background */}
            <Image
              src="/images/logos/CC_logo_ultrasmooth_black_on_transparent.png"
              alt="CognitiveCommons"
              width={140}
              height={50}
              className="h-10 w-auto logo-light"
              priority
            />
            {/* Dark mode: WHITE logo on dark background */}
            <Image
              src="/images/logos/CC_logo_ultrasmooth_white_on_transparent.png"
              alt="CognitiveCommons"
              width={140}
              height={50}
              className="h-10 w-auto logo-dark"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/courses"
              className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/courses"
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
