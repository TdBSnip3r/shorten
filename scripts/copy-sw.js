const fs = require('fs');
const path = require('path');

// Percorsi dei file
const sourceFile = path.join(__dirname, '..', 'public', 'sw.js');
const destFile = path.join(__dirname, '..', '.next', 'sw.js');

// Assicurati che il file esista
if (!fs.existsSync(sourceFile)) {
  console.error('File sw.js non trovato nella cartella public!');
  process.exit(1);
}

// Copia il file
try {
  fs.copyFileSync(sourceFile, destFile);
  console.log('✅ File sw.js copiato con successo nella root della build (.next/sw.js)');
} catch (error) {
  console.error('❌ Errore durante la copia del file sw.js:', error);
  process.exit(1);
}

// Verifica se esiste anche la cartella standalone (per build con output: 'standalone')
const standaloneDir = path.join(__dirname, '..', '.next', 'standalone');
if (fs.existsSync(standaloneDir)) {
  try {
    fs.copyFileSync(sourceFile, path.join(standaloneDir, 'sw.js'));
    console.log('✅ File sw.js copiato anche nella cartella standalone');
  } catch (error) {
    console.error('❌ Errore durante la copia del file sw.js nella cartella standalone:', error);
  }
}