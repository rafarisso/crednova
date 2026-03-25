const Solution = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/10 via-panel/70 to-panel/50 p-6 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Solução com autoridade</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Recuperar acesso ao crédito com estratégia jurídica segura
        </h2>
        <p className="mt-5 max-w-4xl text-base leading-relaxed text-ink/90 sm:text-lg">
          Utilizamos estratégias jurídicas, incluindo medidas liminares, para ocultar apontamentos negativos e permitir
          que você recupere seu acesso ao crédito de forma responsável e acompanhada.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-canvas/60 p-4 text-sm text-ink/90">
            <p className="font-semibold text-accent">Análise jurídica individual</p>
            <p className="mt-2 text-ink/75">Serviço baseado em análise jurídica, com avaliação técnica do seu cenário.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-canvas/60 p-4 text-sm text-ink/90">
            <p className="font-semibold text-accent">Medida judicial (liminar)</p>
            <p className="mt-2 text-ink/75">Estratégia aplicada conforme viabilidade e documentação do seu caso.</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-canvas/60 p-4 text-sm text-ink/90">
            <p className="font-semibold text-accent">Transparência legal</p>
            <p className="mt-2 text-ink/75">Resultado pode variar conforme o caso e entendimento judicial.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
