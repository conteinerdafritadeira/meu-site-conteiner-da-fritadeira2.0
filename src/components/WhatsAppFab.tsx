import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { waLink } from '../lib/site';

export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      {bubbleOpen && (
        <div className="animate-fade-up max-w-[280px] rounded-2xl border border-ink-700 bg-ink-900 p-4 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <p className="text-sm font-bold text-white">Online agora</p>
            </div>
            <button
              onClick={() => setBubbleOpen(false)}
              className="text-ink-400 transition-colors hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-sm text-ink-200">
            Precisa de ajuda com sua fritadeira? Fale com a gente agora mesmo!
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Iniciar conversa
          </a>
        </div>
      )}

      <button
        onClick={() => setBubbleOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-glow transition-all duration-300 hover:scale-105 hover:bg-brand-400"
        aria-label="Abrir WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-60 animate-pulse-ring" />
        {bubbleOpen ? (
          <X className="relative h-6 w-6" />
        ) : (
          <MessageCircle className="relative h-7 w-7" />
        )}
      </button>
    </div>
  );
}
