"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? "rgba(250,250,248,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E2E2DE" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-xl font-light tracking-wide text-dental-text"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 3.5 3.5 2 2 4C0.5 6 1.5 9 3 11C4 12.5 5 14 5.5 17C6 19.5 6.5 22 8 22C9.5 22 9.5 19 10 17C10.5 15 11 13 12 13C13 13 13.5 15 14 17C14.5 19 14.5 22 16 22C17.5 22 18 19.5 18.5 17C19 14 20 12.5 21 11C22.5 9 23.5 6 22 4C20.5 2 18.5 3.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-dental-accent"/>
            </svg>
            Sonrisa Perfecta
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-widest uppercase text-dental-muted hover:text-dental-text transition-colors duration-400"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="text-sm font-light tracking-widest uppercase px-5 py-2 border border-dental-accent text-dental-accent hover:bg-dental-accent hover:text-dental-bg transition-all duration-400"
            >
              Agendar
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <motion.span
              className="block w-6 h-[1px] bg-dental-text origin-center"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="block w-6 h-[1px] bg-dental-text"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.span
              className="block w-6 h-[1px] bg-dental-text origin-center"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dental-bg flex flex-col items-center justify-center"
            initial={{ clipPath: "circle(0% at calc(100% - 48px) 32px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 32px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 48px) 32px)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col items-center gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-5xl font-light text-dental-text hover:text-dental-accent transition-colors duration-400"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link
                  href="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-5xl font-light text-dental-accent border-b border-dental-accent pb-1"
                >
                  Agendar
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
