"use client";
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    id: "faq-localizacao",
    pergunta: "Onde fica a Barbearia do Nenzinho?",
    resposta:
      "A barbearia está localizada na Rua Geraldo Pires da Silva, 293, Residencial Aliança, em Cerquilho – SP, CEP 18528-086.",
  },
  {
    id: "faq-servicos",
    pergunta: "Quais serviços a barbearia oferece?",
    resposta:
      "A barbearia oferece corte masculino, barba, pezinho, sobrancelha, coloração, luzes, descoloração, progressiva e serviços combinados.",
  },
  {
    id: "faq-pacotes",
    pergunta: "A barbearia possui pacotes mensais?",
    resposta:
      "Sim. Existem opções de pacote mensal de corte e de corte com barba. As condições e quantidades de utilizações devem ser consultadas diretamente com a barbearia.",
  },
  {
    id: "faq-agendamento",
    pergunta: "Preciso agendar horário?",
    resposta:
      "Não trabalhamos com agendamento. O atendimento na Barbearia do Nenzinho é realizado exclusivamente por ordem de chegada. Basta ir até a barbearia! Caso queira tirar dúvidas ou saber como está o movimento antes de vir, você pode nos enviar uma mensagem no WhatsApp.",
  },
  {
    id: "faq-preco-corte",
    pergunta: "Qual é o valor do corte?",
    resposta:
      "O corte custa R$ 30,00. Os valores dos demais serviços podem ser consultados na seção de serviços.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section
      ref={ref}
      aria-label="Perguntas frequentes sobre a Barbearia do Nenzinho"
      style={{
        background: "#111111",
        padding: "96px 20px",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="eyebrow" style={{ marginBottom: "16px", display: "inline-flex" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#C99A3D", display: "inline-block" }} />
            Dúvidas frequentes
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
            Perguntas frequentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              id={faq.id}
              className={`reveal reveal-delay-${(i % 4) + 1} card-bezel`}
            >
              <div className="card-bezel-inner">
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`${faq.id}-answer`}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 24px",
                    gap: "16px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: openId === faq.id ? "#C99A3D" : "#FFFFFF",
                      transition: "color 0.3s ease",
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.pergunta}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      background: openId === faq.id ? "rgba(201,154,61,0.15)" : "rgba(255,255,255,0.05)",
                      borderRadius: "9999px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s cubic-bezier(0.32,0.72,0,1)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openId === faq.id ? "#C99A3D" : "rgba(255,255,255,0.5)"}
                      strokeWidth="2"
                      style={{
                        transition: "transform 0.4s cubic-bezier(0.32,0.72,0,1)",
                        transform: openId === faq.id ? "rotate(45deg)" : "rotate(0)",
                      }}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`${faq.id}-answer`}
                  role="region"
                  style={{
                    maxHeight: openId === faq.id ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s cubic-bezier(0.32,0.72,0,1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.8,
                      padding: "0 24px 22px",
                    }}
                  >
                    {faq.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
