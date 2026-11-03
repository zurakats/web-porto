import React from 'react';
import { ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080D1A] py-10 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Identity */}
          <div>
            <p className="text-sm font-semibold text-slate-200">
              {profile?.name || 'Edra Fahar Athaya'}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Informatics Graduate · Software Development &amp; IT Support
            </p>
          </div>

          {/* Built With Note */}
          <div>
            <p className="text-xs font-mono text-slate-400">
              Built with <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Express</span> &amp; <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
            </p>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              &copy; {CURRENT_YEAR} All rights reserved.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
