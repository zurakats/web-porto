import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Mail, Phone, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

export function ContactSection({ profile }) {
  const [copiedId, setCopiedId] = useState(null);

  const email = profile?.email || 'edrafaharz236@gmail.com';
  const phone = profile?.phone || '+62 896-3759-9540';
  const phoneRaw = profile?.phoneRaw || '089637599540';
  const github = profile?.github || 'https://github.com/zurakats';
  const linkedin = profile?.linkedin || 'https://www.linkedin.com/in/edra-fahar-athaya-6635492b0';
  const location = profile?.location || 'Indonesia';

  const handleCopy = (text, id) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const contactItems = [
    {
      id: 'email',
      label: 'Email',
      value: email,
      icon: Mail,
      themeColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400/50',
      actionHref: `mailto:${email}`,
      actionLabel: 'Send Email',
      canCopy: true,
      copyValue: email,
    },
    {
      id: 'phone',
      label: 'Phone & WhatsApp',
      value: phone,
      icon: Phone,
      themeColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400/50',
      actionHref: `https://wa.me/62${phoneRaw.replace(/^0/, '').replace(/\D/g, '')}`,
      actionLabel: 'Chat via WhatsApp',
      secondaryActionHref: `tel:${phoneRaw.startsWith('+') ? phoneRaw : `+62${phoneRaw.replace(/^0/, '')}`}`,
      canCopy: true,
      copyValue: phone,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'Edra Fahar Athaya',
      icon: LinkedinIcon,
      themeColor: 'text-blue-400 bg-blue-950/60 border-blue-500/30',
      hoverBorder: 'hover:border-blue-400/50',
      actionHref: linkedin,
      actionLabel: 'Open LinkedIn Profile',
      isExternal: true,
      canCopy: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'zurakats',
      icon: GithubIcon,
      themeColor: 'text-purple-400 bg-purple-950/60 border-purple-500/30',
      hoverBorder: 'hover:border-purple-400/50',
      actionHref: github,
      actionLabel: 'Open GitHub Profile',
      isExternal: true,
      canCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 bg-[#0A0F1E] relative overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="06"
          eyebrow="Get In Touch"
          title="Contact"
        />

        {/* Compact, Minimal Contact Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const isCopied = copiedId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`group bg-gradient-to-b from-[#111A2E] to-[#0A101E] border border-slate-700/80 ${item.hoverBorder} rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 shadow-xl transition-all duration-200`}
              >
                {/* Left: Icon & Details */}
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${item.themeColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white font-mono truncate block group-hover:text-cyan-300 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {item.canCopy && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.copyValue, item.id)}
                      className={`p-2 rounded-xl border transition-all text-xs flex items-center justify-center cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                          : 'bg-[#141F36] border-slate-700/80 text-slate-400 hover:text-white hover:border-slate-500'
                      }`}
                      title={isCopied ? 'Copied' : 'Copy to clipboard'}
                      aria-label={`Copy ${item.label}`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  <a
                    href={item.actionHref}
                    target={item.isExternal || item.id === 'phone' ? '_blank' : undefined}
                    rel={item.isExternal || item.id === 'phone' ? 'noopener noreferrer' : undefined}
                    className="p-2 rounded-xl bg-[#141F36] border border-slate-700/80 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors flex items-center justify-center"
                    title={item.actionLabel}
                    aria-label={item.actionLabel}
                  >
                    {item.id === 'phone' ? (
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Understated Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 font-mono"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to Opportunities</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span>{location} · GMT+7 (WIB)</span>
        </motion.div>
      </div>
    </section>
  );
}
