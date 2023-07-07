const fs = require('fs');
const path = require('path');

function findHTMLFiles(htmlPath) {
  try {
    console.log(`Поиск HTML файлов в папке: ${htmlPath}`);

    const htmlFiles = fs.readdirSync(htmlPath).filter((file) => {
      const filePath = path.join(htmlPath, file);
      const fileStats = fs.statSync(filePath);
      return fileStats.isFile() && path.extname(file) === '.html';
    });

    console.log('Найденные HTML файлы:');
    console.log(htmlFiles);
    return htmlFiles;
  } catch (error) {
    console.error('Ошибка при поиске HTML файлов:', error);

    return [];
  }
}

module.exports = findHTMLFiles;
