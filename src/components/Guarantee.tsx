const Guarantee = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-6 rounded-3xl border border-accent/25 bg-panel/60 p-6 sm:p-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Acompanhamento</p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Garantia de acompanhamento por 6 meses</h2>
          <p className="mt-4 text-ink/85">
            Você recebe suporte completo durante o período, com acompanhamento jurídico e orientação para cada etapa.
          </p>
          <p className="mt-3 text-sm text-ink/70">
            O acompanhamento não representa garantia de resultado final, pois depende da análise individual do caso.
          </p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-canvas/60 p-5">
          <h3 className="font-display text-xl font-semibold">Inclui:</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
            <li>• Suporte durante toda a vigência da estratégia</li>
            <li>• Acompanhamento jurídico contínuo</li>
            <li>• Direcionamento para decisões financeiras mais seguras</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
