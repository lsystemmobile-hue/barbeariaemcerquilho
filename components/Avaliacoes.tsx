"use client";
import { useEffect, useRef } from "react";

export default function Avaliacoes() {
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
      aria-label="Avaliações dos clientes da Barbearia do Nenzinho"
      style={{
        background: "#111111",
        padding: "96px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow" style={{ marginBottom: "16px", display: "inline-flex" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
            Reputação
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
            O que os clientes dizem
          </h2>
        </div>

        {/* Pending state */}
        <div
          className="reveal card-bezel"
          style={{ maxWidth: "640px", margin: "0 auto" }}
        >
          <div
            className="card-bezel-inner"
            style={{
              padding: "48px 32px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "rgba(201,154,61,0.1)",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "12px",
              }}
            >
              Avaliações em breve
            </h3>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                marginBottom: "28px",
              }}
            >
              Os depoimentos dos nossos clientes serão exibidos aqui em breve.
              <br />
              Já atendeu? Deixe sua avaliação no Google.
            </p>
            <a
              href="#"
              id="btn-avaliar-google"
              aria-label="Avaliar a Barbearia do Nenzinho no Google (link a ser adicionado)"
              className="btn-outline"
              style={{ display: "inline-flex" }}
              title="Link do Google Perfil da Empresa a ser adicionado"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Avaliar no Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
