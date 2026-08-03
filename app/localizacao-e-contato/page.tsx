import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const siteUrl = "https://barbeariasdonenzinho.com.br";
const MAPS_LINK = "https://maps.app.goo.gl/CX1wwzZZXoNyKYEM7";
const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+atendimento.";

export const metadata: Metadata = {
  title: "Como Chegar na Barbearia do Nenzinho em Cerquilho | Localização e Contato",
  description:
    "Endereço e mapa de como chegar na Barbearia do Nenzinho em Cerquilho - SP. Localizada na Rua Geraldo Pires da Silva, 293 - Residencial Aliança. Atendimento por ordem de chegada.",
  keywords: [
    "barbearia em cerquilho",
    "barbearia residencial aliança cerquilho",
    "barbearia do nenzinho endereço",
    "como chegar barbearia do nenzinho",
    "barbearia perto de mim cerquilho",
  ],
  alternates: {
    canonical: `${siteUrl}/localizacao-e-contato`,
  },
  openGraph: {
    title: "Como Chegar na Barbearia do Nenzinho em Cerquilho | Localização e Contato",
    description:
      "Rua Geraldo Pires da Silva, 293 - Residencial Aliança, Cerquilho - SP. Atendimento por ordem de chegada. Fale no WhatsApp (15) 99622-1677.",
    url: `${siteUrl}/localizacao-e-contato`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barbearia do Nenzinho — Localização em Cerquilho SP",
      },
    ],
  },
};

export default function LocalizacaoEContatoPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Localização e Contato", item: `${siteUrl}/localizacao-e-contato` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <Header />
      <main
        style={{
          background: "linear-gradient(180deg, #0A0A0A 0%, #111111 100%)",
          minHeight: "100vh",
          paddingTop: "140px",
          paddingBottom: "96px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}>
          {/* Breadcrumb */}
          <nav aria-label="Navegação estruturada" style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <Link href="/" title="Página inicial da Barbearia do Nenzinho" style={{ color: "#C99A3D", textDecoration: "none" }}>
                Início
              </Link>
              <span>/</span>
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Localização e Contato</span>
            </div>
          </nav>

          <span className="eyebrow" style={{ marginBottom: "16px", display: "inline-flex" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                background: "#C99A3D",
                display: "inline-block",
              }}
            />
            Endereço & Mapa • Cerquilho SP
          </span>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            Como Chegar na Barbearia do Nenzinho em Cerquilho —{" "}
            <span className="text-gold-gradient">Localização e Contato</span>
          </h1>

          <div className="razor-line-short" style={{ marginBottom: "32px" }} />

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "17px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "840px",
            }}
          >
            Procurando uma <strong>barbearia em Cerquilho</strong> com localização estratégica, fácil
            acesso e atendimento sem complicação? A <strong>Barbearia do Nenzinho</strong> está de
            portas abertas no Residencial Aliança para receber você com conforto e agilidade. Como
            nosso atendimento funciona por ordem de chegada, você não precisa se prender a
            horários engessados. Chegou, esperou sua vez no nosso espaço e saiu com o visual
            renovado.
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "28px",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "32px",
            }}
          >
            Informações de Atendimento e Contato Direto
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            <div className="card-bezel">
              <div className="card-bezel-inner" style={{ padding: "28px 24px" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#C99A3D",
                    marginBottom: "8px",
                  }}
                >
                  Endereço Completo
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  Rua Geraldo Pires da Silva, 293<br />
                  Residencial Aliança<br />
                  Cerquilho – SP, CEP 18528-086
                </p>
              </div>
            </div>

            <div className="card-bezel">
              <div className="card-bezel-inner" style={{ padding: "28px 24px" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#C99A3D",
                    marginBottom: "8px",
                  }}
                >
                  Horário de Funcionamento
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  Terça a Sexta: 08:30 às 12:00 / 13:30 às 18:00<br />
                  Sábado: 07:00 às 17:00<br />
                  Domingo e Segunda: Fechado
                </p>
              </div>
            </div>

            <div className="card-bezel">
              <div className="card-bezel-inner" style={{ padding: "28px 24px" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#C99A3D",
                    marginBottom: "8px",
                  }}
                >
                  WhatsApp Oficial
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.6,
                    marginBottom: "8px",
                  }}
                >
                  +55 15 99622-1677
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  Fale conosco para consultar a movimentação da fila ou pedir orientações de rota.
                </span>
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            Utilize o mapa interativo abaixo para traçar a rota mais rápida até a nossa barbearia a
            partir da sua localização em Cerquilho e região.
          </p>

          {/* Interactive Map Embed */}
          <div className="card-bezel" style={{ marginBottom: "64px" }}>
            <div className="card-bezel-inner" style={{ overflow: "hidden", borderRadius: "calc(1.5rem - 2px)" }}>
              <iframe
                title="Mapa de Localização da Barbearia do Nenzinho em Cerquilho"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-47.748!3d-23.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDk5JzU0LjAiUyA0N8KwNDQnNTIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Rua+Geraldo+Pires+da+Silva,+293,+Residencial+Aliança,+Cerquilho,+SP"
                width="100%"
                height="450"
                style={{ border: 0, display: "block", filter: "grayscale(0.3) invert(0.85) hue-rotate(180deg) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* CTA Box */}
          <div className="card-bezel">
            <div
              className="card-bezel-inner"
              style={{
                padding: "40px 32px",
                textAlign: "center",
                background: "linear-gradient(135deg, #181818 0%, #111111 100%)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                Vem para a Barbearia do Nenzinho!
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "28px",
                }}
              >
                Trace sua rota no mapa e venha nos visitar. Estamos prontos para oferecer o melhor
                corte de cabelo em Cerquilho!
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  title="Ver a Barbearia do Nenzinho no Google Maps"
                  style={{ padding: "14px 28px", fontSize: "14px" }}>
                  Abrir no Google Maps
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  title="Falar no WhatsApp com a Barbearia do Nenzinho"
                  style={{ padding: "14px 28px", fontSize: "14px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
