import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* Logo - Increased size and removed opacity for clarity */}
              <img src="/logo-01.png" alt="Akra Dev" className="h-10 w-auto" />
            </div>
            <p className="text-zinc-500 font-serif italic text-lg leading-relaxed">
              Copyright © {new Date().getFullYear()} Akra Dev Studio.<br />
              All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'SaaS Solutions', 'Blockchain'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm hover:underline decoration-zinc-700 underline-offset-4">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Portfolio', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm hover:underline decoration-zinc-700 underline-offset-4">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-serif tracking-wide">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="mailto:contact@akradev.studio"
              className="text-zinc-400 hover:text-white transition-colors font-serif italic"
            >
              contact@akradev.studio
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
          <p>Designed & Built by Akra Dev Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;