import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Barbearia do Nenzinho — Cerquilho SP";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0d0d0d 100%)",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1.5px solid rgba(201,154,61,0.4)",
            borderRadius: "16px",
            display: "flex",
          }}
        />

        {/* Corner accents */}
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "36px",
            width: "32px",
            height: "32px",
            borderTop: "2px solid #C99A3D",
            borderLeft: "2px solid #C99A3D",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "36px",
            right: "36px",
            width: "32px",
            height: "32px",
            borderTop: "2px solid #C99A3D",
            borderRight: "2px solid #C99A3D",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "36px",
            width: "32px",
            height: "32px",
            borderBottom: "2px solid #C99A3D",
            borderLeft: "2px solid #C99A3D",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "36px",
            width: "32px",
            height: "32px",
            borderBottom: "2px solid #C99A3D",
            borderRight: "2px solid #C99A3D",
            display: "flex",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,154,61,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#0A0A0A",
            border: "2px solid rgba(201,154,61,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "28px",
          }}
        >
          {/* Scissors icon as SVG stand-in for logo */}
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="6" r="2.5" stroke="#C99A3D" strokeWidth="1.5" />
            <circle cx="6" cy="18" r="2.5" stroke="#C99A3D" strokeWidth="1.5" />
            <line x1="8.12" y1="7.26" x2="21" y2="20" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="16.9" x2="21" y2="4" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="6" y1="3.5" x2="6" y2="8.5" stroke="#C99A3D" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Barbearia do
          </span>
          <span
            style={{
              fontSize: "72px",
              fontWeight: 900,
              color: "#C99A3D",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            Nenzinho
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "120px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C99A3D, transparent)",
            marginBottom: "20px",
            display: "flex",
          }}
        />

        {/* Subtitle */}
        <span
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Cortes • Barba • Coloração — Cerquilho, SP
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
