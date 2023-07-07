const fs = require('fs');
const path = require('path');

function findCSSFiles(cssPath) {
  try {
    const cssFiles = fs.readdirSync(cssPath).filter((file) => {
      const filePath = path.join(cssPath, file);
      const fileStats = fs.statSync(filePath);
      return fileStats.isFile() && path.extname(file) === '.css';
    });

    console.log('Найденные CSS файлы:');
    console.log(cssFiles);
    return cssFiles;
  } catch (error) {
    console.error('CSS Файлы не найдены', error);

    return [];
  }
}

module.exports = findCSSFiles;
