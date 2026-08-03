"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+atendimento.";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");

    // Fallback: force-reveal all items after 800ms in case IntersectionObserver fails
    const fallback = setTimeout(() => {
      items.forEach((item) => item.classList.add("visible"));
    }, 800);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    );
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={ref}
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "100px",
        background: "#0A0A0A",
      }}
      aria-label="Seção inicial da Barbearia do Nenzinho"
    >
      {/* Background video overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          poster="/clientes/corte-masculino-degrade-barbearia-do-nenzinho-cerquilho.webp"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.85,
            filter: "brightness(0.9) contrast(1.05)",
          }}
        >
          <source src="/video_hero.mp4" type="video/mp4" />
          <track kind="captions" src="data:text/vtt,WEBVTT" label="Português" default />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.3) 100%), linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.75) 100%)",
          }}
        />
      </div>

      {/* Decorative gold orb */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(201,154,61,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          width: "100%",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Text side */}
        <div style={{ maxWidth: "680px" }}>
          <div className="reveal" style={{ marginBottom: "24px" }}>
            <span className="eyebrow">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: "#C99A3D",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Atendimento por ordem de chegada • Cerquilho
            </span>
          </div>

          <h1
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            Barbearia em Cerquilho{" "}
            <span className="text-gold-gradient">
              para cuidar do seu estilo
            </span>
          </h1>

          <div className="razor-line-short reveal reveal-delay-2" style={{ marginBottom: "24px" }} />

          <p
            className="reveal reveal-delay-2"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(15px, 2vw, 17px)",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "540px",
            }}
          >
            Corte, barba, luzes, progressiva e tratamentos masculinos com
            atendimento por ordem de chegada no Residencial Aliança, em Cerquilho.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              width: "100%",
              maxWidth: "500px",
              marginBottom: "40px",
            }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              aria-label="Falar no WhatsApp com a Barbearia do Nenzinho"
              title="Falar no WhatsApp com a Barbearia do Nenzinho"
              className="btn-whatsapp"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px 10px",
                fontSize: "clamp(12px, 3.2vw, 14px)",
                textAlign: "center",
                gap: "6px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href="#servicos"
              className="btn-outline"
              aria-label="Ver serviços e preços"
              title="Ver serviços e preços da Barbearia do Nenzinho"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px 10px",
                fontSize: "clamp(12px, 3.2vw, 14px)",
                textAlign: "center",
                gap: "6px",
              }}
            >
              <span>Ver Preços</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Location badge */}
          <div
            className="reveal reveal-delay-4"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "rgba(255,255,255,0.75)",
              fontSize: "13px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Rua Geraldo Pires da Silva, 293 — Residencial Aliança, Cerquilho – SP
          </div>
        </div>

        {/* Image side (desktop only) */}
        <div
          className="hero-image-side reveal reveal-delay-2"
          style={{
            display: "none",
            position: "relative",
          }}
        >
          <div className="card-bezel">
            <div className="card-bezel-inner" style={{ overflow: "hidden", borderRadius: "calc(1.5rem - 2px)" }}>
              <Image
                src="/clientes/corte-masculino-e-barba-vista-lateral-barbearia-do-nenzinho-cerquilho.webp"
                alt="Corte e barba masculinos de alta precisão na Barbearia do Nenzinho em Cerquilho"
                width={500}
                height={500}
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom razor line */}
      <div className="razor-line" style={{ position: "absolute", bottom: 0, left: 0 }} />

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-image-side {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
