import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { SITE, waLink } from '../lib/site';

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label={SITE.name}>
          <img
            src="/WhatsApp_Image_2026-06-22_at_19.59.05 copy.jpeg"
            alt="Logo Contêiner da Fritadeira"
            className="h-14 w-14 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="font-display text-sm font-extrabold uppercase tracking-wide text-brand-500 sm:text-base">
              Contêiner da Fritadeira
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Assistência Técnica
            </p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-200 transition-colors hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 text-ink-100 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-ink-950/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <img
              src="/WhatsApp_Image_2026-06-22_at_19.59.05 copy.jpeg"
              alt="Logo Contêiner da Fritadeira"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="font-display text-sm font-extrabold uppercase tracking-wide text-brand-500">
                Contêiner da Fritadeira
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Assistência Técnica
              </p>
            </div>
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 text-ink-100"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="flex flex-col gap-2 px-5 pt-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-ink-800 bg-ink-900/60 px-6 py-4 text-base font-semibold text-ink-100 hover:border-brand-500 hover:text-brand-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pt-6">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
            onClick={() => setOpen(false)}
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

export function LogoMark({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <img
      src="/WhatsApp_Image_2026-06-22_at_19.59.05 copy.jpeg"
      alt="Logo Contêiner da Fritadeira"
      className={`rounded-full object-cover ${className}`}
    />
  );
}
