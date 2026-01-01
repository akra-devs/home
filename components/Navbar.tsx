import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#philosophy' },
    { name: 'Portfolio', href: '#showcase' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 transition-all duration-300 rounded-full border ${scrolled ? 'bg-black/40 backdrop-blur-md border-white/10 py-3 shadow-lg shadow-black/20' : 'bg-transparent border-transparent py-4'}`}>
      <div className="px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo-01.png"
            alt="Akra Dev"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-serif italic text-zinc-300 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:contact@akradev.studio"
            className="group flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-4 w-full bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl overflow-hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif italic text-zinc-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:contact@akradev.studio"
            className="mt-2 w-full text-center py-3 bg-white text-black rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;