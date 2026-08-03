const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/clientes');

async function optimizeImages() {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    const filePath = path.join(dir, file);
    const statsBefore = fs.statSync(filePath);

    const buffer = await sharp(filePath)
      .resize({ width: 1080, height: 1080, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toBuffer();

    const webpPath = filePath.replace(/\.png$/, '.webp');
    fs.writeFileSync(webpPath, buffer);

    // Also compress the png version in-place so fallback is lightweight
    const pngCompressed = await sharp(filePath)
      .resize({ width: 1080, height: 1080, fit: 'inside', withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(filePath, pngCompressed);

    const statsAfter = fs.statSync(filePath);
    const statsWebp = fs.statSync(webpPath);

    console.log(`Optimized ${file}:`);
    console.log(`  Original PNG: ${(statsBefore.size / 1024).toFixed(1)} KB`);
    console.log(`  Compressed PNG: ${(statsAfter.size / 1024).toFixed(1)} KB`);
    console.log(`  WebP Version: ${(statsWebp.size / 1024).toFixed(1)} KB\n`);
  }
}

optimizeImages().catch(console.error);
