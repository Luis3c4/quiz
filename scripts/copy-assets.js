import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta absoluta proporcionada por el usuario
const sourceDir = 'C:/Users/USUARIO/Downloads/hackaton2/hackaton/hackaton/assets';
const targetDir = path.join(__dirname, '../public/assets/batalla-universitaria');

async function copyAssets() {
    try {
        await fs.copy(sourceDir, targetDir);
        console.log('Assets copiados exitosamente!');
    } catch (err) {
        console.error('Error al copiar los assets:', err);
    }
}

copyAssets(); 