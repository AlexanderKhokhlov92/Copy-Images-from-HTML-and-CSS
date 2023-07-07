const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

function findImagesInHTMLFiles(htmlPath, htmlFiles) {
  const imagesHTML = [];

  console.log('Найденные картинки:');
  htmlFiles.forEach((file) => {
    const filePath = path.join(htmlPath, file);
    const html = fs.readFileSync(filePath, 'utf-8');
    const $ = cheerio.load(html);
    // Поиск картинок в тегах img
    const imgTags = $('img');
    imgTags.each((index, element) => {
      const src = $(element).attr('src');
      imagesHTML.push(src);
      console.log(src);
    });

    // Поиск картинок в тегах source с атрибутами src и srcset
    const sourceTags = $('source');
    sourceTags.each((index, element) => {
      const src = $(element).attr('src');
      const srcset = $(element).attr('srcset');
      if (src) {
        imagesHTML.push(src);
        console.log(src);
      }
      if (srcset) {
        const srcsetImages = srcset
          .split(',')
          .map((item) => item.trim().split(' ')[0]);
        imagesHTML.push(...srcsetImages);
        console.log(srcsetImages);
      }
    });
  });

  console.log('Массив с картинками:');
  console.log(imagesHTML);
  return imagesHTML;
}

module.exports = findImagesInHTMLFiles;
