import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logos/CC_logo_ultrasmooth_black_on_transparent.png"
              alt="CognitiveCommons"
              width={140}
              height={50}
              className="h-10 w-auto logo-light"
            />
            <Image
              src="/images/logos/CC_logo_ultrasmooth_white_on_transparent.png"
              alt="CognitiveCommons"
              width={140}
              height={50}
              className="h-10 w-auto logo-dark"
            />
          </div>

          {/* Tagline */}
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-md">
            Building Canada's Technology Commons
          </p>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} CognitiveCommons. A Canadian non-profit organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
