const pains = [
  "Te negaram financiamento no banco?",
  "Score baixo travando seus planos?",
  "Nome negativado impedindo sua evolução?",
  "Cansado de ouvir 'não aprovado'?",
  "Precisando de crédito urgente para reorganizar sua vida?"
];

const Problem = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Problema</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">A rejeição financeira vira um bloqueio emocional</h2>
        <p className="mt-4 max-w-3xl text-ink/80">
          Quando crédito é negado repetidamente, a sensação é de frustração, urgência e falta de saída. Você não está
          sem opção, você está sem estratégia.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <article key={pain} className="rounded-2xl border border-white/10 bg-panel/60 p-5">
              <p className="text-sm font-medium leading-relaxed text-ink/90">{pain}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
