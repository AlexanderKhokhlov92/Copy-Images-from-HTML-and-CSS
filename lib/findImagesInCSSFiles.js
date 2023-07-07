const fs = require('fs');
const path = require('path');

function findImagesInCSSFiles(cssFiles, folderPathCSS) {
  const imagesCSS = [];

  console.log('Найденные картинки в CSS файлах:');
  cssFiles.forEach((file) => {
    const cssPath = path.join(folderPathCSS, file);
    const css = fs.readFileSync(cssPath, 'utf-8');
    const regex = /url\(['"]?(.*?)['"]?\)/g;
    let match;
    while ((match = regex.exec(css)) !== null) {
      const imageUrl = match[1];
      // Проверяем, не содержит ли путь "fonts"
      if (!imageUrl.includes('fonts')) {
        imagesCSS.push(imageUrl);
        console.log(imageUrl);
      }
    }
  });

  console.log('Массив с картинками в CSS файлах:');
  console.log(imagesCSS);
  return imagesCSS;
}

module.exports = findImagesInCSSFiles;
