type HeroProps = {
  whatsappLink: string;
};

const Hero = ({ whatsappLink }: HeroProps) => {
  return (
    <header className="relative px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/10 bg-panel/70 px-5 py-6 shadow-glow backdrop-blur sm:px-8 sm:py-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="font-display text-lg font-semibold tracking-wide text-accent">CredNova Soluções</p>
          <a
            href="#cta"
            className="rounded-full border border-accent/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent transition hover:border-accent hover:bg-accent/10"
          >
            Análise Rápida
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Seu financiamento não pode esperar
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl">
              Consiga crédito mesmo com restrições no seu nome
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/85 sm:text-lg">
              Através de medida judicial (liminar), ocultamos apontamentos e ajudamos você a voltar a ter acesso ao
              crédito com segurança jurídica.
            </p>
            <p className="mt-3 max-w-xl text-sm text-ink/70">
              Serviço baseado em análise jurídica. Resultado pode variar conforme o caso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-accent px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-canvas transition hover:bg-sky-300"
              >
                Quero analisar meu CPF agora
              </a>
              <a
                href="#como-funciona"
                className="rounded-xl border border-white/20 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:border-white/40 hover:bg-white/5"
              >
                Entender como funciona
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-accent/25 bg-canvas/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Objetivo imediato</p>
            <h2 className="mt-3 font-display text-2xl font-bold">Descubra como liberar seu crédito</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              Estratégia jurídica personalizada para quem teve financiamento negado e precisa recuperar acesso ao
              crédito de forma estruturada.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              <li>• Nome negativado</li>
              <li>• Score baixo</li>
              <li>• Pressa para financiar carro ou imóvel</li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Hero;
