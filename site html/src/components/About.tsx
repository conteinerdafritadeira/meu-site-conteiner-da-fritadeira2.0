import { CheckCircle2, Flame, Gauge, Users } from 'lucide-react';

const HIGHLIGHTS = [
  'Foco em fritadeiras elétricas e a gás industriais',
  'Não trabalhamos com Airfryer — somos especialistas no que fazemos',
  'Equipamentos industriais',
  'Orçamento acessível e sem compromisso',
];

const PILLARS = [
  {
    icon: Flame,
    title: 'Especialização real',
    description:
      'Atuamos exclusivamente com fritadeiras elétricas e a gás industriais. Conhecemos cada modelo, resistência e defeito comum do segmento.',
  },
  {
    icon: Gauge,
    title: 'Rapidez no atendimento',
    description:
      'Sabemos que uma fritadeira parada custa dinheiro. Por isso priorizamos diagnósticos ágeis e retorno rápido ao cliente.',
  },
  {
    icon: Users,
    title: 'Atendimento humano',
    description:
      'Você fala direto com quem executa o serviço. Transparência no orçamento, clareza no reparo e suporte pós-serviço.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-700/10 blur-[130px]" />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <span className="section-tag">Sobre nós</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-500 sm:text-5xl">
              Especialistas em fritadeiras elétricas e a gás industriais
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-200">
              A Contêiner da Fritadeira é uma assistência técnica de Curitiba focada
              exclusivamente em fritadeiras elétricas e a gás industriais. Nosso
              compromisso é oferecer um atendimento rápido, orçamento acessível e um
              serviço de qualidade.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-300">
              Atendemos lanchonetes, restaurantes, bares e estabelecimentos comerciais que
              dependem das suas fritadeiras no dia a dia. Com experiência prática no ramo,
              garantimos um diagnóstico preciso e reparo eficiente.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  <span className="text-sm text-ink-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal grid gap-5" style={{ transitionDelay: '120ms' }}>
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card-surface group p-6 transition-all duration-300 hover:border-brand-500/50 hover:shadow-glow"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-500/15 transition-colors group-hover:bg-brand-500/25">
                    <Icon className="h-7 w-7 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-500">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
