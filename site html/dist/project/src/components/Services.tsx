import { Wrench, Zap, ShieldCheck, Sparkles, Stethoscope, ArrowRight, MessageCircle } from 'lucide-react';
import { SERVICES, waLink } from '../lib/site';

const ICONS = {
  Wrench,
  Zap,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} as const;

export default function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-tag">Nossos serviços</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-500 sm:text-5xl">
            Tudo o que sua fritadeira precisa
          </h2>
          <p className="mt-5 text-lg text-ink-300">
            Da manutenção preventiva ao reparo completo — atendemos fritadeiras elétricas e a gás industriais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <div
                key={service.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-950/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-card"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                {/* Shine effect */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-brand-500/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 ring-1 ring-brand-500/20 transition-all duration-300 group-hover:bg-brand-500 group-hover:shadow-glow">
                    <Icon className="h-7 w-7 text-brand-400 transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-brand-500">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">
                    {service.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Fale com um técnico
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div
            className="reveal relative overflow-hidden rounded-2xl border border-brand-500/40 bg-gradient-to-br from-brand-600/20 to-ink-950 p-7"
            style={{ transitionDelay: '400ms' }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-brand-500">
                  Não encontrou o problema?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-200">
                  Conte o que está acontecendo com sua fritadeira. Nosso técnico avalia e
                  indica a melhor solução — sem compromisso.
                </p>
              </div>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
