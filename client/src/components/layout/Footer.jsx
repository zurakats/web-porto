import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#273449] bg-[#080D1A] py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-slate-200">
              {profile?.name || 'Edra Fahar Athaya'}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Informatics Graduate · Software Development &amp; IT Support
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {profile?.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {profile?.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            )}
            {profile?.email && (
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              &copy; {currentYear} All rights reserved.
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
