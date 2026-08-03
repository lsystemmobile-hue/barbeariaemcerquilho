"use client";
import { useEffect, useRef } from "react";

const diferenciais = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Ordem de chegada",
    text: "Atendimento prático e sem agendamento prévio. É só chegar na barbearia e garantir a sua vez.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Serviços completos",
    text: "Corte, barba, coloração, luzes, descoloração, progressiva e cuidados masculinos.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Pacotes mensais",
    text: "Opções para clientes que desejam manter o corte e a barba sempre em dia.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Localização em Cerquilho",
    text: "Atendimento no Residencial Aliança, com acesso fácil para clientes da cidade e região.",
  },
];

export default function Diferenciais() {
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
      ref={ref}
      aria-label="Diferenciais da Barbearia do Nenzinho"
      style={{
        background: "#111111",
        padding: "80px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow" style={{ marginBottom: "16px", display: "inline-flex" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
            Por que escolher a Barbearia do Nenzinho
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginTop: "16px",
            }}
          >
            O que nos diferencia
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {diferenciais.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1} card-bezel`}
              style={{ cursor: "default" }}
            >
              <div
                className="card-bezel-inner"
                style={{
                  padding: "32px 28px",
                  transition: "background 0.4s cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#1e1e1e")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#181818")
                }
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(201,154,61,0.1)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
