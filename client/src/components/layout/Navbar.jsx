import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { Button } from '../common/Button';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const cvPath = profile?.cvPath || '/documents/CV-Edra-Fahar-Athaya-IT-Support.pdf';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Identify active section
      const sections = NAV_ITEMS.map((item) => item.href.slice(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B16]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo / Initials */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white hover:text-cyan-300 font-mono font-extrabold tracking-tight text-base transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
              <Terminal className="w-4 h-4" />
            </div>
            <span>edra<span className="text-cyan-400">.dev</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#0E1628]/70 border border-slate-800/80 px-2 py-1.5 rounded-2xl backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1 text-xs lg:text-sm font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CV Action */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={FileDown}
              href={cvPath}
              download="CV-Edra-Fahar-Athaya-IT-Support.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1628] border-b border-[#273449] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <a
              href={cvPath}
              download="CV-Edra-Fahar-Athaya-IT-Support.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold bg-[#141F36] border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 rounded-xl transition-colors"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
