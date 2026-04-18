"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Sponsorship", href: "/partnerships" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-iv-blue/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-heading font-bold text-2xl tracking-tighter text-white">
              <span className="text-iv-red">IV</span>Lead
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/programs/uylp-2026"
                className="bg-iv-red hover:bg-iv-red-light text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-iv-red/30"
              >
                UYLP 2026
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-iv-blue border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3 block">
                <Link
                  href="/programs/uylp-2026"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block bg-iv-red hover:bg-iv-red-light text-white px-5 py-3 rounded-md text-base font-semibold"
                >
                  UYLP 2026 Summit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
