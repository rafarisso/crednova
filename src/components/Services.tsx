const services = [
  {
    title: "Liminar para ocultação de apontamentos",
    text: "Aplicação de medida judicial (liminar) quando houver fundamento jurídico para recuperar acesso ao crédito."
  },
  {
    title: "Aumento de score",
    text: "Acompanhamento estratégico para fortalecer indicadores financeiros e melhorar percepção de risco."
  },
  {
    title: "Regularização cadastral",
    text: "Correção de inconsistências e organização cadastral para reduzir barreiras em análises de crédito."
  },
  {
    title: "Consultoria de crédito",
    text: "Orientação prática para usar a janela de oportunidade e buscar aprovação com maior preparo."
  }
];

const Services = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Serviços</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Soluções para destravar seu crédito</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-panel/70 p-6">
              <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
