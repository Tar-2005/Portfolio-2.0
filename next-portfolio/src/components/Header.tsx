"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl glass-pill rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-[0_8px_32px_rgba(92,107,192,0.2)]">
      <a href="#home" className="text-xl font-bold tracking-tighter text-foreground">
        Tarun<span className="text-primary">.dev</span>
      </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground hover:text-glow transition-all"
            >
              {link.name}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 text-foreground">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+16px)] left-0 w-full glass rounded-3xl p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-lg font-medium py-2 text-foreground/80 hover:text-foreground hover:text-glow transition-all text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
