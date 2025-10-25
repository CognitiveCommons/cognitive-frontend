"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  const scrollToJoin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-[1536px] mx-auto px-8">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 hover:opacity-90 transition-all duration-300">
            <Image
              src="/images/logos/CC_logo_ultrasmooth_black_on_transparent.png"
              alt="CognitiveCommons - Building Canada's Technology Commons"
              width={168}
              height={60}
              className="h-12 w-auto logo-light"
              priority
            />
            <Image
              src="/images/logos/CC_logo_ultrasmooth_white_on_transparent.png"
              alt="CognitiveCommons - Building Canada's Technology Commons"
              width={168}
              height={60}
              className="h-12 w-auto logo-dark"
              priority
            />
          </Link>

          {/* Single CTA */}
          <a
            href="#join"
            onClick={scrollToJoin}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
}
