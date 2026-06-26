import { MessageCircle, Clock, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { waLink } from '../lib/site';

const STATS = [
  { icon: Clock, value: 'Atendimento rápido', label: 'Agende no mesmo dia' },
  { icon: ShieldCheck, value: 'Serviço garantido', label: 'Qualidade comprovada' },
  { icon: Star, value: 'Especialistas no ramo', label: 'Foco em fritadeiras elétricas e a gás industriais' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-950 pt-32">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-700/10 blur-[120px]" />

      <div className="container-x relative pb-20 pt-10 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="section-tag">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              Atendendo Curitiba e região metropolitana
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="text-brand-500">Contêiner da Fritadeira</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-200 sm:text-xl">
              Conserto rápido e especializado de fritadeiras elétricas e a gás industriais
              em Curitiba. Diagnóstico preciso, atendimento ágil e serviço de qualidade.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar orçamento
              </a>
              <a href="#servicos" className="btn-ghost text-base">
                Ver serviços
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={value} className="card-surface p-4">
                  <Icon className="h-5 w-5 text-brand-500" />
                  <p className="mt-2 text-sm font-bold text-white">{value}</p>
                  <p className="text-xs text-ink-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-full border border-brand-500/20" />
      <div className="absolute inset-8 rounded-full border border-brand-500/10" />

      <div className="absolute -left-6 top-12 z-20 animate-float">
        <div className="card-surface flex items-center gap-3 px-4 py-3 shadow-card">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15">
            <ShieldCheck className="h-5 w-5 text-brand-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Garantia</p>
            <p className="text-[10px] text-ink-400">no serviço</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -right-4 bottom-16 z-20 animate-float"
        style={{ animationDelay: '1.2s' }}
      >
        <div className="card-surface flex items-center gap-3 px-4 py-3 shadow-card">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15">
            <Clock className="h-5 w-5 text-brand-400" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Resposta rápida</p>
            <p className="text-[10px] text-ink-400">no WhatsApp</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-b from-ink-800/60 to-ink-950 shadow-card ring-1 ring-ink-700/60">
          <FryerIllustration className="h-44 w-44 drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]" />
        </div>
      </div>
    </div>
  );
}

function FryerIllustration({ className = 'h-44 w-44' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Fritadeira industrial">
      <path d="M55 55a45 22 0 0 1 90 0" fill="none" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
      <rect x="38" y="70" width="124" height="92" rx="12" fill="#1a1c21" stroke="#f97316" strokeWidth="5" />
      <rect x="52" y="84" width="96" height="50" rx="6" fill="#0d0e12" stroke="#f97316" strokeWidth="2.5" opacity="0.9" />
      <path d="M64 100h72M64 112h58" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <rect x="60" y="140" width="34" height="14" rx="3" fill="#0d0e12" stroke="#f97316" strokeWidth="2.5" />
      <circle cx="138" cy="147" r="7" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <circle cx="138" cy="147" r="2.5" fill="#f97316" />
      <path d="M30 96v28M170 96v28" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
      <path d="M88 44q4-6 0-12M100 38q4-6 0-12M112 44q4-6 0-12" stroke="#fb923c" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" fill="none" />
    </svg>
  );
}
