import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const siteUrl = "https://barbeariasdonenzinho.com.br";
const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+informa%C3%A7%C3%B5es+sobre+servi%C3%A7os+de+colora%C3%A7%C3%A3o.";

export const metadata: Metadata = {
  title: "Luzes Masculinas, Coloração e Progressiva em Cerquilho | Barbearia do Nenzinho",
  description:
    "Especialista em luzes masculinas em Cerquilho, platinado (nevou), pigmentação preta e progressiva masculina. Produtos profissionais para elevar sua autoestima na Barbearia do Nenzinho.",
  keywords: [
    "luzes masculinas em cerquilho",
    "platinado masculino cerquilho",
    "descoloração masculina cerquilho",
    "progressiva masculina cerquilho",
    "barbearia em cerquilho",
    "barbearia do nenzinho",
  ],
  alternates: {
    canonical: `${siteUrl}/coloracao-e-transformacao`,
  },
  openGraph: {
    title: "Luzes Masculinas, Coloração e Progressiva em Cerquilho | Barbearia do Nenzinho",
    description:
      "Transformação de estilo com produtos profissionais: Luzes masculinas (R$ 110), Descoloração/Nevou (R$ 135), Progressiva (R$ 110). Atendimento por ordem de chegada.",
    url: `${siteUrl}/coloracao-e-transformacao`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barbearia do Nenzinho — Luzes Masculinas e Coloração em Cerquilho SP",
      },
    ],
  },
};

const servicosColoracao = [
  {
    nome: "Descoloração / Platinado / Nevou",
    preco: "R$ 135,00",
    descricao:
      "Abertura de tom uniforme para alcançar o loiro claro ou platinado perfeito, com matização profissional e tratamento anti-danos.",
  },
  {
    nome: "Combo Corte + Descoloração",
    preco: "R$ 150,00",
    descricao:
      "A combinação ideal para quem busca uma mudança radical. Corte alinhado com técnica de platinado profissional.",
  },
  {
    nome: "Luzes Masculinas",
    preco: "R$ 110,00",
    descricao:
      "Mechas estratégicas no topo que criam dimensão, textura e um contraste moderno de cor para o seu cabelo.",
  },
  {
    nome: "Combo Corte + Luzes",
    preco: "R$ 135,00",
    descricao:
      "O combo campeão para um visual iluminado e jovial. Corte estilizado com luzes masculinas em Cerquilho.",
  },
  {
    nome: "Corte + Pigmentação Preto",
    preco: "R$ 60,00",
    descricao:
      "Cobertura natural de fios brancos e falhas com pigmentação de longa duração e corte renovado.",
  },
  {
    nome: "Combo Corte + Barba + Preto",
    preco: "R$ 85,00",
    descricao:
      "Renovação completa! Corte, alinhamento de barba e pigmentação preta para um visual marcante e uniforme.",
  },
  {
    nome: "Progressiva Masculina",
    preco: "R$ 110,00",
    descricao:
      "Alinhamento térmico e redução de volume. Garante fios alinhados, macios e fáceis de pentear sem perder a praticidade.",
  },
  {
    nome: "Combo Corte + Progressiva",
    preco: "R$ 130,00",
    descricao:
      "Cabelo liso, sem frizz e com o corte ajustado perfeitamente ao seu novo comprimento.",
  },
];

export default function ColoracaoETransformacaoPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Coloração & Transformação", item: `${siteUrl}/coloracao-e-transformacao` },
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
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Coloração e Transformação</span>
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
            Química Masculina & Estilo • Cerquilho SP
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
            Coloração, Luzes Masculinas e Progressiva em Cerquilho na{" "}
            <span className="text-gold-gradient">Barbearia do Nenzinho</span>
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
            Quer destacar o seu estilo com um platinado marcante ou alinhar os fios com uma
            progressiva de alto rendimento? A <strong>Barbearia do Nenzinho</strong> é referência
            em <strong>luzes masculinas em Cerquilho</strong>, descoloração e tratamentos de química
            masculina. Utilizamos produtos profissionais de alta performance que garantem mudança
            de visual impactante com máxima proteção à saúde do cabelo e do couro cabeludo. Seja
            para lançar aquele nevou ou disfarçar fios brancos com elegância, a sua transformação
            está em boas mãos.
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
            Transformação de Estilo & Químicas Masculinas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {servicosColoracao.map((servico) => (
              <div key={servico.nome} className="card-bezel">
                <div className="card-bezel-inner" style={{ padding: "28px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      {servico.nome}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "16px",
                        fontWeight: 800,
                        color: "#C99A3D",
                      }}
                    >
                      {servico.preco}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                    }}
                  >
                    {servico.descricao}
                  </p>
                </div>
              </div>
            ))}
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
                Pronto para transformar seu estilo?
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "28px",
                }}
              >
                Atendimento por ordem de chegada! Tire suas dúvidas sobre químicas e procedimentos
                diretamente no WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                title="Falar no WhatsApp com a Barbearia do Nenzinho"
                style={{ display: "inline-flex", padding: "14px 32px", fontSize: "15px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
