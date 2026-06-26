import { useState } from 'react';
import type { FormEvent } from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { SITE, waLink } from '../lib/site';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    equipamento: '',
    mensagem: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.telefone.trim()) return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        nome: form.nome.trim(),
        telefone: form.telefone.trim(),
        equipamento: form.equipamento.trim() || null,
        mensagem: form.mensagem.trim() || null,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ nome: '', telefone: '', equipamento: '', mensagem: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-brand-600/10 blur-[130px]" />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-tag">Fale conosco</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-brand-500 sm:text-5xl">
            Solicite seu orçamento
          </h2>
          <p className="mt-5 text-lg text-ink-300">
            Atendimento mais rápido pelo WhatsApp. Prefere formulário? É só preencher
            abaixo que retornamos o quanto antes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* WhatsApp / contact channels */}
          <div className="reveal lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {/* Big WhatsApp button */}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 p-7 shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-500">
                    Chamar no WhatsApp
                  </h3>
                  <p className="mt-2 text-sm text-white/85">
                    Resposta rápida, das 8h às 18h. Clique para iniciar a conversa.
                  </p>

                </div>
              </a>

              {/* Other channels */}
              <div className="card-surface flex-1 p-7">
                <h3 className="font-display text-lg font-bold text-brand-500">Outros canais</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a
                      href={SITE.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-ink-100 transition-colors hover:text-brand-400"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/20">
                        <Instagram className="h-5 w-5 text-brand-400" />
                      </span>
                      <span>
                        <span className="block font-semibold text-white">Instagram</span>
                        <span className="text-ink-400">@{SITE.instagram}</span>
                      </span>
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/20">
                      <Mail className="h-5 w-5 text-brand-400" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">E-mail</span>
                      <span className="text-ink-400">{SITE.email}</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 ring-1 ring-brand-500/20">
                      <MapPin className="h-5 w-5 text-brand-400" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">Atendimento</span>
                      <span className="text-ink-400">{SITE.city} e região</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="reveal lg:col-span-3" style={{ transitionDelay: '100ms' }}>
            <form
              onSubmit={handleSubmit}
              className="card-surface h-full p-7 sm:p-9"
              aria-label="Formulário de contato"
            >
              <h3 className="font-display text-2xl font-extrabold text-brand-500">
                Envie sua mensagem
              </h3>
              <p className="mt-2 text-sm text-ink-300">
                Preencha o formulário e retornamos o quanto antes com o orçamento.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Nome completo" required>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => update('nome', e.target.value)}
                    placeholder="Seu nome"
                    className="input-base"
                  />
                </Field>
                <Field label="Telefone / WhatsApp" required>
                  <input
                    type="tel"
                    required
                    value={form.telefone}
                    onChange={(e) => update('telefone', e.target.value)}
                    placeholder="(41) 90000-0000"
                    className="input-base"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Equipamento (opcional)">
                  <input
                    type="text"
                    value={form.equipamento}
                    onChange={(e) => update('equipamento', e.target.value)}
                    placeholder="Ex.: Fritadeira industrial 15L"
                    className="input-base"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Descreva o problema (opcional)">
                  <textarea
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => update('mensagem', e.target.value)}
                    placeholder="Ex.: não está aquecendo, resistência queimou..."
                    className="input-base resize-none"
                  />
                </Field>
              </div>

              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand-500/40 bg-brand-500/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <p className="text-sm text-ink-100">
                    Mensagem enviada com sucesso! Entraremos em contato em breve. Para
                    atendimento imediato,{' '}
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-400 underline"
                    >
                      chame no WhatsApp
                    </a>
                    .
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
                  Não conseguimos enviar agora. Tente novamente ou chame no WhatsApp.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary mt-7 w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Enviar mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #272a30;
          background-color: rgba(13, 14, 18, 0.8);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #f6f6f7;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-base::placeholder { color: #6e727e; }
        .input-base:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink-100">
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
