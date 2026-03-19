const fs = require('fs');
const path = require('path');

// De map waar je React componenten staan (meestal './src')
const folderToRead = './src'; 
const outputFile = 'react_codebase_compleet.txt';

// De bestandstypen die relevant zijn voor de review
const allowedExtensions = ['.js', '.jsx', '.ts', '.tsx', '.css'];

let combinedCode = 'Codebase Review Export\n========================\n\n';

function readDirectory(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      readDirectory(fullPath);
    } else if (allowedExtensions.includes(path.extname(fullPath))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Voegt een duidelijke bestandsnaam toe als scheidingsteken
      combinedCode += `\n\n/* =========================================\n`;
      combinedCode += `   BESTAND: ${fullPath}\n`;
      combinedCode += `   ========================================= */\n\n`;
      combinedCode += content;
    }
  });
}

try {
  readDirectory(folderToRead);
  fs.writeFileSync(outputFile, combinedCode);
  console.log(`\n✅ Succes! Alle bestanden zijn samengevoegd in: ${outputFile}\n`);
} catch (error) {
  console.error('\n❌ Er is een fout opgetreden:', error.message, '\n');
}
