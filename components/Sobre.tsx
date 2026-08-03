"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Sobre() {
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
      id="sobre"
      ref={ref}
      aria-label="Sobre a Barbearia do Nenzinho"
      style={{
        background: "#111111",
        padding: "96px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "56px",
          alignItems: "center",
        }}
        className="sobre-grid"
      >
        {/* Image */}
        <div className="reveal card-bezel">
          <div
            className="card-bezel-inner"
            style={{ overflow: "hidden", borderRadius: "calc(1.5rem - 2px)" }}
          >
            <Image
              src="/clientes/corte-masculino-degrade-com-barba-barbearia-do-nenzinho-cerquilho.png"
              alt="Corte masculino e barba em cliente atendido na Barbearia do Nenzinho em Cerquilho"
              width={580}
              height={440}
              style={{ width: "100%", height: "auto", display: "block" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="reveal" style={{ marginBottom: "16px" }}>
            <span className="eyebrow">
              <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
              Quem somos
            </span>
          </div>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "#FFFFFF",
              marginBottom: "12px",
              lineHeight: 1.15,
            }}
          >
            Seu estilo em{" "}
            <span className="text-gold-gradient">boas mãos</span>
          </h2>
          <div className="razor-line-short reveal reveal-delay-1" style={{ marginBottom: "28px" }} />
          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.85,
              marginBottom: "32px",
            }}
          >
            A Barbearia do Nenzinho, localizada em Cerquilho, oferece serviços de
            corte masculino, barba, pezinho, sobrancelha, coloração, luzes,
            descoloração e progressiva. Também disponibiliza pacotes mensais para
            quem deseja manter o corte e a barba sempre em dia. O atendimento é
            dedicado e pensado para valorizar o estilo e a autoestima de cada
            cliente.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
          >
            {[
              "Corte masculino",
              "Barba",
              "Luzes",
              "Descoloração",
              "Progressiva",
              "Pacotes mensais",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(201,154,61,0.08)",
                  border: "1px solid rgba(201,154,61,0.2)",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .sobre-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
