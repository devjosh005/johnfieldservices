// One-off dev utility. `sharp` isn't a project dependency — install it
// ad hoc before running: npm install --no-save sharp
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC_DIR = path.join(__dirname, '..', 'src', 'images', 'shop');
const OUT_DIR = path.join(__dirname, '..', 'src', 'images', 'shop-optimized');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// Selected source files -> clean output basenames
const SELECTION = {
  'imge (10).png': 'hero-workshop',
  'imge (5).png': 'about-workshop',
  'imge (1).png': 'gallery-alignment-1',
  'imge (3).png': 'gallery-alignment-2',
  'imge (8).png': 'gallery-alignment-3',
  'imge (13).png': 'gallery-alignment-4',
  'image(15).png': 'gallery-paintbooth-1',
  'imge(16).png': 'gallery-paintbooth-2',
  'imge (2).png': 'service-alignment-1',
  'imge (9).png': 'service-alignment-2',
  'imge (11).png': 'service-alignment-3',
  'imge (4).png': 'service-alignment-4',
};

const WIDTHS = [800, 1600];

async function run() {
  for (const [srcName, outBase] of Object.entries(SELECTION)) {
    const srcPath = path.join(SRC_DIR, srcName);
    if (!fs.existsSync(srcPath)) {
      console.warn('MISSING', srcPath);
      continue;
    }
    for (const width of WIDTHS) {
      const outPath = path.join(OUT_DIR, `${outBase}-${width}.webp`);
      await sharp(srcPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(outPath);
      const { size } = fs.statSync(outPath);
      console.log(`${outBase}-${width}.webp`, `${(size / 1024).toFixed(0)}KB`);
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
