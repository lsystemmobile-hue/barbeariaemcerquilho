const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Resize logo
  const logoResized = await sharp(path.join(__dirname, '../public/logo.png'))
    .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0A0A0A" />
          <stop offset="50%" stop-color="#141414" />
          <stop offset="100%" stop-color="#0A0A0A" />
        </linearGradient>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C99A3D" />
          <stop offset="100%" stop-color="#E4B86A" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#C99A3D" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#C99A3D" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />

      <!-- Outer Gold Border -->
      <rect x="24" y="24" width="1152" height="582" rx="16" fill="none" stroke="#C99A3D" stroke-width="2" stroke-opacity="0.4" />

      <!-- Corner Accents -->
      <path d="M 36 60 L 36 36 L 60 36" fill="none" stroke="#C99A3D" stroke-width="3" stroke-linecap="round" />
      <path d="M 1164 60 L 1164 36 L 1140 36" fill="none" stroke="#C99A3D" stroke-width="3" stroke-linecap="round" />
      <path d="M 36 570 L 36 594 L 60 594" fill="none" stroke="#C99A3D" stroke-width="3" stroke-linecap="round" />
      <path d="M 1164 570 L 1164 594 L 1140 594" fill="none" stroke="#C99A3D" stroke-width="3" stroke-linecap="round" />

      <!-- Logo Circle Background -->
      <circle cx="600" cy="200" r="90" fill="#0A0A0A" stroke="#C99A3D" stroke-width="2" stroke-opacity="0.8" />

      <!-- Text Elements -->
      <text x="600" y="345" font-family="Georgia, serif" font-size="24" font-weight="normal" fill="#FFFFFF" fill-opacity="0.8" text-anchor="middle" letter-spacing="4">BARBEARIA DO</text>
      <text x="600" y="415" font-family="Georgia, serif" font-size="68" font-weight="bold" fill="url(#gold)" text-anchor="middle" letter-spacing="2">NENZINHO</text>

      <!-- Decorative Divider -->
      <line x1="480" y1="455" x2="720" y2="455" stroke="#C99A3D" stroke-width="1.5" stroke-opacity="0.6" />
      <circle cx="600" cy="455" r="4" fill="#C99A3D" />

      <!-- Subtitle -->
      <text x="600" y="510" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#FFFFFF" fill-opacity="0.75" text-anchor="middle" letter-spacing="3">CORTES • BARBA • COLORAÇÃO — CERQUILHO, SP</text>
      <text x="600" y="550" font-family="Arial, sans-serif" font-size="18" font-weight="normal" fill="#C99A3D" text-anchor="middle" letter-spacing="1">Atendimento por Ordem de Chegada</text>
    </svg>
  `);

  const outputPath = path.join(__dirname, '../public/og-image.png');

  await sharp(svgOverlay)
    .composite([
      {
        input: logoResized,
        top: 120,
        left: 520,
      }
    ])
    .png()
    .toFile(outputPath);

  console.log('Successfully generated public/og-image.png');
}

createOgImage().catch(console.error);
