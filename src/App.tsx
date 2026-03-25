import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Solution from "./components/Solution";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import { buildWhatsAppUrl } from "./utils/whatsapp";

const App = () => {
  const instantMessage =
    "Olá! Quero analisar meu CPF agora e entender qual estratégia jurídica pode me ajudar a recuperar o acesso ao crédito.";
  const instantWhatsAppLink = buildWhatsAppUrl(instantMessage);

  return (
    <div className="overflow-x-hidden">
      <Hero whatsappLink={instantWhatsAppLink} />
      <Problem />
      <Solution />
      <Steps />
      <Services />
      <Guarantee />
      <Testimonials />
      <CTA />
      <Footer />

      <a
        href={instantWhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-400"
      >
        WhatsApp
      </a>
    </div>
  );
};

export default App;
