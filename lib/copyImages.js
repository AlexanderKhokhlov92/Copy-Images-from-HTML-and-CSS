const fs = require('fs');
const path = require('path');

function copyImages(images, sourceDir, destinationDir) {
  console.log('Копирование картинок начато...');

  // Создаем папку назначения, если она не существует
  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir, { recursive: true });
  }

  images.forEach((image) => {
    const sourcePath = path.join(sourceDir, image);
    const destinationPath = path.join(destinationDir, image);

    fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) {
        console.error(`Ошибка при копировании картинки ${image}:`, err);
      } else {
        console.log(`Картинка ${image} скопирована успешно.`);
      }
    });
  });

  console.log('Копирование картинок завершено.');
}

module.exports = copyImages;
