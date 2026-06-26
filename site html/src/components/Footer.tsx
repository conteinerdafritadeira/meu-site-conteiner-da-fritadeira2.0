import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { SITE, waLink } from '../lib/site';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-ink-800 bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-700/10 blur-[130px]" />

      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/WhatsApp_Image_2026-06-22_at_19.59.05 copy.jpeg"
                alt="Logo Contêiner da Fritadeira"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-lg font-extrabold text-brand-500">
                  Contêiner da Fritadeira
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-400">
                  Assistência Técnica
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400">
              Conserto e manutenção especializada em fritadeiras elétricas e a gás industriais.
              Atendimento em Curitiba e região metropolitana, com agilidade e qualidade.
            </p>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar orçamento
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-500">
              Navegação
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-brand-500">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ink-400 transition-colors hover:text-brand-400"
                >
                  <Instagram className="h-4 w-4 text-brand-500" />
                  @{SITE.instagram}
                </a>
              </li>

              <li className="flex items-center gap-2 text-ink-400">
                <Mail className="h-4 w-4 text-brand-500" />
                {SITE.email}
              </li>
              <li className="flex items-center gap-2 text-ink-400">
                <MapPin className="h-4 w-4 text-brand-500" />
                {SITE.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-500">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ink-500">
            não atendemos Airfryer · Foco em fritadeiras elétricas e a gás industriais
          </p>
        </div>
      </div>
    </footer>
  );
}
