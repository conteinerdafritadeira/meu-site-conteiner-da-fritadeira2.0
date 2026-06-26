CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  telefone text NOT NULL,
  equipamento text,
  mensagem text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contact_messages"
  ON public.contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX contact_messages_created_at_idx
  ON public.contact_messages (created_at DESC);
