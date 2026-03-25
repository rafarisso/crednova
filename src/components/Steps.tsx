const steps = [
  {
    title: "1. Análise do CPF",
    text: "Levantamos sua situação de crédito e histórico de apontamentos para avaliar viabilidade jurídica."
  },
  {
    title: "2. Estratégia jurídica personalizada",
    text: "Definimos o melhor caminho, incluindo medida judicial (liminar), conforme seu objetivo financeiro."
  },
  {
    title: "3. Liberação de crédito temporária",
    text: "Com a estratégia validada, você ganha janela de oportunidade para avançar no financiamento."
  }
];

const Steps = () => {
  return (
    <section id="como-funciona" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Como funciona</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Processo em 3 passos</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-panel/60 p-5 before:absolute before:left-5 before:top-0 before:h-1 before:w-12 before:rounded-full before:bg-accent"
            >
              <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
