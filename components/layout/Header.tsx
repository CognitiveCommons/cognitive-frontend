"use client";

import Link from "next/link";
import Image from "next/image";
import { MapleLeaf } from "@/components/canadian/MapleLeaf";

const navigation = [
  { name: "The Gap", href: "#divide" },
  { name: "How We Work", href: "#belief" },
  { name: "Our Progress", href: "#journey" },
  { name: "Get Involved", href: "#join" },
];

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass bg-white/90 dark:bg-northern-dark/90 backdrop-blur-lg border-b border-gray-200 dark:border-aurora-blue/20 shadow-elevation-1">
      <div className="max-w-[1536px] mx-auto px-8">
        <nav className="flex items-center justify-between gap-12 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-90 transition-all duration-300">
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
            {/* Canadian maple leaf identity marker */}
            <MapleLeaf
              variant="filled"
              size="sm"
              color="red"
              className="text-canadian-red dark:text-canadian-red-dark transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-600 dark:text-gray-300 hover:text-aurora-purple dark:hover:text-aurora-green font-medium text-sm transition-colors relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

        </nav>
      </div>
    </header>
  );
}
