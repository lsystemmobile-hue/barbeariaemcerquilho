"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Início", href: "/", title: "Página inicial da Barbearia do Nenzinho" },
  { label: "Cortes & Barba", href: "/cortes-e-barba", title: "Serviços de corte masculino e barba — Barbearia do Nenzinho" },
  { label: "Coloração", href: "/coloracao-e-transformacao", title: "Serviços de coloração e transformação capilar — Barbearia do Nenzinho" },
  { label: "Localização", href: "/localizacao-e-contato", title: "Localização e contato da Barbearia do Nenzinho em Cerquilho" },
  { label: "Sobre", href: "/#sobre", title: "Conheça a Barbearia do Nenzinho" },
];

const WA_LINK =
  "https://wa.me/5515996221677?text=Ol%C3%A1%21+Encontrei+a+Barbearia+do+Nenzinho+pelo+site+e+gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+atendimento.";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const toggleMenu = (e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    closeMenu();
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          padding: "12px 16px",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled ? "rgba(10,10,10,0.96)" : "rgba(10,10,10,0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(201,154,61,0.3)",
            borderRadius: "9999px",
            padding: "8px 16px 8px 10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
          }}
        >
          {/* Logo with padding inside gold circle badge */}
          <Link
            href="/"
            onClick={closeMenu}
            title="Barbearia do Nenzinho — Página inicial"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            aria-label="Barbearia do Nenzinho - Ir para o início"
          >
            <div
              style={{
                position: "relative",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1.5px solid rgba(201,154,61,0.7)",
                background: "#0A0A0A",
                flexShrink: 0,
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo Barbearia do Nenzinho"
                width={36}
                height={36}
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                priority
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.02em",
                }}
              >
                Barbearia do
              </span>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "16px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #C99A3D, #E4B86A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "0.02em",
                }}
              >
                Nenzinho
              </span>
            </div>
          </Link>

          {/* Desktop Nav (NO WhatsApp button in navbar) */}
          <nav
            aria-label="Navegação principal"
            style={{ alignItems: "center", gap: "28px" }}
            className="desktop-nav-only"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.title}
                onClick={(e) => handleLinkClick(link.href, e)}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#C99A3D")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button (NO WhatsApp button in navbar) */}
          <div className="mobile-btn-only" style={{ alignItems: "center" }}>
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              style={{
                background: isOpen ? "rgba(201,154,61,0.25)" : "rgba(201,154,61,0.12)",
                border: "1.5px solid rgba(201,154,61,0.5)",
                borderRadius: "9999px",
                cursor: "pointer",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "all 0.3s ease",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span>{isOpen ? "Fechar" : "Menu"}</span>
              {isOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Drawer Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999,
            background: "rgba(10,10,10,0.98)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "80px 24px 40px",
          }}
        >
          {/* Top close button bar inside overlay */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              zIndex: 10,
            }}
          >
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Fechar menu"
              style={{
                background: "rgba(201,154,61,0.15)",
                border: "1.5px solid #C99A3D",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#C99A3D",
                cursor: "pointer",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C99A3D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Background glow mark */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              opacity: 0.12,
              pointerEvents: "none",
              background: "radial-gradient(circle, #C99A3D 0%, transparent 70%)",
            }}
          />

          <nav
            aria-label="Menu mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              width: "100%",
              maxWidth: "340px",
              zIndex: 2,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.title}
                onClick={(e) => handleLinkClick(link.href, e)}
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontSize: "24px",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  textAlign: "center",
                  width: "100%",
                  padding: "10px",
                  letterSpacing: "0.02em",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              title="Falar com a Barbearia do Nenzinho pelo WhatsApp"
              onClick={closeMenu}
              className="btn-whatsapp"
              style={{
                width: "100%",
                justifyContent: "center",
                fontSize: "15px",
                padding: "16px 28px",
                marginTop: "16px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-only { display: flex !important; }
          .mobile-btn-only { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav-only { display: none !important; }
          .mobile-btn-only { display: flex !important; }
        }
      `}</style>
    </>
  );
}

