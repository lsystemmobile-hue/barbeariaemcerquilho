"use client";
import { useEffect, useRef } from "react";

const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+atendimento.";

export default function ChamadaFinal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Atendimento por ordem de chegada na Barbearia do Nenzinho"
      style={{
        background: "#0A0A0A",
        padding: "96px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(201,154,61,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="reveal" style={{ marginBottom: "16px" }}>
          <span className="eyebrow">
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
            Barbearia do Nenzinho
          </span>
        </div>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginTop: "16px",
            marginBottom: "20px",
          }}
        >
          Pronto para{" "}
          <span className="text-gold-gradient">renovar o visual?</span>
        </h2>

        <p
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "17px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.75,
            marginBottom: "40px",
          }}
        >
          Atendimento por ordem de chegada. Venha até a barbearia no Residencial
          Aliança ou fale conosco pelo WhatsApp.
        </p>

        <div className="reveal reveal-delay-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-final-whatsapp-btn"
            aria-label="Falar no WhatsApp com a Barbearia do Nenzinho"
            title="Falar no WhatsApp com a Barbearia do Nenzinho"
            className="btn-whatsapp"
            style={{ fontSize: "16px", padding: "18px 40px" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>

        <p
          className="reveal reveal-delay-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            marginTop: "20px",
          }}
        >
          Atendimento no Residencial Aliança, em Cerquilho.
        </p>
      </div>
    </section>
  );
}
