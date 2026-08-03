import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const siteUrl = "https://barbeariasdonenzinho.com.br";
const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+informa%C3%A7%C3%B5es+sobre+cortes+e+barba.";

export const metadata: Metadata = {
  title: "Cortes Masculinos e Barba em Cerquilho | Barbearia do Nenzinho",
  description:
    "Procurando o melhor corte de cabelo em Cerquilho ou barba perfeita? Na Barbearia do Nenzinho oferecemos cortes masculinos de alta precisão e barba com toalha quente. Atendimento por ordem de chegada no Residencial Aliança.",
  keywords: [
    "barbearia em cerquilho",
    "cabeleireiro em cerquilho",
    "melhor corte de cabelo em cerquilho",
    "barba e cabelo cerquilho",
    "corte masculino cerquilho",
    "barbearia do nenzinho",
  ],
  alternates: {
    canonical: `${siteUrl}/cortes-e-barba`,
  },
  openGraph: {
    title: "Cortes Masculinos e Barba em Cerquilho | Barbearia do Nenzinho",
    description:
      "Corte masculino (R$ 30), Barba com toalha quente (R$ 35), Combo Corte + Barba (R$ 60). Atendimento por ordem de chegada no Residencial Aliança, Cerquilho - SP.",
    url: `${siteUrl}/cortes-e-barba`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barbearia do Nenzinho — Cortes Masculinos e Barba em Cerquilho SP",
      },
    ],
  },
};

const servicosCortes = [
  {
    nome: "Corte Masculino",
    preco: "R$ 30,00",
    descricao:
      "Do degradê (fade) navalhado mais moderno ao corte tesoura clássico. Inclui análise de visagismo, lavagem e finalização com pomada de alta qualidade.",
  },
  {
    nome: "Barba com Toalha Quente",
    preco: "R$ 35,00",
    descricao:
      "Modelagem e alinhamento completo dos fios. Utiliza toalha quente para abertura dos poros, contorno na lâmina afiada e finalização com balm e óleo hidratante.",
  },
  {
    nome: "Combo Corte + Barba",
    preco: "R$ 60,00",
    descricao:
      "A experiência completa para alinhar barba e cabelo Cerquilho. Renovação harmônica do visual em um único atendimento por ordem de chegada.",
  },
  {
    nome: "Pezinho / Acabamento",
    preco: "R$ 20,00",
    descricao:
      "Manutenção rápida do contorno da nuca, patilhas e testa para manter a linha do corte sempre limpa e impecável entre os atendimentos.",
  },
  {
    nome: "Sobrancelha Masculina",
    preco: "R$ 20,00",
    descricao:
      "Limpeza discreta e alinhamento na navalha, valorizando o olhar e mantendo a naturalidade da expressão masculina.",
  },
];

export default function CortesEBarbaPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Cortes e Barba", item: `${siteUrl}/cortes-e-barba` },
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
              <span style={{ color: "rgba(255,255,255,0.7)" }}>Cortes e Barba</span>
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
            Atendimento por Ordem de Chegada • Cerquilho SP
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
            Barbearia em Cerquilho — Cortes Masculinos e Barba de Alta Precisão na{" "}
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
            Procurando o <strong>melhor corte de cabelo em Cerquilho</strong> ou o cuidado ideal
            para a sua barba? Na <strong>Barbearia do Nenzinho</strong>, cada detalhe é trabalhado
            com foco em precisão, estilo e valorização da sua imagem. Combinamos a tradição e o
            respeito de um excelente <strong>cabeleireiro em Cerquilho</strong> com as técnicas
            mais modernas de visagismo masculino. Nosso atendimento é realizado exclusivamente por
            ordem de chegada no Residencial Aliança: praticidade total para você chegar, relaxar e
            dar aquele tapa no visual sem complicação de agendamentos.
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
            Serviços de Corte e Barba
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {servicosCortes.map((servico) => (
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
                        fontSize: "20px",
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
                Pronto para dar aquele tapa no visual?
              </h3>
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: "28px",
                }}
              >
                Atendimento por ordem de chegada no Residencial Aliança! Fale conosco no WhatsApp
                para consultar a movimentação ou tirar dúvidas.
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
