"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galeria = [
  {
    src: "/clientes/corte-masculino-degrade-com-barba-barbearia-do-nenzinho-cerquilho.webp",
    alt: "Corte masculino degradê com barba realizado em cliente na Barbearia do Nenzinho em Cerquilho",
    label: "Degradê + Barba",
    categoria: "Corte & Barba",
  },
  {
    src: "/clientes/corte-degrade-com-desenho-lateral-barbearia-do-nenzinho-cerquilho.webp",
    alt: "Corte masculino degradê com desenho lateral na Barbearia do Nenzinho",
    label: "Freestyle & Desenho",
    categoria: "Arte & Desenho",
  },
  {
    src: "/clientes/corte-infantil-com-luzes-barbearia-do-nenzinho-cerquilho.webp",
    alt: "Corte masculino com luzes em Cerquilho na Barbearia do Nenzinho",
    label: "Luzes & Coloração",
    categoria: "Coloração",
  },
  {
    src: "/clientes/corte-masculino-degrade-barbearia-do-nenzinho-cerquilho.webp",
    alt: "Corte masculino degradê social em Cerquilho",
    label: "Degradê Navalhado",
    categoria: "Corte Masculino",
  },
  {
    src: "/clientes/corte-masculino-e-barba-vista-lateral-barbearia-do-nenzinho-cerquilho.webp",
    alt: "Corte masculino e barba vista lateral na Barbearia do Nenzinho",
    label: "Corte & Barba Premium",
    categoria: "Corte & Barba",
  },
  {
    src: "/clientes/corte-infantil-degrade-com-desenho-homem-aranha-barbearia-do-nenzinho-cerquilho.webp",
    alt: "Corte infantil degradê com desenho do Homem-Aranha em Cerquilho",
    label: "Infantil Temático",
    categoria: "Desenho Infantil",
  },
];

export default function Galeria() {
  const ref = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");

    // Fallback: force-reveal items after 600ms
    const fallback = setTimeout(() => {
      items.forEach((item) => item.classList.add("visible"));
    }, 600);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05 }
    );
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [showAll]);

  const itemsToDisplay = showAll ? galeria : galeria.slice(0, 4);

  return (
    <section
      id="servicos-feitos"
      ref={ref}
      aria-label="Serviços realizados na Barbearia do Nenzinho"
      style={{
        background: "#0A0A0A",
        padding: "56px 16px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "36px" }}>
          <span className="eyebrow" style={{ marginBottom: "12px", display: "inline-flex" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
            Fotos reais de trabalhos
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginTop: "10px",
              marginBottom: "8px",
            }}
          >
            Serviços Realizados
          </h2>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            Confira alguns dos nossos principais resultados em cortes, barba, luzes e desenhos.
          </p>
        </div>

        {/* Grid 2x2 (2 colunas) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px",
          }}
          className="galeria-grid"
        >
          {itemsToDisplay.map((item, i) => (
            <div
              key={item.src}
              className={`reveal visible`}
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "4/5",
                cursor: "default",
                border: "1px solid rgba(201,154,61,0.25)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                background: "#121212",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={i < 4 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 50vw, 33vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(10,10,10,0.9) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  right: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.categoria}
                </span>
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#C99A3D",
                    textTransform: "capitalize",
                    lineHeight: 1.2,
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button for More Photos */}
        <div style={{ textAlign: "center", marginTop: "28px" }}>
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            style={{
              background: "rgba(201,154,61,0.12)",
              border: "1px solid rgba(201,154,61,0.4)",
              color: "#C99A3D",
              padding: "12px 24px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 700,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {showAll ? "Ver menos fotos" : "Ver mais trabalhos (+2 fotos)"}
          </button>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "24px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Fotos reais dos nossos serviços prestados — acompanhe mais no{" "}
          <a
            href="https://www.instagram.com/barbearia_do_nenzinho/"
            target="_blank"
            rel="noopener noreferrer"
            title="Seguir a Barbearia do Nenzinho no Instagram"
            style={{ color: "#C99A3D", textDecoration: "underline", fontWeight: 600 }}>
            @barbearia_do_nenzinho
          </a>
        </p>
      </div>
    </section>
  );
}
