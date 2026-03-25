const testimonials = [
  {
    person: "M.S. - São Paulo",
    text: "Eu já tinha recebido várias recusas para financiamento. Com a análise jurídica, consegui voltar para a negociação com mais força."
  },
  {
    person: "R.C. - Campinas",
    text: "Meu score estava muito baixo e eu precisava de rapidez. O acompanhamento trouxe clareza e organização para agir no momento certo."
  },
  {
    person: "A.L. - Guarulhos",
    text: "Achei que não teria chance de crédito no curto prazo. A estratégia foi transparente e me devolveu perspectiva."
  }
];

const Testimonials = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Prova social</p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Resultados e relatos reais</h2>
        <p className="mt-4 max-w-3xl text-sm text-ink/75">
          Utilize apenas depoimentos e prints autorizados pelos clientes, mantendo identidade protegida quando necessário.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.person} className="rounded-2xl border border-white/10 bg-panel/70 p-5">
              <p className="text-sm leading-relaxed text-ink/85">"{item.text}"</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">{item.person}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
