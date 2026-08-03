import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Servicos from "@/components/Servicos";
import Sobre from "@/components/Sobre";
import Galeria from "@/components/Galeria";
import Avaliacoes from "@/components/Avaliacoes";
import Localizacao from "@/components/Localizacao";
import FAQ from "@/components/FAQ";
import ChamadaFinal from "@/components/ChamadaFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Galeria />
      <Diferenciais />
      <Servicos />
      <Sobre />
      <Avaliacoes />
      <Localizacao />
      <FAQ />
      <ChamadaFinal />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
