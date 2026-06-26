import { MapPin, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { waLink } from '../lib/site';

const CITIES = [
  'Curitiba',
  'São José dos Pinhais',
  'Colombo',
  'Pinhais',
  'Piraquara',
  'Almirante Tamandaré',
];

const INFO = [
  {
    icon: Clock,
    title: 'Horário flexível',
    description:
      'Atendemos em horário comercial e combinamos visitas especiais para estabelecimentos comerciais.',
  },
  {
    icon: Navigation,
    title: 'Cobertura ampla',
    description:
      'Atendemos Curitiba e toda a região metropolitana. Consulte seu endereço no WhatsApp.',
  },
];

export default function Coverage() {
  return (
    <section id="atendimento" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-brand-700/10 blur-[130px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <CoverageMap />
          </div>

          <div className="reveal order-1 lg:order-2" style={{ transitionDelay: '100ms' }}>
            <span className="section-tag">Área de atendimento</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-500 sm:text-5xl">
              Curitiba e região metropolitana
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white">
              Atendemos com agilidade toda Curitiba e a região metropolitana.
            </p>

            <div className="mt-8 space-y-4">
              {INFO.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/20">
                    <Icon className="h-6 w-6 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-500">{title}</h3>
                    <p className="mt-1 text-sm text-white">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9"
            >
              <MapPin className="h-4 w-4" />
              Rua Doutor Reynaldo Machado 921
            </a>
          </div>
        </div>

        <div className="reveal mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-400">
            Cidades atendidas
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-800 bg-ink-900/70 px-4 py-2 text-sm text-white"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-500" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-12 rounded-full border border-brand-500/20" />
      <div className="absolute inset-20 rounded-full border border-brand-500/10" />
      <div className="absolute inset-28 rounded-full border border-brand-500/5" />

      <div className="absolute inset-16 flex items-center justify-center">
        <span className="absolute h-24 w-24 rounded-full bg-brand-500/30 animate-pulse-ring" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-80 w-80 overflow-hidden rounded-full border border-ink-700 bg-ink-900/50 shadow-card">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 320" fill="none">
            <path d="M0 160H320" stroke="#f97316" strokeOpacity="0.18" strokeWidth="2" />
            <path d="M160 0V320" stroke="#f97316" strokeOpacity="0.18" strokeWidth="2" />
            <path d="M50 70 270 250" stroke="#f97316" strokeOpacity="0.12" strokeWidth="2" />
            <path d="M270 70 50 250" stroke="#f97316" strokeOpacity="0.12" strokeWidth="2" />
            <circle cx="160" cy="160" r="120" stroke="#f97316" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="4 6" />
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 shadow-glow ring-4 ring-brand-500/20">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <div className="mt-2 whitespace-nowrap rounded-full bg-ink-950/90 px-3 py-1 text-xs font-bold text-white ring-1 ring-ink-700">
                Curitiba
              </div>
            </div>
          </div>

          {[
            { x: '22%', y: '30%', label: 'Colombo' },
            { x: '78%', y: '34%', label: 'Pinhais' },
            { x: '74%', y: '70%', label: 'SJP' },
            { x: '50%', y: '18%', label: 'Tamandaré' },
          ].map((p) => (
            <div
              key={p.label}
              className="absolute flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ left: p.x, top: p.y }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-brand-400 ring-2 ring-brand-500/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
