const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgDir = path.join(__dirname, 'assets', 'menu_icon');

fs.readdirSync(svgDir).forEach(file => {
  if (file.endsWith('.svg')) {
    const svgPath = path.join(svgDir, file);
    const pngPath = path.join(svgDir, file.replace('.svg', '.png'));
    
    // Read SVG, resize it to a good resolution (e.g. 128x128) to stay crisp, and output as PNG
    sharp(svgPath)
      .resize(128, 128)
      .png()
      .toFile(pngPath)
      .then(() => console.log(`Converted ${file} to PNG`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
