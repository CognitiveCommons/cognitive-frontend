import Image from "next/image";
import { MapleLeaf } from "@/components/canadian/MapleLeaf";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-northern-slate border-t border-gray-200 dark:border-aurora-blue/20">
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

          {/* Tagline with gradient */}
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-md font-medium">
            Making Technology Work for <span className="text-gradient-canadian">All of Canada</span>
          </p>

          {/* Made in Canada Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:glass dark:bg-northern-surface/50 border border-gray-200 dark:border-canadian-red-dark/30 rounded-full transition-all duration-300 hover:border-canadian-red-dark hover:shadow-glow-red-soft hover:scale-105">
            <MapleLeaf
              variant="filled"
              size="sm"
              color="red"
              className="text-canadian-red dark:text-canadian-red-dark transition-transform duration-300"
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Made in Canada
            </span>
            <MapleLeaf
              variant="filled"
              size="sm"
              color="red"
              className="text-canadian-red dark:text-canadian-red-dark transition-transform duration-300"
            />
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CognitiveCommons. A Canadian organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
