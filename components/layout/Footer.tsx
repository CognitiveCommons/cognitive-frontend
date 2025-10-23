import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Mail, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  courses: [
    { name: "Browse All Courses", href: "/courses" },
    { name: "SME Bootcamps", href: "/courses?category=bootcamps" },
    { name: "Teacher Development", href: "/courses?category=teachers" },
    { name: "Free Courses", href: "/courses?price=free" },
  ],
  tools: [
    { name: "SME AI Suite", href: "/tools#sme-suite" },
    { name: "TideWatch", href: "/tools#tidewatch" },
    { name: "CivicPulse", href: "/tools#civicpulse" },
    { name: "KeepersAI", href: "/tools#keepersai" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Courses */}
          <div>
            <h3 className="font-bold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-bold text-lg mb-4">AI Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Monthly AI insights and course updates.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg text-sm hover:from-purple-700 hover:to-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                CC
              </div>
              <div>
                <p className="text-sm font-semibold">CognitiveCommons</p>
                <p className="text-xs text-gray-400">Democratizing AI for All Canadians</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:hello@cognitivecommons.ca"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/cognitivecommons"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/cogcommons"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-8">
            © {new Date().getFullYear()} CognitiveCommons. A Canadian non-profit organization.
          </p>
        </div>
      </Container>
    </footer>
  );
}
