"use client";
import { useEffect, useRef } from "react";

const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+atendimento.";

const MAPS_LINK = "https://maps.app.goo.gl/CX1wwzZZXoNyKYEM7";

export default function Localizacao() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="localizacao"
      ref={ref}
      aria-label="Localização da Barbearia do Nenzinho em Cerquilho"
      style={{
        background: "#0A0A0A",
        padding: "96px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow" style={{ marginBottom: "16px", display: "inline-flex" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
            Onde estamos
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginTop: "16px",
            }}
          >
            Barbearia no Residencial Aliança,{" "}
            <br className="hide-sm" />
            em Cerquilho
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="loc-grid"
        >
          {/* Map */}
          <div className="reveal card-bezel">
            <div
              className="card-bezel-inner"
              style={{ overflow: "hidden", borderRadius: "calc(1.5rem - 2px)" }}
            >
              <iframe
                title="Localização da Barbearia do Nenzinho no Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0!2d-47.748!3d-23.165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDk5JzU0LjAiUyA0N8KwNDQnNTIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Rua+Geraldo+Pires+da+Silva,+293,+Residencial+Aliança,+Cerquilho,+SP"
                width="100%"
                height="380"
                style={{ border: 0, display: "block", filter: "grayscale(0.3) invert(0.85) hue-rotate(180deg) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info */}
          <div className="reveal reveal-delay-1">
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Visite a Barbearia do Nenzinho na Rua Geraldo Pires da Silva, 293,
              no Residencial Aliança, em Cerquilho.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "36px" }}>
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Endereço",
                  value: "Rua Geraldo Pires da Silva, 293\nResidencial Aliança — Cerquilho – SP\nCEP 18528-086",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  label: "Horário",
                  value: "Ter a Sex: 8h30 às 12h / 13h30 às 18h\nSábado: 7h às 17h",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85A16 16 0 0 0 15.09 16l1.95-1.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 24 16.18v.74z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+55 15 99622-1677",
                },
              ].map((info) => (
                <div key={info.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "rgba(201,154,61,0.1)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "#C99A3D",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "4px",
                      }}
                    >
                      {info.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-como-chegar"
                aria-label="Como chegar na Barbearia do Nenzinho pelo Google Maps"
                title="Ver a Barbearia do Nenzinho no Google Maps"
                className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Como chegar
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="localizacao-whatsapp-btn"
                aria-label="Falar no WhatsApp com a Barbearia do Nenzinho"
                title="Falar no WhatsApp com a Barbearia do Nenzinho"
                className="btn-whatsapp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .loc-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .hide-sm { display: none; }
        }
      `}</style>
    </section>
  );
}
