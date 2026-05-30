import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import BrandName from './BrandName';
import BrandLogo from './BrandLogo';
import { BRAND_TAGLINE, CONTACT_WHATSAPP_DISPLAY, CONTACT_YOUTUBE } from '../constants.ts';

const navLinks = [
  { label: 'Courses', href: '#courses' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'About Us', href: '#about' }
];

const supportLinks = [
  { label: 'Help Center', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'FAQ', href: '#' }
];

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: CONTACT_YOUTUBE },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' }
];

function FooterLinkGroup({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 lg:pt-20 pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pb-12 lg:pb-12">
        {/* Mobile: stacked professional layout */}
        <div className="lg:hidden space-y-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="h-11 w-11 ring-1 ring-white/10" />
              <div>
                <BrandName className="text-lg text-white" />
                <p className="text-[11px] font-medium text-orange-400 mt-0.5">{BRAND_TAGLINE}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional training for ambitious learners — from first skill to industry-ready confidence.
            </p>
          </div>

          <p className="text-center text-xs text-gray-500">
            Call / WhatsApp:{' '}
            <span className="text-gray-300 font-medium">{CONTACT_WHATSAPP_DISPLAY}</span>
          </p>

          <div className="h-px bg-white/10" />

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <FooterLinkGroup title="Explore" links={navLinks} />
            <FooterLinkGroup title="Support" links={supportLinks} />
          </div>

          {/* Newsletter */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h4 className="text-sm font-bold text-white mb-1">Stay in the loop</h4>
            <p className="text-xs text-gray-500 mb-3">Course updates and enrollment news.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/40 focus:ring-2 focus:ring-orange-500/20"
              />
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-black hover:bg-orange-500 hover:text-white transition-colors"
              >
                Subscribe
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Follow us</p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <BrandLogo className="h-10 w-10 ring-1 ring-white/10" />
              <BrandName className="text-xl text-white" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional tech training for ambitious learners — from first skill to industry-ready confidence.
            </p>
            <p className="text-sm text-gray-500">
              WhatsApp: <span className="text-white font-medium">{CONTACT_WHATSAPP_DISPLAY}</span>
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-white hover:text-black transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkGroup title="Navigation" links={navLinks} />
          <FooterLinkGroup title="Support" links={supportLinks} />

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-gray-500">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest courses and news.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/30 transition-all pr-24"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-lg text-xs font-bold hover:bg-gray-100 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col items-center gap-2 sm:flex-row sm:justify-between sm:items-center text-center sm:text-left">
          <p className="text-[11px] sm:text-xs text-gray-500">
            © 2026 Rise & Lead 360. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-gray-600">
            Built with purpose · {BRAND_TAGLINE}
          </p>
        </div>
      </div>
    </footer>
  );
}
