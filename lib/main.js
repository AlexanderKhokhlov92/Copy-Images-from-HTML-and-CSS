const findHTMLFiles = require('./findHTMLFiles');
const findImagesInHTMLFiles = require('./findImagesInHTMLFiles');
const removeDuplicates = require('./removeDuplicates');
const findCSSFiles = require('./findCSSFiles');
const findImagesInCSSFiles = require('./findImagesInCSSFiles');
const mergeImages = require('./mergeImages');
const processStrings = require('./rename');
const copyImages = require('./copyImages');

const sourceDir = '../../portfolio/cat-energy/build/img'; // Где искать картинки (Путь указывать относительно папки lib)
const destinationDir = '../Images'; // Куда копировать картинки (Папка создается автоматически)
const folderPathHTML = '../../portfolio/cat-energy/build'; // Путь к HTML файлам (Путь указывать относительно папки lib)
const folderPathCSS = '../../portfolio/cat-energy/build/css'; // путь к CSS файлам (Путь указывать относительно папки lib)

const htmlFiles = findHTMLFiles(folderPathHTML);

const foundCSSFiles = findCSSFiles(folderPathCSS);

const imagesHTML = findImagesInHTMLFiles(folderPathHTML, htmlFiles);

const imagesCSS = findImagesInCSSFiles(foundCSSFiles, folderPathCSS);

const mergedArray = mergeImages(imagesHTML, imagesCSS);

const uniqueArray = removeDuplicates(mergedArray);

const rename = processStrings(uniqueArray);

copyImages(rename, sourceDir, destinationDir);
