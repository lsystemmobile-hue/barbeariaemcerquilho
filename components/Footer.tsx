"use client";
import Link from "next/link";

const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+atendimento.";
const MAPS_LINK = "https://maps.app.goo.gl/CX1wwzZZXoNyKYEM7";

const navLinks = [
  { label: "Início", href: "/", title: "Página inicial da Barbearia do Nenzinho" },
  { label: "Cortes & Barba", href: "/cortes-e-barba", title: "Serviços de corte masculino e barba" },
  { label: "Coloração & Químicas", href: "/coloracao-e-transformacao", title: "Serviços de coloração e transformação capilar" },
  { label: "Localização & Contato", href: "/localizacao-e-contato", title: "Localização e contato da Barbearia do Nenzinho" },
  { label: "Como chegar (Google Maps)", href: MAPS_LINK, external: true, title: "Ver a Barbearia do Nenzinho no Google Maps" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      aria-label="Rodapé com informações da Barbearia do Nenzinho"
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(201,154,61,0.15)",
        padding: "64px 20px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <div
                style={{
                  position: "relative",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1.5px solid rgba(201,154,61,0.6)",
                  background: "#0A0A0A",
                  flexShrink: 0,
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/logo.png"
                  alt="Logo Barbearia do Nenzinho"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </div>
              <div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>
                  Barbearia do
                </p>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 900,
                    background: "linear-gradient(135deg, #C99A3D, #E4B86A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Nenzinho
                </p>
              </div>
            </div>
            <div className="razor-line-short" style={{ marginBottom: "16px" }} />
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
              }}
            >
              Barbearia masculina em Cerquilho, SP.
              <br />
              Corte, barba e estilo com atendimento dedicado.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#C99A3D",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "20px",
              }}
            >
              Links rápidos
            </h3>
            <nav aria-label="Links de rodapé">
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      title={link.title}
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.75)",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C99A3D")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                color: "#C99A3D",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "20px",
              }}
            >
              Contato
            </h3>
            <address style={{ fontStyle: "normal" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6,
                  }}
                >
                  Rua Geraldo Pires da Silva, 293<br />
                  Residencial Aliança<br />
                  Cerquilho – SP, CEP 18528-086
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Barbearia do Nenzinho"
                  title="Falar com a Barbearia do Nenzinho pelo WhatsApp"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C99A3D")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +55 15 99622-1677
                </a>
                <a
                  href="https://www.instagram.com/barbearia_do_nenzinho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Barbearia do Nenzinho"
                  title="Seguir a Barbearia do Nenzinho no Instagram"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C99A3D")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @barbearia_do_nenzinho
                </a>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.65)",
                  }}
                >
                  Ter a Sex: 8h30–12h / 13h30–18h
                  <br />
                  Sábado: 7h às 17h
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="razor-line" style={{ marginBottom: "24px" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {currentYear} Barbearia do Nenzinho. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            Cerquilho – SP, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
