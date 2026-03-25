import { FormEvent, useMemo, useState } from "react";
import { buildWhatsAppUrl, normalizePhone } from "../utils/whatsapp";

const CTA = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const phoneDigits = useMemo(() => normalizePhone(phone), [phone]);
  const genericLink = buildWhatsAppUrl(
    "Olá! Quero falar com um especialista e entender como liberar meu crédito com estratégia jurídica."
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim()) {
      setError("Informe seu nome para continuar.");
      return;
    }

    if (phoneDigits.length < 10) {
      setError("Informe um telefone válido com DDD.");
      return;
    }

    setError("");
    const message = `Olá! Meu nome é ${name.trim()} e meu telefone é ${phoneDigits}. Quero analisar meu CPF e entender a estratégia jurídica para recuperar acesso ao crédito.`;
    const whatsappUrl = buildWhatsAppUrl(message);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="cta" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-accent/30 bg-gradient-to-br from-panel to-canvas p-6 shadow-glow sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Urgência</p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
          Cada dia com restrição no seu nome pode te impedir de conseguir crédito
        </h2>
        <p className="mt-4 max-w-3xl text-ink/85">
          Preencha os dados e fale agora com um especialista no WhatsApp para iniciar sua análise jurídica.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-[1fr_1fr_auto]">
          <label className="flex flex-col gap-2 text-sm">
            Nome
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Seu nome completo"
              className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm outline-none transition focus:border-accent"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm">
            Telefone
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="(11) 99999-0000"
              className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-sm outline-none transition focus:border-accent"
            />
          </label>

          <button
            type="submit"
            className="h-12 self-end rounded-xl bg-accent px-6 text-sm font-bold uppercase tracking-[0.08em] text-canvas transition hover:bg-sky-300"
          >
            Falar no WhatsApp
          </button>
        </form>

        {error && <p className="mt-3 text-sm text-rose-300">{error}</p>}

        <a
          href={genericLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-xl border border-emerald-400/50 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-500/20"
        >
          Falar com especialista no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
