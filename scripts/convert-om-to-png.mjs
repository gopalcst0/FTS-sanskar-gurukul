import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../public');

async function convertImage() {
  try {
    const jpgPath = path.join(publicDir, 'om.jpg');
    const pngPath = path.join(publicDir, 'om.png');
    
    console.log('Converting om.jpg to om.png...');
    await sharp(jpgPath)
      .png()
      .toFile(pngPath);
    
    console.log('Successfully converted om.jpg to om.png');
  } catch (error) {
    console.error('Error converting image:', error);
    process.exit(1);
  }
}

convertImage();
