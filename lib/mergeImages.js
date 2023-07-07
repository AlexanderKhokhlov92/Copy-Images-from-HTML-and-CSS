function mergeImages(array1, array2) {
  const mergedArray = [...array1, ...array2];
  console.log('Объединенный массив:');
  console.log(mergedArray);
  return mergedArray;
}
module.exports = mergeImages;
