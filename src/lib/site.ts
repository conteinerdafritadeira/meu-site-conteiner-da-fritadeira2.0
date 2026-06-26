export const SITE = {
  name: 'Contêiner da Fritadeira',
  city: 'Curitiba – PR',
  phoneDisplay: '(41) 98845-6743',
  phoneWa: '5541988456743',
  instagram: 'conteinerdafritadeira',
  instagramUrl: 'https://instagram.com/conteinerdafritadeira',
  email: 'conteinerdafritadeira@gmail.com.br',
};

export const waLink = (_message?: string) => `https://wa.me/${SITE.phoneWa}`;

export const DEFAULT_WA_MESSAGE =
  'Olá! Vim pelo site da Contêiner da Fritadeira e gostaria de solicitar um orçamento para conserto da minha fritadeira.';

export const SERVICES = [
  {
    icon: 'Wrench',
    title: 'Conserto de fritadeiras elétricas e a gás industriais',
    description:
      'Reparo completo de fritadeiras elétricas e a gás industriais, com diagnóstico preciso e garantia de serviço.',
  },
  {
    icon: 'Zap',
    title: 'Troca de resistência',
    description:
      'Substituição de resistências queimadas ou com falhas por peças de qualidade, devolvendo potência e eficiência ao seu equipamento.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Manutenção preventiva',
    description:
      'Inspeção e ajustes periódicos para evitar paradas inesperadas e prolongar a vida útil das suas fritadeiras elétricas e a gás industriais.',
  },
  {
    icon: 'Sparkles',
    title: 'Limpeza técnica completa',
    description:
      'Remoção de resíduos, gordura carbonizada e incrustações que comprometem o desempenho e a segurança do equipamento.',
  },
  {
    icon: 'Stethoscope',
    title: 'Diagnóstico de defeitos',
    description:
      'Avaliação técnica detalhada para identificar a causa real do problema antes de qualquer reparo, com orçamento transparente.',
  },
] as const;
